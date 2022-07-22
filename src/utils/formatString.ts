import { InputNameEnum } from '@/@types/enum';

export const getFormattedString = {
  birth: (value: string) => {
    return value
      .replace(/^(\d{0,4})(\d{0,2})(\d{0,2})$/g, '$1.$2.$3')
      .replace(/\.{1,2}$/g, '');
  },
  phone: (value: string) => {
    return value
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
      .replace(/\-{1,2}$/g, '');
  },
};

export const formatString = (value: string, type: string) => {
  let formattedValue = value;
  if (type === InputNameEnum.BIRTH || type === InputNameEnum.PHONE) {
    formattedValue = getFormattedString[type](value);
  }
  return formattedValue;
};
