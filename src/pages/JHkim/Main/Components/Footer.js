import { FOOTER_INFO_LIST } from '../../data/Footer';

function Footer() {
  return (
    <footer>
      <ul>
        {FOOTER_INFO_LIST.map(info => {
          return (
            <li key={info.id} id={info.id}>
              <a href={info.link}>{info.text}</a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}

export default Footer;
