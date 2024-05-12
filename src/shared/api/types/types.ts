export interface RequestOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  params?: Record<string, unknown>
  data?: Record<string, unknown>
}
