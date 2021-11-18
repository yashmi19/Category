import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "coconut" };

    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //   handleChange(event) {
  //     this.setState({ value: event.target.value });
  //   }

  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Category :
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="vegetable">Vegetable</option>
            <option value="fruit">Fruit</option>
            <option value="soap">Soap</option>
            <option value="biscuit">Biscuit</option>
            <option value="pharmacy">pharmacy</option>
            <option value="bakery">Bakery</option>
            <option value="seeds and spices">Seeds and Spices</option>
            <option value="meats">Meats</option>
            <option value="seafood">Seafood</option>
            <option value="beverages">Beverages</option>

          </select>
        </label>
        {/* <input type="submit" value="Submit" /> */}
      </form>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
