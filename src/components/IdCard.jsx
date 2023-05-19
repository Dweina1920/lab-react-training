function IdCard(props) {
  let birth = props.birth;
  const day = birth.toLocaleString('en-us', { weekday: 'short' });
  const month = birth.toLocaleString('en-us', { month: 'short' });
  const dayOfBirth = birth.getDate();
  const yearOfBirth = birth.getFullYear();

  const fullDate = `${day} ${month} ${dayOfBirth} ${yearOfBirth}`;
  console.log(fullDate);

  return (
    <div className="flex justify-around aligne-center border w-96 m-auto my-10">
      <div>
        <img src={props.picture}></img>
      </div>
      <div className="column justify-center aligne-center m-auto">
        <p>
          name: {props.firstName} {props.lastName}
        </p>
        <p>gender:{props.gender}</p>
        <p>birth:{fullDate}</p>

        <p>height: {props.height}cm</p>
      </div>
    </div>
  );
}
export default IdCard;
