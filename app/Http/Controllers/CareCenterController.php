<?php

namespace App\Http\Controllers;

use App\Models\CareCenter;
use Illuminate\Http\Request;

class CareCenterController extends Controller
{

    public function index(){
        return CareCenter::with('employees')->get();
    }

    public function update(Request $request, CareCenter $careCenter){
        $data = $request->validate([
            'cc_name'=> 'string',
            'hours_per_week'=> 'string',
        ]);

        $careCenter->update($data);
        return $careCenter;
    }

   public function store(Request $request){
    $careCenter = $request->validate([
        'cc_name'=> 'required',
        'employee_id'=> 'required',
        'hour_per_week'=> 'required'
    ]);

    return CareCenter::create($careCenter);
   }
}
