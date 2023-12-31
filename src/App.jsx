import './App.css'
import { Footer, Header } from './components';
import { Home } from './pages';
import { useRef } from 'react';

function App() {
  const homeRef = useRef(null)
  const eventRef = useRef(null)
  const galeriRef = useRef(null)
  const beritaRef = useRef(null)

  return (
    <div style={{width: "100%"}}>
      <Header homeRef={homeRef} eventRef={eventRef} galeriRef={galeriRef} beritaRef={beritaRef}/>
      <Home homeRef={homeRef} eventRef={eventRef} galeriRef={galeriRef} beritaRef={beritaRef}/>
      <Footer />
    </div>
  )
}

export default App
