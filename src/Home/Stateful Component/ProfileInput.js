import React from "react";
import { Input, Form, FormGroup, Label, Col, Row } from 'reactstrap';
import Profile from './Profile';
import TableProfile from './TableProfile';

export default class HomePage extends React.Component {
    state = {
        name: '',
        profession: '',
        company: '',
        listProfile: [],
    }

    toggle = (data) => {
        this.setState({
            name: '',
            profession: '',
            company: ''
        })
        this.setState({ listProfile: data })
        console.log(this.state.listProfile)
    }

    dataChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log('aaa', event.target.value)
    }

    render() {
        return (
            <div className="App" >
                <Row>
                    <Col md="6">
                        <h1>Profile Input</h1>
                        <Form id="formBiodata">
                            <FormGroup>
                                <Label for="name"><b>Nama</b></Label>
                                <Input type="text" name="name" id="name"
                                    autoComplete='off'
                                    placeholder="Nama lengkap"
                                    value={this.state.name} required
                                    onChange={this.dataChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="profession"><b>Pekerjaan</b></Label>
                                <Input type="text" name="profession" id="profession"
                                    autoComplete='off'
                                    placeholder="Pekerjaan"
                                    value={this.state.profession} required
                                    onChange={this.dataChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="company"><b>Perusahaan</b></Label>
                                <Input type="text" name="company" id="company"
                                    autoComplete='off'
                                    placeholder="Perusahaan"
                                    value={this.state.company} required
                                    onChange={this.dataChange} />
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col md="6">
                        <Profile
                            name={this.state.name}
                            profession={this.state.profession}
                            company={this.state.company}
                            reset={(data) => { this.toggle(data) }}
                        />
                    </Col>
                </Row>
                <TableProfile listProfile={this.state.listProfile} key={this.state.listProfile.length}/>
            </div >
        );
    }
}