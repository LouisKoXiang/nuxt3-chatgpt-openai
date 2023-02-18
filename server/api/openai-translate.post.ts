import { Configuration, OpenAIApi } from 'openai'
interface Translate {
  apiKey: string
  prompt: string
}

export default defineEventHandler(async (event) => {
  const body: Translate = await readBody(event)
  const { apiKey, prompt } = body
  const configuration = new Configuration({
    apiKey
  })
  const openai = new OpenAIApi(configuration)
  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt,
      temperature: 0.3,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0
    })
    const translateResult = response.data.choices[0].text
    return translateResult
  } catch (error) {
    return createError({
      data: (error as any).response.data,
      statusMessage: (error as any).message
    })
  }
})
