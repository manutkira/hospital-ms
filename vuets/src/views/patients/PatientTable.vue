<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <h1 class="text-left text-4xl mb-5 font-bold">Patients Table</h1>
    <table v-if="patients.length > 0">
      <thead>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Physician</th>
          <th>Bed type (ID)</th>
          <th>Room ID</th>
          <th>Care Center</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="patient in patients" :key="patient.id">
          <td class="uppercase font-bold">{{ patient.first_name }}</td>
          <td class="uppercase font-bold">{{ patient.last_name }}</td>
          <td class="uppercase font-bold">
            {{ patient.physicians.first_name }}
          </td>
          <td class="uppercase font-bold">
            {{ patient.beds.bed_type }} ({{ patient.bed_id }})
          </td>
          <td class="uppercase font-bold">{{ patient.beds.room_id }}</td>
          <td class="uppercase font-bold">
            {{ patient.beds.rooms.care_centers.cc_name }}
          </td>
          <td>
            <div class="flex">
              <router-link
                :to="{
                  name: 'UpdatePatientVue',
                  params: { id: patient.id },
                }"
              >
                <button class="btn btn-primary px-2 mr-2">Edit</button>
              </router-link>
              <button class="btn btn-error px-2">Delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed } from "@vue/runtime-core";
import { usePatientStore } from "../../stores/patient";

const patientStore = usePatientStore();

const patients = computed(() => patientStore.getPatient);

patientStore.fetchPatient();
</script>

<style scoped>
</style>