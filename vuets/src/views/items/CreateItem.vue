<template>
  <div>
    <h1 class="text-left text-4xl mb-5 font-bold">Create New Item</h1>
    <LoadingModal v-if="loading">
      <h2 class="text-xl font-bold py-4">Please wait!</h2>
      <p class="text-sm text-gray-500 px-8">Creating New Item...</p>
    </LoadingModal>
    <form action="" enctype="multipart/form-data" method="POST">
      <div class="shadow sm:rounded-md sm:overflow-hidden">
        <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
          <!-- Item Type -->
          <div>
            <label
              for="name"
              class="block text-sm font-medium text-gray-500 text-left"
            >
              Item Type
            </label>
            <input
              placeholder="Input Name/Type"
              type="text"
              name="name"
              id="name"
              v-model="item.item_type"
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
          <!-- Item Type -->

          <!-- Unit cost -->
          <div>
            <label
              for="price"
              class="block text-sm font-medium text-gray-700 text-left"
            >
              Unit Cost
            </label>
            <input
              type="text"
              name="price"
              id="price"
              v-model="item.unit_cost"
              autocomplete="survey_title"
              placeholder="Input price per unit"
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
          <!-- Unit cost -->

          <!-- Description -->
          <div>
            <label
              for="price"
              class="block text-sm font-medium text-gray-700 text-left"
            >
              Description
            </label>
            <textarea
              type="text"
              name="price"
              id="price"
              v-model="item.description"
              autocomplete="survey_title"
              placeholder="Input Description"
              class="
                textarea textarea-bordered
                mt-1
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
          <!-- Description -->
        </div>
        <!-- save -->
        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            @click.prevent="saveItem"
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
import { useItemStore } from "../../stores/item";
import LoadingModal from "../../components/LoadingModal.vue";
import { computed } from "@vue/runtime-core";
import { useRouter } from "vue-router";

type Item = {
  description: string;
  unit_cost: string;
  item_type: string;
};

let item = ref({} as Item);

const itemStore = useItemStore();
const router = useRouter();

const loading = computed(() => itemStore.getLoading);

function saveItem() {
  itemStore.saveItem(item.value).then(() => {
    router.push({ name: "ItemTableVue" });
  });
}
</script>

<style scoped>
</style>