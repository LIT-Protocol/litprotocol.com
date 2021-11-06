import { BrowserRouter } from 'react-router-dom'

import ScrollToTop from './ScrollToTop'

import { Routes } from './routing'

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes />
    </BrowserRouter>
  )
}

export default App
