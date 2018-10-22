export default {
  dateToYYYYMMDD : (date, splitChar)=>{
    return date.getFullYear() + splitChar + (date.getMonth() + 1) + splitChar + date.getDate();
  },
  dateToMMDD : (date, splitChar)=>{
    return (date.getMonth() + 1) + splitChar + date.getDate();
  }

}
