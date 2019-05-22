import React from 'react';
import './App.css';

class App extends React.Component {
  state = { active: ''}

  onButtonClick(buttonName) {
    this.setState({ active: buttonName})
  }

  render() {
      let buttons = [{name: 'Button 1'}, {name: 'Button 2'}, {name: 'Button 3'}, {name: 'Button 4'}, {name: 'Button 5'}]
      return (
        <div>
          <h1>Button Selector Avenda!</h1>
          {buttons.map(button => {
            return (
              <Button
                type="button"
                className={this.state.active === button.name ? 'button.active' : 'button'}
                value={button.name}
                clicked={() => this.onButtonClick(button.name)}
                key={button.name}
                name={button.name}/>
            )
          })}
        </div>
      )

  }
}

// class ButtonGroup extends React.Component {

//   render() {

//       return (
//       )

//   }
// }

class Button extends React.Component {

  render() {

      return (
        <button type="button" className={this.props.className} onClick={this.props.clicked} value={this.props.value}>{this.props.name}</button>
      )
      
  }
}

export default App;
