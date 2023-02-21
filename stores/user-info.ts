export const userInfoStore = defineStore('userInfoStore', () => {
  const openAiKey = ref()

  function setOpenAiKey (key: string) {
    openAiKey.value = key
  }

  return {
    openAiKey,
    setOpenAiKey
  }
})
