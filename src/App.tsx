import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";

import PostsView from "./views/PostsView/PostsView";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Login/>
        <main>
          <Routes>
            <Route path="/" element={<PostsView />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
