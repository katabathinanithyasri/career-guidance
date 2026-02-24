import { Toaster } from "react-hot-toast";
import RoutesConfig from "./routes";
import { ThemeProvider } from "../context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <Toaster position="top-right" reverseOrder={false} />
      <RoutesConfig />
    </ThemeProvider>
  );
}