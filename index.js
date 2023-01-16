// const fetch = require('node-fetch-commonjs');
// const express = require('express');
// var cors = require('cors');
// const app = express();
// app.use(cors())
// app.use(express.json()); // read JSON BODY
// app.use(express.urlencoded({ extended: true })); // read URL encoded body


// // app.get('/', (req, res) => {
// //     res.sendFile('C:\\Desktop\\Work\\Term 4 - BCIT\\COMP 4537 - INTERNET SOFTWARE ARCH\\Lab 2\\COMP-4537-Lab-2\\form.html')
// //   });

// app.post('/chatbot', (req, res) => {
// 	const message = req.body.message;
// 	const number = message.match(/\d+/);
// 	if (number) {
// 		fetch(`http://numbersapi.com/${number}?type=trivia`).then(response => response.text()).then(data => {
//             // here
// 		}).catch(error => {
// 			res.json({
// 				text: "Sorry, I couldn't find any information about that number."
// 			});
// 		});
// 	} else {
// 		res.json({
// 			text: "I'm sorry, I didn't understand your question. Please provide a number for me to give you information about."
// 		});
// 	}
// });

// const PORT = 3000;
// app.listen(PORT, () => {
// 	console.log(`Server is running on port ${PORT}`);
// });
const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const fetch = require('node-fetch');
const fetch = require('node-fetch-commonjs');

const cors = require('cors');
app.use(
    cors({
      origin: [
  "https://comp-4537-lab-2-8ew2.onrender.com", "https://zesty-peony-887805.netlify.app"
      ],
    })
);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/index.js', (req, res) => {
  res.sendFile(__dirname + '/index.js')}
);

app.get('/script.js', (req, res) => {
  res.sendFile(__dirname + '/script.js')}
);

app.post('/chatbot', (req, res) => {
  const message = req.body.message;
  console.log(message);
  const number = message.match(/\d+/);
  if (number) {
    fetch(`http://numbersapi.com/${number}?type=trivia`).then(response => response.text()).then(data => {
      res.json({
        text: data
      });
    }).catch(error => {
      res.json({
        text: "Sorry, I couldn't find any information about that number."
      });
    });
  } else {
    res.json({
      text: "I'm sorry, I didn't understand your question. Please provide a number for me to give you information about."
    });
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

