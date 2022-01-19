const url = 'https://opentdb.com/api.php?amount=1'

export const getQuestion = async () => {
  const data = await fetch(url).then((res) => res.json())
  console.log(data.results[0])
  return data.results
}
