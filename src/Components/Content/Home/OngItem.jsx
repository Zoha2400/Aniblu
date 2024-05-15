function OngItem(props) {
  // console.log(props);
  return (
    <div className="OngItem  w-full flex">
      <div className="OngItImg w-50 h-auto">
        <img src={props.imgage} className="bg-black w-auto h-64" />
      </div>
      <p>{props.descript}</p>
      <span>{props.name}</span>
    </div>
  );
}

export default OngItem;
