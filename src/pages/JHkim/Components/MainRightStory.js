function MainRightStory(props) {
  let lis = props.onEvent;
  return (
    <>
      <div className={props.className}>
        <ul>{lis}</ul>
      </div>
    </>
  );
}

export default MainRightStory;
