import React from "react";
import Footer from "../components/footer";
import Icon from "../components/icons";
import Header from "../components/header";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Header></Header>
          </Footer.Column>

          <Footer.Column>
            <Footer.Title>Contact Us</Footer.Title>
            <Footer.Link href="#">Phone</Footer.Link>
            <Footer.Link href="#">Fax</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Title>Middle School</Footer.Title>
            <Footer.Link href="#">Monthly Access Plan</Footer.Link>
            <Footer.Link href="#">Flat Fee Tution</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Title>High School</Footer.Title>
            <Footer.Link href="#">Monthly Access Plan</Footer.Link>
            <Footer.Link href="#">Flat Fee Tution</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Title>Social</Footer.Title>
            <Footer.Link href="#">
              <Icon className="fab fa-facebook-f" />
              Facebook
            </Footer.Link>
            <Footer.Link href="#">
              <Icon className="fab fa-instagram" />
              Instagram
            </Footer.Link>
            <Footer.Link href="#">
              <Icon className="fab fa-youtube" />
              Youtube
            </Footer.Link>
            <Footer.Link href="#">
              <Icon className="fab fa-twitter" />
              Twitter
            </Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Title>Accreditation</Footer.Title>
            <Footer.Title>Blog</Footer.Title>
            <Footer.Title>About Us</Footer.Title>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}
