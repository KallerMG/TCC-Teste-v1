import NavebarCreate from "../components/Navebar";
import { Form, Row, Col, Button } from "react-bootstrap";

import { useLocation, useHistory } from "react-router-dom";

import "../styles/Pacient.css";

const Pacient = () => {
  const location = useLocation();

  const importPaci = () => {
    try {
      const pasci = location.pasciData;
      return pasci;
    } catch (error) {
      console.log("erro");
    }
  };

  const teste = importPaci();
  console.log("paciente unico", teste);

  if (teste == undefined) {
    return <NavebarCreate></NavebarCreate>;
  }

  return (
    <div className="divDados">
      <NavebarCreate></NavebarCreate>
      <Form>
        <Form.Group as={Row} controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Nome
          </Form.Label>
          <Col sm="10">
            <Form.Control plaintext readOnly defaultValue={teste.props.Name} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Endereço
          </Form.Label>
          <Col sm="10">
            <Form.Control plaintext readOnly defaultValue={teste.props.id} />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Pacient;
