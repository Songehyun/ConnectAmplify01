'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const hello = document.getElementById('hello');
    hello?.addEventListener('click', () => {
      alert('월드');
    });
  }, []);

  return (
    <>
      <head>
        <title>Document</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <div>
        <button id="hello">헬로</button>
      </div>
    </>
  );
}
