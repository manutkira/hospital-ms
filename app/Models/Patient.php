<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    use HasFactory;

    protected $fillable = ['last_name', 'first_name', 'physician_id', 'bed_id', 'room_id', 'care_center_id'];

    public function beds(){
        return $this->belongsTo(Bed::class, 'bed_id');
    }

    public function physicians(){
        return $this->belongsTo(Physician::class, 'physician_id');
    }

    
}
