import React from 'react';
import TableRow from './TableRow';
import './Table.css';
const  Table = (props) => (
    <div>
        <table className="wrapperTable">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>E-mail address</th> 
                    <th colSpan="2">Phone number</th>
                </tr>
            </thead>
            <tbody> 
                { props.participants.map((participant)=>(
                <TableRow key={participant.id} {...participant} onDelete={props.onDelete}/>
                 ))} 
            
            </tbody>
        </table>
    </div>
);

export default Table;