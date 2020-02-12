import styled from "styled-components";

interface BannerProps {
  image: string;
}

const Banner = styled.div<BannerProps>`
  width:100%;
  height: 618px;
  background-size: cover;
  background-position: center;
  background-color: #eee;
  background-image: url("${props => props.image}");
  background-attachment: fixed;

  @media screen and (max-width: 1170px) {
    height: 237px;
    background-attachment: initial;
  }
`;

const BlogWrapper = styled.div`
  max-width: 1173px;
  margin: auto;
  margin-top: -155px;
  display: block;
  background-color: #faf5ed;
  padding: 20px;
  margin-bottom: 65px;

  @media screen and (max-width: 1170px) {
    margin-left: 16px;
    margin-right: 16px;
    margin-top: -44px;
  }
`;

const Divider = styled.hr`
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  margin: 28px 253px;

  @media screen and (max-width: 1170px) {
    margin: 28px 15vw;
  }
`;

const BlogBody = styled.div`
  margin: 0 253px;

  font-family: "FFNortLight", sans-serif;
  font-size: 17px;
  font-weight: 300;
  line-height: 1.65;

  @media screen and (max-width: 1170px) {
    margin: auto;
    max-width: 650px;
    font-size: 15px;
    line-height: 1.87;
  }

  & h1 {
    font-family: "FFNortBold", sans-serif;
    font-size: 48px;
    line-height: 1.21;

    @media screen and (max-width: 1170px) {
      font-size: 24px;
      line-height: 1.5;
    }
  }

  & h2 {
    font-family: "FFNortBold", sans-serif;
    font-size: 20px;
    font-style: italic;
    line-height: 1.5;

    @media screen and (max-width: 1170px) {
      font-size: 15px;
      line-height: 1.87;
    }
  }

  & h3 {
    font-family: "FFNortBold", sans-serif;
    font-size: 36px;
    line-height: 1.21;
  }

  & h4 {
    font-family: "FFNortBold", sans-serif;
    font-size: 24px;
    line-height: 1.21;
  }

  & strong {
    font-family: "FFNortBold", sans-serif !important;
  }

  & em {
    font-style: italic;
  }

  & .wysiwyg-underline {
    text-decoration: underline;
  }

  & .wysiwyg-font-size-small {
    font-size: small;
  }

  & .wysiwyg-font-size-normal {
    font-size: normal;
  }

  & .wysiwyg-font-size-large {
    font-size: large;
  }

  & .wysiwyg-font-size-huge {
    font-size: x-large;
  }

  & .wysiwyg-text-align-right {
    text-align: right;
  }

  & .wysiwyg-text-align-left {
    text-align: left;
  }

  & .wysiwyg-text-align-center {
    text-align: center;
  }

  & ol {
    list-style: decimal !important;
  }

  & ul {
    list-style: initial !important;
  }

  & .wysiwyg-color-black {
    color: #000;
  }
  & .wysiwyg-color-black70 {
    color: #4d4d4d;
  }
  & .wysiwyg-color-black60 {
    color: #666666;
  }
  & .wysiwyg-color-black50 {
    color: gray;
  }
  & .wysiwyg-color-black40 {
    color: #999999;
  }
  & .wysiwyg-color-black30 {
    color: #b3b3b3;
  }
  & .wysiwyg-color-black20 {
    color: #cccccc;
  }
  & .wysiwyg-color-black10 {
    color: #e6e6e6;
  }
  & .wysiwyg-color-red {
    color: #f00;
  }
  & .wysiwyg-color-orange {
    color: #f90;
  }
  & .wysiwyg-color-yellow {
    color: #ff0;
  }
  & .wysiwyg-color-green {
    color: #0f0;
  }
  & .wysiwyg-color-cyan {
    color: #0ff;
  }
  & .wysiwyg-color-blue {
    color: #00f;
  }
  & .wysiwyg-color-purple {
    color: #90f;
  }
  & .wysiwyg-color-pink {
    color: #f0f;
  }
  & .wysiwyg-color-red90 {
    color: #ff3333;
  }
  & .wysiwyg-color-red80 {
    color: #ff6666;
  }
  & .wysiwyg-color-red70 {
    color: #ff9999;
  }
  & .wysiwyg-color-red110 {
    color: #cc0000;
  }
  & .wysiwyg-color-red120 {
    color: #990000;
  }
  & .wysiwyg-color-red130 {
    color: #660000;
  }
  & .wysiwyg-color-orange90 {
    color: #ffad33;
  }
  & .wysiwyg-color-orange80 {
    color: #ffc266;
  }
  & .wysiwyg-color-orange70 {
    color: #ffd699;
  }
  & .wysiwyg-color-orange110 {
    color: #cc7a00;
  }
  & .wysiwyg-color-orange120 {
    color: #995c00;
  }
  & .wysiwyg-color-orange130 {
    color: #663d00;
  }
  & .wysiwyg-color-yellow90 {
    color: #ffff33;
  }
  & .wysiwyg-color-yellow80 {
    color: #ffff66;
  }
  & .wysiwyg-color-yellow70 {
    color: #ffff99;
  }
  & .wysiwyg-color-yellow110 {
    color: #cccc00;
  }
  & .wysiwyg-color-yellow120 {
    color: #999900;
  }
  & .wysiwyg-color-yellow130 {
    color: #666600;
  }
  & .wysiwyg-color-green90 {
    color: #33ff33;
  }
  & .wysiwyg-color-green80 {
    color: #66ff66;
  }
  & .wysiwyg-color-green70 {
    color: #99ff99;
  }
  & .wysiwyg-color-green110 {
    color: #00cc00;
  }
  & .wysiwyg-color-green120 {
    color: #009900;
  }
  & .wysiwyg-color-green130 {
    color: #006600;
  }
  & .wysiwyg-color-cyan90 {
    color: #33ffff;
  }
  & .wysiwyg-color-cyan80 {
    color: #66ffff;
  }
  & .wysiwyg-color-cyan70 {
    color: #99ffff;
  }
  & .wysiwyg-color-cyan110 {
    color: #00cccc;
  }
  & .wysiwyg-color-cyan120 {
    color: #009999;
  }
  & .wysiwyg-color-cyan130 {
    color: #006666;
  }
  & .wysiwyg-color-blue90 {
    color: #3333ff;
  }
  & .wysiwyg-color-blue80 {
    color: #6666ff;
  }
  & .wysiwyg-color-blue70 {
    color: #9999ff;
  }
  & .wysiwyg-color-blue110 {
    color: #0000cc;
  }
  & .wysiwyg-color-blue120 {
    color: #000099;
  }
  & .wysiwyg-color-blue130 {
    color: #000066;
  }
  & .wysiwyg-color-purple90 {
    color: #ad33ff;
  }
  & .wysiwyg-color-purple80 {
    color: #c266ff;
  }
  & .wysiwyg-color-purple70 {
    color: #d699ff;
  }
  & .wysiwyg-color-purple110 {
    color: #7a00cc;
  }
  & .wysiwyg-color-purple120 {
    color: #5c0099;
  }
  & .wysiwyg-color-purple130 {
    color: #3d0066;
  }
  & .wysiwyg-color-pink90 {
    color: #ff33ff;
  }
  & .wysiwyg-color-pink80 {
    color: #ff66ff;
  }
  & .wysiwyg-color-pink70 {
    color: #ff99ff;
  }
  & .wysiwyg-color-pink110 {
    color: #cc00cc;
  }
  & .wysiwyg-color-pink120 {
    color: #990099;
  }
  & .wysiwyg-color-pink130 {
    color: #660066;
  }
  & .wysiwyg-font-size-x-large {
    font-size: x-large;
    font-weight: 800;
  }
  & .wysiwyg-font-size-large {
    font-size: large;
    font-weight: 600;
  }
  & .wysiwyg-font-size-medium {
    font-size: small;
  }
  & .wysiwyg-font-size-small {
    font-size: x-small;
  }
  & .wysiwyg-underline {
    text-decoration: underline;
  }
  & .wysiwyg-text-align-right {
    text-align: right;
  }
  & .wysiwyg-text-align-center {
    text-align: center;
  }
  & .wysiwyg-text-align-left {
    text-align: left;
  }
  & .wysiwyg-text-align-justify {
    text-align: justify;
  }
  & .wysiwyg-indent1 {
    padding-left: 10px;
  }
  & [dir="rtl"] & .wysiwyg-indent1 {
    padding-left: auto;
    padding-right: 10px;
  }
  & .wysiwyg-indent2 {
    padding-left: 20px;
  }
  & [dir="rtl"] & .wysiwyg-indent2 {
    padding-left: auto;
    padding-right: 20px;
  }
  & .wysiwyg-indent3 {
    padding-left: 30px;
  }
  & [dir="rtl"] .wysiwyg-indent3 {
    padding-left: auto;
    padding-right: 30px;
  }
  & .wysiwyg-indent4 {
    padding-left: 40px;
  }
  & [dir="rtl"] .wysiwyg-indent4 {
    padding-left: auto;
    padding-right: 40px;
  }
  & .wysiwyg-indent5 {
    padding-left: 50px;
  }
  & [dir="rtl"] .wysiwyg-indent5 {
    padding-left: auto;
    padding-right: 50px;
  }
  & .wysiwyg-indent6 {
    padding-left: 60px;
  }
  & [dir="rtl"] .wysiwyg-indent6 {
    padding-left: auto;
    padding-right: 60px;
  }
  & .wysiwyg-indent7 {
    padding-left: 70px;
  }
  & [dir="rtl"] .wysiwyg-indent7 {
    padding-left: auto;
    padding-right: 70px;
  }
  & .wysiwyg-indent8 {
    padding-left: 80px;
  }
  & [dir="rtl"] .wysiwyg-indent8 {
    padding-left: auto;
    padding-right: 80px;
  }
  & .wysiwyg-indent9 {
    padding-left: 90px;
  }
  & [dir="rtl"] .wysiwyg-indent9 {
    padding-left: auto;
    padding-right: 90px;
  }
  & .wysiwyg-indent10 {
    padding-left: 100px;
  }
  & [dir="rtl"] .wysiwyg-indent10 {
    padding-left: auto;
    padding-right: 100px;
  }
  & .wysiwyg-indent11 {
    padding-left: 110px;
  }
  & [dir="rtl"] .wysiwyg-indent11 {
    padding-left: auto;
    padding-right: 110px;
  }
  & .wysiwyg-indent12 {
    padding-left: 120px;
  }
  & [dir="rtl"] .wysiwyg-indent12 {
    padding-left: auto;
    padding-right: 120px;
  }
  & .wysiwyg-indent13 {
    padding-left: 130px;
  }
  & [dir="rtl"] .wysiwyg-indent13 {
    padding-left: auto;
    padding-right: 130px;
  }
  & .wysiwyg-indent14 {
    padding-left: 140px;
  }
  & [dir="rtl"] .wysiwyg-indent14 {
    padding-left: auto;
    padding-right: 140px;
  }
  & .wysiwyg-indent15 {
    padding-left: 150px;
  }
  & [dir="rtl"] .wysiwyg-indent15 {
    padding-left: auto;
    padding-right: 150px;
  }
  & .wysiwyg-indent16 {
    padding-left: 160px;
  }
  & [dir="rtl"] .wysiwyg-indent16 {
    padding-left: auto;
    padding-right: 160px;
  }
  & .wysiwyg-indent17 {
    padding-left: 170px;
  }
  & [dir="rtl"] .wysiwyg-indent17 {
    padding-left: auto;
    padding-right: 170px;
  }
  & .wysiwyg-indent18 {
    padding-left: 180px;
  }
  & [dir="rtl"] .wysiwyg-indent18 {
    padding-left: auto;
    padding-right: 180px;
  }
  & .wysiwyg-indent19 {
    padding-left: 190px;
  }
  & [dir="rtl"] .wysiwyg-indent19 {
    padding-left: auto;
    padding-right: 190px;
  }
  & .wysiwyg-indent20 {
    padding-left: 200px;
  }
  & [dir="rtl"] .wysiwyg-indent20 {
    padding-left: auto;
    padding-right: 200px;
  }

  & img {
    max-width: 100%;
    height: auto;
  }

  & table {
    width: 110%;
    margin-left: -5%;

    @media screen and (max-width: 1170px) {
      width: 100% !important;
      margin: auto;
      max-width: 700px;
    }
  }
`;

const PostDate = styled.h2`
  font-family: "FFNortBold", sans-serif;
  font-size: 12px;
  color: #ff2369;
  padding-top: 92px;
  padding-bottom: 35px;
  width: 100%;
  text-align: center;

  @media screen and (max-width: 1170px) {
    font-size: 14px;
    padding-top: 35px;
  }
`;

const PostTitle = styled.h1`
  max-width: 496px;
  width: 100%;
  font-family: "FFNortBold", sans-serif;
  font-size: 48px;
  line-height: 1.21;
  text-align: center;
  margin: auto;

  @media screen and (max-width: 1170px) {
    font-size: 24px;
    line-height: 1.5;
  }
`;

const PostSubtitle = styled.h2`
  font-family: "FFNortBold", sans-serif;
  font-size: 20px;
  font-style: italic;
  line-height: 1.5;
  text-align: center;
  margin: auto;
  max-width: 496px;
  width: 100%;
  margin-top: 26px;

  @media screen and (max-width: 1170px) {
    font-size: 15px;
    line-height: 1.87;
  }
`;

const PostFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 80px 253px;

  @media screen and (max-width: 1170px) {
    margin: 80px 0;
  }
`;

const GoBack = styled.a`
  font-size: 12px;
  letter-spacing: 1.64px;
  font-family: "FFNortBold", sans-serif;
  border-bottom: 2px solid #000;
  padding-bottom: 9px;
  color: #000 !important;
  cursor: pointer;

  &:before {
    content: "GO BACK";
  }
`;

export default {
  Banner,
  BlogWrapper,
  Divider,
  BlogBody,
  PostDate,
  PostTitle,
  PostSubtitle,
  PostFooterWrapper,
  GoBack
};
