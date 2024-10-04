export default {
    dialect: 'postgresql',
    schema: './utils/schema.js',
    out: './drizzle',
    dbCredentials: {
        host: process.env.DB_HOST, // Your host
        database: process.env.DB_NAME, // Your database name
        user: process.env.DB_USER, // Your database username
        password: process.env.DB_PASSWORD, // Your database password
        port: process.env.DB_PORT || 5432, // Default PostgreSQL port
    },
};