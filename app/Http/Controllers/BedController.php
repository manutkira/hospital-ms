<?php

namespace App\Http\Controllers;

use App\Models\Bed;
use Illuminate\Http\Request;

class BedController extends Controller
{

    public function index(){
        return Bed::with(['rooms' => function($data){
            return $data->with('careCenters')->get();
        }])->get();
    }

    public function show(Bed $bed){
        return Bed::whereId($bed->id)->first();
    }

    public function update(Request $request, Bed $bed){
        $data = $request->all();

        $bed->update($data);

        return $bed;
    }

    public function destroy(Bed $bed){
        $bed->delete();
        return response('Delete successfully', 204);
    }

    public function store(Request $request){
        $bed = $request->all();

        return Bed::create($bed);
    }
}
