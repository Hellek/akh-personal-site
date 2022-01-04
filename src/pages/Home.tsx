import { ReactElement } from 'react'

import logo from '../assets/images/logo.svg'

function Divider(): ReactElement {
  return <div className="bg-black h-0.5" />
}

function Home(): ReactElement {
  return (
    <div className="min-h-screen">
      <div className="flex justify-between items-center text-2xl py-10">
        HOME
        <img src={logo} alt="AKH logo" />
        ABOUT
      </div>

      <Divider />

      <div>
        <div className="font-bold my-5 w-full flex justify-center items-center">
          <span className="text-[144px] leading-[144px]">AKH</span>
          <span className="text-2xl leading-6">©</span>
        </div>
        <div className="mb-8 text-2xl text-center">Aleks Kholopov</div>
      </div>

      <Divider />

      <div className="mt-10 flex justify-between">
        <div className="flex-1">
          BASED IN SAINT-PITERSBURG, RUSSIA<br />
          *AVAILABLE WORLDWIDE
        </div>

        <div className="flex-1 text-center">PRODUCT DESIGNER</div>

        <div className="flex-1 text-right">
          <div>{'59°56\'19.07" N'}</div>
          <div>{'30°18\'50.87" E'}</div>
        </div>
      </div>
    </div>
  )
}

export default Home
