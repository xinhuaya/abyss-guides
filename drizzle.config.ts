import { loadEnvConfig } from '@next/env';
import { defineConfig } from 'drizzle-kit';

// Load Next.js environment variables
const projectDir = process.cwd();
loadEnvConfig(projectDir);

const databaseUrl = new URL(process.env.DATABASE_URL!);

/**
 * https://orm.drizzle.team/docs/get-started/neon-new#step-5---setup-drizzle-config-file
 */
export default defineConfig({
  out: './src/db/migrations',
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    host: databaseUrl.hostname,
    port: Number(databaseUrl.port || 5432),
    user: decodeURIComponent(databaseUrl.username),
    password: decodeURIComponent(databaseUrl.password),
    database: databaseUrl.pathname.replace(/^\//, ''),
    ssl: {
      rejectUnauthorized: false,
    },
  },
});
