import { Component } from 'react';
import Ninjas from './Ninjas';
import NinjasFunCompomet from './NinjasFunCompomet';

class App extends Component {
  state = {
    ninjas: [
      { id: 1, name: 'Geroge', age: 39, belt: 'black' },
      { id: 2, name: 'Jenny', age: 41, belt: 'blue' },
      { id: 3, name: 'Andy', age: 59, belt: 'pink' }
    ]
  }
  
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <Ninjas ninjas={this.state.ninjas} />
        <NinjasFunCompomet ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
