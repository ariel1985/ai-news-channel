function generateVideo(text) {
    const url = 'https://apis.elai.io/api/v1/videos/generate/text';
    console.log('url: ' , url);
    console.log('ELAI_API_KEY', ELAI_API_KEY);
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ELAI_API_KEY}`
    },
    body: JSON.stringify({
      "from": "Hello world! This is me.",
      "text": text,
      "voice": "en-US-Wavenet-A",
      "format": "mp4",
      "width": 1280,
      "height": 720,
      "background": "#ffffff",
      "padding": 50,
      "fontFamily": "Arial",
      "fontSize": 64,
      "fontColor": "#000000",
      "lineSpacing": 1.5,
      "highlightColor": "#0066ff",
      "highlightedWords": ["Hello", "world", "me"],
      "templateId": '1323909748674',
    })
  })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log('start with the data', data);
    const videoUrl = data.url;
    console.log(`Video URL: ${videoUrl}`);
  })
  .catch((error) => {
    console.error(error);
  });
}

generateVideo("Hello world! this is me");
