'use client';

export default function Home() {
  const handleLogin = () => {
    window.location.href = 'http://localhost:3000/auth/google';
  };

  return (
    <button
      className="bg-blue-500 text-white p-2 rounded-md"
      onClick={handleLogin}
    >
      login by google
    </button>
  );
}
