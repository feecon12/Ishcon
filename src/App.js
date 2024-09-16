import "./App.css";
import { Header }  from "./components/Header";
import { Footer } from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import ErrorPage from "./pages/ErrorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <main className={`font-mont bg-light  dark:bg-dark w-full min-h-screen`}>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contactus" element={<Contact />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/*" element={<ErrorPage />}></Route>
          </Routes>

          <Footer />
        </BrowserRouter>
      </main>
      <div>
        <a href="https://reactjs.org">learn react</a>
      </div>
    </>
  );
}

export default App;
