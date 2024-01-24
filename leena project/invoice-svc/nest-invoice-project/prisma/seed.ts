import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.create({
    data: {
      email: 'user1@example.com',
      password: 'password1',
      name: 'User One',
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: 'user2@example.com',
      password: 'password2',
      name: 'User Two',
    },
  });

  await prisma.invoice.createMany({
    data: [
      {
        amount: 100.0,
        due_date: new Date('2024-02-01'),
        description: 'Web design services',
        userId: user1.id,
        payee: 'Web Design Co',
        spent: 70.0,
        received: 100.0,
      },
      {
        amount: 200.0,
        due_date: new Date('2024-03-01'),
        description: 'Graphic design services',
        userId: user2.id,
        payee: 'Graphics Design Ltd',
        spent: 150.0,
        received: 200.0,
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
