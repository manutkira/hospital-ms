<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <h1 class="text-left text-4xl mb-5 font-bold">Care Center Table</h1>
    <table>
      <thead>
        <tr>
          <th>cc_name</th>
          <th>Employee Name</th>
          <th>Employee ID</th>
          <th>Work Hour</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="careCenter in careCenters" :key="careCenter.id">
          <td class="uppercase font-bold">{{ careCenter.cc_name }}</td>
          <td class="uppercase font-bold">
            {{ careCenter.employees.first_name }}
          </td>
          <td class="uppercase">{{ careCenter.employee_id }}</td>
          <td>{{ careCenter.hours_per_week }}h/week</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed } from "@vue/runtime-core";
import { useCareCenterStore } from "../stores/careCenter";

const careCenterStore = useCareCenterStore();

const careCenters = computed(() => careCenterStore.getCareCenter);

careCenterStore.fetchCareCenter();
</script>

<style scoped>
</style>