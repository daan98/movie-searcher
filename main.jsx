import App from './src/App';
import './style.scss';
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("app"));

root.render(<App/>);
