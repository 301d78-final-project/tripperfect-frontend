import { Component } from 'react';
import { Card } from 'react-bootstrap';

class AuthorCard extends Component {
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={this.props.img} alt={this.props.name} />
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
          <Card.Text>{this.props.bio}</Card.Text>
          <Card.Link href={this.props.linkedin}>LinkedIn</Card.Link>
          <Card.Link href={this.props.github}>GitHub</Card.Link>
        </Card.Body>
      </Card>
    );
  }
}

export default AuthorCard;
