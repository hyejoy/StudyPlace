/**
 * promise 제네릭 클래스
 */

interface Game {
  name: string;
  genre: string;
  rank: number;
  adult: boolean;
}

function fetchGameInfo(): Promise<Game> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "loRR", adult: false, genre: "rpg", rank: 3 });
    }, 1000);
  });
}

fetchGameInfo().then((res) => {
  console.log(res);
});
