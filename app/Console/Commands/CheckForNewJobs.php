<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

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

        return 0;
    }
}
