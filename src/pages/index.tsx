import Head from 'next/head'
import Image from 'next/image'
import { MutableRefObject, useRef, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Aos from 'aos'

import { Header, Coder, Footer, PageContent, PageTitle, ModalCurriculum, AnimationBackground } from '@/components'
import { useTheme } from '@/contexts'

import 'aos/dist/aos.css'

export default function Home() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const { t } = useTranslation()
  const { theme } = useTheme()

  const refHome = useRef<HTMLDivElement>(null)
  const refAbout = useRef<HTMLDivElement>(null)
  const refJobs = useRef<HTMLDivElement>(null)
  const refPortfolio = useRef<HTMLDivElement>(null)

  function scrollTo(ref: MutableRefObject<HTMLDivElement | null>) {
    if (ref && typeof window !== 'undefined') {
      window.scrollTo(0, ref.current?.offsetTop || 0)
    }
  }

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className="max-w-screen min-h-screen overflow-hidden">
      <Head>
        <title>Vineboneto - Vinicius Gazolla Boneto</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        scrollAbout={() => scrollTo(refAbout)}
        scrollHome={() => scrollTo(refHome)}
        scrollPortfolio={() => scrollTo(refPortfolio)}
        scrollJobs={() => scrollTo(refJobs)}
      />

      <div
        ref={refHome}
        className="h-screen flex justify-center items-center bg-gradient-to-tl from-base-100 to-base-300 overflow-x-hidden"
      >
        <AnimationBackground />
        <Coder />
      </div>

      <ModalCurriculum isOpen={isOpenModal} toggle={() => setIsOpenModal((old) => !old)} />
      <div className="min-h-screen relative bg-gradient-to-bl from-base-100 to-base-300" ref={refAbout}>
        <AnimationBackground />
        <PageContent>
          <div className="w-[650px] space-y-6 z-20">
            <PageTitle>{t('about')}</PageTitle>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="avatar rounded-full h-20 w-20 md:w-24 md:h-24 mr-10">
                  <div className="rounded-full w-full">
                    <Image src="https://github.com/vineboneto.png" alt="avatar" width="100%" height="100%" />
                  </div>
                </div>
                <ul className="list-none  text-xs md:text-lg">
                  <li>
                    <span className="font-bold">{t('name')}:</span> Vinicius Gazolla Boneto
                  </li>
                  <li>
                    <span className="font-bold">{t('role')}:</span> {t('Write some codes')}
                  </li>
                  <li>
                    <span className="font-bold">{t('from')}:</span> Videira - Brazil
                  </li>
                  <li>
                    <span className="font-bold">{t('contact')}:</span> vineboneto@gmail.com
                  </li>
                </ul>
              </div>
              <div className="w-[120px]">
                <button
                  onClick={() => setIsOpenModal((old) => !old)}
                  className="btn btn-ghost rounded-lg uppercase w-full"
                >
                  {t('View Curriculum')}
                </button>
              </div>
            </div>
            <p className="text-justify leading-5 text-xs md:text-lg md:leading-7">{t('about-text')}</p>

            <div className="grid grid-rows-3 md:grid-cols-3 gap-4" data-aos="fade-up">
              <div className="card glass transition-all duration-300s hover:scale-105 rounded-lg">
                <div className="card-body">
                  <h2 className="card-title">Backend</h2>
                  <ul className="list-none">
                    <li>NodeJS</li>
                    <li>Typescript</li>
                    <li>Clean Architecture</li>
                    <li>Express</li>
                    <li>Elixir (learning)</li>
                    <li>SQL</li>
                  </ul>
                </div>
              </div>
              <div className="card glass transition-all duration-300s hover:scale-105 rounded-lg">
                <div className="card-body ">
                  <h2 className="card-title">Frontend</h2>
                  <ul className="list-none">
                    <li>ReactJS</li>
                    <li>CSS; Tailwind...</li>
                    <li>HTML</li>
                  </ul>
                </div>
              </div>
              <div className="card glass transition-all duration-300s hover:scale-105 rounded-lg">
                <div className="card-body">
                  <h2 className="card-title">Mobile</h2>
                  <ul className="list-none">
                    <li>React Native</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </PageContent>
      </div>

      <div ref={refJobs} className="h-screen bg-gradient-to-tl from-base-100 to-base-300 relative">
        <AnimationBackground />
        <PageContent>
          <div className="w-[650px] space-y-6">
            <PageTitle>{t('jobs')}</PageTitle>
            <div className="space-y-4">
              <div data-aos="fade-right">
                <div className="card card-bordered bg-base-300 transition-all duration-300s hover:scale-105 rounded-lg">
                  <div className="card-body">
                    <h2 className="card-title">{t('Health department')}</h2>
                    <span>Ago 2019 - Ago 2021 | Videira, SC</span>
                    <p>{t('first-job-text')}</p>
                  </div>
                </div>
              </div>
              <div data-aos="fade-left">
                <div className="card card-bordered bg-base-300 transition-all duration-300s hover:scale-105 rounded-lg">
                  <div className="card-body">
                    <h2 className="card-title">Skoretech Soluções em Tecnologia LTDA</h2>
                    <span>Ago 2021 - Now | Videira, SC</span>
                    <p>{t('second-job-text')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageContent>
      </div>

      <div ref={refPortfolio} className="h-screen bg-gradient-to-bl from-base-100 to-base-300 relative">
        <AnimationBackground />
        <PageContent>
          <div className="w-[650px] space-y-6">
            <PageTitle>{t('portfolio')}</PageTitle>
            <div className="space-y-4">
              <div data-aos="fade-right">
                <div className="card  card-bordered bg-base-300 transition-all duration-300s hover:scale-105 rounded-lg">
                  <div className="card-body">
                    <a
                      className="card-title link link-hover"
                      href="https://turing-machine-five.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t('Turing machine')}
                    </a>
                    <p>{t('first-portfolio-text')}</p>
                  </div>
                </div>
              </div>

              <div data-aos="fade-left">
                <div className="card card-bordered bg-base-300 transition-all duration-300s hover:scale-105 rounded-lg">
                  <div className="card-body">
                    <a
                      className="card-title link link-hover"
                      href="https://n-queens-hill-climbing-react.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t('N queens hill climbing')}
                    </a>
                    <p>{t('second-portfolio-text')}</p>
                  </div>
                </div>
              </div>

              <div data-aos="fade-right">
                <div className="card card-bordered bg-base-300 transition-all duration-300s hover:scale-105 rounded-lg">
                  <div className="card-body">
                    <a
                      className="card-title link link-hover"
                      href="https://dwl-web.herokuapp.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      DWL Web
                    </a>
                    <p>{t('third-portfolio-text')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageContent>
      </div>
      <Footer
        scrollAbout={() => scrollTo(refAbout)}
        scrollHome={() => scrollTo(refHome)}
        scrollPortfolio={() => scrollTo(refPortfolio)}
        scrollJobs={() => scrollTo(refJobs)}
      />
    </div>
  )
}
