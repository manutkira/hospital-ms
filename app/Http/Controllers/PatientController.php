<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use Illuminate\Http\Request;

class PatientController extends Controller
{
    public function index(){
        return Patient::with(['physicians','beds' => function($bed){
            return $bed->with(['rooms' => function($room){
                return $room->with('careCenters')->get();
            }])->get();
        }])->get();
    }

    public function show(Patient $patient){
        return Patient::whereId($patient->id)->with(['physicians','beds' => function($bed){
            return $bed->with(['rooms' => function($room){
                return $room->with('careCenters')->get();
            }])->get();
        }])->get();
    }

    public function store(Request $request){
        $patient = $request->all();

        return Patient::create($patient);
    }
}
