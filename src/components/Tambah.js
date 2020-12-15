import React, { useState, } from "react";

// reactstrap components
import {
  Button,
  Row,
  Col,
  Form,
  Container,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

import axios from 'axios';
import {BACKEND} from 'config';

const Tambah = ({auth,user}) => {
    let [name, setName] = useState("");
    let [harga, setHarga] = useState("");    
    let [desc, setDesc] = useState("");

    const apiObjek = BACKEND + "api/objek/";

    const sendObjek = async () => {
        if ( !( name && harga && desc ) ) {
            window.alert("Form belum lengkap");
        } else {
            try {
                const response = await axios.post(
                    apiObjek,
                {
                    name: name,
                    harga: harga,
                    desc: desc,
                    owner: user,
                }
                );
                if (response.data.status === "success") {
                    console.log(response);
                }
            } catch (err) {
                window.alert("Maaf, ada kesalahan dari server kami :(");
            }
            return;
        }
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
        
        <div className="section landing-section">
            <Container>
            <Row>
                {!auth ? (
                    <Col className="ml-auto mr-auto" md="8">
                    <h2 className="text-center">Tambahkan Objek Pariwisata</h2>
                    <h5 className="text-center">Silakan Sign In Terlebih Dahulu </h5>
                    </Col>
                ) : (
                    <Col className="ml-auto mr-auto" md="8">
                    <h2 className="text-center"> Hi {user.name} Tambahkan Objek Pariwisata</h2>
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
                        <Row>
                        <Col className="ml-auto mr-auto" md="4">
                            <Button className="btn-fill" color="default" size="lg" outline onClick={sendObjek}>
                            Tambahkan Objek
                            </Button>
                        </Col>
                        </Row>
                    </Form>
                    </Col>
                )};
            </Row>
            </Container>
        </div>
        
    )
}

export default Tambah;