<?php

namespace App\Http\Controllers;

use App\Http\Resources\TreatResource;
use App\Models\Treat;
use Illuminate\Http\Request;

class TreatController extends Controller
{
    public function index(){
       
        return TreatResource::collection(Treat::all());
    }

    public function store(Request $request){
        $treat = $request->all();

        return Treat::create($treat);
    }
}
