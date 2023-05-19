function ColorToHex(color) {
  var hexadecimal = color.toString(16);
  return hexadecimal.length == 1 ? '0' + hexadecimal : hexadecimal;
}
function ConvertRGBtoHex(r, g, b) {
  return '#' + ColorToHex(r) + ColorToHex(g) + ColorToHex(b);
}

function BoxColor(props) {
  let colorHexadecimal = ConvertRGBtoHex(props.r, props.g, props.b);
  let colorRGB = `rgb(${props.r}, ${props.g}, ${props.b})`;
  return (
    <div className="w-96 m-auto my-10" style={{ backgroundColor: `${colorRGB}` }}>
      <p>{colorRGB}</p>
      <p>{colorHexadecimal}</p>
    </div>
  );
}
export default BoxColor;
