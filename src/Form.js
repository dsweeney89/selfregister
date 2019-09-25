import React, { Component } from "react";
import Titles from "./Titles";
import "./App.css";
import ProductSelect from "./ProductSelect";

import counties from "./counties";
import prefixes from "./phone_prefixes";
import EmailPref from "./EmailPref";
import securityQuestions from "./securityquestions";

const emailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const formValid = formErrors => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length === "" && (valid = false);
  });

  return valid;
};

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleProgramme = this.handleProgramme.bind(this);
    this.handleMyClickPref = this.handleMyClickPref.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      programme: "",
      classes: "",
      title: "",
      fname: "",
      mname: "",
      lname: "",
      address1: "",
      address2: "",
      address3: "",
      county: "",
      eircode: "",
      phoneprefix: "",
      phonenumber: "",
      gender: "",
      dob: "",
      password1: "",
      password2: "",
      securityquestion1: "",
      answer1: "",
      securityquestion2: "",
      answer2: "",
      email: "",
      myclick: "",
      myclickpreference: "",
      readprivacypolicy: "",
      privacyerror: "",
      formisvalid: false,
      formErrors: {
        title: "",
        fname: "",
        lname: "",
        address1: "",
        phonenumber: "",
        county: "",
        email: "",
        password1: "",
        password2: "",
        securityquestion1: "",
        answer1: "",
        securityquestion2: "",
        answer2: "",
      },
    };
  }

  handleUserInput = event => {
    event.preventDefault();
    
    const { name, value } = event.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case "title":
        formErrors.title = value.length === 0 ? "Please select your Title" : "";
        break;

      case "fname":
        formErrors.fname =
          value.length < 3 && value.length > 0
            ? "Please enter your First Name"
            : "";
        break;

      case "lname":
        formErrors.lname =
          value.length < 3 && value.length > 0
            ? "Please enter your Last Name"
            : "";
        break;

      case "address1":
        formErrors.address1 =
          value.length < 6 && value.length > 0
            ? "Please enter your Address"
            : "";
        break;

      case "phonenumber":
        formErrors.phonenumber =
          value.length < 5 || value.length > 7
            ? "Please provide a contact number between 5 and 7 digits"
            : "";
        break;

      case "county":
        formErrors.county =
          value === "" ? "Please select a County or Region" : "";
        break;

      case "email":
        formErrors.email =
          emailRegex.test(value) && value.length > 0
            ? ""
            : "Email is not valid";
        break;

      case "password1":
        formErrors.password1 =
          value.length < 8 || value.length > 10
            ? "Password must be between 8 and 10 charactors"
            : "";

        break;
      case "password2":
        formErrors.password2 =
          value !== this.state.password1
            ? "Passwords do not match, please try again"
            : "";
        break;

      case "securityquestion1":
        formErrors.securityquestion1 =
          value === "" ? "Please select a Security Question" : "";
        break;

      case "securityquestion2":
        formErrors.securityquestion2 =
          value == this.state.securityquestion1
            ? "Security Questions cannot be the same"
            : "";
        break;

      case "answer1":
        formErrors.answer1 =
          value.length < 3
            ? "Please provide an answer to this security question"
            : "";
        break;

      case "answer2":
        formErrors.answer2 =
          value.length < 3 || value == this.state.answer1
            ? "Please provide an answer to this security question, answers cannot be the same"
            : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (formValid(this.state)) {
      console.log(`
  --SUBMITTING--
  Title: ${this.state.title}
  First Name: ${this.state.fname}
  Middle Name: ${this.state.mname}
  Last Name: ${this.state.lname}
  Address1: ${this.state.address1}
  Address2: ${this.state.address2}
  Address3: ${this.state.address3}
  County: ${this.state.county}
  Eircode: ${this.state.eircode}
  Gender: ${this.state.gender}
  DOB: ${this.state.dob}
  Prefix: ${this.state.phoneprefix}
  Phone: ${this.state.phonenumber}
  Email: ${this.state.email}
  MyClick: ${this.state.myclick}
  MyClick Preferred: ${this.state.myclickpreference}
  Privacy Policy Accepted: ${this.state.readprivacypolicy}
  Password1: ${this.state.password1}
  Password2: ${this.state.password2}
  Security Question 1: ${this.state.securityquestion1}
  Answer 1: ${this.state.answer1}
  Security Question 2: ${this.state.securityquestion2}
  Answer 2: ${this.state.answer2}        
  `);
      this.setState({
        formisvalid: !this.state.formisvalid,
      });
      
    } else {
      console.log("FORM INVALID");
     
    }
  };

  handleProgramme = event => {
    const value = event.target.value;
    this.setState({ classes: "Please Select" });
    this.setState({ [event.target.name]: value });
  };

  populateCounties = options => {
    options = counties;

    return options.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ));
  };

  populatePhone = options => {
    options = prefixes;
    return options.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ));
  };

  populateSecurity = options => {
    options = securityQuestions;
    return options.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ));
  };

  handleMyClickPref = () => {
    !this.state.myclickpreference
      ? this.setState({
          myclickpreference: true,
          email: "",
        })
      : this.setState({
          myclickpreference: false,
          myclick: "",
        });
  };

  handlePrivacyCheck = () => {
    !this.state.readprivacypolicy
      ? this.setState({ readprivacypolicy: true, privacyerror: "" })
      : this.setState({
          readprivacypolicy: false,
          privacyerror: "Please read the privacy policy",
        });
  };

  render() {
    const { formErrors } = this.state;

    if (!this.state.formisvalid) {
      return (
        <form
          className="container col-md-8 "
          onSubmit={this.handleSubmit}
          id="form"
        >
          <Titles />
          <div className="card">
            <div className="card-body">
              <ProductSelect
                onChange={this.handleProgramme}
                selected={this.state.programme}
                classes={this.state.classes}
              />
            </div>
          </div>
          <div className="card inner-form ">
            <div className="form-row mt-md-5">
              <div className="form-group col-md-4 offset-md-1">
                <label htmlFor="title">Title</label>
                <select
                  className={
                    formErrors.title.length > 0
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  name="title"
                  id="title"
                  onChange={this.handleUserInput}
                  required
                >
                  <option key="default" value=""></option>
                  <option key="Mr." value="Mr.">
                    Mr.
                  </option>
                  <option key="Ms." value="Ms.">
                    Ms.
                  </option>
                  <option key="Mrs." value="Mrs.">
                    Mrs.
                  </option>
                  <option key="Miss" value="Miss">
                    Miss
                  </option>
                  <option key="Dr." value="Dr.">
                    Dr.
                  </option>
                  <option key="Sr." value="Sr.">
                    Sr.
                  </option>
                  <option key="Br." value="Br.">
                    Br.
                  </option>
                  <option key="Fr." value="Fr.">
                    Fr.
                  </option>
                </select>
                {formErrors.title.length > 0 && (
                  <span className="error">{formErrors.title}</span>
                )}
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="fname">First Name</label>
                <input
                  type="text"
                  className={
                    formErrors.fname.length > 0
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  id="fname"
                  name="fname"
                  onChange={this.handleUserInput}
                  required
                />
                {formErrors.fname.length > 0 && (
                  <span className="error">{formErrors.fname}</span>
                )}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-4 offset-md-1">
                <label htmlFor="mname">Middle Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="mname"
                  name="mname"
                  onChange={this.handleUserInput}
                />
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="lname">Last Name</label>
                <input
                  type="text"
                  className={
                    formErrors.lname.length > 0
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  id="lname"
                  name="lname"
                  onChange={this.handleUserInput}
                  required
                />

                {formErrors.lname.length > 0 && (
                  <span className="error">{formErrors.lname}</span>
                )}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-10 offset-md-1">
                <label htmlFor="inputAddress1">Address</label>

                <input
                  type="text"
                  className={
                    formErrors.address1.length > 0
                      ? "form-control is-invalid"
                      : "form-control mb-md-2 mb-sm-2"
                  }
                  id="address1"
                  name="address1"
                  onChange={this.handleUserInput}
                  placeholder="Address Line 1"
                  required
                />

                <input
                  type="text"
                  className="form-control mb-md-2 mb-sm-2"
                  id="address2"
                  name="address2"
                  onChange={this.handleUserInput}
                  placeholder="Address Line 2"
                />

                <input
                  type="text"
                  className="form-control mb-md-2 mb-sm-2"
                  id="address3"
                  name="address3"
                  onChange={this.handleUserInput}
                  placeholder="Address Line 3"
                />
                {formErrors.address1.length > 0 && (
                  <span className="error">{formErrors.address1}</span>
                )}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-4 offset-md-1">
                <label htmlFor="">County</label>
                <select
                  className={
                    formErrors.county.length > 0
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  name="county"
                  id="county"
                  onChange={this.handleUserInput}
                  required
                >
                  <option key="default" value="">
                    Please select County/Region
                  </option>
                  {this.populateCounties()}
                </select>
                {formErrors.county.length > 0 && (
                  <span className="error">{formErrors.county}</span>
                )}
              </div>

              <div className="form-group col-md-4">
                <label htmlFor="eircode">Eircode</label>
                <input
                  type="text"
                  className="form-control"
                  id="eircode"
                  name="eircode"
                  onChange={this.handleUserInput}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-4 offset-md-1">
                <label htmlFor="phoneprefix">Area Code/Prefix</label>
                <select
                  className="form-control"
                  name="phoneprefix"
                  id="phoneprefix"
                  onChange={this.handleUserInput}
                >
                  {this.populatePhone()}
                </select>
              </div>

              <div className="form-group col-md-4">
                <label htmlFor="phonenumber">Phone Number</label>
                <input
                  type="text"
                  className={
                    formErrors.phonenumber.length > 0
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  id="phonenumber"
                  name="phonenumber"
                  
                  onChange={this.handleUserInput}
                  required
                />
                {formErrors.phonenumber.length > 0 && (
                  <span className="error">{formErrors.phonenumber}</span>
                )}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-4 offset-md-1">
                <label htmlFor="gender">Gender</label>
                <select
                  className="form-control"
                  name="gender"
                  id="gender"
                  onChange={this.handleUserInput}
                >
                  <option key="Other" value="other">
                    Other/Prefer not to say
                  </option>
                  <option key="Male" value="male">
                    Male
                  </option>
                  <option key="Female" value="female">
                    Female
                  </option>
                </select>
              </div>

              <div className="form-group col-md-4">
                <label htmlFor="dob">Date of Birth (optional)</label>
                <input
                  type="date"
                  className="form-control"
                  id="dob"
                  name="dob"
                  onChange={this.handleUserInput}
                />
              </div>
            </div>

            <div className="form-group">
              <EmailPref
                myclickpreferred={this.state.myclickpreference}
                onChange={this.handleUserInput}
                emailvalue={this.state.email}
                myclickvalue={this.state.myclick}
                errormsg={this.state.formErrors.email}
              />
            
            </div>
            <div className="card noborder col-md-8 offset-md-1">
              <div className="card-body form-check" style={{ margin: "auto" }}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  onClick={this.handleMyClickPref}
                  id="myclickcheck"
                />
                <label className="form-check-label" htmlFor="myclickcheck">
                  I'd prefer to use my new free email address from myclick.ie
                </label>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-8 offset-md-1">
                <label htmlFor="password1">Password</label>
                <input
                  type="password"
                  className={
                    formErrors.password1.length > 0
                      ? "form-control is-invalid"
                      : "form-control mb-md-2 mb-sm-2"
                  }
                  id="password1"
                  name="password1"
                  placeholder="Password"
                  onChange={this.handleUserInput}
                  required
                />
                {formErrors.password1.length > 0 && (
                  <span className="error">{formErrors.password1}</span>
                )}
                <input
                  type="password"
                  className={
                    formErrors.password2.length > 0
                      ? "form-control is-invalid"
                      : "form-control mb-md-2 mb-sm-2"
                  }
                  id="password2"
                  name="password2"
                  placeholder="Confirm Password"
                  onChange={this.handleUserInput}
                  required
                />
                {formErrors.password2.length > 0 && (
                  <span className="error">{formErrors.password2}</span>
                )}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-5 offset-md-1">
                <label htmlFor="securityquestion1">Security Question 1</label>
                <select
                  className={
                    formErrors.securityquestion1.length > 0
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  name="securityquestion1"
                  id="securityquestion1"
                  onChange={this.handleUserInput}
                  required
                >
                  <option key="default" value="">
                    Please Select
                  </option>
                  {this.populateSecurity()}
                </select>
                {formErrors.securityquestion1.length > 0 && (
                  <span className="error">{formErrors.securityquestion1}</span>
                )}
              </div>

              <div className="form-group col-md-5">
                <label htmlFor="answer1">Answer</label>
                <input
                  type="text"
                  className={
                    formErrors.answer1.length > 0
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  id="answer1"
                  name="answer1"
                  onChange={this.handleUserInput}
                  required
                />
                {formErrors.answer1.length > 0 && (
                  <span className="error">{formErrors.answer1}</span>
                )}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-5 offset-md-1">
                <label htmlFor="securityquestion2">Security Question 2</label>
                <select
                  className={
                    formErrors.securityquestion2.length > 0
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  name="securityquestion2"
                  id="securityquestion2"
                  onChange={this.handleUserInput}
                  required
                >
                  <option key="default" value="">
                    Please Select
                  </option>
                  {this.populateSecurity()}
                </select>
                {formErrors.securityquestion2.length > 0 && (
                  <span className="error">{formErrors.securityquestion2}</span>
                )}
              </div>

              <div className="form-group col-md-5 ">
                <label htmlFor="answer2">Answer</label>
                <input
                  type="text"
                  className={
                    formErrors.answer2.length > 0
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  id="answer2"
                  name="answer2"
                  onChange={this.handleUserInput}
                  required
                />
                {formErrors.answer2.length > 0 && (
                  <span className="error">{formErrors.answer2}</span>
                )}
              </div>
            </div>

            <div className="card noborder col-md-8 offset-md-1">
              <div className="card-body form-check" style={{ margin: "auto" }}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  onClick={this.handlePrivacyCheck}
                  id="privacycheck"
                  name="privacycheck"
                  required
                />
                <label className="form-check-label" htmlFor="privacycheck">
                  Please confirm you have read and accepted our Privacy Policy.
                  You can view it{" "}
                  <a href="https://www.ics.ie/ics/privacy/raw">here</a>
                </label>
                
              </div>
              <span className="error text-center">{this.state.privacyerror}</span>
            </div>

            <div className="text-center">
              <input
                type="submit"
                className="btn btn-primary mt-md-5 mb-md-5 mb-sm-4 mt-sm-5"
                value="Submit"
              />
            </div>
          </div>{" "}
          {/*INNERCARD */}
        </form>
      );
    } else {
      return (
        <form
          className="container col-md-8 "
          id="form"
          style={{ height: "100vh" }}
        >
          <Titles />
          <div
            className="card inner-form "
            style={{ height: "20vh", textAlign: "center" }}
          >
            <h6 className="success-msg">
              Thank you {this.state.fname} you are now registered to attend{" "}
              {this.state.programme} {this.state.classes}
            </h6>
          </div>{" "}
          {/*INNERCARD */}
        </form>
      );
    }
  }
}

export default Form;
