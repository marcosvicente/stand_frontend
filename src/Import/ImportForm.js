import { Component } from "react";
import { 
  TextInput,
  Button,
  Icon,
  Row,
  Col,
  CardPanel } from 'react-materialize';
import axios from 'axios';

class ImportForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      errorMessage: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  postImport(){
    const data = new FormData() 
    data.append('import[file]', this.state.file)
    console.log(data);
    console.log(this.state.file)
    const config = {
      headers: {
          'content-type': 'multipart/form-data'
      }
  }
    axios.post('http://localhost:3000/imports', data, config)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        this.setState({ errorMessage: error.message })
        console.error('Not be reponse Import: ', error)
      });
  }
  handleChange(event) {
    console.log(event)
    this.setState({file: event.target.files[0]});
  }
  handleSubmit(event) {
    event.preventDefault();
    this.postImport();
  }
  render() {
    return (
      <>
        <CardPanel>
          <form onSubmit={this.handleSubmit}>
            <Row>
              <Col m={12}>
                <input
                  id="TextInput-26"
                  label="File"
                  type="file"
                  onChange={this.handleChange}
                />
              </Col>
              <Col m={12}>
                <div className="input-field col s6">
                  <Button
                    node="button"
                    type="submit"
                    waves="light"
                  >
                    Enviar
                    <Icon right>
                      send
                    </Icon>
                  </Button>
                </div>
              </Col>
            </Row>
          </form>
        </CardPanel>
      </>
    );
  }
}

export default ImportForm;