import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
export default function CardMovie(props) {
  return (
    <div>
      <Card
        style={{
          background: "black",
          color: "white",
          width: "18rem",
        }}
      >
        <Card.Img className="Card-img" src={props.img} />
        <Card.Body>
          <Card.Title style={{ height: "50px" }}>{props.title}</Card.Title>
          <Card.Text className="para">{props.story}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem style={{ background: "black", color: "white" }}>
            {props.year}
          </ListGroupItem>
        </ListGroup>
        <Card.Body>
          <a className="link" target={"_blank"} href={props.link}> Go to Movie </a>
           
   
        </Card.Body>
      </Card>
    </div>
  );
}
