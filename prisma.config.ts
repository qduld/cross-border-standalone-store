import type { DataSource } from 'prisma/config'

const config: DataSource = {
  url: process.env.DATABASE_URL,
}

export default config