<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CareCenter extends Model
{
    use HasFactory;

    protected $fillable = ['cc_name', 'employee_id', 'hours_per_week'];

    public function employees(){
        return $this->belongsTo(Employee::class, 'employee_id');
    }
}

