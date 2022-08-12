import React from "react";
import { Card, CardBody, CardHeader, Button } from 'reactstrap';


export default class Profile extends React.Component {
    state = {
        data: []
    }

    saveHandle = async (name, profession, company) => {
        // console.log(name, age, adress)
        await this.setState(prevState => ({
            data: [...prevState.data, { "id": this.state.data.length + 1, "name": name, "profession": profession, "company": company }]
        }))
        await this.props.reset(this.state.data)
    }

    render() {
        return (
            <>
                <Card bg="primary" style={{ height: '300px' }} >
                    <CardHeader style={{ backgroundColor: '#47CDF1' }}><h1>Profile</h1></CardHeader>
                    <CardBody>
                        Nama = {this.props.name}
                        <br />
                        Pekerjaan = {this.props.profession}
                        <br />
                        Perusahaan = {this.props.company}
                    </CardBody>
                    <div style={{ float: 'right' }}>
                        <Button
                            className="btn-pill btn-lg float-right"
                            style={{ background: "#9ACD32", border: "none", width: '100px' }}
                            onClick={() => { this.saveHandle(this.props.name, this.props.profession, this.props.company) }}
                        >
                            Save
                        </Button>
                    </div>
                </Card>

            </>
        );
    }
}

