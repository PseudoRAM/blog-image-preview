import * as React from "react";
import Masonry from "react-masonry-component";
import Styled from "./styles";

interface Props {
  title: string;
  image: string;
  onOpen: any;
}

const BlogPreview = ({ title, image, onOpen }: Props) => {
  return (
    <Styled.BlogWrapper>
      <Masonry>
        <Styled.Card featured image={image}>
          <Styled.ImagePreview featured image={image} />
          <Styled.TextCard>
            <Styled.TextWrapper>
              <Styled.DatePreview>27 NOVEMBER 2020</Styled.DatePreview>
              <Styled.TitlePreview>{title}</Styled.TitlePreview>
              <Styled.ReadMore onClick={onOpen} />
            </Styled.TextWrapper>
          </Styled.TextCard>
        </Styled.Card>
        <Styled.Card image={image}>
          <Styled.ImagePreview image={image} />
          <Styled.TextCard>
            <Styled.TextWrapper>
              <Styled.DatePreview>27 NOVEMBER 2020</Styled.DatePreview>
              <Styled.TitlePreview>{title}</Styled.TitlePreview>
              <Styled.ReadMore onClick={onOpen} />
            </Styled.TextWrapper>
          </Styled.TextCard>
        </Styled.Card>
        <Styled.Card image={""}>
          <Styled.ImagePreview image={""} />
          <Styled.TextCard>
            <Styled.TextWrapper>
              <Styled.DatePreview>27 NOVEMBER 2020</Styled.DatePreview>
              <Styled.TitlePreview>{title}</Styled.TitlePreview>
              <Styled.ReadMore onClick={onOpen} />
            </Styled.TextWrapper>
          </Styled.TextCard>
        </Styled.Card>
      </Masonry>
    </Styled.BlogWrapper>
  );
};

export default BlogPreview;
