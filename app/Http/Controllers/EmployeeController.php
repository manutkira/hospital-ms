<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function index(){
        return Employee::with('careCenters')->get();
    }

    public function show(Employee $employee){
        return Employee::whereId($employee->id)->with('careCenters')->get();
    }

    public function update(Request $request, Employee $employee){
        $data = $request->validate([
            'first_name' => 'string',
            'last_name' => 'string',
        ]);

        $employee->update($data);
        return $employee->whereId($employee->id)->with('careCenters')->get();
    }

    public function store(Request $request){
        $employee = $request->validate([
            'first_name'=> 'required' ,
            'last_name'=> 'required' 
        ]);

        return Employee::create($employee);
    }
}
