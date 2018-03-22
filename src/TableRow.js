import React from 'react';
import './Table.css';
import FaTrash from "react-icons/lib/fa/trash";

const TableRow = (props) => (
    <tr className="tableRow">
       <td >{props.name}</td>
       <td >{props.email}</td>
       <td >{props.phone}</td>
       <td>{
           props.name &&<button className="removeButton" onClick={(e)=>{props.onDelete(props.id)}}>
           <FaTrash 
                    style={{
                        height: '24px', 
                        width:'24px',
                        color:'#909090',
                        
                    }} />
           </button>}
      </td>
    </tr>
   
);

export default TableRow; 