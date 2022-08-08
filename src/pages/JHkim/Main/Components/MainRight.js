import MainRightStory from './MainRightStory';
import imgRender from './imgRender';
import Footer from './Footer';
import './MainRight.scss';
import './MainRightStory.scss';
import './Footer.scss';

function MainRight({ userName }) {
  return (
    <div className="main-right-wrap">
      <div className="main-right">
        <div className="right-profile">
          <h2>
            <img src="images/JHKim/운명 트로트 2.jpg" alt="" />
          </h2>
          <div>
            <h3>
              <strong>{userName}</strong>
            </h3>
            <p>{userName}'S account</p>
          </div>
        </div>
        <MainRightStory className="Right-story" onEvent={imgRender(url)} />
        <MainRightStory className="recommend-story" onEvent={imgRender(url)} />
      </div>
      <Footer />
    </div>
  );
}

export default MainRight;

const url = [
  { src: 'images/JHKim/1.png', name: 'name1' },
  { src: 'images/JHKim/2.jpg', name: 'name2' },
  { src: 'images/JHKim/3.png', name: 'name3' },
  { src: 'images/JHKim/4.jfif', name: 'name4' },
  { src: 'images/JHKim/5.png', name: 'name5' },
  { src: 'images/JHKim/6.jpg', name: 'name6' },
];
