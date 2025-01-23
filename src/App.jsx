import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Chatbot from "./components/Chatbot/Chatbot";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Chatbot />
      <Footer />
    </>
  );
}

export default App;
