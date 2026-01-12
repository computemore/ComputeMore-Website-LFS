import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export default defineEventHandler(async (event) => {
  setHeader(event, 'content-type', 'text/markdown; charset=utf-8')

  try {
    // Try to read from public directory in both dev and production
    const filePath = join(process.cwd(), 'public', 'docs', 'ecoride', 'privacy-policy.md')
    return await readFile(filePath, 'utf8')
  } catch (err) {
    // Fallback for production: try reading from .output/public
    try {
      const filePath = join(process.cwd(), '.output', 'public', 'docs', 'ecoride', 'privacy-policy.md')
      return await readFile(filePath, 'utf8')
    } catch (fallbackErr) {
      throw createError({ statusCode: 404, statusMessage: 'Privacy policy not found' })
    }
  }
})
