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
        <button
          type="button"
          className="btn btn-primary invisible"
          data-toggle="modal"
          data-target="#exampleModal"
          data-whatever="@getbootstrap"
        >
          <i class="fa fa-plus-circle circle-add visible" aria-hidden="true" />
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add Button
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Name:
                    </label>
                    <input
                      name="button"
                      type="text"
                      className="form-control"
                      id="recipient-name"
                    />
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Cancel
                      </button>

                      <button className="btn btn-warning">Add Button</button>
                    </div>
                  </div>
                </form>
              </div>
              {/* <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="button" name="button" className="btn btn-primary">
                  Add
                </button>
              </div> */}
            </div>
          </div>
        </div>
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
