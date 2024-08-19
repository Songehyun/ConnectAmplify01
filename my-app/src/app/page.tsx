'use client'; // 클라이언트 전용 컴포넌트

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const helloButton = document.getElementById('hello');

    const handleClick = () => {
      alert('월드');
    };

    helloButton?.addEventListener('click', handleClick);

    return () => {
      helloButton?.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        id="hello"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        헬로
      </button>
    </div>
  );
}
