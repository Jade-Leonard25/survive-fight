import {defineConfig} from 'drizzle-kit';


export default defineConfig({
    dialect:'postgresql',
    dbCredentials:{
        
        url:process.env.DATABASE_URL!
    },
    out:'src/drizzle',
    schema:'src/drizzle/schema.ts',
})