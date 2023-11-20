const newsValues = [];

export async function fetchNewsData() {
  try {
    var scriptUrl = "https://script.google.com/macros/s/AKfycbzGDVB1KrosnxhTdX-TsP-_TW6w19PQF2UQ8v3OkPIsu5IZzweF031sKcvYoTKzzlyf/exec";
    // fetchを使用してデータを取得
    const newNewsValues = [];

    const response = await fetch(scriptUrl);
    const jsonData = await response.json();
    const data = jsonData[0].sort((a, b) => {
      const dateA = new Date(a.updateAt);
      const dateB = new Date(b.updateAt);
    
      // b - aで降順ソート
      return dateA - dateB;
    });
    for (let i = 0; i < data.length; i++) {
      let nowTime = new Date(data[i][1]);
      const jpDateTimeFormat = new Intl.DateTimeFormat('ja-JP', {
        timeZone: 'Asia/Tokyo',
        hour12: false,
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      });

      newNewsValues.push({
        content: data[i][0],
        // 日本時間でフォーマットした時刻を取得（時:分）
        updateAt: jpDateTimeFormat.format(nowTime),
      });
    }

    newsValues.splice(0, newsValues.length, ...newNewsValues);
    
    console.log(newsValues);

    return newsValues;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
