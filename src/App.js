import "./styles.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import GlobalStyle from "./components/styled/GlobalStyles";

export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Sidebar />
    </div>
  );
}
