type Patient = {
    id: number;
    last_name: string;
    first_name: string;
    bed_id: number;
    room_id: number;
    physician_id: number;
    physicians: Physician;
    items: Item[];
    beds: Bed;
};

type Item = {
    id: number;
    description: string;
    unit_cost: string;
    item_type: string;
};

type Physician = {
    id: number;
    last_name: string;
    first_name: string;
};

type Bed = {
    id: number;
    room_id: number;
    care_center_id: number;
    bed_type: string;
    rooms: Room;
};

type Room = {
    id: number;
    care_center_id: number;
    number_of_bed: number;
    name: string;
    room_number: string;
    care_centers: CareCenter;
};

type CareCenter = {
    id: number;
    cc_name: string;
    employe_id: number;
    hours_per_week: string;
};

export default Patient;
