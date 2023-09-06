const ToTables = (props) => {
  console.log(props);

  return (
    <a className="toTables" href="/tables.html">
      <img src={props.img} alt="" />
      <span>{props.text}</span>
    </a>
  );
};

export default ToTables;
