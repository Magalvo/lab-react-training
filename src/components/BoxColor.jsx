const BoxColor = ({ r, g, b }) => {
  function componentToHex(e) {
    let hex = e.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  return (
    <div
      style={{
        padding: '50px',
        backgroundColor: `rgb(${r},${g},${b})`,
        margin: '20px',
        borderRadius: '20px',
      }}
    >
      <h1>
        RGB({r},{g},{b}) <br />
        {rgbToHex(r, g, b)}
      </h1>
    </div>
  );
};

export default BoxColor;
