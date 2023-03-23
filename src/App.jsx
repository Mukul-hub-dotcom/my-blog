import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArticleListPage from "./pages/ArticleListPage";
import ArticlePage from "./pages/ArticlePage";
import About from "./pages/About";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <BrowserRouter>
   <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/articles" element={<ArticleListPage />}></Route>
      <Route path="/articles/:articleId" element={<ArticlePage />}></Route>

        
        
        
    </Routes>
   
    </BrowserRouter>
  );
}

export default App;
