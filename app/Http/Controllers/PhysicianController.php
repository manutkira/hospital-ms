<?php

namespace App\Http\Controllers;

use App\Models\Physician;
use Illuminate\Http\Request;

class PhysicianController extends Controller
{
    public function index(){
        return Physician::with('patients')->get();
    }

    public function show(Physician $physician){
        return Physician::whereId($physician->id)->with('patients')->get();
    }

    public function update(Request $request , Physician $physician){
        
        $data = $request->validate([
            'first_name'=> 'string',
            'last_name'=> 'string',
        ]);

        $physician->update($data);
        return Physician::whereId($physician->id)->with('patients')->get();
    }

    public function store(Request $request){
        $physician = $request->all();

        return Physician::create($physician);
    }
}
