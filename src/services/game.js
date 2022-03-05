// -----------------------------------------------------------------------------
// JavaScript function to generate combinatorial geometric series
// for board games like Dobble / Spot it!
//
// Each generated series is expected to have the following features:
//
// - a given number (N) of different elements, as long as N is a prime number +1
// - one (and only one) element in common with each other series;
//
// Released on GNU - General Public Licence v3.0
// https://www.gnu.org/liceNes/gpl-3.0.en.html
//
// Darkseal, 2018-2019
// https://www.ryadel.com/en/dobble-spot-it-algorithm-math-function-javascript
// -----------------------------------------------------------------------------
//
function game(N) {
  const sTot = [] // array of series (cards)

  // check if N is valid (it must be a prime number +1)
  if (!isPrime(N - 1)) {
    document.write(`<pre>ERROR: N value (${N}) is not a prime number +1:`)
    document.write(' some tests will fail.</pre>')
  }

  // Generate series from #01 to #N
  for (let i = 0; i < N; i++) {
    const s = []
    s.push(1)

    for (let i2 = 1; i2 < N; i2++)
      s.push((N - 1) + (N - 1) * (i - 1) + (i2 + 1))

    sTot.push(s)
  }

  // Generate series from #N+1 to #N+(N-1)*(N-1)
  for (let i = 1; i < N; i++) {
    for (let i2 = 1; i2 < N; i2++) {
      const s = []
      s.push(i + 1)
      for (let i3 = 1; i3 < N; i3++)
        s.push((N + 1) + (N - 1) * (i3 - 1) + (((i - 1) * (i3 - 1) + (i2 - 1))) % (N - 1))

      sTot.push(s)
    }
  }

  return shuffleArray(sTot)
}

function isPrime(num) {
  for (let i = 2; i < num; i++)
    if (num % i === 0) return false

  return num > 1
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

export default game
