import ScrollToTop from "@/base-components/scroll-to-top/Main";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Router from "./router";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Router />
        <ScrollToTop />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
