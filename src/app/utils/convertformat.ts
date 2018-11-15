export default {
  dateToYYYYMMDD : (date, splitChar, defaultStr = '-')=>{
    return (date.getTime()) ? (date.getFullYear() + splitChar + (date.getMonth() + 1) + splitChar + date.getDate()) : defaultStr;
  },
  dateToMMDD : (date, splitChar, defaultStr = '-')=>{
    return (date.getTime()) ? ((date.getMonth() + 1) + splitChar + date.getDate()) : defaultStr;
  },
  dateToDDMMYYYY : (date) =>{ //would reformat the number that is less than 10 value into 0X format
    let day = date.getDate() >= 10 ? date.getDate() : '0' + date.getDate();
    let month = (date.getMonth() + 1) >= 10 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1);
    let year = date.getFullYear();

    return day.toString() + month.toString() + year.toString();
  }

}
