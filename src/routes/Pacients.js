import { useState } from "react";
import NavebarCreate from "../components/Navebar";
import { Table, Modal } from "react-bootstrap";

import "../styles/Pacients.css";

const Pacients = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <NavebarCreate></NavebarCreate>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>O2</th>
            <th>Freq.C</th>
            <th>Freq.Resp</th>
            <th>Username</th>
            <th>Username</th>
            <th>Username</th>
            <th>Username</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr onClick={() => setShow(true)}>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
      <h1>tabela sasdkjsaoidjaslkdjsalk</h1>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Pacients;
