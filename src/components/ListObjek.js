import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Container, } from 'reactstrap';

import axios from 'axios';

function ListObjek() {
    let [daftarObjek, setDaftarObjek] = useState({});

    useEffect(() => {
    const fetchData = async () => {
        const result = await axios.get(
        "http://localhost:8000/api/users"
        );
        setDaftarObjek(result.data.data);
    };
    fetchData();
    }, [daftarObjek]);

    return(
      <div className="section section-dark"  style={{ backgroundColor: '#333'}}>
        <div className="text-center">
            <h2 className="title">Daftar Objek Pariwisata</h2>
            <br />
        </div>

        <Container>
            {Object.keys(daftarObjek).map(item => (
                <Card>
                    <CardBody>
                        <CardTitle className="title-uppercase">{daftarObjek[item].name}</CardTitle>
                        <CardSubtitle>{daftarObjek[item].email}</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    </CardBody>
                </Card>
            ))}

        </Container>
      </div>
    )
}

export default ListObjek;