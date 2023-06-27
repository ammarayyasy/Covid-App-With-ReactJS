import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import Indonesia from "./pages/covid/Indonesia";
import Provinsi from "./pages/covid/Provinsi";
import About from "./pages/covid/About";
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
      <Layout>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/covid/indonesia" element={<Indonesia/>} />
        <Route path="/covid/provinsi" element={<Provinsi/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
      </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
