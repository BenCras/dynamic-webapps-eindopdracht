import './App.css';
import './services/firebase'
import {SOFTWARE, GIFT_CARDS} from "./data/Data";
import {Tabs, TabList, Tab, TabPanel} from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {GamesPage} from "./pages/GamesPage";
import {GiftCardsPage} from "./pages/GiftCardsPage";
import {SoftwarePage} from "./pages/SoftwarePage";

function App() {
  return (
      <Tabs>
        <TabList>
          <Tab>games</Tab>
          <Tab>gift crads</Tab>
          <Tab>software</Tab>
        </TabList>
        <TabPanel>
          <GamesPage/>
        </TabPanel>
        <TabPanel>
          <GiftCardsPage giftCards={GIFT_CARDS}/>
        </TabPanel>
        <TabPanel>
          <SoftwarePage software={SOFTWARE}/>
        </TabPanel>
      </Tabs>
  );
}

export default App;
