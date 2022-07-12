import { defineStore } from "pinia";
import axios from "axios";
import type Employee from "../types/employee";
import axiosClient from "../axios";



export const useEmployeeStore = defineStore({
    id: "employee",
    state: () => {
        return {
            employees: [] as Employee[],
            loading: false as boolean,
        };
    },
    actions: {
        fetchEmployee() {
            axiosClient.get("/employee").then(res => {
                this.employees = res.data;
            });
        },
        fetchOneEmployee(employeeId:string){
            axiosClient.get(`employee/${employeeId}`).then(res=>{
                this.employees = res.data;
            })
        },
        updateEmplyoee(data: any){
            this.loading = true;
            axiosClient.put(`/employee/${data.id}`, data).then(res=> {
                this.employees = res.data; 
                this.loading = false;
                return  res;
            })
        },
       async saveEmployee(data: object){
            this.loading = true;
            try{
                return await  axiosClient.post('/employee', data).then(res => {
                    return res;
                });
            }catch(err){
                return err;
            }finally{
                this.loading = false;
            }
        }
    },
    getters: {
        getEmployee(state) {
            return state.employees;
        },
        getLoading(state){
            return state.loading;
        }
    }
});
