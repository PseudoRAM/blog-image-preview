import * as React from "react";
import Styled from "./styled";

interface Props {
  image: any;
  onBack: any;
}

const BlogPost = ({ image, onBack }: Props) => (
  <React.Fragment>
    <Styled.Banner image={image} />
    <Styled.BlogWrapper>
      <Styled.PostDate>27 NOVEMBER 2020</Styled.PostDate>
      <Styled.PostTitle>
        This is a blog preview to test image placement
      </Styled.PostTitle>
      <Styled.Divider />
      <Styled.BlogBody>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        vulputate justo vel dui iaculis, et porta diam mattis. Nulla porttitor
        facilisis accumsan. Curabitur vel neque nulla. Etiam tristique facilisis
        elit. Duis a lacus auctor augue tincidunt auctor ut ut leo. Sed auctor,
        justo vitae dictum ornare, mauris massa auctor sem, eget interdum ex
        eros vel mauris. Phasellus imperdiet, eros suscipit viverra dignissim,
        justo ex consequat nibh, id venenatis mi nisi eget ligula. Proin ac
        lacus a nunc feugiat tristique. Etiam rhoncus cursus sapien id euismod.
        <br />
        <br />
        Ut ac ante et turpis ultrices consectetur sit amet maximus lacus. Donec
        dignissim auctor velit sodales egestas. Morbi interdum orci in est
        placerat ultricies. Aenean ac quam lacus. Morbi suscipit nulla vel
        rhoncus venenatis. Nulla malesuada, erat eget pulvinar suscipit, magna
        ante dictum nisi, rhoncus blandit orci purus ut mauris. Vivamus magna
        augue, ultricies vitae tellus in, rhoncus feugiat felis. Proin ac cursus
        nunc. Donec ligula tortor, rutrum ac laoreet nec, posuere et tellus.
        Nulla sit amet consequat nulla. Nam finibus libero vel dui consectetur
        tincidunt. <br />
        <br />
        Nunc eros odio, rutrum ut enim at, condimentum vestibulum tellus. Duis
        vulputate libero aliquam elementum gravida. Phasellus rutrum metus id
        nunc euismod convallis. Phasellus rutrum, ipsum nec elementum malesuada,
        elit nisi hendrerit neque, vel condimentum nisl nunc ut odio. Sed luctus
        risus felis, rutrum pretium mi ornare fermentum. Aliquam aliquet
        facilisis elit eget consectetur. Duis ut metus et metus lacinia lacinia.
        Morbi nec aliquet mauris, at consequat turpis. Fusce id mauris sit amet
        lectus porta vehicula at non ligula. Praesent condimentum convallis arcu
        sit amet rhoncus. Nunc pellentesque vulputate sapien ac interdum. Cras
        gravida purus eget convallis elementum. Maecenas in metus id augue
        tempor placerat nec vitae tortor. Sed viverra, tortor eu tristique
        gravida, orci odio rhoncus elit, a ullamcorper nibh tortor at elit.
        Vestibulum ut tempor justo. Suspendisse ante tortor, dictum vitae ex et,
        laoreet aliquam mauris. Ut pulvinar ex at urna efficitur, vitae sagittis
        felis interdum. Phasellus fermentum fringilla nulla. Duis ultrices,
        augue in iaculis rutrum, diam nibh blandit metus, sed consectetur libero
        risus ut mi. Duis nibh velit, imperdiet et dolor at, euismod mattis
        odio.
      </Styled.BlogBody>
      <Styled.PostFooterWrapper>
        <Styled.GoBack onClick={onBack} />
      </Styled.PostFooterWrapper>
    </Styled.BlogWrapper>
  </React.Fragment>
);

export default BlogPost;
