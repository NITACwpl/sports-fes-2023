const delayValues = [];

export async function getDelayNewsData(data) {

  const newDelayValues = [];
  for (let i = 0; i < 9; i++) {
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

  delayValues.splice(0, 9, ...newDelayValues);
  
  console.log(delayValues);

  return delayValues;
}
