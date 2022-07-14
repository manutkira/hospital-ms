<template>
  <div>
    <h1 class="text-left text-4xl mb-5 font-bold">Update Item</h1>
    <loading-modal-vue v-if="loading">
      <h2 class="text-xl font-bold py-4">Please wait!</h2>
      <p class="text-sm text-gray-500 px-8">
        Updating Item...
      </p></loading-modal-vue
    >

    <form action="" enctype="multipart/form-data" method="POST">
      <div class="shadow sm:rounded-md sm:overflow-hidden">
        <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
          <!-- item type -->
          <div>
            <label
              for="name"
              class="block text-sm font-medium text-gray-500 text-left"
            >
              Item Type/Name
            </label>
            <input
              v-model="item.item_type"
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
          <!-- item type -->

          <!-- unit cost -->
          <div>
            <label
              for="price"
              class="block text-sm font-medium text-gray-700 text-left"
            >
              Unit Cost
            </label>
            <input
              v-model="item.unit_cost"
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
          <!-- unit cost -->

          <!-- description -->
          <div>
            <label
              for="price"
              class="block text-sm font-medium text-gray-700 text-left"
            >
              Description
            </label>
            <input
              v-model="item.description"
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
          <!-- description -->
        </div>
        <!-- save -->
        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            @click="updateItem"
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
import { useItemStore } from "../../stores/item";
import Item from "../../types/item";

let item = ref({} as Item);

const itemStore = useItemStore();
const route = useRoute();

watch(
  () => itemStore.item,
  (newVal, old) => {
    item.value = newVal[0];
  }
);

function updateItem() {
  itemStore.updateItem(item.value);
}

const loading = computed(() => itemStore.getLoading);

itemStore.fetchOneItem(route.params.id as string);
</script>

<style scoped>
</style>