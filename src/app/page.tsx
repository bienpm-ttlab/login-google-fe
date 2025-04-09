'use client';

import { generateGoogleAuthUrl } from "./google/googleAuthUrl";

export default function Home() {
  const handleLogin = () => {
    const googleUrl = generateGoogleAuthUrl();
    window.location.href = googleUrl;
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
