/** @type { import("drizzle-kit").Config } */

export default {
  dialect: "postgresql",
  schema: "./utils/schema.js",
  out: "./drizzle",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_3c2xMzTIFDaN@ep-still-mountain-a1pnuw51-pooler.ap-southeast-1.aws.neon.tech/mockmate?sslmode=require",
  },
};
