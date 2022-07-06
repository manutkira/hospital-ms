<template>
  <div>
    <h1 class="text-left text-4xl mb-5 font-bold">Create Patient</h1>
    <form action="" enctype="multipart/form-data" method="POST">
      <div class="shadow sm:rounded-md sm:overflow-hidden">
        <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
          <!-- first name -->
          <div>
            <label
              for="price"
              class="block text-sm font-medium text-gray-700 text-left"
            >
              First name
            </label>
            <input
              type="text"
              name="price"
              id="price"
              autocomplete="survey_title"
              v-model="patient.first_name"
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
          <!-- first name -->

          <!-- last name -->
          <div>
            <label
              for="price"
              class="block text-sm font-medium text-gray-700 text-left"
            >
              Last name
            </label>
            <input
              type="text"
              name="price"
              id="price"
              autocomplete="survey_title"
              v-model="patient.last_name"
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
          <!-- last name -->

          <!-- select room -->
          <div class="mt-3 col-span-3 text-left">
            <label for="category_name"> Select Room </label>
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
              @change="onChange($event)"
              v-model="selectedRoom"
            >
              <option v-for="(room, index) in rooms" :key="index" :value="room">
                {{ room.id }}
              </option>
            </select>
          </div>
          <!-- select room -->

          <!-- select bed -->
          <div class="mt-3 col-span-3 text-left" v-if="selectedRoom">
            <label for="category_name"> Select Bed </label>
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
              @change="onChange($event)"
            >
              <option
                v-for="(bed, index) in selectedRoom.beds"
                :key="index"
                :value="bed"
              >
                {{ bed.id }}
              </option>
            </select>
          </div>
          <!-- select bed -->

          <!-- care center name -->
          <div>
            <label
              for="price"
              class="block text-sm font-medium text-gray-700 text-left"
            >
              Care Center
            </label>
            <input
              v-if="filteredCareCenters.length > 0"
              readonly
              type="text"
              name="price"
              id="price"
              autocomplete="survey_title"
              v-model="filteredCareCenters[0].cc_name"
              class="
                mt-1
                input
                bg-white
                block
                w-full
                shadow-sm
                sm:text-sm
                border-gray-300
                rounded-md
              "
            />
            <input
              v-else
              readonly
              type="text"
              name="price"
              id="price"
              autocomplete="survey_title"
              class="
                mt-1
                input
                bg-white
                block
                w-full
                shadow-sm
                sm:text-sm
                border-gray-300
                rounded-md
              "
            />
          </div>
          <!-- care center name -->
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
import { useCareCenterStore } from "../../stores/careCenter";
import { useRoomStore } from "../../stores/room";

type Patient = {
  first_name: string;
  last_name: string;
};

type SelectedRoom = {
  id: number;
  care_center_id: number;
  beds: Bed[];
};

type Bed = {
  id: number;
  room_id: number;
};

let patient = ref({} as Patient);
let selectedRoom = ref({} as SelectedRoom);

function onChange(event: any) {}

const roomStore = useRoomStore();
const careCenterStore = useCareCenterStore();

const filteredCareCenters = computed(() =>
  careCenterStore.getCareCenter.filter(
    (item) => item.id === selectedRoom.value.care_center_id
  )
);

const rooms = computed(() => roomStore.getRoom);

roomStore.fetchRoom();
careCenterStore.fetchCareCenter();
</script>

<style scoped>
</style>