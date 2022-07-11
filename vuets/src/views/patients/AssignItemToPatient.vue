<template>
  <div>
    <h1 class="text-left text-4xl mb-5 font-bold">Create Patient</h1>
    <form action="" enctype="multipart/form-data" method="POST">
      <div class="shadow sm:rounded-md sm:overflow-hidden">
        <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
          <!-- select patient -->
          <div class="mt-3 col-span-3 text-left">
            <label for="category_name"> Select Patient </label>
            <select
              placeholder="Select Room ID"
              name="category_name"
              id="category_name"
              class="
                mt-1
                block
                capitalize
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
              v-model="patient.patient_id"
            >
              <option
                class=""
                v-for="(patient, index) in patients"
                :key="index"
                :value="patient.id"
              >
                {{ patient.first_name }} {{ patient.last_name }}
              </option>
            </select>
          </div>
          <!-- select patient -->

          <!-- select item -->
          <div
            class="mt-3 col-span-3 text-left"
            v-for="(i, index) in item"
            :key="index"
          >
            <div class="flex justify-between items-end py-5">
              <label for="category_name"> Select Item </label>
              <button class="btn" @click.prevent="add(index)">
                Add new item
              </button>
            </div>
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
              v-model="i.id"
            >
              <option value="" disabled selected>Select Item</option>
              <option
                v-for="(item, index) in items"
                :key="index"
                :value="item.id"
              >
                {{ item.item_type }}
              </option>
            </select>
          </div>
          <!-- select item -->
        </div>
        <!-- save -->
        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            @click.prevent="assignItem"
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
import { useItemStore } from "../../stores/item";
import { usePatientStore } from "../../stores/patient";

type Patient = {
  patient_id: number;
  item_id: number[];
};

let count = ref<number>(1);
let input = ref([{ name: "" }]);

function add(index: number) {
  item.value.push({ id: 0 });
}

function assignItem() {
  patientStore.assignItem({
    patient_id: patient.value.patient_id,
    item_id: item.value.map((i) => i.id),
  });
}

type Item = {
  id: number;
};

let item = ref([{}] as Item[]);

let patient = ref({} as Patient);

const patientStore = usePatientStore();
const itemStore = useItemStore();

const patients = computed(() => patientStore.getPatient);
const items = computed(() => itemStore.getItem);

patientStore.fetchPatient();
itemStore.fetchItem();
</script>

<style scoped>
</style>