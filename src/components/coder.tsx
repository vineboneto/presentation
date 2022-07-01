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
  return (
    <>
      <div className="mockup-code w-[650px] hidden md:block">
        {scriptWide.scripts.map((script, idx, self) => (
          <ScriptLine key={idx} installLine={1} endLine={self.length - 1} idx={idx} script={script} />
        ))}
      </div>

      <div className="mockup-code w-[350px] block md:hidden">
        {scriptMobile.scripts.map((script, idx, self) => (
          <ScriptLine key={idx} installLine={1} endLine={self.length - 1} idx={idx} script={script} />
        ))}
      </div>
    </>
  )
}
