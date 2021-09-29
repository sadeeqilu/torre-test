<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Mail;
use Illuminate\Mail\Message;
use Illuminate\Console\Scheduling\Event;
use Illuminate\Support\Facades\Log;

class CheckForNewJobs extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'check:jobs';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Checks for newly added jobs on torre.co';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        \Log::info("Successfully, cron is running");

        foreach(\App\Models\User::all() as $user){
            if($user->username){
                $client = new Client([
                    'base_uri' => " https://search.torre.co/opportunities/_search",
                    'headers' => [
                        'Accept' => 'application/json',
                        'Content-type' => 'application/json',
                    ]
                ]);
                $offset = $user->last_total - 20;
                $opportunities = $client->request('POST', '/?[offset='.$offset.']');
                $opportunities = json_decode($opportunities->getBody()->getContents(),true);
                if($opportunities){
                    // search and send notification for newly added and open remote job opportunities
                    $opportunities = [];
                    foreach($opportunities['results'] as $opportunity)
                    {
                        if($opportunity['remote'] && $opportunity['status'] == 'open'){
                            array_push($opportunity,$opportunities);
                        }
                    }
                    if(count($opportunities) > 2){
                        $email = $user->email;
                        Mail::send('Mails.new_opportunities', ['user' => $user, 'opportunites' => $opportunities], function (Message $message) use ($email,$opportunities){
                            $message->to($email);
                
                            $message->subject("New Job Opportunities");
                        });
                        $user->fill([
                            'last_total' => $opportunities['total']
                        ])->save();
                        sleep(5); //rest a bit
                    }
                }
            }
        }
        // return 0;
    }
}
