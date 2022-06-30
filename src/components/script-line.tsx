type Props = {
  script: string
  idx: number
  installLine?: number
  endLine?: number
}

export function ScriptLine({ script, idx, installLine, endLine }: Props) {
  if (!script && idx !== 0) {
    return <></>
  }
  let className = ''
  let prefix = '~'

  if (idx === 0) prefix = '$'
  if (idx === installLine) {
    prefix = '>'
    className = 'text-success'
  }
  if (idx === endLine) className = 'text-yellow-500'

  return (
    <pre data-prefix={prefix} key={idx} className={className}>
      {script}
    </pre>
  )
}
