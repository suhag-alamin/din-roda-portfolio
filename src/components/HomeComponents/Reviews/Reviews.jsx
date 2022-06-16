import { Card, Container } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Rating from "react-rating";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import client1 from "../../../images/client-1.svg";
import client2 from "../../../images/client-2.svg";
import client3 from "../../../images/client-3.svg";
import "./Reviews.css";

// slider next prev
const PreviousBtn = (props) => {
  const { onClick } = props;
  return (
    <div className={"reviewPreviousArrow"} onClick={onClick}>
      <IoIosArrowBack />
    </div>
  );
};
const NextBtn = (props) => {
  const { onClick } = props;
  return (
    <div className={"reviewNextArrow"} onClick={onClick}>
      <IoIosArrowForward />
    </div>
  );
};

const reviews = [
  {
    id: 1,
    name: "Mary Doe",
    title: "Business Owner",
    img: client1,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis aliquam nulla dictumst vulputate elit consequat turpis. Tincidunt commodo posuere commodo velit nunc eget dis diam justo. A adipiscing ut aliquam ut id elit auctor. Eget tincidunt nibh est scelerisque cursus suspendisse eu cras. Augue ut.",
    star: 4,
  },
  {
    id: 2,
    name: "Martha Paul",
    title: "Business Owner",
    img: client2,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis aliquam nulla dictumst vulputate elit consequat turpis. Tincidunt commodo posuere commodo velit nunc eget dis diam justo. A adipiscing ut aliquam ut id elit auctor. Eget tincidunt nibh est scelerisque cursus suspendisse eu cras. Augue ut.",
    star: 4,
  },
  {
    id: 3,
    name: "Harrry White",
    title: "Business Owner",
    img: client3,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis aliquam nulla dictumst vulputate elit consequat turpis. Tincidunt commodo posuere commodo velit nunc eget dis diam justo. A adipiscing ut aliquam ut id elit auctor. Eget tincidunt nibh est scelerisque cursus suspendisse eu cras. Augue ut.",
    star: 3,
  },
  {
    id: 4,
    name: "Mary Doe",
    title: "Business Owner",
    img: client1,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis aliquam nulla dictumst vulputate elit consequat turpis. Tincidunt commodo posuere commodo velit nunc eget dis diam justo. A adipiscing ut aliquam ut id elit auctor. Eget tincidunt nibh est scelerisque cursus suspendisse eu cras. Augue ut.",
    star: 5,
  },
];

const Reviews = () => {
  // slider
  const settings = {
    dots: false,
    infinite: false,
    lazyLoad: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextBtn />,
    prevArrow: <PreviousBtn />,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="reviews-section">
      <Container className="py-5">
        <h3 className="section-title">REVIEWS</h3>
        <div>
          <Slider {...settings}>
            {reviews.map((review) => (
              <Card className="single-slide p-3" key={review.id}>
                <div className="d-flex gap-3 align-items-center">
                  <Card.Img
                    variant="top"
                    className="client-img"
                    src={review.img}
                  />
                  <div>
                    <h3 className="client-name">{review.name}</h3>
                    <h4 className="client-title">{review.title}</h4>
                    <Rating
                      emptySymbol={<AiFillStar color="#D9D9D9" />}
                      fullSymbol={<AiFillStar color="#ffb400" />}
                      readonly={true}
                      initialRating={review.star}
                    />
                  </div>
                </div>
                <Card.Body>
                  <Card.Text className="client-review">
                    {review.review}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Reviews;
