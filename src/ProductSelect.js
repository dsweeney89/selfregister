import React, { Component } from "react";
import "./App.css";
import productData from "./products";

class ProductSelect extends Component {
  getOptions() {
    let productList = [];
    let i;
    let products = productData.products;
    let length = products.length;
    let productEntries = [];

    for (i = 0; i < length; i++) {
      productEntries.push(products[i].Name);
    }

    const removeDuplicates = productEntries => {
      let unique_array = [];

      for (let i = 0; i < productEntries.length; i++) {
        if (unique_array.indexOf(productEntries[i]) === -1) {
          unique_array.push(productEntries[i]);
        }
      }
      return unique_array;
    };

    const uniqueNames = removeDuplicates(productEntries);

    productList.push(
      <option key="Please Select" value="">
        Please Select
      </option>
    );

    for (i = 0; i < uniqueNames.length; i++) {
      productList.push(
        <option key={uniqueNames[i]} value={uniqueNames[i]}>
          {uniqueNames[i]}
        </option>
      );
    }
    return productList;
  }

  getClasses(chosen) {
    if (this.props.selected === "") {
      return;
    }

    const search = (key, inputArray) => {
      for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].Name === key) {
          return inputArray[i].classes;
        }
      }
    };

    let products = productData.products;
    let resultObject = [];
    let i;
    let classes = [];
    classes.push(
      <option key="def" value="">
        Please Select
      </option>
    );

    resultObject = search(chosen, products);

    for (i = 0; i < resultObject.length; i++) {
      classes.push(
        <option
          key={resultObject[i].className}
          value={resultObject[i].className}
        >
          {resultObject[i].className}
        </option>
      );
    }

    return classes;
  }

  render() {
    let classes = this.getClasses(this.props.selected);

    if (this.props.selected !== "" && classes.length >= 2) {
      return (
        <div className="form-row">
          <div className="form-group col-md-5 offset-md-1">
            <label htmlFor="programme-select">ICS SKILLS Programme</label>
            <select
              id="programme-select"
              name="programme"
              className="form-control"
              onChange={this.props.onChange}
              value={this.props.selected}
              required
            >
              {this.getOptions()}
            </select>
          </div>

          <div className="form-group col-md-5">
            <label htmlFor="programme-classes">Classes</label>
            <select
              id="classes-select"
              name="classes"
              type="text"
              onChange={this.props.onChange}
              className="form-control"
              required
            >
              {this.getClasses(this.props.selected)}
            </select>
          </div>
        </div>
      );
    } else {
      return (
        <div className="form-row">
          <div className="form-group col-md-5 offset-md-1">
            <label htmlFor="programme-select">ICS SKILLS Programme</label>
            <select
              id="programme-select"
              name="programme"
              className="form-control"
              onChange={this.props.onChange}
              value={this.props.selected}
              required
            >
              {this.getOptions()}
            </select>
          </div>
        </div>
      );
    }
  }
}

export default ProductSelect;
