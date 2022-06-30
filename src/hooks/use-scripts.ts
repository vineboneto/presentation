import { useCallback, useState, useEffect } from 'react'

type Props = {
  fullScript: string[]
  velocityInMs: number
}

export function useScript({ fullScript, velocityInMs }: Props) {
  const [scripts, setScripts] = useState(fullScript.map((_) => ''))
  const [currentIndex, setCurrentIndex] = useState(0)

  const addCharacter = useCallback(
    (state: string[]) => {
      const newScripts = state.map((script, idx, self) => {
        if (idx === currentIndex) {
          const string = fullScript[idx]
          const newCharacter = string[self[idx].length]
          return newCharacter ? script + newCharacter : script
        }
        return script
      })
      return newScripts
    },
    [currentIndex, fullScript]
  )

  const resolverScript = useCallback(() => {
    setTimeout(() => setScripts((state) => addCharacter(state)), velocityInMs)
  }, [addCharacter, velocityInMs])

  useEffect(() => {
    if (scripts[currentIndex] !== fullScript[currentIndex]) {
      resolverScript()
    } else if (currentIndex <= fullScript.length) {
      setCurrentIndex((old) => old + 1)
    }
  }, [scripts, currentIndex, fullScript, resolverScript])

  return { scripts }
}
