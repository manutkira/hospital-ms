<template>
  <div>
    <h1 class="text-left text-4xl mb-5 font-bold">Create New Employee</h1>
    <loading-modal-vue v-if="loading">
      <h2 class="text-xl font-bold py-4">Please wait!</h2>
      <p class="text-sm text-gray-500 px-8">
        Creating New Employee...
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
        </div>
        <!-- save -->
        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            @click.prevent="saveEmployee"
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
import { computed } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import LoadingModalVue from "../../components/LoadingModal.vue";
import { useEmployeeStore } from "../../stores/employee";

type Employee = {
  first_name: string;
  last_name: string;
};

const employeeStore = useEmployeeStore();
const router = useRouter();

let employee = ref({} as Employee);

const loading = computed(() => employeeStore.getLoading);

function saveEmployee() {
  employeeStore.saveEmployee(employee.value).then(() => {
    router.push({ name: "EmployeeTableVue" });
  });
}
</script>

<style scoped>
</style>