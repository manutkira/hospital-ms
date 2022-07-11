<template>
  <div
    class="
      min-w-screen
      h-screen
      animated
      fadeIn
      faster
      fixed
      left-0
      top-0
      flex
      justify-center
      items-center
      inset-0
      z-50
      outline-none
      focus:outline-none
      bg-no-repeat bg-center bg-cover
    "
    id="modal-id"
  >
    <div class="absolute bg-black opacity-50 inset-0 z-0"></div>
    <div
      class="
        w-full
        max-w-lg
        p-5
        relative
        mx-auto
        my-auto
        rounded-xl
        shadow-lg
        bg-white
      "
    >
      <!--content-->
      <div class="">
        <!--body-->
        <div class="text-center p-5 flex-auto justify-center">
          <div class="flex items-center justify-center">
            <div
              class="
                loader
                ease-linear
                rounded-full
                border-8 border-t-8 border-gray-200
                h-10
                w-8
              "
            ></div>
            <div
              class="
                ml-2
                loader
                ease-linear
                rounded-full
                border-8 border-t-8 border-gray-200
                h-10
                w-8
              "
            ></div>
            <div
              class="
                ml-2
                loader
                ease-linear
                rounded-full
                border-8 border-t-8 border-gray-200
                h-10
                w-8
              "
            ></div>
            <div
              class="
                ml-2
                loader
                ease-linear
                rounded-full
                border-8 border-t-8 border-gray-200
                h-10
                w-8
              "
            ></div>
            <div
              class="
                ml-2
                loader
                ease-linear
                rounded-full
                border-8 border-t-8 border-gray-200
                h-10
                w-8
              "
            ></div>
          </div>
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style>
.loader {
  border-top-color: #3498db;
  -webkit-animation: spinner 1.5s linear infinite;
  animation: spinner 1.5s linear infinite;
}

@-webkit-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>