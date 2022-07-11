<template>
  <div>
    <h1 class="text-left text-4xl mb-5 font-bold">Create Patient</h1>
    <!-- <pre>{{ physician }}</pre> -->
    <pre>{{ bedId }}</pre>
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
              v-model="physician"
            >
              <option
                v-for="(physician, index) in physicians"
                :key="index"
                :value="physician"
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
              v-model="selectedRoom"
            >
              <option v-for="(room, index) in rooms" :key="index" :value="room">
                {{ room.name }}
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
              v-model="bedId"
            >
              <option
                v-for="(bed, index) in selectedRoom.beds"
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
            @click.prevent="savepatient"
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
import LoadingModal from "../../components/LoadingModal.vue";
import { usePatientStore } from "../../stores/patient";
import { usePhysicianStore } from "../../stores/physician";
import Physician from "../../types/physician";

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

type physician = {
  id: number;
  last_name: string;
  first_name: string;
};

let patient = ref({} as Patient);
let physician = ref({} as Physician);
let selectedRoom = ref({} as SelectedRoom);
let bedId = ref(0 as number);

const roomStore = useRoomStore();
const careCenterStore = useCareCenterStore();
const patientStore = usePatientStore();
const physicianStore = usePhysicianStore();

function savepatient() {
  patientStore.savePatient({
    first_name: patient.value.first_name,
    last_name: patient.value.last_name,
    physician_id: physician.value.id,
    room_id: selectedRoom.value.id,
    bed_id: bedId.value,
  });
}

const filteredCareCenters = computed(() =>
  careCenterStore.getCareCenter.filter(
    (item) => item.id === selectedRoom.value.care_center_id
  )
);

const rooms = computed(() => roomStore.getRoom);
const physicians = computed(() => physicianStore.getPhysician);

roomStore.fetchRoom();
careCenterStore.fetchCareCenter();
physicianStore.fetchPhysician();
</script>

<style scoped>
</style>