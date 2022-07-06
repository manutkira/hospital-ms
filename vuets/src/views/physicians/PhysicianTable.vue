<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <h1 class="text-left text-4xl mb-5 font-bold">Physician Table</h1>
    <table v-if="physicians.length > 0">
      <thead>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Patient</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="physician in physicians" :key="physician.id">
          <td class="uppercase font-bold">{{ physician.first_name }}</td>
          <td class="uppercase font-bold">{{ physician.last_name }}</td>
          <td v-if="physician.patients.length > 0" class="uppercase font-bold">
            <div
              class="flex flex-row"
              v-for="patient in physician.patients"
              :key="patient.id"
            >
              <div>{{ patient.first_name }} {{ patient.last_name }}</div>
              <router-link
                :to="{ name: 'PatientDetailVue', params: { id: patient.id } }"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 ml-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  /></svg
              ></router-link>
            </div>
          </td>
          <td v-else class="uppercase font-bold text-red-400">No patient</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed } from "@vue/runtime-core";
import { usePhysicianStore } from "../../stores/physician";

const physicianStore = usePhysicianStore();

const physicians = computed(() => physicianStore.getPhysician);

physicianStore.fetchPhysician();
</script>

<style scoped>
</style>