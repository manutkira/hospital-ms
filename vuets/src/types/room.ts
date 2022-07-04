import careCenter from "./careCenter";

type Room = {
    id: number;
    care_center_id: number;
    number_of_bed: number;
    beds: Bed[];
    care_centers: careCenter;
};

type Bed = {
    id: number;
    room_id: number;
    care_center_id: number;
    bed_type: string;
};

export default Room;
