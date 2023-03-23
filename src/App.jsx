import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArticleListPage from "./pages/ArticleListPage";
import ArticlePage from "./pages/ArticlePage";
import About from "./pages/About";
import Navbar from "./pages/Navbar";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/articles" element={<ArticleListPage />}></Route>
            <Route
              path="/articles/:articleId"
              element={<ArticlePage />}
            ></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
