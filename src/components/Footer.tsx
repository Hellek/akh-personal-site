import { ReactElement } from 'react'

import { ReactComponent as ArrowUp } from '../assets/icon/arrow-up.svg'
import { ReactComponent as Logo } from '../assets/images/logo.svg'

function Footer(): ReactElement {
  return (
    <div>
      <div className="flex justify-center my-20">
        <div className="shrink-0 py-8 px-5 border rounded-full">
          <ArrowUp />
        </div>
      </div>
      <div className="text-2xl bg-black text-white py-12 px-20">
        <div className="flex justify-between items-center">
          <div className="flex-1">AKH© 2022</div>
          <Logo className="flex-1 fill-white" />
          <div className="flex-1 text-right">ALL RIGHTS RESERVED</div>
        </div>

        <div className="text-center mt-12">
          <span>Developed by </span>
          <a
            href="https://coding-cats.com/"
            target="_blank"
            rel="noreferrer"
            className="text-red underline"
          >Roman Basharin
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
