type Employee = {
    id: number;
    first_name: string;
    last_name: string;
    care_centers: careCenter;
};

type careCenter = {
    id: number;
    cc_name: string;
    employee_id: number;
    hours_per_week: string;
};

export default Employee;
