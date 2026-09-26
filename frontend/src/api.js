const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'; // fallback if not set

export async function apiRequest(path, options = {}) {
  const url = `${API_BASE_URL}${path}`;
  const headers = new Headers(options.headers || {});
  
  headers.set('Content-Type', 'application/json');

  const token = localStorage.getItem('authToken');
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (response.status === 401) {
    localStorage.removeItem('authToken');

    if (window.location.pathname.startsWith('/admin') && window.location.pathname !== '/admin/login') {
       window.location.href = '/admin/login';
    }
  }

  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }

  // 204 No Content has no body
  if (response.status === 204) {
    return null;
  }

  return response.json();
}
