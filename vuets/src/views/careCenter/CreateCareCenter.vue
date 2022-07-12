<template>
  <div>
    <h1 class="text-left text-4xl mb-5 font-bold">Create Care Center</h1>
    <LoadingModal v-if="loading">
      <h2 class="text-xl font-bold py-4">Please wait!</h2>
      <p class="text-sm text-gray-500 px-8">Creating New Care Center...</p>
    </LoadingModal>
    <form action="" enctype="multipart/form-data" method="POST">
      <div class="shadow sm:rounded-md sm:overflow-hidden">
        <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
          <!-- cc name -->
          <div>
            <label
              for="name"
              class="block text-sm font-medium text-gray-500 text-left"
            >
              CareCenter Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              v-model="careCenter.cc_name"
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
          <!-- cc name -->

          <!-- employe name -->
          <div class="mt-3 col-span-3 text-left">
            <label for="category_name"> Select Employee </label>
            <select
              name="category_name"
              id="category_name"
              class="
                mt-1
                block
                w-full
                py-2
                px-3
                border border-gray-300
                bg-white
                rounded-md
                capitalize
                shadow-sm
                focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
                sm:text-sm
              "
              @change="onChange($event)"
              v-model="careCenter.employee_id"
            >
              <option
                class=""
                v-for="(employee, index) in employees"
                :key="index"
                :value="employee.id"
              >
                {{ employee.first_name }} {{ employee.last_name }}
              </option>
            </select>
          </div>
          <!-- employee name -->

          <!-- work hours -->
          <div>
            <label
              for="price"
              class="block text-sm font-medium text-gray-700 text-left"
            >
              Work Hour per week
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
          <!-- work hours -->
          <div
            class="text-red-500 text-left"
            v-for="(field, index) in Object.keys(errors)"
            :key="index"
          >
            <div v-for="(error, index) in errors[field] || []" :key="index">
              * {{ error }}
            </div>
          </div>
        </div>
        <!-- save -->
        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            @click.prevent="saveCareCenter"
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
import { ref } from "@vue/reactivity";
import { computed, watch } from "@vue/runtime-core";
import { useCareCenterStore } from "../../stores/careCenter";
import { useEmployeeStore } from "../../stores/employee";
import LoadingModal from "../../components/LoadingModal.vue";
import { useRouter } from "vue-router";

type careCenter = {
  cc_name: string;
  employee_id: number;
  hours_per_week: string;
};

type employeeType = {
  first_name: string;
  last_name: string;
  id: number;
};

const employeeStore = useEmployeeStore();
const careCenterStore = useCareCenterStore();
const router = useRouter();

let careCenter = ref({} as careCenter);
let errors = ref({} as any);

let employees = computed(() => employeeStore.getEmployee);
const loading = computed(() => careCenterStore.getLoading);

function onChange(event: any) {
  careCenter.value.employee_id = event.target.value;
}

function saveCareCenter() {
  careCenterStore.saveCareCenter(careCenter.value).then((res: any) => {
    if (res.status === 201) {
      router.push({ name: "CareCenterTableVue" });
    } else {
      errors.value = res.response.data.errors;
    }
  });
}

employeeStore.fetchEmployee();
</script>

<style scoped>
</style>