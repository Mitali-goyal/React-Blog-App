import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Blog = (props) => {
  return (
    <Card className="shadow bg-body rounded">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.desc}</Card.Text>
        <Link to={"/readBlog/" + props.id}>
          <Button variant="primary">Read More</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Blog;
