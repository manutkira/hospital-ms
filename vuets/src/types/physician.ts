type Physician = {
    id: number;
    first_name: string;
    last_name: string;
    patients: Patient[];
};

type Patient = {
    id: number;
    last_name: string;
    first_name: string;
    bed_id: number;
    room_id: number;
    physician_id: number;
};

export default Physician;
