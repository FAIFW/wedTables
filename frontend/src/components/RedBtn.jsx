const RedBtn = (props) => {
  console.log(props);

  return (
    <a className={props.className} href={props.href}>
      <img className="rings" src={props.img} alt="" />
      <span>{props.text}</span>
    </a>
  );
};

export default RedBtn;
