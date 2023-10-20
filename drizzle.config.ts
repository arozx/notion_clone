import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();
 
export default {
    driver: 'pg',
    schema: "./src/lib/db/schema.ts",
    dbCredentials: {
        connectionString: String(process.env.DATABASE_URL),
    }
} satisfies Config;