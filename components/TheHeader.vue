<template>
  <div class="flex justify-between mt-4 mx-4">
    <p>
      <select
        v-model="$colorMode.preference"
        class="border w-24 h-12 dark:bg-gray-900 dark:text-white dark:border-gray-700"
      >
        <option value="light">
          Light
        </option>
        <option value="dark">
          Dark
        </option>
      </select>
    </p>
    <Icon name="uil:github" size="50px" @click="openWindow" />
  </div>
</template>
<script setup lang="ts">
const openWindow = () => {
  window.open('https://github.com/LouisKoXiang')
}
</script>
