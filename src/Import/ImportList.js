import { Component } from "react";
import { Table } from 'react-materialize';
import axios from 'axios';

class ImportList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imports: [],
      errorMessage: ""
    };
    this.getAllImports = this.getAllImports.bind (this);

  }
  componentWillUnmount() {
    this.getAllImports();
  }

  componentDidMount(){
    this.getAllImports();
  }
  getAllImports(){
    axios.get('http://localhost:3000/imports')
      .then((response) => {
        console.log(response)
        this.setState({ imports: response.data })
      })
      .catch((error) => {
        this.setState({ errorMessage: error.message })
        console.error('Not be reponse Import: ', error)
      })
  }

  tableImports(){
    return (
      <Table>
        <thead>
          <tr>
            <th data-field="Id">
              Id
            </th>
            <th data-field="status">
              Status
            </th>
            <th data-field="status">
              Linha Corrente 
            </th>
            <th data-field="status">
              Total de Linhas
            </th>
          </tr>
        </thead>
        <tbody>
          {this.state.imports.map((item) => 
            <tr key={item.id}>
              <td >
                {item.id}
              </td>
              <td>
                {item.status}
              </td>
              <td>
                {item.current_row}
              </td>
              <td>
                {item.total_row}
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    )
  }
  render() {
    return (
       this.state.imports == null ? "Sem Importação" : this.tableImports()
    );
  }
}

export default ImportList;