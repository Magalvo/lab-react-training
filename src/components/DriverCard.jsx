import Rating from './Rating';

const DriverCard = ({ name, rating, img, car }) => {
  let turn = rating.toString();

  console.log(rating);

  return (
    <div
      style={{
        padding: '50px',
        backgroundColor: '#455EB5',
        margin: '20px',
        borderRadius: '20px',
      }}
    >
      <div>
        <img
          src={img}
          alt="profile pic"
          style={{ width: '10%', height: '20%', borderRadius: '100%' }}
        />
      </div>
      <div>
        <h1>{name}</h1>
        <Rating>{turn}</Rating>
        <h2>
          {car.model} - {car.licensePlate}
        </h2>
      </div>
    </div>
  );
};

export default DriverCard;
