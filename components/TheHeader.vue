<template>
  <nav class="bg-white border-gray-200 py-4 px-4 dark:bg-gray-800">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <p>
        <select
          v-model="$colorMode.preference"
          class="border w-24 h-12 dark:bg-gray-800 dark:text-white dark:border-white"
        >
          <option value="light">
            Light
          </option>
          <option value="dark">
            Dark
          </option>
        </select>
      </p>
      <button
        type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        @click="openDrawer"
      >
        <span class="sr-only">Open main menu</span>
        <Icon name="ic:baseline-menu" size="20px" />
      </button>
      <div id="navbar-default" class="hidden w-full md:block md:w-auto">
        <ul
          class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <nuxt-link
              to="/"
              class="block py-2 pl-3 pr-4 text-lg text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Home
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="translate"
              class="block py-2 pl-3 pr-4 text-lg text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Translate
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/image"
              class="block py-2 pl-3 pr-4 text-lg text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Image
            </nuxt-link>
          </li>
          <li>
            <button
              @click="openWindow"
            >
              <Icon name="uil:github" size="28px" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="max-w-2xl p-0 md:p-4 mx-auto">
    <!-- drawer component -->
    <div id="drawer-navigation" class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-navigation-label">
      <h5 id="drawer-navigation-label" class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
        Menu
      </h5>
      <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" @click="closeDrawer">
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
        <span class="sr-only">Close menu</span>
      </button>
      <div class="py-4 overflow-y-auto">
        <ul class="space-y-2">
          <li>
            <nuxt-link
              to="/"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              @click="closeDrawer"
            >
              <Icon name="ic:baseline-home" size="24px" />
              <span class="ml-3">Home</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/translate"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              @click="closeDrawer"
            >
              <Icon name="ic:baseline-translate" size="24px" />
              <span class="ml-3">Translate</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/image"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              @click="closeDrawer"
            >
              <Icon name="ic:baseline-image" size="24px" />
              <span class="ml-3">Image</span>
            </nuxt-link>
          </li>
          <li @click="openWindow">
            <button
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Icon name="uil:github" size="24px" />
              <span class="ml-3">Github</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Drawer } from 'flowbite'
import { defineComponent, ref, onMounted } from 'vue'
export default defineComponent({
  setup () {
    const drawer = ref()
    onMounted(() => {
      const $targetEl = document.getElementById('drawer-navigation')
      // options with default values
      const options = {
        placement: 'left',
        backdrop: true,
        bodyScrolling: false,
        edge: false,
        edgeOffset: '',
        backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30'
        // onHide: () => {
        //   console.log('drawer is hidden')
        // },
        // onShow: () => {
        //   console.log('drawer is shown')
        // },
        // onToggle: () => {
        //   console.log('drawer has been toggled')
        // }
      }
      if ($targetEl) {
        drawer.value = new Drawer($targetEl, options)
      }
    })

    const openDrawer = () => {
      drawer.value.show()
    }

    const closeDrawer = () => {
      drawer.value.hide()
    }

    const openWindow = () => {
      window.open('https://github.com/LouisKoXiang')
      drawer.value.hide()
    }

    return { closeDrawer, openDrawer, openWindow }
  }
})
</script>
<style lang="css" scoped>
  #navbar-default ul li > a.router-link-active {
    color: red !important;
    font-weight: bold;
    opacity: 1;
    border-bottom: 4px solid red;
  }
</style>
