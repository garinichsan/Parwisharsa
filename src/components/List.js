import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Container, } from 'reactstrap';

import axios from 'axios';

function List() {
    const [daftarJurusan, setDaftarJurusan] = useState({});

    useEffect(() => {
    const fetchData = async () => {
        const result = await axios.get(
        "https://localhost:8000/api/users"
        );
        console.log(result);
        setDaftarJurusan(result.data);
    };
    fetchData();
    }, [daftarJurusan]);

    return(
      <div className="section section-dark"  style={{ backgroundColor: '#333'}}>
        <Container>

            <Card>
                <CardBody>
                    <CardTitle className="title-uppercase">Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                </CardBody>
            </Card>

            <ul>
                {/* { this.state.persons.map(person => <li>{person.name}</li>)} */}
            </ul>

        </Container>
      </div>
    )
}

export default List;