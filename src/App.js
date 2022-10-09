import './App.css';
import {GAMES} from "./data/Data";
import {Tabs, TabList, Tab, TabPanel} from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import {GamesPage} from "./pages/GamesPage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <Tabs>
        <TabList>
          <Tab>games</Tab>
        </TabList>
        <TabPanel>
          <GamesPage games={GAMES}/>
        </TabPanel>
      </Tabs>
  );
}

export default App;
