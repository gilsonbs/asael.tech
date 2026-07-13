import { Route, Routes } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Precos from './pages/Precos'
import Portfolio from './pages/Portfolio'
import CaseDetail from './pages/CaseDetail'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import PoliticaPrivacidade from './pages/PoliticaPrivacidade'

export default function App() {
  return (
    <>
      <div className="grid-bg" />
      <Header />
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/precos" element={<Precos />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<CaseDetail />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/privacidade" element={<PoliticaPrivacidade />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
