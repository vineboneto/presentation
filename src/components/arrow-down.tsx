import { HTMLAttributes } from 'react'
import { BsArrowDown } from 'react-icons/bs'

type Props = HTMLAttributes<HTMLDivElement>

export function ArrowDown({ ...rest }: Props) {
  return (
    <div className="flex justify-center" {...rest}>
      <BsArrowDown className="relative h-6 w-6 text-base" />
    </div>
  )
}
