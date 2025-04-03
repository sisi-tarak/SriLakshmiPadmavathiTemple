import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Donate from "./components/Donate/Donate";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";
import About from "./components/About/About";
import NotFound from "./components/NotFound/NotFound";
import Daily from "./components/Seva/Daily";
import Auspecious from "./components/Seva/Auspecious";
import Monthly from "./components/Seva/Monthly";
import Weekly from "./components/Seva/Weekly";
import Contact from "./components/Forms/Contact";
import ScaleWrapper from "./components/ScaleWrapper";
import Feedback from "./components/Forms/FeedBack";

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
    <ScaleWrapper>
      <Router>
        <ScrollToTop />
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
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
           <Route
            path="/contact"
            element={
              <Layout>
                <Contact />
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
          <Route
            path="/photo-gallery"
            element={
              <Layout>
                <PhotoGallery />
              </Layout>
            }
          />

          <Route
            path="/sevas/daily-sevas"
            element={
              <Layout>
                <Daily />
              </Layout>
            }
          />
          <Route
            path="/sevas/weekly-sevas"
            element={
              <Layout>
                <Weekly />
              </Layout>
            }
          />
          <Route
            path="/sevas/monthly-sevas"
            element={
              <Layout>
                <Monthly />
              </Layout>
            }
          />
          <Route
            path="/sevas/auspicious-sevas"
            element={
              <Layout>
                <Auspecious />
              </Layout>
            }
          />
  <Route
            path="/feedback"
            element={
              <Layout>
              <Feedback />
              </Layout>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ScaleWrapper>
  );
};

export default App;
