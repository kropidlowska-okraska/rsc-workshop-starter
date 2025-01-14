import React from 'react';
import { prisma } from '@/db';
import ClientComponent from './_components/ClientComponent';
import ServerComponent from './_components/ServerComponent';

export default function page() {

async function mutateData() {
    'use server';
  const data = await prisma.contact.findMany()

  console.log(data[0].first);
  return data[0].first as string;

}

  return (
    <ClientComponent content={<ServerComponent />} mutateData={mutateData} />
  );
}
