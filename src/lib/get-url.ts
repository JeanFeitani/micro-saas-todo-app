export function getUrl(path?: string) {
  const baseUrl = 'https://micro-saas-todo-app.vercel.app' || ''
  const normalizedPath = path && !path.startsWith('/') ? `/${path}` : path || ''
  return `${baseUrl}${normalizedPath}`
}
