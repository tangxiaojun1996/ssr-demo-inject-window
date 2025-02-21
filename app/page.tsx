import { Suspense } from 'react';
import Skeleton from './skeleton';
import ServerList from './server';

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-8">List Demo</h1>
        <Suspense fallback={<Skeleton />}>
          <ServerList />
        </Suspense>
    </main>
  );
}
