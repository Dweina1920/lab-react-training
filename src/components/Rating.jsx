function Rating({ children }) {
  console.log(children);

  let estrellas = '☆☆☆☆☆';
  if (children < 0.49) {
  } else if (children > 0.49 && children < 1.5) {
    estrellas = '★☆☆☆☆';
  } else if (children > 1.49 && children < 2.5) {
    estrellas = '★★☆☆☆';
  } else if (children > 2.49 && children < 3.5) {
    estrellas = '★★★☆☆';
  } else if (children > 3.49 && children < 4.5) {
    estrellas = '★★★★☆';
  } else {
    estrellas = '★★★★★';
  }

  return <p className="text-4xl">{estrellas}</p>;
}
export default Rating;
