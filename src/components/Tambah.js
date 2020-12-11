import React from "react";

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

function Tambah() {
    return(
        
        <div className="section landing-section">
            <Container>
            <Row>
                <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Tambahkan Objek Pariwisata</h2>
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
                        <Input placeholder="Nama Objek" type="text" />
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
                        <Input placeholder="Harga Masuk" type="text" />
                        </InputGroup>
                    </Col>
                    </Row>
                    <label>Deskripsi</label>
                    <Input
                    placeholder="Deskripsi objek pariwisata..."
                    type="textarea"
                    rows="4"
                    />
                    <Row>
                    <Col className="ml-auto mr-auto" md="4">
                        <Button className="btn-fill" color="default" size="lg" outline>
                        Tambahkan Objek
                        </Button>
                    </Col>
                    </Row>
                </Form>
                </Col>
            </Row>
            </Container>
        </div>
        
    )
}

export default Tambah;