import { Link } from "react-router-dom";
import Wave from "react-wavify";
import "./HomePage.css";
import { Container, Row, Col } from "react-bootstrap";
function HomePage() {
  return (
    <>
      <section
        style={{
          background:
            "linear-gradient(0deg, rgb(42, 44, 57) 0%, rgb(51, 54, 74) 100%)",
          width: "100%",
          overflow: "hidden",
          position: "relative",
          padding: "0",

          flexDirection: "column",
        }}
      >
        <Link to="/shop" className="waveIcon">
          Welcome My Shop
        </Link>{" "}
        <Wave
          style={{
            marginTop: "200px",
            height: "200px",
          }}
          fill="#fff"
          paused={false}
          options={{
            amplitude: 50,
            speed: 0.2,
            points: 3,
          }}
        />
      </section>

      <section class="about">
        <Container>
          <div
            className="sectionTitle aos-init aos-animate"
            data-aos="zoom-out"
          >
            <h2>About</h2>
            <p>Who we are</p>
          </div>

          <Row className="row content aos-init" data-aos="fade-up">
            <Col lg="6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <i className="ri-check-double-line"></i> Ullamco laboris nisi
                  ut aliquip ex ea commodo consequat
                </li>
                <li>
                  <i className="ri-check-double-line"></i> Duis aute irure dolor
                  in reprehenderit in voluptate velit
                </li>
                <li>
                  <i className="ri-check-double-line"></i> Ullamco laboris nisi
                  ut aliquip ex ea commodo consequat
                </li>
              </ul>
            </Col>
            <Col lg="6" className="pt-4 pt-lg-0">
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <Link to="https://github.com/rajbi1380" className="btnLearnMore">
                Learn More
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default HomePage;
