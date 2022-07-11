<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <h1 class="text-left text-4xl mb-5 font-bold">Employee Table</h1>
    <table v-if="employees.length > 0">
      <thead>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Care Center</th>
          <th>Work Hour</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in employees" :key="employee.id">
          <td class="uppercase font-bold">{{ employee.first_name }}</td>
          <td class="uppercase font-bold">{{ employee.last_name }}</td>
          <td>
            {{
              employee.care_centers === null
                ? "Not Assigned"
                : employee.care_centers.cc_name
            }}
          </td>
          <td>
            {{
              employee.care_centers === null
                ? "Not Assigned"
                : employee.care_centers.hours_per_week + "h/week"
            }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed } from "@vue/runtime-core";
import { useEmployeeStore } from "../../stores/employee";
import { useUserStore } from "../../stores/user";

const employeeStore = useEmployeeStore();

const employees = computed(() => employeeStore.getEmployee);

employeeStore.fetchEmployee();
</script>

<style scoped>
</style>