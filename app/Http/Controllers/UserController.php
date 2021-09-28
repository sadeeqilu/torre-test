<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use App\Models\User;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try{
            if(!$user = User::find($id)){
                return response()->json([
                    "message" => "User not found"
                ],404);
            }else{
                $client = new Client([
                    'base_uri' => "http://torre.bio/api/bios/",
                    'headers' => [
                        'Accept' => 'application/json',
                        'Content-type' => 'application/json',
                    ]
                ]);
                $user = $client->request('GET', $user->username);
                $user = json_decode($user->getBody()->getContents(),true);
                return response()->json([
                    'message'=>'User Retrieved Successfully!!',
                    'user'=>$user
                ]);
            }  
        }catch(\GuzzleHttp\Exception\ClientException $e){
            return response()->json([
                'message' => 'Username does not exist in torre',
            ],404);
        }catch(\Exception $e){
            \Log::critical($e->getMessage());
            return response()->json([
                "message" => "Something went wrong, contact admin"
            ]);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        try{
            $client = new Client([
                'base_uri' => "http://torre.bio/api/bios/",
                'headers' => [
                    'Accept' => 'application/json',
                    'Content-type' => 'application/json',
                ]
            ]);
            $user_get = $client->request('GET', $request->username);
            $user_get = json_decode($user_get->getBody()->getContents(),true);

            if(!$user_get){
                return response()->json([
                    'message' => 'Username does not exist in torre',
                    'user' => $user,
                    'user_get' => $user_get
                ],404);
            }
            $user->fill($request->post())->save();
        }catch(\GuzzleHttp\Exception\ClientException $e){
            return response()->json([
                'message' => 'Username does not exist in torre',
            ],404);
        }catch(\Exception $e){
            \Log::critical($e->getMessage());
            return response()->json([
                "message" => "Something went wrong, contact admin"
            ]);
        }
        return response()->json([
            'message'=>'User Updated Successfully!!',
            'user'=>$user_get
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
