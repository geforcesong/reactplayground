import { Component } from 'react';
import Ninjas from './Ninjas';
import NinjasFunCompomet from './NinjasFunCompomet';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas: [
      { id: 1, name: 'Geroge', age: 39, belt: 'black' },
      { id: 2, name: 'Jenny', age: 41, belt: 'blue' },
      { id: 3, name: 'Andy', age: 59, belt: 'pink' }
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random();
    console.log(`randomid: ${ninja.id}`);
    this.setState({
      ninjas: [...this.state.ninjas, ninja]
    })
  }

  delteNinja = (id) => {
    this.setState({
      ninjas: this.state.ninjas.filter(c => c.id != id)
    })
  }

  componentDidMount = () => {
    console.log('mounted!!!!');
  }

  componentDidUpdate = (prevProps, prevState) => {
    console.log('updated!!!!');
    console.log(prevProps);
    console.log(prevState);
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <Ninjas delteNinja={this.delteNinja} ninjas={this.state.ninjas} />
        <NinjasFunCompomet ninjas={this.state.ninjas} />
        
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
