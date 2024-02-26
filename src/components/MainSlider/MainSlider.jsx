import Slider from "react-slick";
import "./MainSlider.scss";
import peopleData from "../../peopleData";

function MainSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const imgSrc = "/reviews/rate-star.svg";

  const renderStars = (rate) => {
    const stars = [];
    for (let i = 0; i < rate; i++) {
      stars.push(<img key={i} src={imgSrc} />);
    }
    return stars;
  };

  return (
    <section className="Testimotials">
      <div className="slider__container">
        <Slider {...settings}>
          {peopleData.map((user) => {
            return (
              <div key={user.name}>
                <div className="Testimotials__card">
                  <img src={user.img} />
                  <h2>{user.name}</h2>
                  <h3>{user.job}</h3>
                  <div className="Testimotials__rate">
                    {renderStars(user.rate)}
                  </div>
                  <p>{user.review}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}

export default MainSlider;
