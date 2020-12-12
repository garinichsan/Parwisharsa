import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Container, Row, Col, Button, } from 'reactstrap';

import axios from 'axios';

function ListObjek() {
    let [daftarObjek, setDaftarObjek] = useState({});

    useEffect(() => {
    const fetchData = async () => {
        const result = await axios.get(
        "http://localhost:8000/api/objek"
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
            <Row>
                <Col md="6"> 
                    <Card> 
                        <CardBody>
                            <CardTitle className="title-uppercase"> <Row>
                                    <Col className="mt-1" md="8">
                                        <span style={{fontWeight: 'bold', fontSize: '20px'}}>Template Title</span>
                                    </Col>

                                    <Col md="4">
                                        <Button color="danger" type="button" size="sm" className="float-right ml-1" href="#">
                                            <i className="fa fa-trash-o" />
                                        </Button>
                                        <Button color="warning" type="button" size="sm" className="float-right ml-1" href="#">
                                            <i className="fa fa-pencil-square-o" />
                                        </Button>
                                        <Button color="info" type="button" size="sm" className="float-right ml-1" href="#">
                                            <i className="fa fa-info-circle" />
                                        </Button>
                                    </Col>
                                </Row>
                            </CardTitle>

                            <CardSubtitle className="mt-1 mb-1 harga" style={{color: '#92ac56'}}>Rp 1.000,00</CardSubtitle>

                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        </CardBody> 
                    </Card> 
                </Col>

                {Object.keys(daftarObjek).map(item => (
                    <Col md="6"> 
                        <Card> 
                            <CardBody>
                                <CardTitle className="title-uppercase"> <Row>
                                        <Col className="mt-1" md="8">
                                            <span style={{fontWeight: 'bold', fontSize: '20px'}}>{daftarObjek[item].name}</span>
                                        </Col>

                                        <Col md="4">
                                            <Button color="danger" type="button" size="sm" className="float-right ml-1" href="#">
                                                <i className="fa fa-trash-o" />
                                            </Button>
                                            <Button color="warning" type="button" size="sm" className="float-right ml-1" href="#">
                                                <i className="fa fa-pencil-square-o" />
                                            </Button>
                                            <Button color="info" type="button" size="sm" className="float-right ml-1" href="#">
                                                <i className="fa fa-info-circle" />
                                            </Button>
                                        </Col>
                                    </Row>
                                </CardTitle>

                                <CardSubtitle className="mt-1 mb-1 harga" style={{color: '#92ac56'}}>{daftarObjek[item].harga.toLocaleString('id', { style: 'currency', currency: 'IDR', })}</CardSubtitle>

                                <CardText>{daftarObjek[item].desc}</CardText>
                            </CardBody> 
                        </Card> 
                    </Col>
                ))}
                
            </Row>
        </Container>
      </div>
    )
}

export default ListObjek;