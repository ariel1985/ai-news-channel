
const url = 'https://api.openai.com/v1/completions';
// const input = document.getElementById('input').value;
const input = `Write a news segment about: Bizarre Geologic Activity on Venus: “Squishy” Outer Shell May Be Resurfacing the Planet - SciTechDaily`

fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': OPENAI_API_KEY,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
        },
        body: JSON.stringify({
            "prompt": input,
            "model": "text-davinci-003",
            "temperature": 0.9,
            "max_tokens": 150,
            "top_p": 1,
            "frequency_penalty": 0,
            "presence_penalty": 0.6,
            "stop": [" Human:", " AI:"]
            })
        })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    }
).catch(err => { throw err })