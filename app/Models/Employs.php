<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employs extends Model
{
    use HasFactory;

    protected $fillable = ['care_center_id', 'employee_id', 'hours_per_week'];
}
