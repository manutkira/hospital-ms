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
        $employee = $request->all();

        return Employee::create($employee);
    }
}
