<?php

namespace App\Http\Controllers;

use App\Models\CareCenter;
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
        $careCenter = CareCenter::find($request->care_center_id);

        $words = explode(' ', $careCenter->cc_name);
        $name = '';

        foreach($words as $w){
            $name .= mb_substr($w, 0,1);
        }
        $room = new Room();

        $room->care_center_id = $request->care_center_id;
        $room->number_of_bed = $request->number_of_bed;
        $room->room_number = $request->room_number;
        $room->name = $name . $request->room_number;
        $room->save();

        return $room;
    }
}
