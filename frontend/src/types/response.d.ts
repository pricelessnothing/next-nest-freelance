export type SafeResponse<R = any, E = SafeError> = {
  data?: R
  error?: E
}

export type SafeError = {
  code: number
  message: string
}
