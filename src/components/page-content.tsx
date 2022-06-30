import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export function PageContent({ children }: Props) {
  return (
    <div className="container mx-auto px-5 md:px-0">
      <div className="pt-20 flex justify-center">{children}</div>
    </div>
  )
}
