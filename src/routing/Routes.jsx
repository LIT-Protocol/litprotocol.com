import { Route, Routes } from 'react-router-dom'

import { MainPage } from 'pages'
import AboutPage from '../pages/AboutPage/AboutPage'

const RoutesWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  )
}

export default RoutesWrapper
