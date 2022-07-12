<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function index(){
        return Employee::with('careCenters')->get();
    }

    public function store(Request $request){
        $employee = $request->validate([
            'first_name'=> 'required' ,
            'last_name'=> 'required' 
        ]);

        return Employee::create($employee);
    }
}
