export const formatString = (value: string, type: string) => {
  const number = value.replace(/[^0-9]/g, '');
  let formattedValue = '';
  if (type === 'birth') {
    if (number.length < 4) return value;
    if (number.length < 6) {
      formattedValue += number.slice(0, 4);
      formattedValue += '.';
      formattedValue += number.slice(4);
    } else {
      formattedValue += number.slice(0, 4);
      formattedValue += '.';
      formattedValue += number.slice(4, 6);
      formattedValue += '.';
      formattedValue += number.slice(6);
    }
  } else {
    if (number.length < 3) return value;
    if (number.length < 8) {
      formattedValue += number.slice(0, 3);
      formattedValue += '-';
      formattedValue += number.slice(3);
    } else {
      formattedValue += number.slice(0, 3);
      formattedValue += '-';
      formattedValue += number.slice(3, 7);
      formattedValue += '-';
      formattedValue += number.slice(7);
    }
  }
  return formattedValue;
};
