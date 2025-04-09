'use client';

import axios from 'axios';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code) {
      (async () => {
        try {
          const res = await axios.get('http://localhost:3000/auth/google/callback', { params: { code } })
          console.log("res",res.data);
        } catch (error) {
          console.error('Error:', error);
        }
      })();
    }
  }, []);

  return <div>...loading</div>;
}
