import { DropdownNavbar } from './dropdown-navbar'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

type Props = {
  scrollHome(): void
  scrollAbout(): void
  scrollJobs(): void
  scrollPortfolio(): void
}

export function Header({ scrollHome, scrollAbout, scrollJobs, scrollPortfolio }: Props) {
  function changeTheme() {
    const html = document.getElementsByTagName('html')[0]
    const theme = html.getAttribute('data-theme')
    html.setAttribute('data-theme', theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="navbar fixed z-20">
      <div className="container mx-auto px-2 md:px-0">
        <div className="flex justify-between items-center w-full py-2">
          <h3 className="bg-transparent clip-text text-2xl text-base-content font-semibold">Vine Boneto</h3>
          <div className="flex space-x-4">
            <label className="swap swap-rotate hidden md:inline-grid">
              <input type="checkbox" />
              <BsFillSunFill className="swap-off fill-current" size={25} onClick={() => changeTheme()} />
              <BsFillMoonFill className="swap-on fill-current" size={25} onClick={() => changeTheme()} />
            </label>

            <DropdownNavbar
              scrollHome={scrollHome}
              scrollAbout={scrollAbout}
              scrollJobs={scrollJobs}
              scrollPortfolio={scrollPortfolio}
            />
            <div className="space-x-4 hidden md:block">
              <a className="link link-hover" onClick={scrollHome}>
                <span className="clip-text text-xl font-semibold text-base-content">Home</span>
              </a>
              <a className="link link-hover" onClick={scrollAbout}>
                <span className="clip-text text-xl font-semibold text-base-content">About</span>
              </a>
              <a className="link link-hover" onClick={scrollJobs}>
                <span className="clip-text text-xl font-semibold text-base-content">Jobs</span>
              </a>
              <a className="link link-hover" onClick={scrollPortfolio}>
                <span className="clip-text text-xl font-semibold text-base-content">Portfolio</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
