type Props = {
  scrollHome(): void
  scrollAbout(): void
  scrollJobs(): void
  scrollPortfolio(): void
}

export function Header({ scrollHome, scrollAbout, scrollJobs, scrollPortfolio }: Props) {
  return (
    <div className="navbar fixed z-20">
      <div className="container mx-auto">
        <div className="flex justify-between items-center w-full py-2">
          <h3 className="bg-transparent clip-text text-2xl text-base-content">Vine Boneto</h3>
          <div className="space-x-4">
            <a className="link link-hover" onClick={scrollHome}>
              <span className="clip-text text-xl text-base-content">Home</span>
            </a>
            <a className="link link-hover" onClick={scrollAbout}>
              <span className="clip-text text-xl text-base-content">About</span>
            </a>
            <a className="link link-hover" onClick={scrollJobs}>
              <span className="clip-text text-xl text-base-content">Jobs</span>
            </a>
            <a className="link link-hover" onClick={scrollPortfolio}>
              <span className="clip-text text-xl text-base-content">Portfolio</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
