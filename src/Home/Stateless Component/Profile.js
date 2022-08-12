
import React from 'react';
import { Card, CardBody, CardHeader, Button } from 'reactstrap';


function Profile(props){
    const [data, setData] = React.useState([])
    const [cekData, setCek] = React.useState(false)
    

    const saveHandle = async(name, age, adress) => {
       
     setData(prevState=>
                [...prevState,
                { "id": data.length + 1, "name": name, "age": age, "adress": adress }
                ])
    setCek(true)
    }
    const dataTable = (data) =>{
        props.reset(data)
        setCek(false)
    }
    React.useEffect(() => {
        if(cekData){
            dataTable(data)
        }

      },[cekData]);
    
    return (
        <>
            <Card bg="primary" style={{ height: '300px' }} >
                <CardHeader style={{ backgroundColor: '#47CDF1' }}><h1>Profile</h1></CardHeader>
                <CardBody>
                    Name = {props.name}
                    <br />
                Age = {props.age}
                    <br />
                Adress = {props.adress}
                </CardBody>
                <div style={{ float: 'right' }}>
                    <Button
                        className="btn-pill btn-lg float-right"
                        style={{ background: "#9ACD32", border: "none", width: '100px' }}
                        onClick={() => { saveHandle(props.name, props.age, props.adress) }}
                    >
                        Save
                    </Button>
                </div>
            </Card>

        </>
    )
}

export default Profile;