import "./Story.scss";

function Story(props) {
  let lis = props.onEvent;
  return (
    <>
      <div className="story">
        <ul>{lis}</ul>
      </div>
    </>
  );
}

export default Story;
