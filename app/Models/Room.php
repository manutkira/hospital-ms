<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    use HasFactory;

    protected $fillable = ['care_center_id', 'number_of_bed',];

    public function careCenters(){
        return $this->belongsTo(CareCenter::class, 'care_center_id');
    }

    public function beds(){
        return $this->hasMany(Bed::class);
    }
}
