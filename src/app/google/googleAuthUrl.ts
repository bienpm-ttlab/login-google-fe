export const generateGoogleAuthUrl = () => {
  const params = new URLSearchParams({
    // client_id: '461595687329-2h1ec3q6ejc4m07ffrk01q1jroph87ij.apps.googleusercontent.com',
    client_id: '461595687329-72lhld047lvuam69ldcar6t4khs0l0ff.apps.googleusercontent.com',
    redirect_uri: 'http://localhost:5000/google',
    scope: [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/user.birthday.read',
      'https://www.googleapis.com/auth/user.gender.read',
    ].join(' '),
    response_type: 'code',
    access_type: 'offline',
    prompt: 'consent',
    include_granted_scopes: 'false',
  });

  return `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
};
