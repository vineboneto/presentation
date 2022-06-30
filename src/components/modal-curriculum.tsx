type Props = {
  isOpen: boolean
  toggle: () => void
}

export function ModalCurriculum({ isOpen, toggle }: Props) {
  return (
    <div
      className={'modal'.concat(' ', isOpen ? 'modal-open' : '')}
      aria-hidden={!isOpen}
      aria-modal={isOpen}
      onClick={(e) => {
        e.stopPropagation()
        if (e.target === e.currentTarget) {
          e.stopPropagation()
          toggle()
        }
      }}
    >
      <div className="modal-box h-full overflow-hidden  max-w-screen-2xl">
        <embed src="/vineboneto_CV.pdf" type="application/pdf" height="100%" width="100%"></embed>
      </div>
    </div>
  )
}
