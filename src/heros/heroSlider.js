import React from "react"
import styled from "styled-components"
import { ButtonPrimary } from "components/buttons"
import { Container, HeroBannerPadding } from "components/layoutComponents"

import { Carousel } from "react-bootstrap/Carousel"
import { CarouselItem, CarouselCaption } from "react-bootstrap"

// import PortfolioBanner from "../portfolioBanner"

const Wrapper = styled.div`
  padding-bottom: 4em;
  p {
    margin-bottom: 0;
  }
`

const HeroGrid = styled.div`
  display: grid;
  grid-template-rows: auto auto;
`

const HeroWrapper = styled.div`
  grid-row: 1 / -1;
  grid-column: 1 / -1;
  z-index: 1;
  .carousel-indicators {
    margin-bottom: 4rem;
  }
`

const HeroBottomText = styled.div`
  grid-row: 2 / -1;
  grid-column: 1 / -1;
  z-index: 2;

  background: var(--clr-dark);
  color: var(--txt-light);
  padding: 2em;
  width: 80%;
`

const Content = styled.div`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    background: rgba(0, 0, 0, 0.1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`

const Content1 = styled.div`
  background: url("../../images/outdoor-living-slider.jpg"), rgba(0, 0, 0, 0);
  background-blend-mode: overlay;
  background-position: center;
  height: 90vh;
  background-size: cover;
  background-repeat: no-repeat;
`
const Content2 = styled.div`
  background: url("../../images/hardscaping-slider.jpg"), rgba(0, 0, 0, 0);
  background-blend-mode: overlay;
  background-position: center;
  height: 90vh;
  background-size: cover;
  background-repeat: no-repeat;
`
const Content3 = styled.div`
  background: url("../../images/softscaping-slider.png"), rgba(0, 0, 0, 0);
  background-blend-mode: overlay;
  background-position: center;
  height: 90vh;
  background-size: cover;
  background-repeat: no-repeat;
`

const captionStyle = {
  textAlign: "left",
  display: "flex",
  alignItems: "center",
  height: "90%",
  left: "12%",
  color: "var(--txt-light)",
  textShadow: "-3px 3px 3px #000000",
}

export default function HeroSlider() {
  return (
    <Wrapper>
      <HeroBannerPadding />
      <HeroGrid>
        <HeroWrapper>
          <Carousel>
            <CarouselItem interval={5000}>
              <Content>
                <Content1 className="d-block w-100" />
              </Content>
              <CarouselCaption style={captionStyle} className="spacing">
                <div className="spacing">
                  <h2 className="title">outdoor living done right</h2>
                  <p className="subheader tan">Where outdoor living happens</p>
                  <ButtonPrimary href="/residential-services/outdoor-living">
                    get started &#8594;
                  </ButtonPrimary>
                </div>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem interval={5000}>
              <Content>
                <Content2 className="d-block w-100" />
              </Content>
              <CarouselCaption style={captionStyle} className="spacing">
                <div className="spacing">
                  <h2 className="title">hardscaping services</h2>
                  <p className="subheader tan">
                    Create a Stunning Outdoor Oasis with Our Hardscaping
                    Services
                  </p>
                  <ButtonPrimary href="/residential-services/hardscaping">
                    get started &#8594;
                  </ButtonPrimary>
                </div>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem interval={5000}>
              <Content>
                <Content3 className="d-block w-100" />
              </Content>
              <CarouselCaption style={captionStyle} className="spacing">
                <div className="spacing">
                  <h2 className="title">softscaping services</h2>
                  <p className="subheader tan">Bring your backyard to life</p>
                  <ButtonPrimary href="/residential-services/softscaping">
                    get started &#8594;
                  </ButtonPrimary>
                </div>
              </CarouselCaption>
            </CarouselItem>
          </Carousel>
        </HeroWrapper>
        <HeroBottomText>
          <Container>
            <p>
              Transform your outdoor space into a serene haven with our unique
              landscaping services. From custom design to expert installation,
              our team of experts will help you create a personalized and
              functional living space that showcases your personality and style.
              Get started with your transformation today!
            </p>
          </Container>
        </HeroBottomText>
      </HeroGrid>
      {/* <PortfolioBanner /> */}
    </Wrapper>
  )
}
