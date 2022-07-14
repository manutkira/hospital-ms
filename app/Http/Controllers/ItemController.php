<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    public function index(){
        return Item::all();
    }

    public function update(Request $request , Item $item){

        $data = $request->all();
        $item->update($data);

        return Item::whereId($item->id)->get();
    }

    public function show(Item $item){
        return Item::whereId($item->id)->get();
    }

    public function store(Request $request){
        $item = $request->all();

        return Item::create($item);
    }
}
