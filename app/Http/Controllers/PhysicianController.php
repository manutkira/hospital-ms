<?php

namespace App\Http\Controllers;

use App\Models\Physician;
use Illuminate\Http\Request;

class PhysicianController extends Controller
{
    public function index(){
        return Physician::with('patients')->get();
    }

    public function store(Request $request){
        $physician = $request->all();

        return Physician::create($physician);
    }
}
