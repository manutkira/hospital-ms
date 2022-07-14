<?php

namespace App\Http\Controllers;

use App\Models\Item;
use App\Models\Patient;
use App\Models\User;
use Illuminate\Http\Request;

class PatientController extends Controller
{
    public function index(){
        return Patient::with(['physicians', 'items','beds' => function($bed){
            return $bed->with(['rooms' => function($room){
                return $room->with('careCenters')->get();
            }])->get();
        }])->get();
    }

    public function show(Patient $patient){
        return Patient::whereId($patient->id)->with(['physicians', 'items','beds' => function($bed){
            return $bed->with(['rooms' => function($room){
                return $room->with('careCenters')->get();
            }])->get();
        }])->get();
    }

    public function update(Request $request, Patient $patient){
        $data = $request->all();
        $patient->update($data);
        return Patient::whereId($patient->id)->with(['physicians', 'items','beds' => function($bed){
            return $bed->with(['rooms' => function($room){
                return $room->with('careCenters')->get();
            }])->get();
        }])->get();
    }

    public function store(Request $request){
        $patient = $request->all();
        
        // $items = Item::whereId(4)->first();
        

        // Patient::with('items')->tag($items->id);

        return Patient::create($patient);
    }

    public function assignItem(Request $request)
{
     $patient_id=$request->patient_id; // get user id from post request
     $item_id=$request->item_id; // get  Role id from post request

      /* Todo request validation*/


    $patient = Patient::find($patient_id);
    

    foreach($item_id as $item){
        $items = Item::find($item);
        $patient->items()->attach($items);
    }



}
}
