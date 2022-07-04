import { defineStore } from "pinia";
import axios from "axios";
import type Employee from "../types/employee";


const employeeType: Employee[] = [];

export const useEmployeeStore = defineStore({
    id: "employee",
    state: () => {
        return {
            employees: employeeType
        };
    },
    actions: {
        fetchEmployee() {
            axios.get("http://localhost:8000/api/employee").then(res => {
                this.employees = res.data;
            });
        },
        saveEmployee(data: object){
            axios.post('http://localhost:8000/api/employee', data).then(res => {
                return res;
            })
        }
    },
    getters: {
        getEmployee(state) {
            return state.employees;
        }
    }
});
