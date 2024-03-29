import { useTranslation } from 'react-i18next'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

type Props = {
  scrollHome(): void
  scrollAbout(): void
  scrollJobs(): void
  scrollPortfolio(): void
}

export function Footer({ scrollAbout, scrollHome, scrollJobs, scrollPortfolio }: Props) {
  const { t } = useTranslation()

  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <a className="link link-hover" onClick={scrollHome}>
          Home
        </a>
        <a className="link link-hover" onClick={scrollAbout}>
          {t('about')}
        </a>
        <a className="link link-hover" onClick={scrollJobs}>
          {t('jobs')}
        </a>
        <a className="link link-hover" onClick={scrollPortfolio}>
          {t('portfolio')}
        </a>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a target="_blank" href="https://github.com/vineboneto" rel="noreferrer">
            <AiFillGithub size={40} />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/vinicius-gazolla-boneto-6b0a02170" rel="noreferrer">
            <AiFillLinkedin size={40} />
          </a>
        </div>
      </div>
      <div>
        <p>Copyright © {new Date().getFullYear()} - All right reserved for me :)</p>
      </div>
    </footer>
  )
}
