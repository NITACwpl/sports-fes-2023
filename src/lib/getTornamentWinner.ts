export function getWinner(fetchData: Array<Array<string>>) {
    const gDom = (id: string) => document.getElementsByClassName(id);

    for (let i = 0; i < 20; i++) {
        if (fetchData[i][0] === fetchData[i][2]) {
            let round = gDom(`round${i + 1}A`)[0].children[1];
            round.classList.add('winner');
        }
        else if (fetchData[i][1] === fetchData[i][2]) {
            let round = gDom(`round${i + 1}B`)[0].children[1];
            round.classList.add('winner');
        }
    }
}