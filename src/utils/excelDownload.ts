const INDEX_OF_REGION = 5;
const INDEX_OF_PHONE = 6;
const INDEX_OF_TRANSPORTATION = 8;
const DOWNLOAD_FILE_NAME_PREFIX = 'apply_user_';

const formatProperDataForCsv = <T>(info: T) => {
  return Object.values(info)
    .map((value, index) => {
      switch (index) {
        case INDEX_OF_REGION:
          return Object.values(value).join(' ');
        case INDEX_OF_PHONE:
          return `="${value}"`;
        case INDEX_OF_TRANSPORTATION:
          return Object.values(value).join('/');
        default:
          return value;
      }
    })
    .join(',');
};

const makeCSVFormat = <T>(data: T[]): string => {
  const csvRows = [];
  const headers = Object.keys(data[0]);
  csvRows.push(headers.join(','));

  const values = Object.values(data);
  for (let info of values) {
    csvRows.push(formatProperDataForCsv(info));
  }

  return csvRows.join('\n');
};

const padTo2Digit = (num: number) => {
  return num.toString().padStart(2, '0');
};

const formatDate = (date: Date) => {
  return (
    [
      date.getFullYear(),
      padTo2Digit(date.getMonth() + 1),
      padTo2Digit(date.getDate()),
    ].join('') +
    '_' +
    [
      padTo2Digit(date.getHours()),
      padTo2Digit(date.getMinutes()),
      padTo2Digit(date.getSeconds()),
    ].join('')
  );
};

const getDefaultDownloadFileName = () => {
  return `${DOWNLOAD_FILE_NAME_PREFIX}${formatDate(new Date())}`;
};

export const downloadCSV = <T>(data: T[]) => {
  const csvData = makeCSVFormat(data);
  const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const aElement = document.createElement('a');
  aElement.setAttribute('href', url);
  aElement.setAttribute('download', getDefaultDownloadFileName());
  aElement.click();
};
