import './App.css';
import {} from "./data/Data";
import {Tabs, TabList, Tab, TabPanel} from "react-tabs";
import 'react-tabs/style/react-tabs.css';

function App() {
  return (
      <Tabs>
        <TabList>
          <Tab>start</Tab>
        </TabList>
        <TabPanel>
          <h1>hello world</h1>
        </TabPanel>
      </Tabs>
  );
}

export default App;
