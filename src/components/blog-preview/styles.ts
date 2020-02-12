import styled, { css } from "styled-components";

const Title = styled.h1`
  font-family: "FFNortBold", sans-serif;
  font-size: 53px;
  line-height: 64px;
  letter-spacing: -0.72px;
  text-align: center;
  width: 100%;
  margin-top: 197px;
  margin-bottom: 65px;

  @media screen and (max-width: 646px) {
    margin-top: 150px;
    font-size: 35px;
    line-height: 48px;
  }
`;

const BlogWrapper = styled.div`
  max-width: 1328px;
  margin: auto;

  @media screen and (max-width: 1342px) {
    max-width: 646px;
  }

  @media screen and (max-width: 646px) {
    max-width: 360px;
  }
`;

const TextCard = styled.div`
  width: 324px;
  height: 324px;
  background-color: #faf5ed;
  display: flex;
  align-items: center;

  @media screen and (max-width: 646px) {
    width: 100%;
  }
`;

interface CardProps {
  featured?: boolean;
  image?: string;
}

const featuredStyles = css`
  height: 666px;
  max-width: 646px;
  width: calc(100% - 18px);

  & > ${TextCard} {
    bottom: 0;
    left: 0;
  }
`;

const defaultStyles = css`
  height: 324px;
  max-width: 646px;
  width: calc(100% - 18px);

  & > ${TextCard} {
    right: 0;
    top: 0;
    height: inherit;
  }

  @media screen and (max-width: 646px) {
    height: 646px;

    & > ${TextCard} {
      right: 0;
      bottom: 0;
      top: initial;
      height: 324px;
    }
  }
`;

const noImageStyles = css`
  & > ${TextCard} {
    max-width: 646px;
    width: 100%;
  }

  & h2 {
    font-size: 36px;
    line-height: 1.28;
  }

  @media screen and (max-width: 646px) {
    height: 324px;
  }
`;

const Card = styled.div<CardProps>`
  position: relative;
  margin: 9px;

  ${props => (props.featured ? featuredStyles : defaultStyles)}
  ${props => (props.image === "" ? noImageStyles : "")}

  &> ${TextCard} {
    position: absolute;
  }

  @media screen and (max-width: 646px) {
    width: calc(100% - 18px);
  }
`;

const featuredImage = css`
  height: 100%;
  width: 100%;
`;

const defaultImage = css`
  height: 100%;
  width: 50%;
`;

const ImagePreview = styled.div<CardProps>`
  background-image: url("${props => props.image}");
  background-position: center;
  background-size: cover;
  top: 0;
  left: 0;

  ${props => (props.featured ? featuredImage : defaultImage)}
  ${props => (props.image === "" ? "display: none;" : "")}

  @media screen and (max-width: 646px) {
    height: 52%;
    width: 100%;
  }
`;

const TextWrapper = styled.div`
  margin: 0 49px;
`;

const DatePreview = styled.h3`
  font-family: "FFNortBold", sans-serif;
  color: #ff2369;
  font-size: 12px;
  letter-spacing: 1px;

  @media screen and (max-width: 646px) {
    font-size: 12px;
  }
`;

const TitlePreview = styled.h2`
  font-family: "FFNortBold", sans-serif;
  font-size: 22px;
  line-height: 30px;
  margin: 30px 0;

  @media screen and (max-width: 646px) {
    font-size: 26px;
    line-height: 32px;
    margin: 30px 0;
  }
`;

const ReadMore = styled.a`
  font-size: 12px;
  letter-spacing: 1.64px;
  font-family: "FFNortBold", sans-serif;
  border-bottom: 2px solid #000;
  color: #000 !important;
  padding-bottom: 9px;
  cursor: pointer;
  font-weight: 900;

  &:before {
    content: "READ MORE";
  }
`;

export default {
  Title,
  BlogWrapper,
  TextCard,
  Card,
  ImagePreview,
  TextWrapper,
  DatePreview,
  TitlePreview,
  ReadMore
};
