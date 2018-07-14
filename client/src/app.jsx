import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPark: null
    };
    this.selectPark = this.selectPark.bind(this);
  }

  componentDidMount() {
    this.setState({
      currentPark: this.getRandomPark()
    });
  }

  getRandomPark() {
    $.get('/park', {parkCode: 'yose'}, (data) => {
      console.log(data);
    });
  }

  selectPark() {
    console.log('you selected a new park');
  }

  render() {
    return <p>Hello NPS App</p>
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
