const IdCard = (props) => {
  let color = '';

  switch (props.gender) {
    case 'Female':
      color = 'lightpink';
      break;
    case 'Male':
      color = 'lightblue';
      break;
    default:
      color = 'black'; // Default color if gender is not provided or not recognized
      break;
  }

  return (
    <div>
      <div
        style={{
          padding: '50px',
          backgroundColor: '#e5dcdc',
          margin: '20px',
          borderRadius: '20px',
        }}
      >
        <img
          style={{ borderRadius: '65px', border: '2px solid grey' }}
          src={props.picture}
          alt="weirdoDude"
        />
        <div
          style={{
            border: '2px solid grey',
            backgroundColor: 'white',
            borderRadius: '20px',
          }}
        >
          <h1>
            {' '}
            Name: {props.firstName} {props.lastName}
          </h1>
          <h3 style={{ color }}>Gender:{props.gender}</h3>
          <h3>Height: {props.height}</h3>
          <h3>Birth: {props.birth}</h3>
        </div>
      </div>
    </div>
  );
};

export default IdCard;
