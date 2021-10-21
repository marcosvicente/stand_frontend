import { Component } from "react";
import axios from 'axios';
import moment from 'moment'
import Moment from 'react-moment';
import 'moment/locale/pt-br';


class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      track_name: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
      errorMessage: ""
    };
    this.getAllImports = this.getAllEvents.bind(this);

  }
  componentWillUnmount() {
    this.getAllEvents();
  }

  componentDidMount(){
    this.getAllEvents();
  }
  getAllEvents(){
    axios.get('http://localhost:3000/events')
      .then((response) => {
        console.log(response)
        this.setState({ events: response.data })
      })
      .catch((error) => {
        this.setState({ errorMessage: error.message })
        console.error('Not be reponse Events: ', error)
      })
  }

  render() {
    return (
      <>
      <h2>Events</h2>
      <ul>
      {this.state.events.map((event, index) => 
        <>
          <h3>Track {this.state.track_name[index]}: </h3>
          {event.map((item, item_index) => 
            <li key={item_index}>
              <Moment format='LT' locale='pt-br'>{item.hour}</Moment>

              -

              {item.name} {item.time}min
            </li>
          )}
        </>
      )}
    </ul>
    </>
    );
  }
}

export default EventList;