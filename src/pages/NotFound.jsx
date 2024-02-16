import { Container } from 'components/Container/Container.styled';
import { GoBackLink } from 'components/GoBackLink/GoBackLink.styled';
import image from 'images/not-found.jpg';

const NotFound = () => {
  return (
    <main>
      <section>
        <Container>
          <GoBackLink to="/">
            <p>To home page</p>
          </GoBackLink>

          <img src={image} alt="404 Not found" />
        </Container>
      </section>
    </main>
  );
};

export default NotFound;
