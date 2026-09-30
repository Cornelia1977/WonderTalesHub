/** The backend's address: localhost in development, api.<domain> otherwise. */
export const getApiBase = () => {
  const hostname = typeof window !== 'undefined' ? window.location.hostname : '';

  // If we are running on localhost, use the env var or default to localhost:8000
  if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '') {
    return import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';
  }

  // If we are in production, use the production API domain
  if (hostname.includes('wondertaleshub.com')) {
    return 'https://api.wondertaleshub.com';
  }

  // Dynamic fallback for any other production domains
  return `https://api.${hostname}`;
};
