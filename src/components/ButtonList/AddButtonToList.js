import React from "react";
import "../../App.css";

class AddButtonToList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttons: ["AND", "OR", ".com"]
    };
    this.handleAddButton = this.handleAddButton.bind(this);
  }

  handleAddButton(button) {
    console.log(this.state.buttons);

    this.setState(prevState => ({
      buttons: prevState.buttons.concat(button)
    }));
  }

  render() {
    return (
      <div>
        <div className="collapse" id="collapse">
          <div className="card card-body">
            <ListOfButtons buttonsText={this.state.buttons} />
            <button type="button" className="" data-toggle="modal" data-target="#exampleModal">
              <i
                class="fa fa-plus-circle circle-add text-primany visible"
                aria-hidden="true"
              />
            </button>

            <AddBtnField handleAddButton={this.handleAddButton} />
          </div>
        </div>
      </div>
    );
  }
}

class AddBtnField extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const button = e.target.elements.button.value.trim();

    this.props.handleAddButton(button);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="button" />
          <button className="btn btn-warning">Add Button</button>
        </form>
      </div>
    );
  }
}

const ListOfButtons = props => {
  return (
    <div className="buttonSpace btn-toolbar">
      {props.buttonsText.map(button => (
        <Button key={button} buttonsText={button} />
      ))}
    </div>
  );
};

const Button = props => {
  return (
    <button className="btn btn-outline-primary btn-sm mr-1">
      {props.buttonsText}
    </button>
  );
};

export default AddButtonToList;
