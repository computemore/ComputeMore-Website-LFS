import crypto from 'node:crypto'

function base64UrlEncode(buffer: Buffer) {
  return buffer
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/g, '')
}

function base64UrlDecode(value: string) {
  const padded = value.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice((value.length + 3) % 4)
  return Buffer.from(padded, 'base64')
}

export function createNicolifeAuthToken(secret: string, maxAgeSeconds: number) {
  const expiresAtSeconds = Math.floor(Date.now() / 1000) + maxAgeSeconds
  const nonce = base64UrlEncode(crypto.randomBytes(16))

  const payload = `${expiresAtSeconds}.${nonce}`
  const signature = base64UrlEncode(crypto.createHmac('sha256', secret).update(payload).digest())

  return `${payload}.${signature}`
}

export function verifyNicolifeAuthToken(secret: string, token: string) {
  const parts = token.split('.')
  if (parts.length !== 3) return false

  const [expiresAtRaw, nonce, signature] = parts
  const expiresAtSeconds = Number(expiresAtRaw)
  if (!Number.isFinite(expiresAtSeconds)) return false

  if (expiresAtSeconds < Math.floor(Date.now() / 1000)) return false

  const payload = `${expiresAtRaw}.${nonce}`
  const expected = base64UrlEncode(crypto.createHmac('sha256', secret).update(payload).digest())

  try {
    const a = base64UrlDecode(signature)
    const b = base64UrlDecode(expected)
    if (a.length !== b.length) return false
    return crypto.timingSafeEqual(a, b)
  } catch {
    return false
  }
}
