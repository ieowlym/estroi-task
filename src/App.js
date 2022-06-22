import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Header } from "./components/Header";
import { CatalogPage } from "./pages/CatalogPage";
import { HomeIndexPage } from "./pages/HomeIndexPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<HomeIndexPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
