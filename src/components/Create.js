import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [desc, setDesc] = useState("");
  const [content, setContent] = useState("");
  const [isCreated, setIsCreated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { title, author, desc, content };

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {
      setIsCreated(true);
      setTitle("");
      setAuthor("");
      setContent("");
    });
  };

  return (
    <div>
      <div className="mx-5 mt-4 mb-3">
        <h4>Create New Blog</h4>
      </div>
      {isCreated && (
        <Alert
          className="mx-5"
          variant="success"
          onClose={() => setIsCreated(false)}
          dismissible
        >
          Your blog is sucessfully created!
        </Alert>
      )}
      <Form className="mx-5 mb-5" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Author Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter blog description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Content:</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Enter your content here"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Create;
