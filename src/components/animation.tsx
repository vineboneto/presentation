import { useTheme } from '@/contexts'

export function AnimationBackground() {
  const { theme } = useTheme()

  if (theme === 'black') {
    return (
      <div className="lines-dark">
        <div className="line-dark"></div>
        <div className="line-dark"></div>
        <div className="line-dark"></div>
      </div>
    )
  }

  return (
    <div className="lines-light">
      <div className="line-light"></div>
      <div className="line-light"></div>
      <div className="line-light"></div>
    </div>
  )
}
