import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Container, Row, Col, Button, Modal, Input, InputGroupAddon, InputGroupText, InputGroup, Form, } from 'reactstrap';

import axios from 'axios';

function ListObjek({user}) {
    const apiObjek = "http://localhost:8000/api/objek/";
    const [daftarObjek, setDaftarObjek] = useState({});
    const [currentItem, setCurrentItem] = useState( { name: "", harga: "", create_date: Date.now } );
    const [deleteModal, setDeleteModal] = React.useState(false);
    const [editModal, setEditModal] = React.useState(false);
    const [infoModal, setInfoModal] = React.useState(false);

    let [name, setName] = useState("");
    let [harga, setHarga] = useState("");    
    let [desc, setDesc] = useState("");

    useEffect(() => {
    const fetchData = async () => {
        const result = await axios.get(
        apiObjek
        );
        setDaftarObjek(result.data.data);
    };
    fetchData();
    }, [daftarObjek]);

    const remove = async (id) => {
        const result = await axios.delete( apiObjek + id );
        console.log(result.data);
        setDeleteModal(false);
    }

    const edit = async (id) => {
        try {
            const response = await axios.put( apiObjek + id, {
                name: name,
                harga: harga,
                desc: desc,
            }
            );
            if (response.data.status === "success") {
                console.log(response);
            }
            setEditModal(false);
        } catch (err) {
            window.alert("Maaf, ada kesalahan dari server kami :(");
        }
        return;
    };

    const changeName = (value) => {
        setName(value.target.value);
    };

    const changeHarga = (value) => {
        setHarga(value.target.value);
    };

    const changeDesc = (value) => {
        setDesc(value.target.value);
    };


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
                    <Col md="6" key={item}> 
                        <Card> 
                            <CardBody>
                                <CardTitle className="title-uppercase"> <Row>
                                        <Col className="mt-1" md="8">
                                            <span style={{fontWeight: 'bold', fontSize: '20px'}}>{daftarObjek[item].name}</span>
                                        </Col>

                                        <Col md="4">
                                            {(user._id === daftarObjek[item].user_id) ? (
                                                <>
                                                <Button color="danger" type="button" size="sm" className="float-right ml-1" onClick={()=>{ setCurrentItem(daftarObjek[item]); setDeleteModal(true) }}>
                                                    <i className="fa fa-trash-o" />
                                                </Button>
                                                <Button color="warning" type="button" size="sm" className="float-right ml-1" onClick={()=>{ setCurrentItem(daftarObjek[item]); setName(daftarObjek[item].name); setDesc(daftarObjek[item].desc); setHarga(daftarObjek[item].harga); setEditModal(true) }}>
                                                    <i className="fa fa-pencil-square-o" />
                                                </Button>
                                                </>
                                            ) : (<> </>) }
                                            <Button color="info" type="button" size="sm" className="float-right ml-1" onClick={()=>{ setCurrentItem(daftarObjek[item]); setInfoModal(true) }}>
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

            {/* Modal untuk delete */}
            <Modal isOpen={deleteModal} toggle={() => setDeleteModal(false)}>
                <div className="modal-header">
                    <h5 className="modal-title" id="deleteModal">
                        Confirmation
                    </h5>
                </div>
                <div className="modal-body text-center">
                    <p>Are you sure to delete {currentItem.name}?</p>
                </div>
                <div className="modal-footer">
                    <div className="left-side">
                        <Button className="btn-link" color="default" data-dismiss="modal" type="button" onClick={() => setDeleteModal(false)}>
                            Never mind
                        </Button>
                    </div>
                    <div className="divider" />
                    <div className="right-side">
                        <Button className="btn-link"color="danger" type="button" onClick={() => remove(currentItem._id)}>
                            Delete
                        </Button>
                    </div>
                </div>
            </Modal>

            {/* Modal untuk edit */}
            <Modal isOpen={editModal} toggle={() => setEditModal(false)} className="modal-lg">
                <div className="modal-header">
                    <h5 className="modal-title" id="editModal">
                        Edit Objek Pariwisata
                    </h5>
                </div>
                <div className="modal-body text-center">
                <Row className="mb-5">
                    <Col className="ml-auto mr-auto" md="11">
                        <Form className="contact-form">
                            <Row>
                            <Col md="6">
                                <label>Nama Objek</label>
                                <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                    <i className="nc-icon nc-sun-fog-29" />
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input 
                                    placeholder="Nama Objek" 
                                    type="text"
                                    value={name}
                                    onChange={changeName}
                                />
                                </InputGroup>
                            </Col>
                            <Col md="6">
                                <label>Harga Masuk</label>
                                <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                    <i className="nc-icon nc-money-coins" />
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input 
                                    placeholder="Harga Masuk" 
                                    type="number"
                                    value={harga}
                                    onChange={changeHarga}
                                />
                                </InputGroup>
                            </Col>
                            </Row>
                            <label>Deskripsi</label>
                            <Input
                                placeholder="Deskripsi objek pariwisata..."
                                rows="4"
                                type="text"
                                value={desc}
                                onChange={changeDesc}
                            />
                        </Form>
                    </Col>
                </Row>
                </div>
                <div className="modal-footer">
                    <div className="left-side">
                        <Button className="btn-link" color="default" data-dismiss="modal" type="button" onClick={() => setEditModal(false)}>
                            Never mind
                        </Button>
                    </div>
                    <div className="divider" />
                    <div className="right-side">
                        <Button className="btn-link"color="warning" type="button" onClick={() => edit(currentItem._id)}>
                            Edit
                        </Button>
                    </div>
                </div>
            </Modal>

            {/* Modal untuk info */}
            <Modal isOpen={infoModal} toggle={() => setInfoModal(false)}>
                <div className="modal-header">
                    <h5 className="modal-title" id="infoModal">
                        Detail Informasi Objek Pariwisata
                    </h5>
                </div>
                <div className="modal-body">
                    <Row>
                        <Col sm="3"> Nama Objek </Col> <Col sm="1"> : </Col> <Col sm='8'> {currentItem.name} </Col>
                        <Col sm="3"> Harga </Col> <Col sm="1"> : </Col> <Col sm='8'> {currentItem.harga.toLocaleString('id', { style: 'currency', currency: 'IDR', })} </Col>
                        <Col sm="3"> Deskripsi </Col> <Col sm="1"> : </Col> <Col sm='8'> {currentItem.desc} </Col>
                        <Col sm="3"> Dibuat </Col> <Col sm="1"> : </Col> <Col sm='8'> {new Date( currentItem.create_date ).toLocaleDateString("id", {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: "numeric", second: "numeric", timeZone: "Asia/Jakarta"})} </Col>
                    </Row>
                </div>
            </Modal>
        </Container>
      </div>
    )
}

export default ListObjek;