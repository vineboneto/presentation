import Head from 'next/head'
import Image from 'next/image'
import { MutableRefObject, useEffect, useRef, useState } from 'react'
import { BsArrowDown } from 'react-icons/bs'

import { Header, Footer, PageContent, PageTitle, ModalCurriculum } from '@/components'

const allScripts = [
  'yarn add aboutme',
  '############# Installing dependencies #############',
  'Full stack developer junior',
  'Clean code enthusiast and technology lover',
  'Javascript and typescript maniac',
  'Play some games and read some manga :)',
]

const scriptVelocityInMs = 50

export default function Home() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [scripts, setScripts] = useState(allScripts.map((_) => ''))
  const [currentScript, setCurrentScript] = useState(0)

  const refHome = useRef<HTMLDivElement>(null)
  const refAbout = useRef<HTMLDivElement>(null)
  const refJobs = useRef<HTMLDivElement>(null)
  const refPortfolio = useRef<HTMLDivElement>(null)

  function scrollTo(ref: MutableRefObject<HTMLDivElement | null>) {
    if (ref) {
      window.scrollTo(0, ref.current?.offsetTop || 0)
    }
  }

  function resolverScript(scriptIndex: number) {
    setTimeout(() => {
      setScripts((state) => {
        const newScripts = state.map((script, idx, self) => {
          if (idx === scriptIndex) {
            const string = allScripts[idx]
            const newCharacter = string[self[idx].length]
            return newCharacter ? script + newCharacter : script
          }
          return script
        })
        return newScripts
      })
    }, scriptVelocityInMs)
  }

  useEffect(() => {
    if (scripts[currentScript] !== allScripts[currentScript]) {
      resolverScript(currentScript)
    } else if (currentScript <= allScripts.length) {
      setCurrentScript((old) => old + 1)
    }
  }, [scripts, currentScript])

  return (
    <div className="max-w-screen min-h-screen overflow-hidden">
      <Head>
        <title>Vineboneto</title>
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
        className="h-screen flex justify-center items-center"
        style={{ backgroundImage: 'url(/topography.svg)' }}
      >
        <div className="mockup-code w-[650px]">
          {scripts.map((script, idx) => {
            if (script || idx === 0) {
              let className = ''
              let prefix = '~'

              if (idx === 0) prefix = '$'
              if (idx === 1) {
                prefix = '>'
                className = 'text-success'
              }
              if (idx === 5) className = 'text-yellow-500'

              return (
                <pre data-prefix={prefix} key={idx} className={className}>
                  {script}
                </pre>
              )
            }
          })}
        </div>
      </div>
      <ModalCurriculum isOpen={isOpenModal} toggle={() => setIsOpenModal((old) => !old)} />
      <div className="h-screen" ref={refAbout}>
        <PageContent>
          <div className="w-[650px] space-y-6">
            <PageTitle>About</PageTitle>
            <div className="flex justify-between">
              <div className="flex">
                <div className="avatar mr-10">
                  <div className="w-24 rounded-full">
                    <Image src="https://github.com/vineboneto.png" alt="avatar" width="100%" height="100%" />
                  </div>
                </div>
                <ul className="list-none">
                  <li>
                    <span className="font-bold">Name:</span> Vinicius Gazolla Boneto
                  </li>
                  <li>
                    <span className="font-bold">Role:</span> Write some codes
                  </li>
                  <li>
                    <span className="font-bold">From:</span> Videira - Brazil
                  </li>
                  <li>
                    <span className="font-bold">Contact:</span> vineboneto@gmail.com
                  </li>
                </ul>
              </div>
              <div className="w-[120px]">
                <button onClick={() => setIsOpenModal((old) => !old)} className="btn btn-ghost btn-square w-full">
                  View Curriculum
                </button>
              </div>
            </div>
            <p className="text-justify leading-7">
              I am currently a junior full stack developer, where I develop internal systems and complete websites for
              companies in the region. In my professional development the main technology I used and use is
              javascript/typescript, both in creating graphical interfaces that follow UX/UI concepts, and in
              development of web services that follow REST architecture. {"I'm"} always looking for new horizons
              knowledge about other/new technologies that arouse my interest.
            </p>

            <div className="grid grid-cols-3 gap-4 ">
              <div className="card glass transition-all duration-300s hover:scale-105">
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
              <div className="card glass transition-all duration-300s hover:scale-105">
                <div className="card-body">
                  <h2 className="card-title">Frontend</h2>
                  <ul className="list-none">
                    <li>ReactJS</li>
                    <li>CSS; Tailwind...</li>
                    <li>HTML</li>
                  </ul>
                </div>
              </div>
              <div className="card glass transition-all duration-300s hover:scale-105">
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
      <div ref={refJobs} className="h-screen bg-gradient-to-r from-base-100 to-base-300">
        <PageContent>
          <div className="w-[650px] space-y-6">
            <PageTitle>Jobs</PageTitle>
            <div className="space-y-4">
              <div className="card shadow-xl card-bordered bg-base-300 transition-all duration-300s hover:scale-105">
                <div className="card-body">
                  <h2 className="card-title">Health department</h2>
                  <span>Ago 2019 - Ago 2021 | Videira, SC</span>
                  <p>User support, maintenance of computers and printers</p>
                </div>
              </div>
              <div className="flex justify-center">
                <BsArrowDown className="absolute h-6 w-6 text-base animate-ping opacity-75" />
                <BsArrowDown className="relative h-6 w-6 text-base" />
              </div>
              <div className="card shadow-xl card-bordered bg-base-300 transition-all duration-300s hover:scale-105">
                <div className="card-body">
                  <h2 className="card-title">SKORETECH SOLUÇÕES EM TECNOLOGIA LTDA</h2>
                  <span>Ago 2021 - Now | Videira, SC</span>
                  <p>Development of complete systems for business management.</p>
                </div>
              </div>
            </div>
          </div>
        </PageContent>
      </div>
      <div ref={refPortfolio} className="h-screen bg-gradient-to-r from-base-100 to-base-300">
        <PageContent>
          <div className="w-[650px] space-y-6">
            <PageTitle>Portfolio</PageTitle>
            <div className="space-y-4">
              <div className="card shadow-xl card-bordered bg-base-300 transition-all duration-300s hover:scale-105">
                <div className="card-body">
                  <a
                    className="card-title link link-hover"
                    href="https://turing-machine-five.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Turing machine
                  </a>
                  <p>Turing machine (College work). I {"don't"} really remember how it works</p>
                </div>
              </div>
              <div className="flex justify-center">
                <BsArrowDown className="absolute h-6 w-6 text-base animate-ping opacity-75" />
                <BsArrowDown className="relative h-6 w-6 text-base" />
              </div>
              <div className="card shadow-xl card-bordered bg-base-300 transition-all duration-300s hover:scale-105">
                <div className="card-body">
                  <a
                    className="card-title link link-hover"
                    href="https://n-queens-hill-climbing-react.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    N queens hill climbing
                  </a>
                  <p>Solving the problem of 8 queens on a board using hill climbing search algorithm</p>
                </div>
              </div>
              <div className="flex justify-center">
                <BsArrowDown className="absolute h-6 w-6 text-base animate-ping opacity-75" />
                <BsArrowDown className="relative h-6 w-6 text-base" />
              </div>
              <div className="card shadow-xl card-bordered bg-base-300 transition-all duration-300s hover:scale-105">
                <div className="card-body">
                  <a
                    className="card-title link link-hover"
                    href="https://dwl-web.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    DWL Web
                  </a>
                  <p>Convert youtube videos to mp3/mp4</p>
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
