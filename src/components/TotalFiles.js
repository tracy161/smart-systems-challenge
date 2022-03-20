const TotalFiles = ({ data }) => {
  let result = 0;

  const calculateTotal = (myData) => {
    for (var i = 0; i < myData.length; i++) {
      let obj = myData[i];
      if (obj.children instanceof Array) {
        calculateTotal(obj.children);
      } else {
        if (obj.type === 'file') {
          result++;
        }
      }
    }
  };

  calculateTotal(data);

  return result;
};

export default TotalFiles;
