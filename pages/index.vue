<template>
  <div class="max-w-5xl py-8 px-4 mx-auto">
    <h1 class="text-3xl font-bold py-6">
      ChatGPT OpenAI Image Test
    </h1>
    <form
      class="grid grid-cols-1 gap-6"
    >
      <label class="block">
        <span class="font-bold p-2 text-xl leading-7">API Key</span>
        <input
          type="text"
          class="form-input mt-1 block w-full"
          placeholder="OpenAI Key"
        >
      </label>
      <button
        type="submit"
        class="inline-flex justify-center items-center py-2 px-4 text-sm font-medium shadow-sm"
      >
        <span>submit</span>
      </button>
    </form>
  </div>
</template>
