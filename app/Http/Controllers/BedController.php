<?php

namespace App\Http\Controllers;

use App\Models\Bed;
use Illuminate\Http\Request;

class BedController extends Controller
{

    public function index(){
        return Bed::with(['rooms' => function($data){
            return $data->with('careCenters')->get();
        }])->get();
    }

    public function store(Request $request){
        $bed = $request->all();

        return Bed::create($bed);
    }
}
