import React, { Component } from 'react';
import './App.css';
import Table from './Table';
import Form from './Form';
import uuid from 'uuid';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      participants: [
      {name: 'Mike Smith',
      email: 'mike@gmail.com',
      phone: 993545568,
      id: 0 },{
        name:'Joe Doe',
        email:'joe@gmail.com',
        phone:34567812323,
        id:1
      },{
        name:'Chris Adams',
        email:'chris@gmail.com',
        phone:5555678009,
        id:2
      },{
        name:'Mila Abbraham',
        email:'miabrrah@gmail.com',
        phone:3325565678009,
        id:3
      },{
        name:'Jill Johnson',
        email:'jiljo@gmail.com',
        phone:544435678009,
        id:4
      },{
        name:'Brian Thompson',
        email:'brthomp@gmail.com',
        phone:34564325429,
        id:5
      },{
        name:'Chlarice Tirmm',
        email:'chr@gmailcom',
        phone:4556678009,
        id:6
      },{
        name:'John Johnson',
        email:'jjson@gmail.com',
        phone:3456432478009,
        id:7
      },{
        name:'Abby Johnson',
        email:'abby@yahoo.com',
        phone:3453213678009,
        id:8
      },{
        name:'Sam Smith',
        email:'smirre@yahoo.com',
        phone:34432478009,
        id:9
      },{
        name:'Barak Obama',
        email:'barrkao@gmail.com',
        phone:345346678009,
        id:10
      },{
        name:'Hydym Mustafa',
        email:'heuwir@gmail.com',
        phone:345675348009,
        id:11
      },{
        name:'Bosko Boskovic',
        email:'bboko@gmail.com',
        phone:3456784324009,
        id:12
      },{
        name:'Stephen Huit',
        email:'srtrr@gmail.com',
        phone:345678009,
        id:13
      },{
        name:'No Name',
        email:'nn@yahoo.com',
        phone:3456784324009,
        id:14
      },{
        name:'Richie Hawtin',
        email:'ric@gmailcom',
        phone:3456784532009,
        id:15
      },{
        name:'Marco Carola',
        email:'mare2yahoo.com',
        phone:345678009,
        id:16
      },{
        name:'Simon State',
        email:'simke@yahoo.com',
        phone:345325678009,
        id:17
      },{
        name:'Brian Smith',
        email:'bres@yahoo.com',
        phone:345678434009,
        id:18
      },{
        name:'Jessica Thompson',
        email:'jess@yahoo.com',
        phone:34567843242009,
        id:19
      }]
      
    };
    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleSave(participant){
    const newParticipant = {...participant, id: uuid()}
      this.setState((prevState)=>({participants:[...this.state.participants, newParticipant]}));
  }
  handleDelete(participantToRemove){
    this.setState((prevState)=>({
      participants: prevState.participants.filter((participant)=> participantToRemove !== participant.id )
    }))
  }
  render() {
    return (
      <div className="app">
        <div className='content'>
          <h1>List of participants</h1>
          <Form onSave={this.handleSave}/>
          <Table 
                participants={this.state.participants} 
                onDelete = {this.handleDelete}
          />
        </div>  
      </div>
    );
  }
}

export default App;
