function OngItem(props) {
  // console.log(props);
  return (
    <div className="OngItem  w-full flex items-end mr-5 ml-5">
      <div className="OngItImg w-50 h-auto p-4 ">
        <img
          src={props.imgage}
          className="bg-black w-auto h-64 border-neutral-950 border-solid border-4"
        />
      </div>
      <p className="text-white text-3xl bg-red-500">{props.descript}</p>
      {/* <span className="text-md w-80">{props.synopsis}</span> */}
    </div>
  );
}

export default OngItem;
