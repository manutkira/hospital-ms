<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;

    protected $fillable = ['description', 'unit_cost', 'item_type'];

    public function patients(){
        return $this->belongsToMany(Patient::class);
    }
}
