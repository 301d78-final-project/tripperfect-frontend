import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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




// class AboutUs extends Component {
//   render() {
//     return (
//       <Container
//         style={{
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//       >
//         <Row>
//           <Col>
//             <Card style={{ width: '18rem' }}>
//               <Card.Img variant='top' src={this.props.devInfo.authors[0].img} />
//               <Card.Body>
//                 <Card.Title>{this.props.devInfo.authors[0].name}</Card.Title>
//                 {console.log(this.props.devInfo)}
//                 <Card.Text>{this.props.devInfo.authors[0].bio}</Card.Text>
//                 <Card.Link href={this.props.devInfo.authors[0].linkedin}>
//                   LinkedIn
//                 </Card.Link>
//                 <Card.Link href={this.props.devInfo.authors[0].github}>
//                   GitHub
//                 </Card.Link>
//               </Card.Body>
//             </Card>
//           </Col>

//           <Col>
//             <Card style={{ width: '18rem' }}>
//               <Card.Img variant='top' src={this.props.devInfo.authors[1].img} />
//               <Card.Body>
//                 <Card.Title>{this.props.devInfo.authors[1].name}</Card.Title>
//                 {console.log(this.props.devInfo)}
//                 <Card.Text>{this.props.devInfo.authors[1].bio}</Card.Text>
//                 <Card.Link href={this.props.devInfo.authors[1].linkedin}>
//                   LinkedIn
//                 </Card.Link>
//                 <Card.Link href={this.props.devInfo.authors[1].github}>
//                   GitHub
//                 </Card.Link>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//         <Row>
//           <Col>
//             <Card style={{ width: '18rem' }}>
//               <Card.Img variant='top' src={this.props.devInfo.authors[2].img} />
//               <Card.Body>
//                 <Card.Title>{this.props.devInfo.authors[2].name}</Card.Title>
//                 {console.log(this.props.devInfo)}
//                 <Card.Text>{this.props.devInfo.authors[2].bio}</Card.Text>
//                 <Card.Link href={this.props.devInfo.authors[2].linkedin}>
//                   LinkedIn
//                 </Card.Link>
//                 <Card.Link href={this.props.devInfo.authors[2].github}>
//                   GitHub
//                 </Card.Link>
//               </Card.Body>
//             </Card>
//           </Col>

//           <Col>
//             <Card style={{ width: '18rem' }}>
//               <Card.Img variant='top' src={this.props.devInfo.authors[3].img} />
//               <Card.Body>
//                 <Card.Title>{this.props.devInfo.authors[3].name}</Card.Title>
//                 {console.log(this.props.devInfo)}
//                 <Card.Text>{this.props.devInfo.authors[3].bio}</Card.Text>
//                 <Card.Link href={this.props.devInfo.authors[3].linkedin}>
//                   LinkedIn
//                 </Card.Link>
//                 <Card.Link href={this.props.devInfo.authors[3].github}>
//                   GitHub
//                 </Card.Link>
//               </Card.Body>
//             </Card>
//           </Col>

//           <Col>
//             <Card style={{ width: '18rem' }}>
//               <Card.Img variant='top' src={this.props.devInfo.authors[4].img} />
//               <Card.Body>
//                 <Card.Title>{this.props.devInfo.authors[4].name}</Card.Title>
//                 {console.log(this.props.devInfo)}
//                 <Card.Text>{this.props.devInfo.authors[4].bio}</Card.Text>
//                 <Card.Link href={this.props.devInfo.authors[4].linkedin}>
//                   LinkedIn
//                 </Card.Link>
//                 <Card.Link href={this.props.devInfo.authors[4].github}>
//                   GitHub
//                 </Card.Link>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }

export default AboutUs;
