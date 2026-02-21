import 'dotenv/config';
import { PrismaClient } from '@prisma/{{SERVICE_NAME}}-client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Starting seed...');

  // Add your seed data here
  // Example:
  // await prisma.user.create({
  //   data: {
  //     email: 'admin@example.com',
  //     name: 'Admin',
  //   },
  // });

  console.log('Seed completed!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
    await pool.end();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    await pool.end();
    process.exit(1);
  });