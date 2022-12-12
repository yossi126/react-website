import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DataContext from "../../store/data-context";

const TaskForm = (props) => {
  //const inputId = useRef();
  //const inputDes = useRef();
  const [enteredId, setEnteredId] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredPriority, setEnteredPriority] = useState("High");
  const dataCtx = useContext(DataContext);
  const history = useHistory();

  const dropdownPriorityHandler = (event) => {
    console.log(event.target.value);
    setEnteredPriority(event.target.value);
  };

  const idChangeHandler = (event) => {
    setEnteredId(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const data = {
      id: enteredId,
      description: enteredDescription,
      priority: enteredPriority,
    };
    //console.log(data);
    dataCtx.addTask(data);
    history.replace("/tasks");
    setEnteredId("");
    setEnteredDescription("");
  };
  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>ID</Form.Label>
              <Form.Control
                value={enteredId}
                type="text"
                placeholder="ID"
                onChange={idChangeHandler}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              {/* <Form.Control
              value={enteredDescription}
              type="text"
              placeholder="Description"
              onChange={DescriptionChangeHandler}
              rows="3"
            /> */}
              <textarea
                value={enteredDescription}
                onChange={descriptionChangeHandler}
                className="form-control"
                rows="2"
              ></textarea>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Priority</Form.Label>
              <Form.Select onChange={dropdownPriorityHandler}>
                <option value="High">High</option>
                <option value="Mid">Mid</option>
                <option value="Low">Low</option>
              </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default TaskForm;