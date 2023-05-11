import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contacts } from "./Pages/Contacts";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "./Pages/NotFound";
import { Character } from "./Pages/Character";
import { Episode } from "./Pages/Episode";
import { Random } from "./Pages/Random";

function App() {
  return (
    <div className="App">
      
      <Header />
      <main className="container content">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/random" element={<Random/>} />
            <Route path="/characters/:id" element={<Character />} />
            <Route path="/episode/:id" element={<Episode />} />
            <Route path="/contacts" element={<Contacts/>} />
            <Route path="/about" element={<About/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
