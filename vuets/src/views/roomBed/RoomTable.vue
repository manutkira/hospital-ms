<template>
  <div>
    <h1 class="text-left text-4xl mb-5 font-bold">Room Table</h1>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table>
        <thead>
          <tr>
            <th>Room Number</th>
            <th>Care Center</th>
            <th>CareCenter ID</th>
            <th>Employee</th>
            <th>Num of Bed</th>
            <th>Bed</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="room in rooms" :key="room.id">
            <td class="uppercase">{{ room.room_number }}</td>
            <td class="uppercase">{{ room.care_centers.cc_name }}</td>
            <td class="">
              {{ room.care_center_id }}
            </td>
            <td class="uppercase font-bold">
              {{ room.care_centers.employees.first_name }}
            </td>
            <td class="uppercase font-bold">
              {{ room.number_of_bed }}
            </td>

            <td class="">
              <dl class="mb-2" v-for="bed in room.beds" :key="bed.id">
                <dt class="uppercase font-bold">Bed ID ({{ bed.id }})</dt>
                <dd>
                  - Bed type
                  <span class="uppercase font-bold">({{ bed.bed_type }})</span>
                </dd>
              </dl>
            </td>
            <td>
              <div class="flex">
                <router-link
                  :to="{
                    name: 'UpdateRoomVue',
                    params: { id: room.id },
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
  </div>
</template>

<script setup lang="ts">
import { computed } from "@vue/runtime-core";
import { useRoomStore } from "../../stores/room";

const roomStore = useRoomStore();

const rooms = computed(() => roomStore.getRoom);

roomStore.fetchRoom();
</script>

<style scoped>
</style>