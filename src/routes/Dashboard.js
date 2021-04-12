import NavebarCreate from "../components/Navebar";
import { CardColumns, Card, CardGroup } from "react-bootstrap";

import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <NavebarCreate></NavebarCreate>
      <CardColumns>
        <Card className="text-right">
          <blockquote className="blockquote mb-0 card-body">
            <p>ideia de alerta q seria aqui</p>
            <footer className="blockquote-footer">
              <small className="text-muted">
                <cite title="Source Title">Fuladno de tal</cite>
              </small>
            </footer>
          </blockquote>
        </Card>
        <Card className="text-right">
          <blockquote className="blockquote mb-0 card-body">
            <p>ideia de alerta q seria aqui</p>
            <footer className="blockquote-footer">
              <small className="text-muted">
                <cite title="Source Title">Fuladno de tal</cite>
              </small>
            </footer>
          </blockquote>
        </Card>
        <Card className="text-right">
          <blockquote className="blockquote mb-0 card-body">
            <p>ideia de alerta q seria aqui</p>
            <footer className="blockquote-footer">
              <small className="text-muted">
                <cite title="Source Title">Fuladno de tal</cite>
              </small>
            </footer>
          </blockquote>
        </Card>
        <Card className="text-right">
          <blockquote className="blockquote mb-0 card-body">
            <p>ideia de alerta q seria aqui</p>
            <footer className="blockquote-footer">
              <small className="text-muted">
                <cite title="Source Title">Fuladno de tal</cite>
              </small>
            </footer>
          </blockquote>
        </Card>
        <Card className="text-right">
          <blockquote className="blockquote mb-0 card-body">
            <p>ideia de alerta q seria aqui</p>
            <footer className="blockquote-footer">
              <small className="text-muted">
                <cite title="Source Title">Fuladno de tal</cite>
              </small>
            </footer>
          </blockquote>
        </Card>
        <Card className="text-right">
          <blockquote className="blockquote mb-0 card-body">
            <p>ideia de alerta q seria aqui</p>
            <footer className="blockquote-footer">
              <small className="text-muted">
                <cite title="Source Title">Fuladno de tal</cite>
              </small>
            </footer>
          </blockquote>
        </Card>
      </CardColumns>
    </div>
  );
};

export default Dashboard;
