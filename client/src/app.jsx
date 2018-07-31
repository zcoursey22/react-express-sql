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
    this.getRandomPark();
  }

  getRandomPark() {
    $.get('/parks', {parkCode: 'ever'}, (data) => {
      this.setState({
        currentPark: JSON.parse(data).data[0]
      }, () => console.log(this.state.currentPark))
    });
  }

  selectPark() {
    console.log('you selected a new park');
  }

  render() {
    if (this.state.currentPark) {
      return <p>{this.state.currentPark.fullName}</p>
    } else {
      return <p></p>
    }
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
