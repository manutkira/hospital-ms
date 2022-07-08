<?php

namespace App\Http\Controllers;

use App\Models\Treatment;
use Illuminate\Http\Request;

class TreatmentController extends Controller
{
    public function index(){
        return Treatment::with(['treats' => function($treat){
            return $treat->with(['patients' => function($patient){
                return $patient->with('physicians')->get();
            }])->get();
        }])->get();
    }

    public function store(Request $request){
        $treatment = $request->all();

        return Treatment::create($treatment);
    }
}
