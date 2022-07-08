<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Treat extends Model
{
    use HasFactory;

    protected $fillable = ['patient_id', 'treatment_id', 'time', 'result', 'date'];

    public function treatments(){
        return $this->belongsTo(Treatment::class, 'treatment_id');
    }

    public function patients(){
        return $this->belongsTo(Patient::class, 'patient_id');
    }
}
