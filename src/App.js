import "./App.css";
import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";
import Home from "./components/Pages/Home";
import LogIn from "./components/Pages/LogIn";
import SignUp from "./components/Pages/SignUp";
import Posts from "./components/Posts/Posts";
import SinglePostPage from "./components/Posts/SinglePostPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Header />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/singlePostPage/:id" element={<SinglePostPage />} />
          </Routes>
        </main>
        <Footer />
      </>
    </Router>
  );
}

export default App;
