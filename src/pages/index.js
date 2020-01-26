import React, { useState } from "react"
import { Row, Col, Container, Form, Button } from "react-bootstrap"
import racoons from "../images/racoons.jpg"
import Layout from "../components/layout"
/**
 * TODOS
 * - If no match is found, add an option to Add Volunteer
 * - Handle two volunteers with same name
 *    - search by email instead
 * - Connect to DB to possibly pre-load all volunteers into state
 */
const IndexPage = props => {
  const [volunteerMatches, setVolunteerMatches] = useState([
    { id: 1, name: "Ashley Smith", clockedIn: false },
  ])

  const [selectedVolunteer, setSelectedVolunteer] = useState(1)

  const volunteerResults = volunteerMatches.map(volunteer => (
    <div key={`${volunteer.id}`} className="mb-3">
      <Form.Check
        type="radio"
        id={volunteer.id}
        label={volunteer.name}
        onClick={() => {
          setSelectedVolunteer(volunteer.id)
        }}
      />
    </div>
  ))

  return (
    <Layout pageInfo={{ pageName: "index" }}>
      <Container>
        <div className="volunteer-search-form">
          <Row>
            <Col md="10">
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Row>
                    <Form.Label column={2}>Search by Name or Email</Form.Label>
                    <Col md={7}>
                      <Form.Control
                        type="text"
                        placeholder="Enter your name or email"
                      />
                    </Col>
                    <Col md={1}>
                      <Button variant="primary" type="submit">
                        Find
                      </Button>
                    </Col>
                  </Form.Row>
                </Form.Group>
              </Form>
              <hr />
              <div className="volunteer-results">
                <Row>
                  <Col md="10">
                    <Form>
                      {volunteerResults}
                      <Button variant="primary" type="submit">
                        {volunteerMatches.find(v => v.id === selectedVolunteer)
                          .clockedIn
                          ? "Clock Out"
                          : "Clock In"}
                      </Button>
                    </Form>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>

        <Row>
          <Col className="justify-content-center">
            <h3>Thank you for helping us!</h3>
            <img src={racoons} className="racoons" width="250px" />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
export default IndexPage
