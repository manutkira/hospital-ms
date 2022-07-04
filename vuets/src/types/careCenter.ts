type careCenter = {
    id: number;
    cc_name: string;
    employee_id: number;
    hours_per_week: string;
    employees: employees;
};

type employees = {
    id: number;
    first_name: string;
    last_name: string;
};

export default careCenter;
