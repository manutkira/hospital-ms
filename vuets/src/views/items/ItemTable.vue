<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <h1 class="text-left text-4xl mb-5 font-bold">Items Table</h1>
    <table v-if="items.length > 0">
      <thead>
        <tr>
          <th>Item Name/Type</th>
          <th>Unit Cost</th>
          <th>Description</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td class="uppercase font-bold">{{ item.item_type }}</td>
          <td class="uppercase font-bold">${{ item.unit_cost }}</td>
          <td>{{ item.description }}</td>
          <td>
            <div class="flex">
              <router-link
                :to="{
                  name: 'UpdateItemVue',
                  params: { id: item.id },
                }"
              >
                <button class="btn btn-primary px-2 mr-2">Edit</button>
              </router-link>
              <button class="btn btn-error px-2">Delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed } from "@vue/runtime-core";
import { useItemStore } from "../../stores/item";

const itemStore = useItemStore();

const items = computed(() => itemStore.getItem);

itemStore.fetchItem();
</script>

<style scoped>
</style>