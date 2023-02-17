import { Configuration, OpenAIApi } from 'openai'
interface CreateImage {
  apiKey: string,
  prompt: string
  n?: number
}

export default defineEventHandler(async (event) => {
  const body: CreateImage = await readBody(event)
  const { apiKey, prompt } = body
  const configuration = new Configuration({
    apiKey
  })
  const openai = new OpenAIApi(configuration)
  const size = '1024x1024'
  try {
    const response = await openai.createImage({
      prompt,
      n: 1,
      size
    })
    const imageUrl = response.data?.data[0]?.url ?? ''
    return imageUrl
  } catch (error) {
    return createError({
      data: (error as any).response.data,
      statusMessage: (error as any).message
    })
  }
})
