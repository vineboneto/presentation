import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { Header } from '@/components'

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
  const [scripts, setScripts] = useState(allScripts.map((_) => ''))
  const [currentScript, setCurrentScript] = useState(0)

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

      <Header />

      <div className="h-screen flex justify-center items-center" style={{ backgroundImage: 'url(/topography.svg)' }}>
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

      <div className="h-screen">
        <div className="container mx-auto">
          <div className="pt-20 flex justify-center">
            <div className="w-[650px] space-y-6">
              <h3 className="text-5xl underline">About</h3>
              <div className="flex">
                <div className="avatar mr-10">
                  <div className="w-24 rounded-full">
                    <Image src="https://github.com/vineboneto.png" alt="avatar" width="100%" height="100%" />
                  </div>
                </div>
                <ul className="list-disc">
                  <li>Nome: Vinicius Gazolla Boneto</li>
                  <li>Função: Escreve alguns códigos por ae</li>
                  <li>Onde: Videira - Brazil</li>
                  <li>Contato: vineboneto@gmail.com</li>
                </ul>
              </div>
              <p className="text-justify leading-7">
                Atualmente sou desenvolvedor full stack júnior, onde desenvolvo sistemas internos e websites completos
                para empresas da região. No meu desenvolvimento profissional a principal tecnologia que utilizei e
                utilizo é javascript/typescript, tanto na criação de interfaces gráficas que seguem conceitos de UX/UI,
                quanto no desenvolvimento de webservices que seguem arquitetura REST. Sempre estou buscando novos
                horizontes de conhecimento sobre outras/novas tecnologias que despertam o meu interesse.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
