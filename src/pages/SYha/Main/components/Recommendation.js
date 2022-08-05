import './Recommendation.scss';

function Recommendation() {
  return (
    <div className="recommendation">
      <div className="top_title">
        <p>회원님을 위한 추천</p>
        <p>모두보기</p>
      </div>
      <div className="instagramlist_wrap">
        <div className="instagramlist">
          <img
            className="insta_logo img"
            src="https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
            alt=""
          />
          <p>
            <strong>seoyul_0203</strong>
            <br />
            <span className="whofollow" style={{ color: '#9d9d9d' }}>
              abcabc_님 외 2명이 팔로우 합니다
            </span>
          </p>
          <button className="follow">팔로우</button>
        </div>
        <div className="instagramlist">
          <img
            className="insta_logo img"
            src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
            alt=""
          />
          <p>
            <strong>annyeongHa__</strong>
            <br />
            <span className="whofollow" style={{ color: '#9d9d9d' }}>
              wecodewecode님 외 3명이 팔로우 합니다.
            </span>
          </p>
          <button className="follow">팔로우</button>
        </div>
        <div className="instagramlist">
          <img
            className="insta_logo img"
            src="https://media.istockphoto.com/photos/cute-terrier-dog-wearing-sunglasses-picture-id1387035098?b=1&k=20&m=1387035098&s=170667a&w=0&h=UFbN7aJy-n3QWxlgL7V1h5vzoadNDiF3wkKWqYH5mf8="
            alt=""
          />
          <p>
            <strong>dahaetda_WECode</strong>
            <br />
            <span className="whofollow" style={{ color: '#9d9d9d' }}>
              hihiwecode__ 외 5명이 팔로우 합니다.
            </span>
          </p>
          <button className="follow">팔로우</button>
        </div>
        <div className="instagramlist">
          <img
            className="insta_logo img"
            src="https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
            alt=""
          />
          <p>
            <strong>seoyul_0203</strong>
            <br />
            <span className="whofollow" style={{ color: '#9d9d9d' }}>
              abcabc_님 외 2명이 팔로우 합니다
            </span>
          </p>
          <button className="follow">팔로우</button>
        </div>
        <div className="instagramlist">
          <img
            className="insta_logo img"
            src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
            alt=""
          />
          <p>
            <strong>annyeongHa__</strong>
            <br />
            <span className="whofollow" style={{ color: '#9d9d9d' }}>
              wecodewecode님 외 3명이 팔로우 합니다.
            </span>
          </p>
          <button className="follow">팔로우</button>
        </div>
        <div className="instagramlist">
          <img
            className="insta_logo img"
            src="https://media.istockphoto.com/photos/cute-terrier-dog-wearing-sunglasses-picture-id1387035098?b=1&k=20&m=1387035098&s=170667a&w=0&h=UFbN7aJy-n3QWxlgL7V1h5vzoadNDiF3wkKWqYH5mf8="
            alt=""
          />
          <p>
            <strong>dahaetda_WECode</strong>
            <br />
            <span className="whofollow" style={{ color: '#9d9d9d' }}>
              hihiwecode__ 외 5명이 팔로우 합니다.
            </span>
          </p>
          <button className="follow">팔로우</button>
        </div>
      </div>
    </div>
  );
}

export default Recommendation;
