'use server';

import { redirect } from 'next/navigation';
import { prisma } from '@/db';

export default async function deleteContact(contactId: string) {
   await prisma.contact.delete({
    where: {
      id: contactId,
    },
  });

  redirect("/");
}
