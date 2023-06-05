import visa from '../assets/images/visa.png';
import master from '../assets/images/mastercard.png';

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  let types = '';

  switch (type) {
    case 'Visa':
      types = visa;
      break;
    case 'Master Card':
      types = master;
      break;
    default:
      types = visa;
      break;
  }

  function maskString(number) {
    if (number.length <= 4) {
      return number;
    } else {
      let masked = '*'.repeat(number.length - 4);
      return masked + number.slice(-4);
    }
  }
  let maskedString = maskString(number);

  function slicedYear(expirationYear) {
    let e = expirationYear.toString().slice(-2);
    return e;
  }

  let sliced = slicedYear(expirationYear);

  return (
    <div
      style={{
        color: color,
        padding: '50px',
        backgroundColor: bgColor,
        margin: '20px',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'column',
        width: '33%',
        heigth: '',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <img src={types} alt={type} style={{ width: '30%', height: '30%' }} />
      </div>
      <div style={{ alignSelf: 'center' }}>
        <h1>{maskedString}</h1>
      </div>
      <br />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <h3>
          Expires: {expirationMonth}/{sliced} {bank} <br /> <span>{owner}</span>
        </h3>
      </div>
    </div>
  );
};

export default CreditCard;
