'use client';

import { useEffect } from 'react';
import { generateGoogleAuthUrl } from './googleAuthUrl';
export default function Home() {
  useEffect(() => {
    const googleAuthUrl = generateGoogleAuthUrl(
      process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '',
      process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI || ''
    );
    console.log(googleAuthUrl);
    const url = 'http://localhost:3000/auth/google';

    window.location.href = url;
  }, []);

  return <div>...loading</div>;
}
