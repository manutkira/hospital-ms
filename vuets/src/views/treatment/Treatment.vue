<template>
  <div>
    <h1 class="text-left text-4xl mb-5 font-bold">Treatment Table</h1>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table>
        <thead>
          <tr>
            <th>Treatment ID</th>
            <th>Treatment Desc</th>
            <th>Patient Name</th>
            <th>Physician Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody v-for="treatment in treatments" :key="treatment.id">
          <tr>
            <td class="uppercase">{{ treatment.id }}</td>
            <td>{{ treatment.description }}</td>
            <td class="uppercase">
              <dl
                class="mb-2"
                v-for="treat in treatment.treats"
                :key="treat.id"
              >
                <dt class="uppercase">
                  · {{ treat.patients.first_name }}
                  {{ treat.patients.last_name }}
                </dt>
              </dl>
            </td>
            <td class="">
              <dl
                class="mb-2"
                v-for="treat in treatment.treats"
                :key="treat.id"
              >
                <dt class="uppercase">
                  · {{ treat.patients.physicians.first_name }}
                  {{ treat.patients.physicians.last_name }}
                </dt>
              </dl>
            </td>
            <td class="uppercase">
              <dl
                class="mb-2"
                v-for="treat in treatment.treats"
                :key="treat.id"
              >
                <dt class="">· {{ treat.date }}</dt>
              </dl>
            </td>
            <td class="">
              <dl
                class="mb-2"
                v-for="treat in treatment.treats"
                :key="treat.id"
              >
                <dt class="">· {{ treat.time }}</dt>
              </dl>
            </td>

            <td class="">
              <dl
                class="mb-2"
                v-for="treat in treatment.treats"
                :key="treat.id"
              >
                <dt class="uppercase font-bold">· {{ treat.result }}</dt>
              </dl>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "@vue/runtime-core";
import { treatStore } from "../../stores/treat";
import { useTreatmentStore } from "../../stores/treatment";

const treatmentStore = useTreatmentStore();

const treatments = computed(() => treatmentStore.getTreatment);

treatmentStore.fetchTreatment();
</script>

<style scoped>
</style>