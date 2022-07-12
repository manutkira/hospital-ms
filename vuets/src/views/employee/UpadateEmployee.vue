<template>
  <div>
    <h1 class="text-left text-4xl mb-5 font-bold">Create New Employee</h1>
    <loading-modal-vue
      v-if="loadingEmployee === true || loadingCareCenter === true"
    >
      <h2 class="text-xl font-bold py-4">Please wait!</h2>
      <p class="text-sm text-gray-500 px-8">
        Updating Employee...
      </p></loading-modal-vue
    >
    <form action="" enctype="multipart/form-data" method="POST">
      <div class="shadow sm:rounded-md sm:overflow-hidden">
        <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
          <!-- firstname -->
          <div>
            <label
              for="name"
              class="block text-sm font-medium text-gray-500 text-left"
            >
              First Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              v-model="employee.first_name"
              autocomplete="survey_title"
              class="
                input
                mt-1
                block
                bg-white
                w-full
                shadow-sm
                sm:text-sm
                border-gray-300
                rounded-md
              "
            />
          </div>
          <!-- firstname -->

          <!-- lastname -->
          <div>
            <label
              for="price"
              class="block text-sm font-medium text-gray-700 text-left"
            >
              Last Name
            </label>
            <input
              type="text"
              name="price"
              id="price"
              v-model="employee.last_name"
              autocomplete="survey_title"
              class="
                mt-1
                input
                bg-white
                focus:ring-indigo-500 focus:border-indigo-500
                block
                w-full
                shadow-sm
                sm:text-sm
                border-gray-300
                rounded-md
              "
            />
          </div>
          <!-- lastname -->

          <!-- care center name -->
          <div>
            <label
              for="price"
              class="block text-sm font-medium text-gray-700 text-left"
            >
              CareCenter Name
            </label>
            <input
              type="text"
              name="price"
              id="price"
              v-model="careCenter.cc_name"
              autocomplete="survey_title"
              class="
                mt-1
                input
                bg-white
                focus:ring-indigo-500 focus:border-indigo-500
                block
                w-full
                shadow-sm
                sm:text-sm
                border-gray-300
                rounded-md
              "
            />
          </div>
          <!-- care center name -->

          <!-- work hour per week -->
          <div>
            <label
              for="price"
              class="block text-sm font-medium text-gray-700 text-left"
            >
              CareCenter Name
            </label>
            <input
              type="text"
              name="price"
              id="price"
              v-model="careCenter.hours_per_week"
              autocomplete="survey_title"
              class="
                mt-1
                input
                bg-white
                focus:ring-indigo-500 focus:border-indigo-500
                block
                w-full
                shadow-sm
                sm:text-sm
                border-gray-300
                rounded-md
              "
            />
          </div>
          <!-- work hour per week -->
        </div>
        <!-- save -->
        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            @click.prevent="updateEmployee"
            type="button"
            class="
              inline-flex
              justify-center
              py-2
              px-4
              border border-transparent
              shadow-sm
              text-sm
              font-medium
              rounded-md
              text-white
              bg-indigo-700
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-indigo-500
            "
          >
            Save
          </button>
        </div>
        <!-- save -->
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import LoadingModalVue from "../../components/LoadingModal.vue";
import { useCareCenterStore } from "../../stores/careCenter";
import { useEmployeeStore } from "../../stores/employee";

type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  care_centers?: {
    cc_name: string;
    hours_per_week: string;
  };
};

const employeeStore = useEmployeeStore();
const careCenterStore = useCareCenterStore();
const route = useRoute();

let employee = ref({} as Employee);
let careCenter = ref({
  cc_name: "",
  hours_per_week: "",
});

watch(
  () => employeeStore.employees,
  (newVal, old) => {
    employee.value = newVal[0];
    if (newVal[0].care_centers !== null) {
      careCenter.value = newVal[0].care_centers;
    }
  }
);

const loadingEmployee = computed(() => employeeStore.getLoading);
const loadingCareCenter = computed(() => careCenterStore.getLoading);

function updateEmployee() {
  employeeStore.updateEmplyoee(employee.value);
  careCenterStore.updateCareCenter(careCenter.value);
  employeeStore.fetchOneEmployee(route.params.id as string);
}

employeeStore.fetchOneEmployee(route.params.id as string);
</script>

<style scoped>
</style>