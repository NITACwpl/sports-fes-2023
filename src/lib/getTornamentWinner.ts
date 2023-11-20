export function getWinner(sport: string, fetchData: Array<Array<string>>) {
    const gDom = (id: string) => document.querySelector(`.${sport} ${id}`);

    for (let i = 0; i < fetchData.length; i++) {
        if ((fetchData[i][0] === fetchData[i][2]) && (fetchData[i][2] !== "0")) {
            let round = gDom(`.round${i + 1}A`).children[1];
            round.classList.add('winner');
        }
        else if ((fetchData[i][1] === fetchData[i][2]) && (fetchData[i][2] !== "0")) {
            let round = gDom(`.round${i + 1}B`).children[1];
            round.classList.add('winner');
        }
    }
    if (fetchData[fetchData.length - 1][2] !== "0") {
        let round = gDom(`.round_final`).children[2];
        round.classList.add('winner');
    }
}