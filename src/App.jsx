import { BrowserRouter } from "react-router-dom";
import ScrollTop from "./components/ScrollTop";
import "./App.css";
import AppRoutes from "./components/AppRoutes";

function App() {
    return (
        <>
            <BrowserRouter>
                <ScrollTop />
                <AppRoutes />
            </BrowserRouter>
        </>
    );
}

export default App;
