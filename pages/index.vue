<template>
  <div class="max-w-5xl py-8 px-4 mx-auto">
    <h1 class="text-3xl font-bold py-6">Connect with Open AI</h1>
    <div class="grid grid-cols-6 gap-4">
      <!-- Translate Card-->
      <div
        class="col-start-1 col-end-7 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <Icon name="ic:baseline-translate" size="48px" />
        <nuxt-link to="/translate">
          <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Use Open AI Translation into multiple languages at once.
          </h5>
          <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
            Check the languages you want to translate
          </p>
        </nuxt-link>
      </div>
      <!-- Image Card -->
      <div
        class="col-start-1 col-end-7 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <Icon name="ic:baseline-image" size="48px" />
        <nuxt-link to="/image">
          <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Use Open AI generating images based on keywords.
          </h5>
          <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
            Generating images with a size of 1024x1024.
          </p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
