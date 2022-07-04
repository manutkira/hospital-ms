<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bed extends Model
{
    use HasFactory;

    protected $fillable= ['room_id', 'care_center_id', 'bed_type'];

    public function rooms(){
        return $this->belongsTo(Room::class, 'room_id');
    }
}
