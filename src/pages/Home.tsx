import { ReactElement } from 'react'

import { ReactComponent as Eye } from '../assets/icon/eye.svg'
import { ReactComponent as Layers } from '../assets/icon/layers.svg'
import { ReactComponent as Rose } from '../assets/icon/rose.svg'
import { ReactComponent as Sun } from '../assets/icon/sun.svg'
import AlexPhoto from '../assets/images/alex-1@2x.png'
import { ReactComponent as Logo } from '../assets/images/logo.svg'
import { ReactComponent as CooperVisionLogo } from '../assets/logos/CooperVision.svg'
import { ReactComponent as DaSignalLogo } from '../assets/logos/DaSignal.svg'
import { ReactComponent as EssilorLogo } from '../assets/logos/Essilor.svg'
import { ReactComponent as MoscowMetroLogo } from '../assets/logos/MoscowMetro.svg'
import { ReactComponent as SaprunLogo } from '../assets/logos/Saprun.svg'
import { ReactComponent as SiemensLogo } from '../assets/logos/SIEMENS.svg'
import { ReactComponent as SPIEFLogo } from '../assets/logos/SPIEF.svg'
import { ReactComponent as TasstaLogo } from '../assets/logos/Tassta.svg'

const expertiseList = [
  'User Interface',
  <Sun key="Sun" className="w-[60px] h-[60px]" />,
  'UX Research',
  'Product',
  <Eye key="Eye" className="w-[60px] h-[60px]" />,
  'Digital',
  'Design Systems',
  'Web',
  'Communication',
  <Rose key="Rose" className="w-[60px] h-[60px]" />,
  'Print',
  'Visual Identity',
  <Layers key="Layers" className="w-[60px] h-[60px]" />,
  'Creative Strategy',
]

function Title({ text }: { text: string }): ReactElement {
  return <div className="mb-12 text-center font-medium text-red text-[80px]">{text}</div>
}

function Divider(): ReactElement {
  return <div className="bg-black h-0.5" />
}

function Home(): ReactElement {
  return (
    <div className="min-h-screen">
      <div className="flex justify-between items-center text-2xl py-10">
        HOME
        <Logo className="fill-red" />
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
          BASED IN SAINT-PETERSBURG, RUSSIA<br />
          *AVAILABLE WORLDWIDE
        </div>

        <div className="flex-1 text-center">PRODUCT DESIGNER</div>

        <div className="flex-1 text-right">
          <div>{'59°56\'19.07" N'}</div>
          <div>{'30°18\'50.87" E'}</div>
        </div>
      </div>

      <div className="flex justify-center mt-28 mb-24 relative">
        <div
          className="absolute blur-[50px]"
          style={{
            background: 'linear-gradient(180deg, #FF7BCA 0%, rgba(255, 197, 111, 0.46) 100%)',
            width: '362px',
            height: '362px',
            left: '340px',
            top: '192px',
          }}
        />

        <div
          className="absolute blur-[100px]"
          style={{
            width: '456px',
            height: '456px',
            left: '616px',
            top: '44px',
            background: 'linear-gradient(180deg, #F22FB0 0%, rgba(245, 138, 37, 0) 100%, #7061A3 100%)',
          }}
        />
        <img
          src={AlexPhoto}
          alt="Alex"
          className="w-[416px] rounded-full z-10"
        />
      </div>

      <div>
        <Title text="Expertise" />

        <div
          className="mx-auto mb-14 flex justify-center items-center flex-wrap max-w-[1170px]"
        >{expertiseList.map(item => {
          if (typeof item !== 'string') return item
          return (
            <div
              key={item}
              className="py-3 px-8 my-2 mx-2.5 border-2 rounded-full text-6xl leading-none"
            >{item}
            </div>
          )
        })}
        </div>

        <div className="text-4xl text-center max-w-[800px] mx-auto mb-20">
          Laser-focused at bringing value to the product.<br />
          I concentrate on a mix of lean design-systems for the product team,
          human-centric interfaces, and a little bit of design magic!<br /><br />
          With 15+ years in the game I worked with clients in a wide array of industries in Russia and around the world.
        </div>
      </div>

      <div>
        <Title text="Also trusted by" />

        <div className="mx-auto max-w-screen-xl flex justify-between items-center flex-wrap">
          <SiemensLogo className="basis-1/4 mb-16" />
          <EssilorLogo className="basis-1/4 mb-16" />
          <SPIEFLogo className="basis-1/4 mb-16" />
          <CooperVisionLogo className="basis-1/4 mb-16" />
          <SaprunLogo className="basis-1/4 mb-16" />
          <MoscowMetroLogo className="basis-1/4 mb-16" />
          <DaSignalLogo className="basis-1/4 mb-16" />
          <TasstaLogo className="basis-1/4 mb-16" />
        </div>

        <div className="text-4xl text-center mb-40">and many others</div>
      </div>
    </div>
  )
}

export default Home
