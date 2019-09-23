import React,  {Component} from "react"
import Titles from "./Titles"
import "./App.css"
import ProductSelect from "./ProductSelect"

import counties from "./counties"
import prefixes from "./phone_prefixes"
import EmailPref from "./EmailPref"
import securityQuestions from "./securityquestions"







class Form extends Component {

    constructor(props) {
        super(props);
        this.handleProgramme = this.handleProgramme.bind(this)
        this.handleMyClickPref = this.handleMyClickPref.bind(this)
        this.handleUserInput = this.handleUserInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            programme : "Please Select",
            classes : "Please Select",
            title: "",
            fname: "",
            mname: "",
            lname: "",
            address1: "",
            address2: "",
            address3: "",
            county: "Please select County/Region",
            eircode: "",
            phoneprefix: "",
            phonenumber: "",
            gender: "",
            dob: "",
            password1: "",
            password2: "",
            securityquestion1: "Please Select",
            answer1: "",
            securityquestion2: "Please Select",
            answer2: "",
            email: "",
            myclick: "",
            myclickpreference: false,
            readprivacypolicy: false,       
            titleError: "",
            fnameError: "",
            lnameError: "",
            address1Error: "",
            phonenumberError: "",
            countyError: "",
            emailError: "",
            password1Error: "",
            password2Error: "",
            securityquestion1Error: "",
            answer1Error: "",
            securityquestion2Error: "",
            answer2Error: "",
            readprivacypolicyError: ""
            
        }
    }

handleUserInput = (event) => {
  event.preventDefault();
 
  const { name, value } = event.target;
  
 
  this.setState({ [name]: value })

  
}








handleSubmit = (event) => {

  event.preventDefault();

  
  


console.log(this.state)
}


    handleProgramme = event => {
      const value = event.target.value;
      this.setState ({ classes : "Please Select"})
      this.setState({[event.target.name]: value})
    }

    populateCounties = options => {

       options = counties

      return options.map((option, index) => (
        <option key={index} value={option}>{option}</option>
  ));
    }

    populatePhone = options => {

      options = prefixes
      return options.map((option, index) => 
        (
        <option key={index} value={option}>{option}</option>
        ));
    }

      populateSecurity = options => {

      options = securityQuestions
      return options.map((option, index) => 
      (
        <option key={index} value={option}>{option}</option>
      ));
    }


handleMyClickPref = () => {
   
   (!this.state.myclickpreference) ? 
     this.setState({
       myclickpreference: true,
       email: ""})
   :
     this.setState({
      myclickpreference: false,
      myclick: ""})
   }


handlePrivacyCheck = () => {
   
   (!this.state.readprivacypolicy) ? 
     this.setState({readprivacypolicy: true,}) : this.setState({readprivacypolicy: false,})}



render(){


     
        return(         
<form className="container col-md-8" noValidate>

<Titles />

<div className="card">
  <div className="card-body">
    <ProductSelect 
      onChange={this.handleProgramme} 
      selected= {this.state.programme} 
      classes={this.state.classes}/>
  </div>
</div>

<div className="card inner-form ">

<div className="form-row mt-md-5">
  <div className="form-group col-md-4 offset-md-1">
    <label htmlFor="title">Title</label>
      <select 
        className="form-control " 
        name="title" 
        id="title" 
        onChange={this.handleUserInput}
        >
        <option key="default" value=""></option>
        <option key="Mr." value="Mr.">Mr.</option>
        <option key="Ms." value="Ms.">Ms.</option>
        <option key="Mrs." value="Mrs.">Mrs.</option>
        <option key="Miss" value="Miss">Miss</option>
        <option key="Dr." value="Dr.">Dr.</option>
        <option key="Sr." value="Sr.">Sr.</option>
        <option key="Br." value="Br.">Br.</option>
        <option key="Fr." value="Fr.">Fr.</option>
      </select>
     
  </div>



    <div className="form-group col-md-6">
      <label htmlFor="fname">First Name</label>
        <input 
        type="text" 
        className="form-control" 
        id="fname" 
        name="fname" 
        onChange={this.handleUserInput}
        />
       <span className="errortext">{this.state.fnameError}</span>
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
        onChange={this.handleUserInput}/>
    </div>

  <div className="form-group col-md-6">
    <label htmlFor="lname">Last Name</label>
    <input 
    type="text" 
    className="form-control" 
    id="lname" 
    name="lname"
    onChange={this.handleUserInput}/>
     
  </div>

  </div>

<div className="form-row">
 <div className="form-group col-md-10 offset-md-1">
    <label htmlFor="inputAddress1">Address</label>

    <input type="text" className="form-control mb-md-2 mb-sm-2" id="address1" name="address1" onChange={this.handleUserInput} placeholder="Address Line 1"/>
  
    <input type="text" className="form-control mb-md-2 mb-sm-2" id="address2" name="address2" onChange={this.handleUserInput} placeholder="Address Line 2"/>
  
    <input type="text" className="form-control mb-md-2 mb-sm-2" id="address3" name="address3" onChange={this.handleUserInput} placeholder="Address Line 3"/>
    
</div>
</div>

<div className="form-row">


      <div className="form-group col-md-4 offset-md-1">
      <label htmlFor="">County</label>
       <select 
       className="form-control" 
       name="county" 
       id="county" 
       onChange={this.handleUserInput} 
       >
       <option key="default" value="">Please select County/Region</option>
        {this.populateCounties()}
       </select>
       
    </div>

  <div className="form-group col-md-4">
    <label htmlFor="eircode">Eircode</label>
    <input type="text" className="form-control" id="eircode" name="eircode" onChange={this.handleUserInput}/>
  </div>

</div>



<div className="form-row">


      <div className="form-group col-md-4 offset-md-1">
      <label htmlFor="phoneprefix">Area Code/Prefix</label>
       <select className="form-control" name="phoneprefix" id="phoneprefix" onChange={this.handleUserInput} >
        {this.populatePhone()}
       </select>
    </div>

  <div className="form-group col-md-4">
    <label htmlFor="phonenumber">Phone Number</label>
    <input type="text" className="form-control" id="phonenumber" name="phonenumber" maxLength="7" onChange={this.handleUserInput}/>
    
  </div>

</div>


<div className="form-row">


      <div className="form-group col-md-4 offset-md-1">
      <label htmlFor="gender">Gender</label>
       <select className="form-control" name="gender" id="gender" onChange={this.handleUserInput}>
        <option key="Other" value="other">Other/Prefer not to say</option>
        <option key="Male" value="male">Male</option>
        <option key="Female" value="female">Female</option>
       </select>
    </div>

  <div className="form-group col-md-4">
    <label htmlFor="dob">Date of Birth (optional)</label>
    <input type="date" className="form-control" id="dob" name="dob"onChange={this.handleUserInput}/>
  </div>

</div>


<div className ="form-group">
  <EmailPref myclickpreferred = {this.state.myclickpreference} onChange={this.handleUserInput} emailvalue={this.state.email} myclickvalue={this.state.myclick}/>


</div>
    <div className="card noborder col-md-8 offset-md-1">
    <div className="card-body form-check" style={{margin: "auto"}}>
      <input className="form-check-input" type="checkbox" onClick={this.handleMyClickPref} id="myclickcheck"/>
      <label className="form-check-label" htmlFor="myclickcheck">
        I'd prefer to use my new free email address from myclick.ie
      </label>
    </div>
    </div>

  <div className="form-row">
  <div className="form-group col-md-8 offset-md-1">
      <label htmlFor="password1">Password</label>
      <input type="password" className="form-control mb-md-2 mb-sm-2" id="password1" name="password1" placeholder="Password" maxLength="10" onChange={this.handleUserInput}/>
      <input type="password" className="form-control mb-md-2 mb-sm-2" id="password2" name="password2" placeholder="Confirm Password" maxLength="10" onChange={this.handleUserInput}/>
    </div>


</div>

 
  <div className = "form-row">
   <div className="form-group col-md-5 offset-md-1">
      <label htmlFor="securityquestion1">Security Question 1</label>
       <select className="form-control" name="securityquestion1" id="securityquestion1" onChange={this.handleUserInput}>
           {this.populateSecurity()}
       </select>
    </div>

   <div className="form-group col-md-5">
      <label htmlFor="answer1">Answer</label>
      <input type="text" className="form-control" id="answer1" name="answer1" onChange={this.handleUserInput}/>
    </div>
</div>

 <div className = "form-row">
   <div className="form-group col-md-5 offset-md-1">
      <label htmlFor="securityquestion2">Security Question 2</label>
       <select className="form-control" name="securityquestion2" id="securityquestion2" onChange={this.handleUserInput}>
          {this.populateSecurity()}
       </select>
    </div>

    

   <div className="form-group col-md-5 ">
      <label htmlFor="answer2">Answer</label>
      <input type="text" className="form-control" id="answer2" name="answer2" onChange={this.handleUserInput}/>
    </div>
</div>


<div className="card noborder col-md-8 offset-md-1">
    <div className="card-body form-check" style={{margin: "auto"}}>
      <input className="form-check-input" type="checkbox" onClick={this.handlePrivacyCheck} id="privacycheck" name="privacycheck"/>
      <label className="form-check-label" htmlFor="privacycheck">
        Please confirm you have read and accepted our Privacy Policy. You can view it <a href="https://www.ics.ie/ics/privacy/raw">here</a>
      </label>
    </div>
    </div>



<div className="text-center">
<input type="submit" className="btn btn-primary mt-md-5 mb-md-5 mb-sm-4 mt-sm-5" value="Submit" onClick={this.handleSubmit}/>
</div>


</div> {/*INNERCARD */}
</form>


        )
    }
}

export default Form;