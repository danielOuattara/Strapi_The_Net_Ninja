import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ReviewDetails from "./pages/ReviewDetails";
import Category from "./pages/Category";
import SiteHeader from "./components/SiteHeader";


function App() {
  return (
    <>
      <BrowserRouter>
        <SiteHeader />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/details/:id" element={<ReviewDetails />} />
          <Route path="/category/:id" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
