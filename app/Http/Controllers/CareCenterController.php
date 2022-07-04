<?php

namespace App\Http\Controllers;

use App\Models\CareCenter;
use Illuminate\Http\Request;

class CareCenterController extends Controller
{

    public function index(){
        return CareCenter::with('employees')->get();
    }

   public function store(Request $request){
    $careCenter = $request->all();

    return CareCenter::create($careCenter);
   }
}
