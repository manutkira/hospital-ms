<?php

namespace App\Http\Controllers;

use App\Models\Room;
use Illuminate\Http\Request;

class RoomController extends Controller
{

    public function index(){
        return Room::with(['beds', 'careCenters'=> function($data){
            return $data->with('employees')->get();
        }])->get();
    }

    public function store(Request $request){
        $room = $request->all();

        return Room::create($room);
    }
}
