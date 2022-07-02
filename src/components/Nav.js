import React from "react";
import { Navbar, Container } from "react-bootstrap";
export default function Nav() {
  return (
    <div>
      <Navbar style={{ marginBottom: "20px" }}>
        <Navbar.Brand>
          <img
            alt=""
            src="https://th.bing.com/th/id/R.2ea85d7448475a744c1485c2eac3d3d1?rik=LOSTtarBPEnY%2fw&riu=http%3a%2f%2fwww.freepnglogos.com%2fuploads%2fnetflix-logo-0.png&ehk=PaZLUHaWmwAMEzdIDx7zGpBu053ZpXipTljxBidJnfU%3d&risl=&pid=ImgRaw&r=0"
            width="150"
            style={{ margin: " 0px 50px" }}
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}
