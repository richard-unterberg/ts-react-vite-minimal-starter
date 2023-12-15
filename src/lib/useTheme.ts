import { useCallback, useMemo } from 'react'
import twConfig from 'tailwind.config.js'
import { spacing as twSpacing } from 'tailwindcss/defaultTheme'

const { theme: twTheme } = twConfig

/** custom hook to retrieve data from the tailwind config from root */
const useAppTheme = () => {
  const theme = useMemo(() => twTheme, [])

  const color = useCallback(
    (key: string) => theme.colors[key as keyof typeof theme.colors],
    [theme],
  ) as (key: string) => string

  const spacing = useCallback((key: number) => {
    const number = `${key}` as keyof typeof twSpacing
    return twSpacing[number]
  }, [])

  return { spacing, color }
}

export default useAppTheme
