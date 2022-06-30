import { useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'

type Props = {
  scrollHome(): void
  scrollAbout(): void
  scrollJobs(): void
  scrollPortfolio(): void
}

export function DropdownNavbar({ scrollHome, scrollAbout, scrollJobs, scrollPortfolio }: Props) {
  return (
    <div className={'dropdown md:hidden dropdown-end'}>
      <label tabIndex={0} className="btn btn-ghost md:hidden">
        <BiMenuAltRight size={30} />
      </label>
      <ul tabIndex={0} className={'menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'}>
        <li>
          <a className="link link-hover" onClick={scrollHome}>
            <span className="clip-text text-sm text-base-content">Home</span>
          </a>
        </li>
        <li>
          <a className="link link-hover" onClick={scrollAbout}>
            <span className="clip-text text-sm text-base-content">About</span>
          </a>
        </li>
        <li>
          <a className="link link-hover" onClick={scrollJobs}>
            <span className="clip-text text-sm text-base-content">Jobs</span>
          </a>
        </li>
        <li>
          <a className="link link-hover" onClick={scrollPortfolio}>
            <span className="clip-text text-sm text-base-content">Portfolio</span>
          </a>
        </li>
      </ul>
    </div>
  )
}
