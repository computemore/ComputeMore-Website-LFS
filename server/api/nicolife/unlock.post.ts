import { setCookie } from 'h3'
import { createNicolifeAuthToken } from '../../utils/nicolifeAuth'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody<{ password?: string }>(event)

  if (body?.password !== config.nicolifePassword) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
  }

  // 7 days
  const maxAgeSeconds = 60 * 60 * 24 * 7
  const token = createNicolifeAuthToken(config.nicolifeAuthSecret, maxAgeSeconds)

  setCookie(event, 'nicolife_auth', token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: maxAgeSeconds
  })

  return { authorized: true }
})
