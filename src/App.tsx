import * as React from "react";
import BlogPreview from "./components/blog-preview";
import BlogPost from "./components/blog-post";
import styled from "styled-components";
import "./styles.css";

const Title = styled.h1`
  margin: 0;
  padding: 40px 30px;
  padding-left: 50px;
  padding-bottom: 20px;
  color: #222222;
`;

const Input = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

const Label = styled.label`
  font-size: 1.25em;
  font-weight: 700;
  color: white;
  background-color: #ff2369;
  padding: 15px 10px;
  display: inline-block;
  cursor: pointer;
  margin-left: 50px;
  margin-bottom: 20px;

  &:hover {
    opacity: 0.7;
  }
`;

const ArticleContainer = styled.div`
  margin: -8px;
`;

const App = () => {
  const [previewImage, setPreviewImage] = React.useState("");
  const [showArticle, setShowArticle] = React.useState(false);

  const changeImage = (e: any) => {
    if (e.target.files.length > 0) {
      setPreviewImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="App">
      {!showArticle && (
        <React.Fragment>
          <Title>Blog Posts Preview</Title>
          <Input type="file" id="file" onChange={changeImage} />
          <Label htmlFor="file">Choose blog image</Label>
          {previewImage !== "" && (
            <BlogPreview
              image={previewImage}
              title="This is a blog preview to test image placement"
              onOpen={() => {
                setShowArticle(true);
              }}
            />
          )}
        </React.Fragment>
      )}

      {showArticle && (
        <ArticleContainer>
          <BlogPost
            image={previewImage}
            onBack={() => {
              setShowArticle(false);
            }}
          />
        </ArticleContainer>
      )}
    </div>
  );
};

export default App;
