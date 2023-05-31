import { Home } from "./Components/Home/Home"
import { About } from "./Components/About/About"
import { Services } from "./Components/Services/Services"
import { Contact } from "./Components/Contact/Contact"
import { Header } from "./Components/Header"
import { Footer } from "./Components/Footer"
import { Error } from "./Components/Error"

// React Router
import { BrowserRouter, Routes, Route } from "react-router-dom"
import GoToTop from "./Components/GoToTop"

const App = () => {
  return <>

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <GoToTop/>
      <Footer />
    </BrowserRouter>

  </>
}

export default App;