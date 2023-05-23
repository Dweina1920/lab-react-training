import visa from '../assets/images/visa.png';
import masterCard from '../assets/images/th (11).jpg';
function CreditCard(props) {
  let numbersOne = props.number.slice(0, 4);
  let numbersTwo = props.number.slice(4, 8);
  let numbersThree = props.number.slice(8, 12);
  let numbersFour = props.number.slice(12, 16);
  let numbersFinal = `${numbersOne.replace(
    numbersOne,
    '••••'
  )} ${numbersTwo.replace(numbersTwo, '••••')} ${numbersThree.replace(
    numbersThree,
    '••••'
  )} ${numbersFour}`;
  //console.log(numbersFinal);
  let dateAndBank = `Expires ${props.expirationMonth}-${props.expirationYear}  ${props.bank}`;
  return (
    <div
      style={{ backgroundColor: `${props.bgColor}` }}
      className="w-96 m-auto my-10 h-44 rounded-md"
    >
      <div className="flex justify-end">
        <img
          className="w-20 p-4 "
          src={props.type === 'Visa' ? visa : masterCard}
        ></img>
      </div>

      <p
        className="text-xl  tracking-widest"
        style={{ color: `${props.color}` }}
      >
        {numbersFinal}
      </p>

      <p className="flex justify-start pl-8 pt-4">{dateAndBank}</p>
      <p className="flex justify-start pl-8">{props.owner}</p>
    </div>
  );
}
export default CreditCard;
