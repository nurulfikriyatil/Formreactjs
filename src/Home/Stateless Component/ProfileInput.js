
import React from 'react';
import {Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import Profile from './Profile';
import TableProfile from './TableProfile';

function ProfileInput (){
    

    const form = {
        name: "",
        age: "",
        adress: "",
        listProfile:[]
      };

      const [
        { name, age, adress, listProfile},
        setForm
      ] = React.useState(form);
      

    const toggle = (data) => {
       setForm({
           name:"",
           age:"",
           adress:"",
           listProfile:data
       })
      };

    const handleChange = e => {
        const { name, value } = e.target;
        setForm(prevState => ({ ...prevState, [name]: value }));
      };

    

    return (
        <div className="App" >
            <Row>
                <Col md="6">
                    <h1>Profile Input</h1>
                    <Form id="formBiodata">
                        <FormGroup>
                            <Label for="name"><b>Name</b></Label>
                            <Input type="text" name="name" id="name"
                                autoComplete='off'
                                placeholder="Name..."
                                value={name} required
                                onChange={handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="age"><b>Age</b></Label>
                            <Input type="text" name="age" id="age"
                                autoComplete='off'
                                placeholder="Age..."
                                 value={age} required
                                onChange={handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="adress"><b>Adress</b></Label>
                            <Input type="text" name="adress" id="adress"
                                autoComplete='off'
                                placeholder="Adress..."
                                 value={adress} required
                                onChange={handleChange} />
                        </FormGroup>
                    </Form>
                </Col>
                <Col md="6">
                    <Profile
                        name={name}
                        age={age}
                        adress={adress}
                        reset={(data) => {toggle(data) }}
                    />
                </Col>
            </Row>
            <TableProfile listProfile={listProfile} key={listProfile.length}/>
        </div >
    )
}

export default ProfileInput;