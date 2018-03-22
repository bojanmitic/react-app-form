import React from 'react';
import './Form.css';

class Form extends React.Component{
    static defaultProps = {
        onSave(){}
    }
    constructor(props){
        super(props);
        this.state = {
                        name: '',
                        email: '',
                        phone: '',    
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    };
    handleSubmit(e){
        e.preventDefault();
        this.props.onSave({...this.state});
        this.setState({
                        name:'',
                        email: '',
                        phone: '',
        });
    };
    render(){
        const {name, email, phone} = this.state;
        return(
            <div className='form'>
                <form onSubmit = {this.handleSubmit}>
                    <input 
                        className="input"
                        type = 'text'
                        name = 'name'
                        value = {name}
                        placeholder = 'Full name'
                        onChange = {this.handleChange}
                        required
                    />
                    <input 
                        className="input"
                        type = 'email'
                        name = 'email'
                        value = {email}
                        placeholder = 'E-mail address'
                        onChange = {this.handleChange}
                        required
                    />
                    <input 
                        className="input"
                        type = 'number'
                        name = 'phone'
                        value = {phone}
                        placeholder = 'Phone number'
                        onChange = {this.handleChange}
                        required
                    />
                    
                    <button type='submit' className='submitButton'>Add new</button>
                </form>
            </div>
        )
    }
}

export default Form;