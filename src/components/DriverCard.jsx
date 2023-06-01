import Rating from './Rating';
function DriverCard(props) {
  let car = `${props.car.model} - ${props.car.licensePlate}`;
  //console.log(props.car.model);

  return (
    <div className="bg-sky-500 flex h-40 m-8 rounded-lg w-96">
      <div>
        <img className="h-40 w-40 rounded-full p-4" src={props.img}></img>
      </div>
      <div className=" d-column justify-center aligne-center pt-8">
        <p id="name" className='text-left'>{props.name}</p>
        
          <Rating>{props.rating}</Rating>
        
        <p id="car " className='text-left'>{car}</p>
      </div>
    </div>
  );
}

export default DriverCard;
