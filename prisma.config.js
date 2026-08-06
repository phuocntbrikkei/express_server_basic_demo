import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: "mysql://jshcm:jshcm@103.75.182.135:3306/test_express_db", // Uses connection string from PlanetScale
  },
});