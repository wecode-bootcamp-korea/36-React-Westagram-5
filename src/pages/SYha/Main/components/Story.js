function Story() {
  return (
    <div className="story">
      <div className="top_title">
        <p>스토리</p>
        <p>모두보기</p>
      </div>
      <div className="instagralist flex">
        <img
          className="insta_logo img"
          src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
          alt=""
        />
        <p>
          <strong>abab_12345</strong>
          <br />
          <span style={{ color: '#9d9d9d' }}>16분 전</span>
        </p>
      </div>
      <div className="instagralist">
        <img
          className="insta_logo img"
          src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          alt=""
        />
        <p>
          <strong>weCode_1992</strong>
          <br />
          <span style={{ color: '#9d9d9d' }}>3시간 전</span>
        </p>
      </div>
      <div className="instagralist">
        <img
          className="insta_logo img"
          src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80"
          alt=""
        />
        <p>
          <strong>bootcamp_WECode</strong>
          <br />
          <span style={{ color: '#9d9d9d' }}>20시간 전</span>
        </p>
      </div>
    </div>
  );
}

export default Story;
