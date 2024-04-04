
function CountBtn(props) {
    const { name, count, onclick } = props;
    return (
      <button onClick={onclick}>
        <strong>{name}</strong>  {count} times
      </button>
    );
  }

export default CountBtn;