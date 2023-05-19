function IdCard(props) {
  let birth = props.birth;
  

  const fullDate = birth.toDateString();
  return (
    <div className="flex justify-around aligne-center border w-96 m-auto my-10 bg-yellow-50 text-left">
      <div>
        <img src={props.picture}></img>
      </div>
      <div className="column justify-center aligne-center m-auto">
        <p>
          Name: {props.firstName} {props.lastName}
        </p>
        <p>Gender: {props.gender}</p>
        <p>Birth: {fullDate}</p>

        <p>Height: {props.height/100 + "m"}</p>
      </div>
    </div>
  );
}
export default IdCard;
