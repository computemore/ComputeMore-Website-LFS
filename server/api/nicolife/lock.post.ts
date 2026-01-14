import { deleteCookie } from 'h3'

export default defineEventHandler((event) => {
  deleteCookie(event, 'nicolife_auth')
  return { locked: true }
})
