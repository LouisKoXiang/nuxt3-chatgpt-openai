<template>
  <div class="max-w-5xl py-8 px-4 mx-auto">
    <Head>
      <Title>OpenAI Image Generations</Title>
      <Meta name="description" content="ChatGPT OpenAI Image Generations" />
      <Meta name="description" content="Nuxt3 OpenAI Image Generations" />
    </Head>
    <FullScreenLoading v-if="loading" />
    <h1 class="text-3xl pb-6 font-bold">
      ChatGPT OpenAI Image Generations
    </h1>
    <form
      class="grid grid-cols-1 gap-6"
      @submit.prevent="createImage"
    >
      <label class="block">
        <span class="font-bold p-2 text-xl leading-7">API Key</span>
        <input
          v-model="apiKey"
          type="text"
          class="form-input mt-1 block w-full text-black"
          placeholder="OpenAI Key"
        >
      </label>
      <label class="block">
        <span class="font-bold p-2 text-xl leading-7">Prompt</span>
        <input
          v-model="promptString"
          type="text"
          class="form-input mt-1 block w-full text-black"
          placeholder="Image description"
        >
      </label>
      <button
        type="submit"
        class="inline-flex justify-center items-center py-2 px-4
        text-sm font-medium shadow-sm border border-black dark:border-white"
      >
        <span>Image Generations</span>
      </button>
      <span v-if="errMsg" class="text-red-500">
        {{ errMsg }}
      </span>
    </form>
    <nuxt-img
      v-if="imageUrl"
      :src="imageUrl"
      width="1024"
      height="1024"
      alt="image"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { userInfoStore } from '@/stores/user-info'
export default defineComponent({
  setup () {
    const apiKey = ref()
    const promptString = ref()
    const imageUrl = ref('') as any
    const errMsg = ref('')
    const loading = ref(false)
    const userInfo = userInfoStore()
    apiKey.value = userInfo.openAiKey
    const createImage = async () => {
      loading.value = true
      errMsg.value = ''
      const { data, error } = await useFetch('/api/openai-image', {
        method: 'post',
        body: {
          apiKey: apiKey.value,
          prompt: promptString.value
        }
      })
      imageUrl.value = data.value ?? ''
      if (error.value) {
        errMsg.value = error.value.data.data.error.message
      }
      loading.value = false
    }

    return { apiKey, promptString, imageUrl, errMsg, loading, createImage }
  }
})
</script>
