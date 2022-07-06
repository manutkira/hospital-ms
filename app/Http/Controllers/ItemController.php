<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    public function index(){
        return Item::all();
    }

    public function store(Request $request){
        $item = $request->all();

        return Item::create($item);
    }
}
