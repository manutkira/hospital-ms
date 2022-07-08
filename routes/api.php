<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BedController;
use App\Http\Controllers\CareCenterController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\EmploysController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\PhysicianController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\TreatController;
use App\Http\Controllers\TreatmentController;
use App\Models\Patient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->group(function(){
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});

Route::resource('/employee', EmployeeController::class);
Route::resource('/care-center', CareCenterController::class);
Route::resource('/employ', EmploysController::class);
Route::resource('/room', RoomController::class);
Route::resource('/bed', BedController::class);
Route::resource('/physician', PhysicianController::class);
Route::resource('/patient', PatientController::class);
Route::resource('/item', ItemController::class);
Route::resource('/treatment', TreatmentController::class);
Route::resource('/treat', TreatController::class);
Route::post('/assign-item', [PatientController::class ,'assignItem']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);