import './App.css';
import {GAMES, GIFT_CARDS} from "./data/Data";
import {Tabs, TabList, Tab, TabPanel} from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {GamesPage} from "./pages/GamesPage";
import {GiftCardsPage} from "./pages/GiftCardsPage";

function App() {
  return (
      <Tabs>
        <TabList>
          <Tab>games</Tab>
          <Tab>gift crads</Tab>
        </TabList>
        <TabPanel>
          <GamesPage games={GAMES}/>
        </TabPanel>
        <TabPanel>
          <GiftCardsPage giftCards={GIFT_CARDS}/>
        </TabPanel>
      </Tabs>
  );
}

export default App;
