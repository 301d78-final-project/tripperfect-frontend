import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import bios from '../teamBios.json'
import AuthorCard from './AuthorCard'
// import devInfo from '../teamBios.json';


class AboutUs extends Component {
  render() {
    // console.log(bios.authors[0]);
    const authors = bios.authors;
    return (
      <>
      <h1>Meet the Team!</h1>
      <Container fluid
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
                 }}
      >
        <Row xs={1} sm={2} md={3} lg={5}>
          {authors.map(author => ( 
            <AuthorCard 
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
