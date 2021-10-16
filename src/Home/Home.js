import { Component } from "react";
import { 
  Row,
  Col,
  Icon,
  CardPanel,
  Modal, 
  Button } from 'react-materialize';

import M from 'materialize-css'

import Event from '../Event/Event';
import Import from '../Import/Import';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  componentDidMount(){
    M.AutoInit();
  }
  render() {
    return (
      <>
      <Row>
        <Col
          m={11}
        >
          <CardPanel>
            <Event />
          </CardPanel>
        </Col>
        <Col
        m={1}>
          <Modal
            actions={[
              <Button flat modal="close" node="button" waves="green">Fechar</Button>
            ]}
            bottomSheet={false}
            fixedFooter={false}
            header="Modal Header"
            id="Modal-10"
            open={false}
            options={{
              dismissible: true,
              endingTop: '10%',
              inDuration: 250,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              opacity: 0.5,
              outDuration: 250,
              preventScrolling: true,
              startingTop: '4%'
            }}
            trigger={
              <Button
                className="blue"
                floating
                icon={<Icon>add</Icon>}
                large
                node="button"
                waves="light"
              />
            }
          >
            <Import />
          </Modal>
          
        </Col>
      </Row>
    </>
    );
  }
}

export default Home;
