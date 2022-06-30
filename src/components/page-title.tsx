type Props = {
  children: string
}

export function PageTitle({ children }: Props) {
  return <h3 className="text-5xl underline">{children}</h3>
}
