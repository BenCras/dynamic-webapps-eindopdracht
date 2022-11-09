import './App.css';
import './services/firebase'
import {Tabs, TabList, Tab, TabPanel} from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ItemsPage} from "./pages/itemsPage";

function App() {
    return (
        <Tabs>
            <TabList>
                <Tab>home</Tab>
                <Tab>games</Tab>
                <Tab>software</Tab>
                <Tab>gift cards</Tab>
            </TabList>
            <TabPanel>

            </TabPanel>
            <TabPanel>
                <ItemsPage type={"game"}/>
            </TabPanel>
            <TabPanel>
                <ItemsPage type={"software"}/>
            </TabPanel>
            <TabPanel>
                <ItemsPage type={"giftcard"}/>
            </TabPanel>
        </Tabs>
    );
}

export default App;
