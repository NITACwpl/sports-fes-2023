const delayValues = [];
export function fetchDelayNewsData() {
    var scriptUrl = 'https://script.google.com/macros/s/AKfycbx54LjQ1sxSesCf4-lPzP9biO-WK3g8pgRmGApAaMAVJJJsrr1o-cw9N8LjROJO--x8/exec';
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
      console.log(delayValues);
      })
      .catch(error => console.error('Error:', error));

    return delayValues;
}