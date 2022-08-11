import Story from './Story';
import Footer from './Footer';
import './MainRight.scss';
import './Footer.scss';

function MainRight({ userName }) {
  return (
    <div className="MainRightWrap">
      <div className="MainRight">
        <div className="RightProfile">
          <h2>
            <img src="images/JHKim/운명 트로트 2.jpg" alt="This is profile" />
          </h2>
          <div>
            <h3>
              <strong>{userName}</strong>
            </h3>
            <p>{userName}'S account</p>
          </div>
        </div>
        <div className="RightStory">
          <Story className={' '} />
        </div>
        <div className="RecommendStory">
          <Story className={' '} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainRight;
