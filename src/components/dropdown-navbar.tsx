import { useTranslation } from 'react-i18next'
import { BiMenuAltRight } from 'react-icons/bi'

type Props = {
  scrollHome(): void
  scrollAbout(): void
  scrollJobs(): void
  scrollPortfolio(): void
}

export function DropdownNavbar({ scrollHome, scrollAbout, scrollJobs, scrollPortfolio }: Props) {
  const { t } = useTranslation()

  return (
    <div className="dropdown md:hidden dropdown-end">
      <label tabIndex={0} className="btn btn-ghost md:hidden">
        <BiMenuAltRight size={30} />
      </label>
      <ul tabIndex={0} className={'menu dropdown-content shadow-xl mt-3 p-2  glass rounded-box w-52'}>
        <li>
          <a className="link link-hover" onClick={scrollHome}>
            <span className="clip-text text-sm text-base-content">Home</span>
          </a>
        </li>
        <li>
          <a className="link link-hover" onClick={scrollAbout}>
            <span className="clip-text text-sm text-base-content">{t('about')}</span>
          </a>
        </li>
        <li>
          <a className="link link-hover" onClick={scrollJobs}>
            <span className="clip-text text-sm text-base-content">{t('jobs')}</span>
          </a>
        </li>
        <li>
          <a className="link link-hover" onClick={scrollPortfolio}>
            <span className="clip-text text-sm text-base-content">{t('portfolio')}</span>
          </a>
        </li>
      </ul>
    </div>
  )
}
