import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import bios from "../teamBios.json";
import AuthorCard from "./AuthorCard";

class AboutUs extends Component {

  render() {
    const authors = bios.authors;
    return (
      <>
        <h1>Meet the Team!</h1>
        <Container
          fluid
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Row xs={1} sm={2} md={3} lg={5}>
            {authors.map((author, index) => (
              <AuthorCard
                key={index}
                img={author.img}
                name={author.name}
                bio={author.bio}
                linkedin={author.linkedin}
                github={author.github}
              />
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default AboutUs;
