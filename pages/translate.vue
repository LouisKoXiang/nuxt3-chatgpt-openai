<template>
  <div class="max-w-5xl py-8 px-4 mx-auto">
    <Head>
      <Title>Nuxt3 OpenAI Translation</Title>
      <Meta name="description" content="Open AI One translation for multiple languages." />
    </Head>
    <ClientOnly>
      <FullScreenLoading v-if="loading" />
      <h1 class="text-3xl pb-6 font-bold">
        Open AI Translation into multiple languages at once.
      </h1>
      <form class="grid grid-cols-1 gap-6" @submit.prevent="translateText">
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
            placeholder="You need to translate the text."
          >
        </label>
        <label class="block">
          <span class="font-bold p-2 text-xl leading-7">Select the languages you want to translate</span>
          <Multiselect
            v-model="languageList"
            mode="tags"
            placeholder="Check the languages you want to translate."
            :searchable="true"
            :can-clear="false"
            :options="languageListOptions"
          />
        </label>
        <button
          type="submit"
          class="inline-flex justify-center items-center py-2 px-4 text-sm
        font-medium shadow-sm border border-black dark:border-white"
        >
          <span>Translate</span>
        </button>
        <span v-if="errMsg" class="text-red-500">
          {{ errMsg }}
        </span>
      </form>
      <span v-if="translateResult">
        <json-viewer :value="translateResult" />
      </span>
    </ClientOnly>
  </div>
</template>
<script lang="ts">
import Multiselect from '@vueform/multiselect'
import { defineComponent, ref } from 'vue'
import { SelectItem } from '@/model/SelectItem'
import { userInfoStore } from '@/stores/user-info'

export default defineComponent({
  components: {
    Multiselect
  },
  setup () {
    const apiKey = ref()
    const promptString = ref()
    const translateResult = ref('') as any
    const errMsg = ref('')
    const loading = ref(false)
    const languageList = ref()
    const languageListOptions = ref([] as SelectItem[])
    const userInfo = userInfoStore()
    apiKey.value = userInfo.openAiKey

    const fetchData = async () => {
      const result = await useFetch('/api/language', {
        method: 'get'
      })
      languageListOptions.value = result.data.value as SelectItem[]
    }

    fetchData()

    const translateText = async () => {
      loading.value = true
      errMsg.value = ''
      if (!languageList.value) {
        loading.value = false
        errMsg.value = 'Check the languages you want to translate.'
        return
      }

      let languageListCombo = ''
      const iterator = languageList.value.keys()
      for (const key of iterator) {
        languageListCombo += (key + 1) + '. ' + languageList.value[key] + ', '
      }
      const translateCombo = " ' " + 'Translate this into ' + languageListCombo + ' Just reponse with json : ' + promptString.value + "'"

      const { data, error } = await useFetch('/api/openai-translate', {
        method: 'post',
        body: {
          apiKey: apiKey.value,
          prompt: translateCombo
        }
      })
      translateResult.value = data.value ?? ''
      if (error.value) {
        errMsg.value = error.value.data.data.error.message
      }
      loading.value = false
    }

    return { languageListOptions, apiKey, promptString, translateResult, errMsg, loading, languageList, translateText }
  }
})
</script>
