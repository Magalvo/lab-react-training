const Rating = ({ children }) => {
  let stars = '';

  function checkNumberRange(number) {
    if (number >= 0 && number <= 0.99) {
      stars = '☆☆☆☆☆';
      return stars;
    } else if (number >= 1 && number <= 1.8) {
      stars = '★☆☆☆☆';
      return stars;
    } else if (number >= 2 && number <= 2.8) {
      stars = '★★☆☆☆';
      return stars;
    } else if (number >= 3 && number <= 3.8) {
      stars = '★★★☆☆';
      return stars;
    } else if (number >= 4 && number <= 4.8) {
      stars = '★★★★☆';
      return stars;
    } else if (number == 5 || number == 4.9) {
      stars = '★★★★★';
      return stars;
    } else {
      return number;
    }
  }

  checkNumberRange(children);

  return (
    <div
      style={{
        padding: '50px',
        backgroundColor: 'gold',
        margin: '20px',
        borderRadius: '20px',
      }}
    >
      <h1>{stars}</h1>
    </div>
  );
};

export default Rating;
