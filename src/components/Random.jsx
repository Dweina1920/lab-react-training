function Random(props) {
  let random = Math.floor(Math.random() * (props.max - props.min) + props.min);
  console.log(random);
  let arrow = '=>';

  return (
    <div className=" border w-96 m-auto my-10 bg-yellow-50 text-left">
      <p>
        Random value between {props.min} and {props.max} {arrow} {random}
      </p>
    </div>
  );
}
export default Random;
