import languageList from '@/public/languageList.json'

export default defineEventHandler(() => {
  try {
    return languageList
  } catch (error) {
    return createError({
      data: '網路異常',
      statusMessage: '網路異常'
    })
  }
})
