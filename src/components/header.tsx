export function Header() {
  return (
    <div className="navbar fixed">
      <div className="container mx-auto">
        <div className="flex justify-between items-center w-full py-2">
          <h3 className="bg-transparent clip-text text-2xl text-base-content">Vine Boneto</h3>
          <div className="space-x-4">
            <a href="#">
              <span className="clip-text text-xl text-base-content">Home</span>
            </a>
            <a href="#">
              <span className="clip-text text-xl text-base-content">Contato</span>
            </a>
            <a href="#">
              <span className="clip-text text-xl text-base-content">Portfólio</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
