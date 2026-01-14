import { getCookie } from 'h3'
import { verifyNicolifeAuthToken } from '../../utils/nicolifeAuth'

export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
  const token = getCookie(event, 'nicolife_auth')

  const authorized =
    typeof token === 'string' &&
    token.length > 0 &&
    verifyNicolifeAuthToken(config.nicolifeAuthSecret, token)

  return { authorized }
})
