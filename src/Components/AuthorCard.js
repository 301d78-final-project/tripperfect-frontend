import { Card } from 'react-bootstrap';

const AuthorCard = (props) => {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.img} alt={props.name}/>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.bio}</Card.Text>
          <Card.Link href={props.linkedin}>LinkedIn</Card.Link>
          <Card.Link href={props.github}>GitHub</Card.Link>
        </Card.Body>
      </Card>
    );
  }

export default AuthorCard;
