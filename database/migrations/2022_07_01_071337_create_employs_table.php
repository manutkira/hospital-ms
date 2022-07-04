<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('care_center_employee', function (Blueprint $table) {
            $table->foreignId('care_center_id')->constrained();
            $table->foreignId('employee_id')->constrained();
            $table->foreign('care_center_id', 'fk_care_center_id')->references('id')->on('care_centers');
            $table->foreign('employee_id', 'fk_employee_id')->references('id')->on('employees');
            $table->primary(['care_center_id', 'employee_id']);
            $table->string('hours_per_week');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('employs');
    }
};
