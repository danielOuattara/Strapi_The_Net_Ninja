import { BrowserRouter, Route, Routes } from "react-router-dom";
import { InMemoryCache, ApolloClient, ApolloProvider  } from "@apollo/client";
import Home from "./pages/Home";
import ReviewDetails from "./pages/ReviewDetails";
import Category from "./pages/Category";
import SiteHeader from "./components/SiteHeader";


const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache()
})


function App() {
  return (
    <>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <SiteHeader />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/details/:id" element={<ReviewDetails />} />
            <Route path="/category/:id" element={<Category />} />
          </Routes>
        </ApolloProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
