const url = 'https://opentdb.com/api.php?amount=10&type=multiple'

export const getQuestions = async () => {
  const data = await fetch(url).then((res) => res.json())
  /* console.log(data.results[0]) */
  return data.results
}
