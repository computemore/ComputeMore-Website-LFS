import nodemailer from 'nodemailer'

type ContactBody = {
  name?: string
  email?: string
  subject?: string
  message?: string
}

const isNonEmpty = (value: unknown) => typeof value === 'string' && value.trim().length > 0

export default defineEventHandler(async (event) => {
  const body = (await readBody(event)) as ContactBody

  const name = (body.name ?? '').trim()
  const email = (body.email ?? '').trim()
  const subject = (body.subject ?? '').trim()
  const message = (body.message ?? '').trim()

  if (!isNonEmpty(name) || name.length > 100) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid name' })
  }

  if (!isNonEmpty(email) || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid email' })
  }

  if (!isNonEmpty(subject) || subject.length > 150) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid subject' })
  }

  if (!isNonEmpty(message) || message.length > 10000) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid message' })
  }

  const config = useRuntimeConfig()

  const smtpHost = String(config.smtpHost || '')
  const smtpPort = Number(config.smtpPort || 587)
  const smtpSecure =
    typeof config.smtpSecure === 'boolean'
      ? config.smtpSecure
      : String(config.smtpSecure || 'false').toLowerCase() === 'true'
  const smtpUser = String(config.smtpUser || '')
  const smtpPass = String(config.smtpPass || '')
  const smtpFrom = String(config.smtpFrom || '')
  const contactTo = String(config.contactTo || 'tech@computemore.com')

  if (!smtpHost || !smtpPort || !smtpFrom || !contactTo) {
    throw createError({
      statusCode: 503,
      statusMessage: 'Email service is not configured'
    })
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: smtpUser && smtpPass ? { user: smtpUser, pass: smtpPass } : undefined
  })

  if (import.meta.dev) {
    await transporter.verify()
  }

  const requestIp =
    (getRequestHeader(event, 'x-forwarded-for') || '').split(',')[0]?.trim() ||
    getRequestHeader(event, 'x-real-ip') ||
    ''

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${subject}`,
    requestIp ? `IP: ${requestIp}` : null,
    `Time: ${new Date().toISOString()}`,
    '',
    message
  ]
    .filter(Boolean)
    .join('\n')

  let info: { messageId?: string } | undefined
  try {
    info = await transporter.sendMail({
      from: smtpFrom,
      to: contactTo,
      replyTo: `${name} <${email}>`,
      subject: `Website message: ${subject}`,
      text
    })
  } catch (error) {
    console.error('[api/contact] Failed to send email', error)
    throw createError({
      statusCode: 502,
      statusMessage: 'Failed to send message. Please try again later.'
    })
  }

  if (import.meta.dev) {
    return { ok: true, messageId: info?.messageId }
  }

  return { ok: true }
})
