const delayValues = [];
export function fetchDelayNewsData() {
    var scriptUrl = import.meta.env.PUBLIC_GOOGLE_API_KEY;
    // fetchを使用してデータを取得
    const newDelayValues = [];
    fetch(scriptUrl)
      .then(response => response.json())
      .then(data => {
  
      for (let i = 1; i < data.length; i++) {
        let nowTime = new Date(data[i][2]);
        newDelayValues.push({
          name: data[i][0],
          updateAt: nowTime.getHours() + ":" + nowTime.getMinutes(),
          delay: data[i][1],
        });
      }
      delayValues.splice(0, delayValues.length, ...newDelayValues)
      })
      .catch(error => alert('Error:', error));
      console.log(delayValues);
    return delayValues;
}