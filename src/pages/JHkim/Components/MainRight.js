import imgRender from "./imgRender";
import MainRightStory from "./MainRightStory";
import "./MainRight.scss";
import "./MainRightStory.scss";

function MainRight(props) {
  return (
    <div className="main-right-wrap">
      <div className="main-right">
        <div className="right-profile">
          <h2>
            <img src="img/운명 트로트 2.jpg" alt="" />
          </h2>
          <div>
            <h3>
              <strong>{props.title}</strong>
            </h3>
            <p>{props.title}'S account</p>
          </div>
        </div>
        <MainRightStory className="Right-story" onEvent={imgRender(url)} />
        <MainRightStory className="recommend-story" onEvent={imgRender(url)} />
      </div>
    </div>
  );
}

export default MainRight;

const url = [
  { src: "img/1.png", name: "name1" },
  { src: "img/2.jpg", name: "name2" },
  { src: "img/3.png", name: "name3" },
  { src: "img/4.jfif", name: "name4" },
  { src: "img/5.png", name: "name5" },
  { src: "img/6.jpg", name: "name6" },
];
