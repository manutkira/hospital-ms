<template>
  <div>
    <h1 class="text-left text-4xl mb-5 font-bold">Create Room</h1>
    <form action="" enctype="multipart/form-data" method="POST">
      <div class="shadow sm:rounded-md sm:overflow-hidden">
        <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
          <!-- care option -->
          <div class="mt-3 col-span-3 text-left">
            <label for="category_name"> Select Create Option </label>
            <select
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
              @change="onChangeOption($event)"
            >
              <option
                v-for="(option, index) in createOption"
                :key="index"
                :value="option.id"
              >
                {{ option.type }}
              </option>
            </select>
          </div>
          <!-- care option -->

          <!-- care center name -->
          <div class="mt-3 col-span-3 text-left" v-if="isCreateBed === false">
            <label for="category_name"> Select Care Center </label>
            <select
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
              v-model="room.care_center_id"
            >
              <option
                v-for="(careCenter, index) in careCenters"
                :key="index"
                :value="careCenter.id"
              >
                {{ careCenter.cc_name }}
              </option>
            </select>
          </div>
          <!-- care center name -->

          <!-- select room -->
          <div class="mt-3 col-span-3 text-left" v-if="isCreateBed === true">
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
                {{ room.name }}
              </option>
            </select>
          </div>
          <!-- select room -->

          <!-- care center name -->
          <div v-if="isCreateBed === true">
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

          <!-- bed type -->
          <div v-if="isCreateBed === true">
            <label
              for="price"
              class="block text-sm font-medium text-gray-700 text-left"
            >
              Bed Type
            </label>
            <input
              type="text"
              name="price"
              id="price"
              autocomplete="survey_title"
              v-model="bedtype"
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
          <!-- bed type -->

          <!-- Number of bed -->
          <div v-if="isCreateBed === false">
            <label
              for="price"
              class="block text-sm font-medium text-gray-700 text-left"
            >
              Number of Bed
            </label>
            <input
              type="text"
              name="price"
              id="price"
              v-model="room.number_of_bed"
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
          <!-- Number of bed -->

          <!-- Room Number -->
          <div v-if="isCreateBed === false">
            <label
              for="price"
              class="block text-sm font-medium text-gray-700 text-left"
            >
              Number of Bed
            </label>
            <input
              type="text"
              name="price"
              id="price"
              v-model="room.room_number"
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
          <!-- Room Number -->
        </div>
        <!-- save -->
        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            @click.prevent="saveRoom"
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
import { computed, watch } from "@vue/runtime-core";
import { useCareCenterStore } from "../../stores/careCenter";
import { useRoomStore } from "../../stores/room";

let isCreateBed = ref(false);
let isSelectedBed = ref(false);

type Room = {
  care_center_id: number;
  number_of_bed: number;
  room_number: string;
};

type Bed = {
  id: number;
  care_center_id: number;
  room_id: number;
  bed_type: string;
};

type SelectedRoom = {
  id: number;
  care_center_id: number;
  beds: [];
};

const careCenterStore = useCareCenterStore();
const roomStore = useRoomStore();

const createOption = [
  {
    id: 1,
    type: "Create Room",
  },
  {
    id: 2,
    type: "Create Bed",
  },
];

watch(
  () => careCenterStore.getCareCenter,
  (newVal, old) => {
    room.value.care_center_id = newVal[0].id;
  }
);

let room = ref({} as Room);
let bed = ref({} as Bed);
let selectedRoom = ref({} as SelectedRoom);
let bedtype = ref("");

function onChangeOption(event: any) {
  if (event.target.value === "1") {
    isCreateBed.value = false;
  }
  if (event.target.value === "2") {
    isCreateBed.value = true;
  }
}

function onChange(event: any) {
  room.value.care_center_id = event.target.value;
}

function saveRoom() {
  if (isCreateBed.value === true) {
    roomStore.saveBed({
      room_id: selectedRoom.value.id,
      care_center_id: selectedRoom.value.care_center_id,
      bed_type: bedtype.value,
    });
  }
  if (isCreateBed.value === false) {
    roomStore.saveRoom(room.value);
  }
}

const careCenters = computed(() => careCenterStore.getCareCenter);
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