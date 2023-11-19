const timeTableValues = [];

export async function fetchTimeTableData(sportId) {
  try {
    var scriptUrl = "https://script.google.com/macros/s/AKfycbzGDVB1KrosnxhTdX-TsP-_TW6w19PQF2UQ8v3OkPIsu5IZzweF031sKcvYoTKzzlyf/exec";
    // fetchを使用してデータを取得
    const newTimeTableValues = [];

    const response = await fetch(scriptUrl);
    let allData = await response.json();
    let sportData = [];

    switch (sportId) {
        // 2: Basket
        case "BasketD1F":
            allData = allData[2];
            sportData = [
                allData[0], allData[2], allData[4], allData[6], allData[8], allData[10], allData[12], allData[14], allData[16], allData[17], allData[19]
            ];
            break;
        case "BasketD1B":
            allData = allData[2];
            sportData = [
                allData[1], allData[3], allData[5], allData[7], allData[9], allData[11], allData[13], allData[15], allData[18]
            ];
            break;
        // 3: TableTennis
        case "TableTennisD1A":
            allData = allData[3];
            sportData = [
                allData[0], allData[2], allData[4], allData[6], allData[8], allData[10], allData[12], allData[14], allData[16], allData[17], allData[19]
            ];
            break;
        case "TableTennisD1B":
            allData = allData[3];
            sportData = [
                allData[1], allData[3], allData[5], allData[7], allData[9], allData[11], allData[13], allData[15], allData[18]
            ];
            break;
        // 4: Tennis
        case "TennisD1F":
            allData = allData[4];
            sportData = [
                allData[0], allData[3], allData[6], allData[9], allData[12], allData[15], allData[17], allData[19]
            ];
            break;
        case "TennisD1C":
            allData = allData[4];
            sportData = [
                allData[1], allData[4], allData[7], allData[10], allData[13], allData[16], allData[18]
            ];
            break;
        case "TennisD1B":
            allData = allData[4];
            sportData = [
                allData[2], allData[5], allData[8], allData[11], allData[14]
            ];
            break;
        // 5: Soft
        case "SoftD101":
            allData = allData[5];
            sportData = [
                allData[0], allData[2], allData[4], allData[6], allData[8], allData[10], allData[12]
            ];
            break;
        case "SoftD102":
            allData = allData[5];
            sportData = [
                allData[1], allData[3], allData[5], allData[7], allData[9], allData[11], allData[13]
            ];
            break;
        case "SoftD201":
            allData = allData[5];
            sportData = [
                allData[14], allData[16], allData[17], allData[19]
            ];
            break;
        case "SoftD202":
            allData = allData[5];
            sportData = [
                allData[15], allData[18]
            ];
            break;
        // 6: Soccer
        case "SoccerD1":
            allData = allData[6];
            sportData = [
                allData[0], allData[1], allData[2], allData[3], allData[4], allData[5], allData[6], allData[7], allData[8], allData[9], allData[10], allData[11], allData[12], allData[13]
            ];
            break;
        case "SoccerD2":
            allData = allData[6];
            sportData = [
                allData[14], allData[15], allData[16], allData[17], allData[18], allData[19]
            ];
            break;
        // 7: Badminton
        case "BadmintonD201":
            allData = allData[7];
            sportData = [
                allData[0], allData[2], allData[4], allData[6], allData[8], allData[10], allData[12], allData[14], allData[16], allData[17], allData[19]
            ];
            break;
        case "BadmintonD202":
            allData = allData[7];
            sportData = [
                allData[1], allData[3], allData[5], allData[7], allData[9], allData[11], allData[13], allData[15], allData[18]
            ];
            break;
        // 8: Volley
        case "ValleyD2":
            allData = allData[8];
            sportData = [
                allData[0], allData[1], allData[2], allData[3], allData[4], allData[5], allData[6], allData[7]
            ];
            break;
        default:
            sportData = [[0, 0]];
            break;
    }
    for (let i = 0; i < sportData.length; i++) {
      newTimeTableValues.push({
        kou: sportData[i][0],
        otsu: sportData[i][1],
      });
    }

    timeTableValues.splice(0, timeTableValues.length, ...newTimeTableValues);

    return timeTableValues;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
