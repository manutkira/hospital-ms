<template>
  <div>
    <h1 class="text-left text-4xl mb-5 font-bold">Create New Employee</h1>
    <!-- <loading-modal-vue
      v-if="loadingEmployee === true || loadingCareCenter === true"
    >
      <h2 class="text-xl font-bold py-4">Please wait!</h2>
      <p class="text-sm text-gray-500 px-8">
        Updating Employee...
      </p></loading-modal-vue
    > -->
    <form action="" enctype="multipart/form-data" method="POST">
      <div class="shadow sm:rounded-md sm:overflow-hidden">
        <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
          <!-- firstname -->
          <div>
            <label
              for="name"
              class="block text-sm font-medium text-gray-500 text-left"
            >
              Room Name
            </label>
            <input
              v-model="room.name"
              type="text"
              name="name"
              id="name"
              autocomplete="survey_title"
              class="
                input
                mt-1
                block
                bg-white
                w-full
                shadow-sm
                sm:text-sm
                border-gray-300
                rounded-md
              "
            />
          </div>
          <!-- firstname -->

          <!-- lastname -->
          <div>
            <label
              for="price"
              class="block text-sm font-medium text-gray-700 text-left"
            >
              Number of Bed
            </label>
            <input
              v-model="room.number_of_bed"
              type="text"
              name="price"
              id="price"
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
          <!-- lastname -->

          <!-- care center name -->
          <div>
            <label
              for="price"
              class="block text-sm font-medium text-gray-700 text-left"
            >
              CareCenter Name
            </label>
            <input
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
          <!-- care center name -->

          <!-- work hour per week -->
          <div>
            <label
              for="price"
              class="block text-sm font-medium text-gray-700 text-left mb-2"
            >
              Beds
            </label>
            <div v-if="room.beds.length > 0">
              <div
                v-for="bed in room.beds"
                :key="bed.id"
                class="text-left shadow sm:rounded-sm sm:overflow-hidden"
              >
                <div class="flex px-5 py-5 justify-between items-center">
                  <div class="flex">
                    <h1
                      class="
                        block
                        text-sm text-gray-700 text-left
                        mr-5
                        uppercase
                      "
                    >
                      · Bed ID: <span class="font-bold">{{ bed.id }}</span>
                    </h1>
                    <h1 class="block text-sm text-gray-700 text-left uppercase">
                      · Bed type:
                      <span class="font-bold">{{ bed.bed_type }}</span>
                    </h1>
                  </div>
                  <button class="btn btn-error">Remove</button>
                </div>
              </div>
            </div>
          </div>
          <!-- work hour per week -->
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
import { watch } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { useRoomStore } from "../../stores/room";
import Room from "../../types/room";

const roomStore = useRoomStore();
const route = useRoute();

let room = ref({} as Room);

watch(
  () => roomStore.room,
  (newVal, old) => {
    room.value = newVal[0];
  }
);

roomStore.fetchOneRoom(route.params.id as string);
</script>

<style scoped>
</style>