export default {
  dateToYYYYMMDD : (date, splitChar, defaultStr = '-')=>{
    return (date.getTime()) ? (date.getFullYear() + splitChar + (date.getMonth() + 1) + splitChar + date.getDate()) : defaultStr;
  },
  dateToMMDD : (date, splitChar, defaultStr = '-')=>{
    return (date.getTime()) ? ((date.getMonth() + 1) + splitChar + date.getDate()) : defaultStr;
  }

}
