import { useState, useEffect } from "react";
import NavebarCreate from "../components/Navebar";
import { Table, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import "../styles/Pacients.css";

const Pacients = () => {
  const history = useHistory();
  const handleEditPost = (props) => {
    /* history.push({ pathname: "/edit", postData: props }); */
    history.push({
      pathname: "/pacient",
      pasciData: { props },
    });
  };
  const [pacients, setPacients] = useState([]);

  useEffect(() => {
    const getPacients = async () => {
      const pacients = [
        {
          id: "10",
          Name: "Jarvas ",
          EWS: 5,
          Temperatura: 39,
          PaSistólica: 30,
          FreqCardí: 12,
          FreqRespi: 23,
          AVPU: "alert",
        },
        {
          id: "11",
          Name: "Jamilton ",
          EWS: 6,
          Temperatura: 20,
          PaSistólica: 10,
          FreqCardí: 12,
          FreqRespi: 11,
          AVPU: "alert",
        },
      ];
      setPacients(pacients);
      /*  console.log("pacients list:", pacients); */
    };
    getPacients();
  }, []);

  console.log("pacientes", pacients);

  const [show, setShow] = useState(false);

  if (pacients.length === 0) {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>EWS</th>
            <th>Temperatura</th>
            <th>PA Sistólica</th>
            <th>Freq. Cardí</th>
            <th>Freq. Respi</th>
            <th>AVPU</th>
          </tr>
        </thead>
        <tbody>
          <tr onClick={() => setShow(true)}>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    );
  }

  return (
    <div>
      <NavebarCreate></NavebarCreate>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>EWS</th>
            <th>Temperatura</th>
            <th>PA Sistólica</th>
            <th>Freq. Cardí</th>
            <th>Freq. Respi</th>
            <th>AVPU</th>
          </tr>
        </thead>
        <tbody>
          {pacients.map((pacient) => {
            return (
              <tr key={pacient.id} onClick={() => handleEditPost(pacient)}>
                <td>{pacient.id}</td>
                <td>{pacient.Name}</td>
                <td>{pacient.EWS}</td>
                <td>{pacient.Temperatura}</td>
                <td>{pacient.PaSistólica}</td>
                <td>{pacient.FreqCardí}</td>
                <td>{pacient.FreqRespi}</td>
                <td>{pacient.AVPU}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {/* <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        size="xl"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <p>
              Ipsum molestiae natus adipisci modi eligendi? Debitis amet unde
              commodi aspernatur enim, consectetur. Cumque deleniti temporibus
              ipsam atque a dolores quisquam quisquam adipisci possimus
              laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
              accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
              reiciendis porro quo magni incidunt dolore amet atque facilis
              ipsum deleniti rem!
            </p>
          </div>
        </Modal.Body>
      </Modal> */}
    </div>
  );
};

export default Pacients;
