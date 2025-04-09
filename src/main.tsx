import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// font Inter
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css"; 
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
// Font Pacifico
import "@fontsource/pacifico/400.css";
import { Navbar } from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import { BrowserRouter } from 'react-router-dom';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Navbar/>
    <App />
    <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
