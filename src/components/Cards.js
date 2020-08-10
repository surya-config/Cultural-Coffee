import React from "react";
import { Card, Button } from "react-bootstrap";
import "../css/Cards.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Link } from "react-router-dom";

function Cards({ id, title, desc, source }) {
  return (
    <div className="products">
      <Card className="card">
        <Card.Img variant="top" src={source} height="300px" />
        <Card.Body style={{ marginTop: "20px" }}>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desc}</Card.Text>
          <Button
            style={{ marginLeft: "175px", marginTop: "20px" }}
            variant="dark"
          >
            <Link to={"/product/" + id}>
              <ArrowForwardIosIcon />
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
