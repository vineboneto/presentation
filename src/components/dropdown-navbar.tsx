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
      <ul tabIndex={0} className="menu dropdown-content shadow-xl mt-3 p-2 bg-base-300 rounded-box w-52">
        <li className="">
          <a className="link link-hove active:bg-base-300" onClick={scrollHome}>
            <span className="clip-text text-sm text-base-content ">Home</span>
          </a>
        </li>
        <li>
          <a className="link link-hover active:bg-base-300" onClick={scrollAbout}>
            <span className="clip-text text-sm text-base-content">{t('about')}</span>
          </a>
        </li>
        <li>
          <a className="link link-hover active:bg-base-300" onClick={scrollJobs}>
            <span className="clip-text text-sm text-base-content">{t('jobs')}</span>
          </a>
        </li>
        <li>
          <a className="link link-hover active:bg-base-300" onClick={scrollPortfolio}>
            <span className="clip-text text-sm text-base-content">{t('portfolio')}</span>
          </a>
        </li>
      </ul>
    </div>
  )
}
