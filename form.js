import React from "react";
export default class Form extends React.Component {

  state = {
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password:""
    };


change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
        [e.target.name]: e.target.value
    });

};

onSubmit = e => {
    e.preventDefault();
 //   this.props.onSubmit(this.state);
    this.setState({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: ""
    });

this.props.onChange({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: ""


});
};
render()
{
    return (
        <form>
            <input name="firstname" placeholder='firstname'
                value={this.state.firstName}
                onChange={e => this.change(e)}
            />
            <br></br>
            <input name="lastname" placeholder="lastname"
                value={this.state.lastName}
                onChange={e => this.change(e)}
            /><br></br>
            <input placeholder='username'
                value={this.state.userName}
                onChange={e => this.change(e)}
            /><br></br>
            
            <input name="email" placeholder='email'
                value={this.state.email}
                onChange={e => this.change(e)}
            /><br></br>
            <input name="password" type="password" placeholder='password'
                value={this.state.password}
                onChange={e => this.change(e)}
            /><br></br>
            <button onClick={e => this.onSubmit(e)}>Submit</button>

        </form>
    );
}
}


