<template>
  <div class="flex h-screen bg-gray-200 font-roboto">
    <Sidebar></Sidebar>

    <div class="flex-1 flex flex-col overflow-hidden">
      <Header />

      <main class="flex-1 overflow-x-hidden overflow-y-auto w-full bg-green-50">
        <div class="w-full px-6 py-8">
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from "./Sidebar.vue";
import Header from "./Header.vue";
</script>
