import { Button, Form, Modal } from "react-bootstrap";
import { TableData } from "./TableData";

export const DataModal = (props) => {
  const contacts = [
    { name: "All Contacts", value: "A" },
    { name: "US Contacts", value: "B" },
  ];

  const handleKeyDown = (key, val) => {
    if (key === "Enter") {
      props.searchData(val);
    }
  };

  return (
    <Modal
      show={props.show}
      onHide={props.hide}
      backdrop="static"
      keyboard={false}
      size="lg"
      centered
    >
      <Modal.Header className="justify-content-center">
        <h3 className="text-center">Modal {props.type}</h3>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-center">
          {contacts.map((d, i) => (
            <Button
              variant="unset"
              className={`btn-${d.value} ${props.type===d.value ? "active": ""}`}
              key={i}
              onClick={() => props.getData(d.value)}
            >
              {d.name}
            </Button>
          ))}
        </div>
        <div className="d-flex justify-content-between py-3 align-items-center">
          <h4>{contacts.filter((d) => d.value === props.type)[0].name}</h4>
          <input
            type="search"
            value={props.search}  
            className="form-control w-50"
            onChange={(e) => props.handleSearch(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e.key, e.target.value)}
            placeholder="Search here..."
          />
        </div>
        {/* table data component */}
        <TableData
          evenOnly={props.check}
          loading={props.loading}
          loadData={props.loadData}
          search={props.search}
          type={props.type}
        />
        {/* check box for even IDs only */}
        <Form.Check
          type="checkbox"
          label="Only even"
          id="default-checkbox"
          onChange={(e) => props.handleCheck(!props.check)}
          value={props.check}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="unset" className="btn-C" onClick={props.hide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
