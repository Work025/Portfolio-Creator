import Header from "./Components/Header/Header";
import Section from "./Pages/Section/Section";
import Article from "./Pages/Article/Article";
import Aside from "./Pages/Aside/Aside";
import Active from "./Pages/Active/Active";
import Users from "./Pages/Users/User";
import Nav from "./Pages/Nav/Nav"
import Footer from "./Components/Footer/Footer";
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Section />
      <Article />
      <Aside />
      <Active />
      <Users />
      <Nav />
      <Footer />
    </div>
  );
}

export default App;