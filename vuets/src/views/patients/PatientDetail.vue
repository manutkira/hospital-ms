<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg bg-white">
    <div class="flex flex-col px-10" v-if="patient.length > 0">
      <div class="text-4xl font-bold text-left px-5 mb-6 mt-10">
        Patient Info
      </div>
      <div class="text-xl font-bold text-left pl-20">
        First Name:
        <span class="text-lg font-normal capitalize">{{
          patient[0].first_name
        }}</span>
      </div>
      <div class="text-xl font-bold text-left pl-20 pt-4">
        Last Name:
        <span class="text-lg font-normal capitalize">{{
          patient[0].last_name
        }}</span>
      </div>
      <div class="text-xl font-bold text-left pl-20 pt-4">Room:</div>

      <div class="text-sm font-bold text-left pl-28 pt-3">
        Room ID:
        <span class="text-sm font-normal">{{ patient[0].bed_id }}</span>
      </div>
      <div class="text-sm font-bold text-left pl-28 pt-3">
        Bed ID:
        <span class="text-sm font-normal">{{ patient[0].bed_id }}</span>
      </div>
      <div class="text-sm font-bold text-left pl-28 pt-3">
        Bed type:
        <span class="text-sm font-normal">{{ patient[0].beds.bed_type }}</span>
      </div>
      <div class="text-sm font-bold text-left pl-28 pt-3">
        Care Center:
        <span class="text-sm font-normal">{{
          patient[0].beds.rooms.care_centers.cc_name
        }}</span>
      </div>
      <div class="text-4xl font-bold text-left px-5 mb-6 mt-7">Physician</div>
      <div class="text-xl font-bold text-left pl-20 pt-3">
        Physician ID:
        <span class="text-lg font-normal">{{ patient[0].physician_id }}</span>
      </div>
      <div class="text-xl font-bold text-left pl-20 pt-3">
        First Name:
        <span class="text-lg font-normal capitalize">{{
          patient[0].physicians.first_name
        }}</span>
      </div>
      <div class="text-xl font-bold text-left pl-20 pt-3">
        Last Name:
        <span class="text-lg font-normal capitalize">{{
          patient[0].physicians.last_name
        }}</span>
      </div>
      <div class="mb-10"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { usePatientStore } from "../../stores/patient";

const patientStore = usePatientStore();
const route = useRoute();

const patient = computed(() => patientStore.getPatient);

patientStore.fetchOnePatient(route.params.id as string);
</script>

<style scoped>
</style>