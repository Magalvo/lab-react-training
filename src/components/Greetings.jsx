const Greetings = ({ lang, children }) => {
  let greeting = '';

  switch (lang) {
    case 'fr':
      greeting = `Bonjour ${children}`;
      break;
    case 'de':
      greeting = `Hallo ${children}`;
      break;
    case 'en':
      greeting = `Hello ${children}`;
      break;
    case 'es':
      greeting = `Hola ${children}`;
      break;
    default:
      greeting = `Mékie ${children}`; // Default color if gender is not provided or not recognized
      break;
  }

  return (
    <div
      style={{
        padding: '50px',
        backgroundColor: '#e5dcdc',
        margin: '20px',
        borderRadius: '20px',
      }}
    >
      <h1>{greeting}</h1>
    </div>
  );
};

export default Greetings;
