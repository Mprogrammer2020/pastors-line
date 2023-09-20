import { Button, Modal } from "react-bootstrap";
import { ValueChecker } from "./ValueChecker";

export const DetailModal = (props) => {
  return (
    <Modal
      show={props.show}
      onHide={props.hide}
      backdrop="static"
      keyboard={false}
      size="lg"
      className="detail-modal"
      centered
    >
      <Modal.Body>
        <h4>Contact Detail</h4>
        <div className="user-data">
          <span>ID: {props.data.id}</span>
        </div>
        <div className="user-data">
          <span>First Name: {ValueChecker(props.data.first_name)}</span>
        </div>
        <div className="user-data">
          <span>Email: {ValueChecker(props.data.email)}</span>
        </div>
        <div className="user-data">
          <span>Phone: {ValueChecker(props.data.phone_number)}</span>
        </div>
        <div className="user-data"> 
          <span>Country: {ValueChecker(props.data.country?.iso)}</span>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="unset" className="btn-C" onClick={props.hide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
