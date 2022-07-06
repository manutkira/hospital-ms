import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../components/DashboardLayout.vue";
import EmployeeTableVue from "../views/employee/EmployeeTable.vue";
import CreateEmployeeVue from "../views/employee/CreateEmployee.vue";
import CareCenterTableVue from "../views/careCenter/CareCenterTable.vue";
import CreateCareCenterVue from "../views/careCenter/CreateCareCenter.vue";
import RoomTableVue from "../views/roomBed/RoomTable.vue";
import CreateRoomBedVue from "../views/roomBed/CreateRoomBed.vue";
import PhysicianTableVue from "../views/physicians/PhysicianTable.vue";
import CreatePhysicianVue from "../views/physicians/CreatePhysician.vue";
import ItemTableVue from "../views/items/ItemTable.vue";
import CreateItemVue from "../views/items/CreateItem.vue";
import PatientTableVue from "../views/patients/PatientTable.vue";
import CreatePatientVue from "../views/patients/CreatePatient.vue";
import PatientDetailVue from "../views/patients/PatientDetail.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            component: Dashboard,
            children: [
                {
                    path: "/employee",
                    component: EmployeeTableVue,
                    name: "EmployeeTableVue"
                },
                {
                    path: "/employee-create",
                    component: CreateEmployeeVue,
                    name: "CreateEmployeeVue"
                },
                {
                    path: "/care-center",
                    component: CareCenterTableVue,
                    name: "CareCenterTableVue"
                },
                {
                    path: "/care-center-create",
                    component: CreateCareCenterVue,
                    name: "CreateCareCenterVue"
                },
                {
                    path: "/room",
                    component: RoomTableVue,
                    name: "RoomTableVue"
                },
                {
                    path: "/room-create",
                    component: CreateRoomBedVue,
                    name: "CreateRoomBedVue"
                },
                {
                    path: "/physician",
                    component: PhysicianTableVue,
                    name: "PhysicianTableVue"
                },
                {
                    path: "/physician-create",
                    component: CreatePhysicianVue,
                    name: "CreatePhysicianVue"
                },
                {
                    path: "/item",
                    component: ItemTableVue,
                    name: "ItemTableVue"
                },
                {
                    path: "/item-create",
                    component: CreateItemVue,
                    name: "CreateItemVue"
                },
                {
                    path: "/patient",
                    component: PatientTableVue,
                    name: "PatientTableVue"
                },
                {
                    path: "/patient-create",
                    component: CreatePatientVue,
                    name: "CreatePatientVue"
                },
                {
                    path: "/patient-detail/:id",
                    component: PatientDetailVue,
                    name: "PatientDetailVue"
                }
            ]
        }
    ]
});

export default router;
