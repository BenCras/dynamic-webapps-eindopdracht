import './App.css';
import './services/firebase'
import 'react-tabs/style/react-tabs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ItemsPage} from "./pages/itemsPage";
import {HashRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import {HomePage} from "./pages/HomePage";
import {AdminPage} from "./pages/AdminPage";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="games" element={<ItemsPage type={"game"}/>} />
                    <Route path="software" element={<ItemsPage type={"software"}/>} />
                    <Route path="giftcards" element={<ItemsPage type={"giftcard"}/>} />
                    <Route path="admin" element={<AdminPage />} />
                </Route>
            </Routes>
        </HashRouter>

    );
}

export default App;
