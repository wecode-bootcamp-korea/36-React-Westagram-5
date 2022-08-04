function imgRender(url) {
  const lis = [];
  for (let i = 0; i < url.length; i++) {
    let s = url[i];
    lis.push(
      <li key={s.src}>
        <img src={s.src} alt="This is story bar" />
        {s.name}
      </li>
    );
  }

  return lis;
}

export default imgRender;
