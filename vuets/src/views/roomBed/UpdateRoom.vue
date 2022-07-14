<template>
  <div>
    <h1 class="text-left text-4xl mb-5 font-bold">Update Room</h1>

    <loading-modal-vue v-if="loading">
      <h2 class="text-xl font-bold py-4">Please wait!</h2>
      <p class="text-sm text-gray-500 px-8">
        Updating Room...
      </p></loading-modal-vue
    >

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
              v-model="careCenter.cc_name"
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

          <!-- beds -->
          <div v-if="bed.length > 0">
            <label
              for="price"
              class="block text-sm font-medium text-gray-700 text-left mb-2"
            >
              Beds
            </label>
            <div>
              <div
                v-for="b in bed"
                :key="b.id"
                class="text-left shadow sm:rounded-sm sm:overflow-hidden"
              >
                <div class="flex px-5 py-5 justify-between items-center">
                  <div class="flex">
                    <div class="flex">
                      <!-- Bed ID -->
                      <div class="mr-2">
                        <label
                          for="price"
                          class="
                            block
                            text-sm
                            font-medium
                            text-gray-700 text-left
                          "
                        >
                          Bed ID
                        </label>
                        <input
                          v-model="b.id"
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
                      <!-- Bed ID -->

                      <!-- Bed Type -->
                      <div>
                        <label
                          for="price"
                          class="
                            block
                            text-sm
                            font-medium
                            text-gray-700 text-left
                          "
                        >
                          Bed Type
                        </label>
                        <input
                          v-model="b.bed_type"
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
                      <!-- Bed Type -->
                    </div>
                  </div>
                  <div>
                    <button
                      @click.prevent="editBed(b)"
                      class="btn btn-primary mr-2"
                    >
                      Update
                    </button>
                    <button class="btn btn-error" @click.prevent="toggleModal">
                      Remove
                    </button>
                    <delete-confirmation-vue
                      :modal="modal"
                      :close="() => toggleModal()"
                      :delete="() => removeBed(b.id)"
                    ></delete-confirmation-vue>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- beds -->
        </div>
        <!-- save -->
        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            @click.prevent="updateRoom"
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
// @ts-ignore
import DeleteConfirmationVue from "../../components/DeleteConfirmation.vue";
import LoadingModalVue from "../../components/LoadingModal.vue";
import { useRoomStore } from "../../stores/room";
import Bed from "../../types/bed";
import Room from "../../types/room";

const roomStore = useRoomStore();
const route = useRoute();

let room = ref({} as Room);
let careCenter = ref({
  cc_name: "",
  hours_per_week: "",
});

let bed = ref([] as Bed[]);

watch(
  () => roomStore.room,
  (newVal, old) => {
    room.value = newVal[0];
    if (newVal[0].care_centers !== null) {
      careCenter.value = newVal[0].care_centers;
    }
    if (newVal[0].beds.length > 0) {
      bed.value = newVal[0].beds;
    }
  }
);

let modal = ref(false);

function toggleModal() {
  modal.value = !modal.value;
}

function updateRoom() {
  roomStore.updateRoom(room.value);
}

function editBed(bed: any) {
  roomStore.updateBed(bed);
}

function removeBed(id: number) {
  roomStore.deleteBed(id).then((res) => {
    toggleModal();
    roomStore.fetchOneRoom(route.params.id as string);
  });
}

const loading = computed(() => roomStore.getLoading);

roomStore.fetchOneRoom(route.params.id as string);
</script>

<style scoped>
</style>