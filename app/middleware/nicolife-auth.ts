export default defineNuxtRouteMiddleware(async (to) => {
  const normalizedPath = to.path.replace(/\/+$/, '')
  if (normalizedPath !== '/nicolife') return

  const authorized = useState<boolean>('nicolifeAuthorized', () => false)

  // Ensure cookies are forwarded during SSR.
  const headers = process.server ? useRequestHeaders(['cookie']) : undefined

  try {
    const res = await $fetch<{ authorized: boolean }>('/api/nicolife/status', { headers })
    authorized.value = Boolean(res?.authorized)
  } catch {
    authorized.value = false
  }
})
