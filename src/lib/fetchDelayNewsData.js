const delayValues = [];

export async function fetchDelayNewsData() {
  try {
    var scriptUrl = "https://script.google.com/macros/s/AKfycbzGDVB1KrosnxhTdX-TsP-_TW6w19PQF2UQ8v3OkPIsu5IZzweF031sKcvYoTKzzlyf/exec";
    // fetchを使用してデータを取得
    const newDelayValues = [];

    const response = await fetch(scriptUrl);
    const jsonData = await response.json();
    const data = jsonData[1];
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      let nowTime = new Date(data[i][2]);
      newDelayValues.push({
        name: data[i][0],
        updateAt: nowTime.getHours() + ":" + nowTime.getMinutes(),
        delay: data[i][1],
      });
    }

    delayValues.splice(0, delayValues.length, ...newDelayValues);

    return delayValues;
    return [];
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
