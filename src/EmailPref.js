import React,  {Component} from "react"
import "./App.css"




class EmailPref extends Component {
 constructor(props){
     super(props);

    this.state = {
        myclick : this.props.myclickpreferred
    }
 }





    render(){
        const myclickpreferred = this.props.myclickpreferred
        // console.log(myclickpreferred)
        let emailOption;

        if (myclickpreferred === false){
         emailOption =
                <div className="form-row">
                <div className="form-group col-md-8 offset-md-1">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" name="email" onChange={this.props.onChange} value={this.props.emailvalue} />
                   
                    </div>
                </div>
                
        }

        else if(myclickpreferred === true) {
           emailOption =
                <div className="form-row">
                <div className="form-group col-md-8 offset-md-1">
               
                    <label htmlFor="myclickemail">MyClick Email</label>
                   
                    <input type="email" className="form-control" id="myclickemail" name="myclick" onChange={this.props.onChange} placeholder="johndoe@myclick.ie"  value={this.props.myclickvalue}/>
                   
                   </div>
                    </div>
                
           
        }

        return (
        <div>
        {emailOption}
  </div>)


    }
}

export default EmailPref