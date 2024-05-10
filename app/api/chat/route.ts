import OpenAI from 'openai'
import { OpenAIStream, StreamingTextResponse } from 'ai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

const systemMessage = `Focus: Web Programming with JavaScript, HTML, CSS
Instructions: Answer questions specifically related to web programming using JavaScript, HTML,
 and CSS. Do not provide information or answer questions about other programming languages
  or technologies unless they directly relate to integrating with JavaScript, HTML, or CSS
   in a web development context. Keep responses concise and technically accurate, providing code examples when beneficial.`

export async function POST(req: Request) {
  try {
    // Attempt to parse the JSON from the request
    const { messages } = await req.json()
    if (!messages) {
      throw new Error('No messages provided in the request')
    }

    const context = [{ role: 'system', content: systemMessage }, ...messages]

    // Attempt to call the OpenAI API
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      stream: true,
      messages: context,
    })

    // Handling the stream creation
    const stream = OpenAIStream(response)
    if (!stream) {
      throw new Error('Failed to create a stream from the OpenAI response')
    }

    // Return a streaming response if everything is fine
    return new StreamingTextResponse(stream)
  } catch (error: unknown) {
    // Log the error and return a meaningful error response
    if (error instanceof Error) {
      console.log(error.message)
      return new Response(error.message, { status: 500 }) // Now safely accessing error.message
    } else {
      console.log('Caught an unexpected error:', error)
    }
  }
}
