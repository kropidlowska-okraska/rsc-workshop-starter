import { prisma } from '@/db';

export default async function getContacts() {
  return await prisma.contact.findMany({
    orderBy: [{ first: 'asc' }, { last: 'asc' }],
  });
}
