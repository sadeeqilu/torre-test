<?php

namespace App\Http\Controllers;

use App\Models\Site;
use Illuminate\Http\Request;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Auth;

class SiteController extends Controller
{

    protected $site;

    public function __construct(Site $site)
    {
        $this->site = $site;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $sites = Site::all();
        // return response()->json($sites);
        $user = auth()->user();
        \Log::debug("user",['user'=>$user]);
        if($user->username){
            $client = new Client([
                'base_uri' => "http://search.torre.co/",
                'headers' => [
                    'Accept' => 'application/json',
                    'Content-type' => 'application/json',
                ]
            ]);
            $offset = $user->last_total > 21 ? $user->last_total - 20 : $user->last_total;
            $opportunities = $client->request('POST', 'opportunities/_search/?[offset='.$offset.']');
            $opportunities = json_decode($opportunities->getBody()->getContents(),true);
            return response()->json([
                "opportunities" => $opportunities
            ],200); 
       }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $site = $this->site->addSite($request->post());
        return response()->json([
            'message'=>'Site Added Successfully!!',
            'site'=>$site
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Site  $site
     * @return \Illuminate\Http\Response
     */
    public function show(Site $site)
    {
        return response()->json($site);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Site  $site
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Site $site)
    {
        $site->fill($request->post())->save();
        return response()->json([
            'message'=>'Site Updated Successfully!!',
            'site'=>$site
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Site  $site
     * @return \Illuminate\Http\Response
     */
    public function destroy(Site $site)
    {
        $site->delete();
        return response()->json([
            'message'=>'Site Deleted Successfully!!'
        ]);
    }
}
