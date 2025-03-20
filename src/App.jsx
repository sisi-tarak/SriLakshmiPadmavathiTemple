import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Donate from "./components/Donate/Donate";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          <Route
            path="/donate"
            element={
              <Layout>
                <Donate />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
