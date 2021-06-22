import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const FooterComponent = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>About SocGen</Heading>
            <FooterLink href="#">Know More...</FooterLink>
          </Column>
          <Column>
            <Heading>About IIHT</Heading>
            <FooterLink href="#">Know More..</FooterLink>
          </Column>
          <Column>
            <Heading>About This StockChartApp</Heading>
            <FooterLink href="#">Know More...</FooterLink>
          </Column>
          <Column>
            <Heading>About Me</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default FooterComponent;