import { Outlet } from "react-router-dom";
import Navigation from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navigation />
      <main className="container my-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
