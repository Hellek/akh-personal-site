import { ReactElement } from 'react'

import Footer from './components/Footer'
import Home from './pages/Home'

function App(): ReactElement {
  return (
    <>
      <div className="xl:max-w-7xl max-w-full xl:mx-auto md:mx-20 mx-6">
        <Home />
      </div>
      <Footer />
    </>
  )
}

export default App
