import { MatrixBackground } from './matrix/index';
import { Wrapper, Header, Description, TextWrapper } from './index.styled';

export const Landing = () => {
  return (
    <Wrapper>
      <MatrixBackground />
      <TextWrapper>
        <Header>MatemMatrix</Header>
        <Description>лучший путь для подготовки к экзаменам</Description>
      </TextWrapper>
    </Wrapper>
  );
};
