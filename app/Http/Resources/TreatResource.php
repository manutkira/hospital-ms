<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Date;

class TreatResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id'=> $this->id,
            'patient_id' => $this->patient_id,
            'treatment_id' => $this->treatment_id,
            'time'=> $this->time,
            'result'=>$this->result,
            'date'=> date('d-m-Y', strtotime($this->date))
        ];
    }
}
