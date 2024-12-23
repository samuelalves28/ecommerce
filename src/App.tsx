import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SiteView from './site/Index'
import PainelView from './painel/Index'

function App() {
  return (
    <BrowserRouter>
      <main className='AppBody'>
        <Routes>
          <Route path='/site/*' element={<SiteView />} />
          <Route path='/painel/*' element={<PainelView />} />
          {/* <Route path="*" element={<NotFoundView />} /> */}
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
