const delayValues = [];

export async function fetchDelayNewsData() {
  try {
    var scriptUrl = "https://script.google.com/macros/s/AKfycbzGDVB1KrosnxhTdX-TsP-_TW6w19PQF2UQ8v3OkPIsu5IZzweF031sKcvYoTKzzlyf/exec";
    // fetchを使用してデータを取得
    const newDelayValues = [];

    const response = await fetch(scriptUrl);
    const jsonData = await response.json();
    const data = jsonData[1];
    for (let i = 0; i < data.length; i++) {
      let nowTime = new Date(data[i][2]);
      const jpDateTimeFormat = new Intl.DateTimeFormat('ja-JP', {
        timeZone: 'Asia/Tokyo',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
      });

      newDelayValues.push({
        name: data[i][0],
        // 日本時間でフォーマットした時刻を取得（時:分）
        updateAt: jpDateTimeFormat.format(nowTime),
        delay: data[i][1],
      });
    }

    delayValues.splice(0, delayValues.length, ...newDelayValues);
    
    console.log(delayValues);

    return delayValues;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
