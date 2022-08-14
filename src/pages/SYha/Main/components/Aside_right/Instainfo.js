import './Instainfo.scss';

function Instainfo() {
  return (
    <div className="instainfo">
      {INSTA_INFO_LIST.map(item => {
        return <span key={item.id}>{item.text}</span>;
      })}
      <br />
      <span>© 2022 INSTAGRAM</span>
    </div>
  );
}
export default Instainfo;

export const INSTA_INFO_LIST = [
  { id: 1, text: '소개' },
  { id: 2, text: ' · 도움말' },
  { id: 3, text: ' · 홍보센터' },
  { id: 4, text: ' · API' },
  { id: 5, text: ' · 채용 정보' },
  { id: 6, text: ' · 개인정보처리방침' },
  { id: 7, text: ' · 약관' },
  { id: 8, text: ' · 위치' },
  { id: 9, text: ' · 인기 계정' },
  { id: 10, text: ' · 해시태그' },
  { id: 11, text: ' · 언어' },
];
