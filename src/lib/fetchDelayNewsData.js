const delayValues = [];

export async function fetchDelayNewsData() {
  try {
    var scriptUrl = import.meta.env.PUBLIC_GOOGLE_API_KEY;
    // fetchを使用してデータを取得
    const newDelayValues = [];

    const response = await fetch(scriptUrl);
    const data = await response.json();
    for (let i = 1; i < data.length; i++) {
      let nowTime = new Date(data[i][2]);
      newDelayValues.push({
        name: data[i][0],
        updateAt: nowTime.getHours() + ":" + nowTime.getMinutes(),
        delay: data[i][1],
      });
      console.log("data", data[i][0], data[i][1], data[i][2]);
    }

    delayValues.splice(0, delayValues.length, ...newDelayValues);
    console.log(delayValues);

    return delayValues;
  } catch (error) {
    console.error('Error:', error);
    throw error; // エラーを再スローして呼び出し元でハンドリングできるようにする
  }
}
