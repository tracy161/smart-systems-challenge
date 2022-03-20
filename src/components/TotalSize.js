const TotalSize = ({ data }) => {
  let sum = 0;

  const calculateTotal = (myData) => {
    for (var i = 0; i < myData.length; i++) {
      let obj = myData[i];
      if (obj.children instanceof Array) {
        calculateTotal(obj.children);
      } else {
        if (myData[i].type === 'file') {
          sum += myData[i].size;
        }
      }
    }
  };

  calculateTotal(data);

  const k = 1024;
  const unit = 'MB';

  const i = Math.floor(Math.log(sum) / Math.log(k));
  return parseFloat((sum / Math.pow(k, i)).toFixed(2)) + unit;
};

export default TotalSize;
