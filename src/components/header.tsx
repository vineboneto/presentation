import { DropdownNavbar } from './dropdown-navbar'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'

type Props = {
  scrollHome(): void
  scrollAbout(): void
  scrollJobs(): void
  scrollPortfolio(): void
}

export function Header({ scrollHome, scrollAbout, scrollJobs, scrollPortfolio }: Props) {
  const { t, i18n } = useTranslation()

  function changeTheme() {
    const html = document.getElementsByTagName('html')[0]
    const theme = html.getAttribute('data-theme')
    html.setAttribute('data-theme', theme === 'dark' ? 'light' : 'dark')
  }

  function changeLanguage() {
    i18n.changeLanguage(i18n.language === 'en' ? 'pt' : 'en')
  }

  return (
    <div className="navbar fixed z-20">
      <div className="container mx-auto px-2 md:px-0">
        <div className="flex justify-between items-center w-full py-2">
          <h3 className="bg-transparent clip-text text-2xl text-base-content font-semibold">Vine Boneto</h3>
          <div className="flex space-x-4 items-center">
            <label className="swap swap-rotate hidden md:inline-grid">
              <input type="checkbox" />
              <BsFillSunFill className="swap-off fill-current" size={25} onClick={changeTheme} />
              <BsFillMoonFill className="swap-on fill-current" size={25} onClick={changeTheme} />
            </label>
            <label className="swap swap-rotate">
              <input type="checkbox" />
              <div className="swap-on text-xl text-base-content" onClick={changeLanguage}>
                EN
              </div>
              <div className="swap-off text-xl text-base-content" onClick={changeLanguage}>
                PT
              </div>
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
                <span className="clip-text text-xl font-semibold text-base-content">{t('about')}</span>
              </a>
              <a className="link link-hover" onClick={scrollJobs}>
                <span className="clip-text text-xl font-semibold text-base-content">{t('jobs')}</span>
              </a>
              <a className="link link-hover" onClick={scrollPortfolio}>
                <span className="clip-text text-xl font-semibold text-base-content">{t('portfolio')}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
