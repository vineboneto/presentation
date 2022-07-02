import { useTheme } from '@/contexts'

export function AnimationLight() {
  const { theme } = useTheme()

  if (theme === 'light') {
    return <div id="highlight" />
  }

  return <></>
}
