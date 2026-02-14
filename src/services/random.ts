const API_KEY = "dcf521c2-7944-4d10-bdaf-3384575a0fe2"

const body = {
  jsonrpc: "2.0",
  method: "generateIntegers",
  params: {
    apiKey: API_KEY,
    n: 5,
    min: 1,
    max: 100,
    replacement: true,
  },
  id: 1,
}

fetch("https://api.random.org/json-rpc/4/invoke", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(body),
})
  .then((res) => res.json())
  .then((data) => console.log(data.result.random.data))
  .catch((err) => console.error(err))
