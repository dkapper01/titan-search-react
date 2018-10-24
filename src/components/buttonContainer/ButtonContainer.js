import React, { Component } from "react";

export default class ButtonContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttons: ["AND", "OR", ".com"]
    };
    this.handleAddButton = this.handleAddButton.bind(this); 
  }

  handleAddButton(button) {
    console.log("Cat"); 
    this.setState(prevState => ({
      buttons: prevState.buttons.concat(button) 
    }))
  }

  render() {
    return (
      <div>
        <AddButton handleAddButton={this.handleAddButton} />

        <Buttons buttons={this.state.buttons} />
      </div>
    );
  }
}
class AddButton extends Component {
  constructor(props) {
    super(props); 

    this.handleSubmit = this.handleSubmit.bind(this); 
  }

  handleSubmit(e) {
    e.preventDefault();

    const button =  e.target.elements.button.value.trim();  


    const test = this.props.handleAddButton(button)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            name="button"
          />
          <button>Add Button</button>
        </form>
      </div>
    );
  }
}

class Buttons extends Component {
  render() {
    return (
      <div>
        {this.props.buttons.map(button => (
          <Button key={button} buttonText={button} />
        ))}
      </div>
    );
  }
}

const Button = props => {
  return <div>{props.buttonText}</div>;
};
