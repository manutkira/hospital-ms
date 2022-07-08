<template>
  <div>
    <h1 class="text-left text-4xl mb-5 font-bold">Create Room</h1>
    <form action="" enctype="multipart/form-data" method="POST">
      <div class="shadow sm:rounded-md sm:overflow-hidden">
        <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
          <!-- select patient -->
          <div class="mt-3 col-span-3 text-left">
            <label for="category_name"> Select Patient </label>
            <select
              placeholder="Select Room ID"
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
                shadow-sm
                focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
                sm:text-sm
              "
              v-model="treat.patient_id"
            >
              <option
                v-for="(patient, index) in patients"
                :key="index"
                :value="patient"
              >
                {{ patient.first_name }} {{ patient.last_name }}
              </option>
            </select>
          </div>
          <!-- select patient -->

          <!-- time -->
          <div>
            <label
              for="price"
              class="block text-sm font-medium text-gray-700 text-left"
            >
              Time
            </label>
            <input
              type="time"
              name="price"
              id="price"
              autocomplete="survey_title"
              v-model="treat.time"
              class="
                mt-1
                block
                w-full
                py-2
                px-3
                border border-gray-300
                bg-white
                rounded-md
                shadow-sm
                focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
                sm:text-sm
              "
            />
          </div>
          <!-- time -->

          <!-- date -->
          <div>
            <label
              for="price"
              class="block text-sm font-medium text-gray-700 text-left"
            >
              Date
            </label>
            <input
              type="date"
              name="price"
              id="price"
              v-model="treat.date"
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
          <!-- date -->

          <!--result -->
          <div>
            <label
              for="price"
              class="block text-sm font-medium text-gray-700 text-left"
            >
              Result
            </label>
            <input
              type="text"
              name="price"
              id="price"
              v-model="treat.result"
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
          <!-- result-->
        </div>
        <!-- save -->
        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
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
import { computed, ref } from "@vue/runtime-core";
import { usePatientStore } from "../../stores/patient";

type Treat = {
  patient_id: number;
  treatment_id: number;
  time: string;
  date: string;
  result: string;
};

let treat = ref({} as Treat);

const patientStore = usePatientStore();

const patients = computed(() => patientStore.getPatient);

patientStore.fetchPatient();
</script>

<style scoped>
</style>