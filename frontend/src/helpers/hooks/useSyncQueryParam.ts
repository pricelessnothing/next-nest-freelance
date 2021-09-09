import { MutableRefObject, useCallback, useEffect, useRef } from 'react'
import { useHistory, useLocation } from 'react-router'

export function useSyncQueryParam(
  name: string,
): [MutableRefObject<string>, (value: string) => void] {
  const history = useHistory()
  const location = useLocation()

  const paramRef = useRef<string>('')

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const param = searchParams.get(name)
    paramRef.current = param || ''
  }, [location, name])

  const updateParam = useCallback(
    (value: string) => {
      const oldSearchParams = new URLSearchParams(location.search)
      oldSearchParams.set(name, value)
      history.push({
        search: oldSearchParams.toString(),
      })
    },
    [location.search, history, name],
  )

  return [paramRef, updateParam]
}
