import Rating from './Rating';
function DriverCard(props) {
  let car = `${props.car.model} - ${props.car.licensePlate}`;
  //console.log(props.car.model);

  return (
    <div className="bg-sky-500 flex h-40 m-8 rounded-lg w-96">
      <div>
        <img className="h-40 w-40 rounded-full p-4" src={props.img}></img>
      </div>
      <div className=" d-column justify-center aligne-center">
        <p id="name">{props.name}</p>
        <p id="stars">
          <Rating>{props.rating}</Rating>
        </p>
        <p id="car">{car}</p>
      </div>
    </div>
  );
}

export default DriverCard;
