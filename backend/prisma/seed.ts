// create a seed file for the database
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.createMany({
    data: [
        {
          firstName: 'John',
          lastName: 'Doe',
          bio: 'A passionate software developer.',
          country: 'USA',
          address: '123 Main St, Springfield',
          job: 'Frontend Developer',
          email: 'alice@example.com',
          role: 'user',
          picture: `https://randomuser.me/api/portraits/men/1.jpg`
        },
        {
          firstName: 'Bob',
          lastName: 'Smith',
          bio: 'DevOps specialist with a knack for automation.',
          country: 'Canada',
          address: '456 Maple Ave, Toronto',
          job: 'DevOps Engineer',
          email: 'bob@example.com',
          role: 'user',
          picture: `https://randomuser.me/api/portraits/men/2.jpg` 
        },
        {
          firstName: 'Charlie',
          lastName: 'Brown',
          bio: 'Creative designer focused on UX/UI.',
          country: 'UK',
          address: '789 High St, London',
          job: 'UI/UX Designer',
          email: 'charlie@example.com',
          role: 'user',
          picture: `https://randomuser.me/api/portraits/men/3.jpg`
        },
        {
          firstName: 'Dana',
          lastName: 'White',
          bio: 'Experienced backend engineer specializing in Node.js.',
          country: 'Australia',
          address: '321 Ocean Dr, Sydney',
          job: 'Backend Engineer',
          email: 'dana@example.com',
          role: 'user',
          picture: `https://randomuser.me/api/portraits/men/4.jpg`
        },
        {
          firstName: 'Eve',
          lastName: 'Adams',
          bio: 'Product manager with over 10 years of experience.',
          country: 'Germany',
          address: '654 Gartenstr, Berlin',
          job: 'Product Manager',
          email: 'eve@example.com',
          role: 'user',
          picture: `https://randomuser.me/api/portraits/men/5.jpg`
        }
      ]
    })
    console.log({ user })
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })