import { Button } from "react-bootstrap";
import "./App.scss";
import NavHeader from "./components/NavHeader/NavHeader";
import MainContent from "./components/MainContent/MainContent";

function App() {
  return (
    <>
      <NavHeader />
      <MainContent />
      <MainContent />
      <MainContent />
    </>
  );
}

export default App;
