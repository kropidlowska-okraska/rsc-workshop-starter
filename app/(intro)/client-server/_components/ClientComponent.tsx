'use client';

import React from 'react';

type Props = {
  content: React.ReactNode;
  mutateData: () => string;
};

export default function ClientComponent({ content, mutateData }: Props) {
  return (
    <>
      <button
        className="rounded border border-red-500 p-4"
        onClick={async () => {
          const data = await mutateData();
          alert(data);
        }}
      >
        Click me
      </button>
      {content}
    </>
  );
}
