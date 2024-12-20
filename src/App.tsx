import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SiteView from './Site'
import PainelView from './Painel'
import NotFoundView from './NotFound'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <main className='AppBody'>
          <Routes>
            <Route path='/site/*' element={<SiteView />} />
            <Route path='/painel/*' element={<PainelView />} />
            <Route path="*" element={<NotFoundView />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
