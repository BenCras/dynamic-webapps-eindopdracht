import './App.css';
import './services/firebase'
import 'react-tabs/style/react-tabs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ItemsPage} from "./pages/itemsPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import {HomePage} from "./pages/HomePage";
import {ItemPage} from "./pages/ItemPage";
import {AdminPage} from "./pages/AdminPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="games" element={<ItemsPage type={"game"}/>} />
                    <Route path="software" element={<ItemsPage type={"software"}/>} />
                    <Route path="giftcards" element={<ItemsPage type={"giftcard"}/>} />
                    <Route path="admin" element={<AdminPage />} />
                </Route>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
