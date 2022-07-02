import { useTheme } from '@/contexts'
import { useScript } from '@/hooks'
import { ScriptLine } from './script-line'

const fullScriptsWide = [
  'yarn add aboutme',
  '############# Installing dependencies #############',
  'Full stack developer junior',
  'Clean code enthusiast and technology lover',
  'Javascript and typescript maniac',
  'Play some games and read some manga :)',
]

const fullScriptsMobile = [
  'yarn add aboutme',
  '################',
  'Full stack developer junior',
  'Clean code enthusiast',
  'technology lover',
  'js/ts maniac',
  'Play some games :)',
]

const velocityInMs = 50

export function Coder() {
  const scriptWide = useScript({ fullScript: fullScriptsWide, velocityInMs })
  const scriptMobile = useScript({ fullScript: fullScriptsMobile, velocityInMs })
  const { theme } = useTheme()

  return (
    <>
      <div
        className={'mockup-code w-[650px] z-10 rounded-xl hidden md:block'.concat(
          ' ',
          theme === 'light' ? 'bg-slate-500' : ''
        )}
      >
        {scriptWide.scripts.map((script, idx, self) => (
          <ScriptLine key={idx} installLine={1} endLine={self.length - 1} idx={idx} script={script} />
        ))}
      </div>

      <div
        className={'mockup-code w-[350px] z-10 block md:hidden'.concat(' ', theme === 'light' ? 'bg-slate-500' : '')}
      >
        {scriptMobile.scripts.map((script, idx, self) => (
          <ScriptLine key={idx} installLine={1} endLine={self.length - 1} idx={idx} script={script} />
        ))}
      </div>
    </>
  )
}
