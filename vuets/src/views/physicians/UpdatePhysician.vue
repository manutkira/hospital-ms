<template>
  <div>
    <h1 class="text-left text-4xl mb-5 font-bold">Update Physician</h1>
    <loading-modal-vue
      v-if="loadingPhysician === true || loadingPatient === true"
    >
      <h2 class="text-xl font-bold py-4">Please wait!</h2>
      <p class="text-sm text-gray-500 px-8">
        Updating Physician...
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
              First Name
            </label>
            <input
              v-model="physician.first_name"
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
              Last Name
            </label>
            <input
              v-model="physician.last_name"
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

          <!-- patients -->
          <div v-if="patients.length > 0">
            <label
              for="price"
              class="block text-sm font-medium text-gray-700 text-left mb-2"
            >
              Patients
            </label>
            <div>
              <div
                v-for="patient in patients"
                :key="patient.id"
                class="text-left shadow sm:rounded-sm sm:overflow-hidden"
              >
                <div class="flex px-5 py-5 justify-between items-center">
                  <div class="flex flex-col">
                    <div class="flex">
                      <!-- first name -->
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
                          First name
                        </label>
                        <input
                          v-model="patient.first_name"
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
                      <!-- first name -->

                      <!-- last name -->
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
                          Last Name
                        </label>
                        <input
                          v-model="patient.last_name"
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
                      <!-- last name -->
                    </div>
                    <div class="flex mt-2">
                      <!-- patient ID -->
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
                          ID
                        </label>
                        <input
                          v-model="patient.id"
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
                      <!-- patient ID -->

                      <!-- bed ID -->
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
                          readonly
                          v-model="patient.bed_id"
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
                      <!-- bed ID -->

                      <!-- Room ID -->
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
                          Room ID
                        </label>
                        <input
                          readonly
                          v-model="patient.room_id"
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
                      <!-- Room ID -->
                    </div>
                  </div>
                  <div class="flex">
                    <button
                      class="btn btn-primary mr-2"
                      @click.prevent="updatePatient(patient)"
                    >
                      Update
                    </button>
                    <button class="btn btn-error">Remove</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- patients -->
        </div>
        <!-- save -->
        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            @click.prevent="updatePhysician"
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
import LoadingModalVue from "../../components/LoadingModal.vue";
import { usePatientStore } from "../../stores/patient";
import { usePhysicianStore } from "../../stores/physician";
import Patient from "../../types/patient";
import Physician from "../../types/physician";

let physician = ref({} as Physician);
let patients = ref([
  {
    id: 0,
    last_name: "",
    first_name: "",
    bed_id: 0,
    room_id: 0,
  },
]);

const physicianStore = usePhysicianStore();
const patientStore = usePatientStore();
const route = useRoute();

function updatePhysician() {
  physicianStore.updatePhysician(physician.value);
}

function updatePatient(patient: any) {
  patientStore.updatePatient(patient);
}

watch(
  () => physicianStore.physician,
  (newVal, old) => {
    physician.value = newVal[0];
    if (newVal[0].patients.length > 0) {
      patients.value = newVal[0].patients;
    }
  }
);

const loadingPhysician = computed(() => physicianStore.loading);
const loadingPatient = computed(() => patientStore.loading);

physicianStore.fetchOnePhysician(route.params.id as string);
</script>

<style scoped>
</style>