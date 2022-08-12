import React from "react";
import {
    Col
} from 'reactstrap';
// import { Card, CardBody, CardHeader, Table } from 'reactstrap';

export default class TableProfile extends React.Component {

        render() {
            return ( 
            <div>             

                {this.props.listProfile.length ?
                    this.props.listProfile.map(data => ( 
                    <Col md = "6" >
                        <div className = "kartu" id = "main-card" >
                        <div className = "cover-photo" > </div> 
                        <div className = "content" >
                        <h2 className = "name" id = "valuenama" > {data.name} </h2> 
                        <h3 className = "fullstack" id = "valuepekerjaan"> {data.profession} </h3> 
                        <h3 className = "fullstack" id = "valueperusahaan"> {data.company} </h3>
                        </div> 
                        <div className = "contact" ></div>
                        </div> 
                        </Col>                                        
                    )) :
                        ( < tr >
                            <td > - </td>
                            <td > - </td>
                            <td > - </td>
                        </tr>)
                        }                            
                        </div>
                );
            }
        }