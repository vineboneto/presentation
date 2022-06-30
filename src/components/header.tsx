export function Header() {
  return (
    <div className="navbar fixed">
      <div className="container mx-auto">
        <div className="flex justify-between items-center w-full py-2">
          <h3 className="bg-transparent clip-text text-[2rem]">Vine Boneto</h3>
          <div className="space-x-4">
            <a href="#">
              <span className="clip-text text-[1.5rem]">Home</span>
            </a>
            <a href="#">
              <span className="clip-text text-[1.5rem]">Contato</span>
            </a>
            <a href="#">
              <span className="clip-text text-[1.5rem]">Portfólio</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
