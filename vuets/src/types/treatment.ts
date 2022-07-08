type Treatment = {
    id: number;
    description: string;
    treats: Treat[];
};

type Treat = {
    id: number;
    patient_id: number;
    treatment_id: number;
    time: string;
    result: string;
    date: Date;
    patients: Patient;
};

type Patient = {
    id: number;
    last_name: string;
    first_name: string;
    bed_id: number;
    room_id: number;
    physician_id: number;
    physicians: Physician;
};

type Physician = {
    id: number;
    last_name: string;
    first_name: string;
};

export default Treatment;
