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
import AssignItemToPatientVue from "../views/patients/AssignItemToPatient.vue";
import TreatmentVue from "../views/treatment/Treatment.vue";
import CreateTreatmentVue from "../views/treatment/CreateTreatment.vue";
import TreatVue from "../views/treatment/Treat.vue";
import CreateTreatVue from "../views/treatment/CreateTreat.vue";
import LoginVue from "../views/Login.vue";
import Register from "../views/Register.vue";
import { useUserStore } from "../stores/user";
import UpadateEmployeeVue from "../views/employee/UpadateEmployee.vue";
import UpdateRoomVue from "../views/roomBed/UpdateRoom.vue";
import UpdatePhysicianVue from "../views/physicians/UpdatePhysician.vue";
import UpdateItemVue from "../views/items/UpdateItem.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            component: Dashboard,
            meta: { requiresAuth: true },
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
                    path: "/employee-update/:id",
                    component: UpadateEmployeeVue,
                    name: "UpadateEmployeeVue"
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
                    path: "/room-update/:id",
                    component: UpdateRoomVue,
                    name: "UpdateRoomVue"
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
                    path: "/physician-update/:id",
                    component: UpdatePhysicianVue,
                    name: "UpdatePhysicianVue"
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
                    path: "/item-update/:id",
                    component: UpdateItemVue,
                    name: "UpdateItemVue"
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
                },
                {
                    path: "/assign-item",
                    component: AssignItemToPatientVue,
                    name: "AssignItemToPatientVue"
                },
                {
                    path: "/treatment",
                    component: TreatmentVue,
                    name: "TreatmentVue"
                },
                {
                    path: "/treatment-create",
                    component: CreateTreatmentVue,
                    name: "CreateTreatmentVue"
                },
                {
                    path: "/treat",
                    component: TreatVue,
                    name: "TreatVue"
                },
                {
                    path: "/treat-create",
                    component: CreateTreatVue,
                    name: "CreateTreatVue"
                }
            ]
        },
        {
            path: "/login",
            component: LoginVue,
            name: "LoginVue",
            meta: { isGuest: true }
        },
        {
            path: "/register",
            component: Register,
            name: "Register",
            meta: { isGuest: true }
        }
    ]
});

router.beforeEach((to, from, next) => {
    const userStore = useUserStore();
    if (to.meta.requiresAuth && !userStore.user.token) {
        next({ name: "LoginVue" });
    } else if (userStore.user.token && to.meta.isGuest) {
        next({ name: "EmployeeTableVue" });
    } else {
        next();
    }
});

export default router;
