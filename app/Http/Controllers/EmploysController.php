<?php

namespace App\Http\Controllers;

use App\Models\Employs;
use Illuminate\Http\Request;

class EmploysController extends Controller
{
    public function index(){
        return Employs::with('careCenters')->get();
    }

    public function store(Request $request){
        $employ = $request->all();
        return Employs::create($employ);
    }
}
