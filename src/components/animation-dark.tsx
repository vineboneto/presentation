import { useTheme } from '@/contexts'

export function AnimationDark() {
  const { theme } = useTheme()

  if (theme === 'black') {
    return (
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    )
  }

  return <></>
}
