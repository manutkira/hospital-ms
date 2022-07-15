<template>
  <div>
    <h1 class="text-left text-4xl mb-5 font-bold">Update Patient</h1>
    <!-- <LoadingModal>
      <h2 class="text-xl font-bold py-4">Please wait!</h2>
      <p class="text-sm text-gray-500 px-8">Creating New Patient...</p>
    </LoadingModal> -->
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

          <!-- select physician -->
          <div class="mt-3 col-span-3 text-left">
            <label for="category_name"> Select Physician </label>
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
              v-model="physician.id"
            >
              <option
                v-for="(physician, index) in physicians"
                :key="index"
                :value="physician.id"
              >
                {{ physician.first_name }} {{ physician.last_name }}
              </option>
            </select>
          </div>
          <!-- select physician -->

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
              v-model="room"
            >
              <option :value="room" disabled>{{ room.name }}</option>
              <option v-for="(room, index) in rooms" :key="index" :value="room">
                {{ room.name }}
              </option>
            </select>
          </div>
          <!-- select room -->

          <!-- select bed -->
          <div class="mt-3 col-span-3 text-left">
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
              v-model="bed"
            >
              <option :value="bed">{{ bed.id }}</option>
              <option
                v-for="(bed, index) in room.beds"
                :key="index"
                :value="bed.id"
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
            <div
              class="
                items-center
                text-left
                flex
                mt-1
                input
                bg-white
                w-full
                shadow-sm
                sm:text-sm
                border-gray-300
                rounded-md
              "
            >
              {{ room.care_centers?.cc_name }}
            </div>
            <!-- <input
              v-model="room.care_centers.cc_name"
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
            /> -->
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
import { ref } from "@vue/reactivity";
import { computed, watch } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { usePatientStore } from "../../stores/patient";
import { usePhysicianStore } from "../../stores/physician";
import { useRoomStore } from "../../stores/room";
import Patient from "../../types/patient";
import Physician from "../../types/physician";
import Room from "../../types/room";

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
let physician = ref({ id: 0, last_name: "", first_name: "" });
let room = ref({} as any);
let bed = ref({} as Bed);

const patientStore = usePatientStore();
const physicianStore = usePhysicianStore();
const roomStore = useRoomStore();
const route = useRoute();

watch(
  () => patientStore.patient,
  (newVal, old) => {
    patient.value = newVal[0];
    physician.value = newVal[0].physicians;
    bed.value = newVal[0].beds;
    room.value = newVal[0].beds.rooms;
  }
);

const physicians = computed(() => physicianStore.getPhysician);
const rooms = computed(() => roomStore.getRoom);

let selectedRoom = ref({} as SelectedRoom);

let filteredRoom = computed(() =>
  roomStore.getRoom.filter((i) => i.id === room.value.id)
);

physicianStore.fetchPhysician();
roomStore.fetchRoom();
patientStore.fetchOnePatient(route.params.id as string);
</script>

<style scoped>
</style>