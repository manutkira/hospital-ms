
<template>
  <header
    class="
      flex
      items-center
      justify-between
      px-6
      py-4
      bg-white
      border-b-4 border-indigo-600
    "
  >
    <div class="flex items-center">
      <button
        @click="isOpen = true"
        class="text-gray-500 focus:outline-none lg:hidden"
      >
        <svg
          class="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6H20M4 12H20M4 18H11"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
    <nav>
      <ul class="nav-list">
        <li>
          <a href="#!">Home</a>
        </li>
        <li>
          <a href="#!">About</a>
        </li>

        <li>
          <a href="#!">Contact</a>
        </li>
      </ul>
    </nav>
    <div class="flex items-center mr-5">
      <div class="relative">
        <button
          @click="dropdownOpen = !dropdownOpen"
          class="
            relative
            z-10
            block
            w-8
            h-8
            overflow-hidden
            rounded-full
            shadow
            focus:outline-none
          "
        >
          <img
            class="object-cover w-full h-full"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/493711b9-7eec-463a-9ced-755002155404/dehgfdl-6c691c42-d25f-401e-b033-53db4fee0f5e.jpg/v1/fill/w_622,h_350,q_70,strp/nico_robin___summer_girl_by_coresix_dehgfdl-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvNDkzNzExYjktN2VlYy00NjNhLTljZWQtNzU1MDAyMTU1NDA0XC9kZWhnZmRsLTZjNjkxYzQyLWQyNWYtNDAxZS1iMDMzLTUzZGI0ZmVlMGY1ZS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.M2hRe6CJFTQpoFrep-_8AygDkMEAXQmUex1MKLRIqKU"
            alt="Your avatar"
          />
        </button>

        <div
          v-show="dropdownOpen"
          @click="dropdownOpen = false"
          class="fixed inset-0 z-10 w-full h-full"
        ></div>
        <transition
          enter-active-class="transition duration-150 ease-out transform"
          enter-from-class="scale-95 opacity-0"
          enter-to-class="scale-100 opacity-100"
          leave-active-class="transition duration-150 ease-in transform"
          leave-from-class="scale-100 opacity-100"
          leave-to-class="scale-95 opacity-0"
        >
          <div
            v-show="dropdownOpen"
            class="
              absolute
              right-0
              z-20
              w-48
              py-2
              mt-2
              bg-green-200
              rounded-md
              shadow-xl
            "
          >
            <a
              href="#"
              class="
                block
                px-4
                py-2
                text-sm text-gray-700
                hover:bg-green-600 hover:text-white
              "
              >Profile</a
            >

            <router-link
              @click.prevent="logout"
              to="/"
              class="
                block
                px-4
                py-2
                text-sm text-gray-700
                hover:bg-green-600 hover:text-white
              "
              >Log out</router-link
            >
          </div>
        </transition>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import { useUserStore } from "../stores/user";

import { MenuButton, MenuItem, MenuItems, Menu } from "@headlessui/vue";
import { ref } from "vue";
import { useSidebar } from "../hooks/useSidebar";
import { computed, watch } from "@vue/runtime-core";
import { useRouter } from "vue-router";

const dropdownOpen = ref(false);
const { isOpen } = useSidebar();

const userStore = useUserStore();
const router = useRouter();

function logout() {
  userStore.logout().then(() => {
    router.push({ name: "EmployeeTableVue" });
  });
}
</script>


<style lang="scss" scoped>
// Navigation Variables
$content-width: 1000px;
$breakpoint: 799px;
$nav-height: 70px;
$nav-background: #262626;
$nav-font-color: #ffffff;
$link-hover-color: rgb(29, 154, 29);

// Outer navigation wrapper
.navigation {
  height: $nav-height;
  background: $nav-background;
}

// Logo and branding
.brand {
  position: absolute;
  padding-left: 20px;
  float: left;
  line-height: $nav-height;
  text-transform: uppercase;
  font-size: 1.4em;
  a,
  a:visited {
    color: $nav-font-color;
    text-decoration: none;
  }
}

// Container with no padding for navbar
.nav-container {
  max-width: $content-width;
  margin: 0 auto;
}

.img {
  padding: 15px;
  line-height: 20px;
}

// Navigation
nav {
  float: right;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      float: left;
      position: relative;
      a,
      a:visited {
        display: block;
        padding: 0 20px;
        line-height: $nav-height;
        text-decoration: none;
        &:hover {
          background: $link-hover-color;
          color: $nav-font-color;
        }
        &:not(:only-child):after {
          padding-left: 4px;
          content: " ▾";
        }
      } // Dropdown list
      ul li {
        min-width: 190px;
        a {
          padding: 15px;
          line-height: 20px;
        }
      }
    }
  }
}

// Dropdown list binds to JS toggle event
.nav-dropdown {
  position: absolute;
  display: none;
  z-index: 1;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
}

/* Mobile navigation */

// Binds to JS Toggle
.nav-mobile {
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  background: $nav-background;
  height: $nav-height;
  width: $nav-height;
}
@media only screen and (max-width: 798px) {
  // Hamburger nav visible on mobile only
  .nav-mobile {
    display: block;
  }
  nav {
    width: 100%;
    padding: $nav-height 0 15px;
    ul {
      display: none;
      li {
        float: none;
        a {
          padding: 15px;
          line-height: 20px;
        }
        img {
          padding: 15px;
          line-height: 20px;
        }
        ul li a img {
          padding-left: 30px;
        }
      }
    }
  }
  .nav-dropdown {
    position: static;
  }
}
@media screen and (min-width: $breakpoint) {
  .nav-list {
    display: block !important;
  }
}
#nav-toggle {
  position: absolute;
  left: 18px;
  top: 22px;
  cursor: pointer;
  padding: 10px 35px 16px 0px;
  span,
  span:before,
  span:after {
    cursor: pointer;
    border-radius: 1px;
    height: 5px;
    width: 35px;
    background: $nav-font-color;
    position: absolute;
    display: block;
    content: "";
    transition: all 300ms ease-in-out;
  }
  span:before {
    top: -10px;
  }
  span:after {
    bottom: -10px;
  }
  &.active span {
    background-color: transparent;
    &:before,
    &:after {
      top: 0;
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  }
}

// Page content
article {
  max-width: $content-width;
  margin: 0 auto;
  padding: 10px;
}
</style>