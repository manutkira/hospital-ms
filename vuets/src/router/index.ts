import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/EmployeeTable.vue";
import Dashboard from "../components/DashboardLayout.vue";
import EmployeeTableVue from "../views/EmployeeTable.vue";
import CreateEmployeeVue from "../views/CreateEmployee.vue";
import CareCenterTableVue from "../views/CareCenterTable.vue";
import CreateCareCenterVue from "../views/CreateCareCenter.vue";
import RoomTableVue from "../views/RoomTable.vue";
import CreateRoomBedVue from "../views/CreateRoomBed.vue";

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
                }
            ]
        }
    ]
});

export default router;
