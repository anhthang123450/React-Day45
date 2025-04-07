import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { UserProvider } from "@/contexts/UserContext";
import { LoadingProvider } from "./contexts/LoadingContext";

createRoot(document.getElementById("root")).render(
    <UserProvider>
        <LoadingProvider>
            <App />
        </LoadingProvider>
    </UserProvider>
);
