const Random = ({ min, max }) => {
  let rand = Math.floor(Math.random() * (max - min) + min);

  return (
    <div
      style={{
        padding: '50px',
        backgroundColor: '#e5dcdc',
        margin: '20px',
        borderRadius: '20px',
      }}
    >
      <h1>
        Random Number Between {min} and {max} : {rand}
      </h1>
    </div>
  );
};

export default Random;
