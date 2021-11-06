import { Route, Routes } from 'react-router-dom'

import { MainPage } from 'pages'

const RoutesWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  )
}

export default RoutesWrapper
