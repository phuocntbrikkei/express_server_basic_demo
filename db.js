import { PrismaClient } from "./generated/client.js";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const adapter = new PrismaMariaDb({
  host: "103.75.182.135",
  port: 3306,
  user: "jshcm",
  password: "jshcm",
  database: "test_express_db"
});


const prisma = new PrismaClient({ adapter });

export  default prisma
