import "./css/App.css";
import Home from "./pages/Home";
import Favorite from "./pages/Favorites";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { MovieProvider } from "./contexts/FavoriteContext";
function App() {
    return (
        <MovieProvider>
            <Navbar />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/favorites" element={<Favorite />} />
                </Routes>
            </main>
        </MovieProvider>
    );
}
export default App;
