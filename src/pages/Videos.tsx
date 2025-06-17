import { Container, Flex } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import PageTransition from "../animations/PageTransition";
import ReactPlayer from "react-player";

function Videos() {
  return (
    <Container>
      <Flex direction={"column"}>
        <h1>Christian refutations</h1>
        <Carousel withIndicators height={550}>
          <Carousel.Slide>
            <div
              style={{
                borderRadius: 4,
                backgroundColor: "black",
                height: 550,
                padding: 16,
              }}
            >
              <ReactPlayer
                url={"https://www.youtube.com/watch?v=-V7_AA7AN2U"}
                width="100%"
                height="100%"
                controls
              />
            </div>
          </Carousel.Slide>
        </Carousel>
      </Flex>
      <Flex direction={"column"}>
        <h1>Atheist refutations</h1>
        <Carousel withIndicators height={550}>
          <Carousel.Slide>
            <div
              style={{
                borderRadius: 4,
                backgroundColor: "black",
                height: 550,
                padding: 16,
              }}
            >
              <ReactPlayer
                url={"https://m.youtube.com/watch?v=EiolHD-lfHM"}
                width="100%"
                height="100%"
                controls
              />
            </div>
          </Carousel.Slide>
        </Carousel>
      </Flex>
      <Flex direction={"column"}>
        <h1>Scholarly Commentary</h1>
        <Carousel withIndicators height={550}>
          <Carousel.Slide>
            <div
              style={{
                borderRadius: 4,
                backgroundColor: "black",
                height: 550,
                padding: 16,
              }}
            >
              <ReactPlayer
                url={"https://www.youtube.com/watch?v=soiVsZbR0aE"}
                width="100%"
                height="100%"
                controls
              />
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div
              style={{
                borderRadius: 4,
                backgroundColor: "black",
                height: 550,
                padding: 16,
              }}
            >
              <ReactPlayer
                url={"https://www.youtube.com/watch?v=tIiCoZ86Jy4"}
                width="100%"
                height="100%"
                controls
              />
            </div>
          </Carousel.Slide>
        </Carousel>
      </Flex>
      <Flex direction={"column"}>
        <h1>Tafsir</h1>
        <Carousel withIndicators height={550}>
          <Carousel.Slide>
            <div
              style={{
                borderRadius: 4,
                backgroundColor: "black",
                height: 550,
                padding: 16,
              }}
            >
              <ReactPlayer
                url={"https://www.youtube.com/watch?v=stNp0DBeygI"}
                width="100%"
                height="100%"
                controls
              />
            </div>
          </Carousel.Slide>
        </Carousel>
      </Flex>
    </Container>
  );
}

export default PageTransition(Videos);
