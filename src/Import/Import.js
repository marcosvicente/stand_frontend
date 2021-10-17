import { Component } from "react";
import ImportList from "./ImportList";
import ImportForm from "./ImportForm";
import {
  Tabs,
  Tab } from 'react-materialize';

class Import extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <>
        <Tabs
          className="tab-demo z-depth-1 tabs-fixed-width"
          scope="tabs-22"
          >
          <Tab
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false
            }}
            title="Lista de Importações"
          >
            <ImportList />
          </Tab>
          <Tab
            active
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false
            }}
            title="Inserir nova Importação"
          >
            <ImportForm/>
          </Tab>
        </Tabs>
      </>
    );
  }
}

export default Import;