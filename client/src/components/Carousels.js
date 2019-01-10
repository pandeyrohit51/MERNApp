import React, { Component } from "react";
import {
  Container,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
class Carousels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      animating: false,
      items: [
        {
          src: image1,
          altText: "Slide 1",
          caption: "Slide 1"
        },
        {
          src: image2,
          altText: "Slide 2",
          caption: "Slide 2"
        },
        {
          src: image3,
          altText: "Slide 3",
          caption: "Slide 3"
        },
        {
          src: image4,
          altText: "Slide 4",
          caption: "Slide 4"
        }
      ]
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }
  onExiting = () => {
    this.setState({ animating: true });
  };
  onExited = () => {
    this.setState({ animating: false });
  };
  next() {
    if (this.state.animating) return;
    const nextIndex =
      this.state.activeIndex === this.state.items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.state.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? this.state.items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.state.animating) return;
    this.setState({ activeIndex: newIndex });
  }
  renderSlides = () => {
    return this.state.items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
          className="carousel-custom-class"
        >
          <img
            src={item.src}
            alt={item.altText}
            style={{ height: "500px", width: "100%" }}
          />
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
          />
        </CarouselItem>
      );
    });
  };
  render() {
    return (
      <Container className="mb-5">
        <Carousel
          activeIndex={this.state.activeIndex}
          next={this.next}
          previous={this.previous}
          interval={2000}
        >
          <CarouselIndicators
            items={this.state.items}
            activeIndex={this.state.activeIndex}
            onClickHandler={this.goToIndex}
          />
          {this.renderSlides()}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={this.previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={this.next}
          />
        </Carousel>
      </Container>
    );
  }
}
export default Carousels;
