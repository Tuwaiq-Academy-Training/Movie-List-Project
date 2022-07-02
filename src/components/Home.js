import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "./Card";
import Nav from "./Nav";
import Movies from "../data";
import Footer from "./Footer";
export default function Home() {
  return (
    <div>
      <Nav />

      <Container>
        <Row></Row>
        <Row>
          {Movies.map((el) => {
            // console.log(el.title);
            return (
              <Col style={{ marginBottom: "10px" }}>
                <Card
                  title={el.title}
                  img={el.img}
                  story={el.story}
                  year={el.year}
                  link={el.link}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
