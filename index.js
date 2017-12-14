const express = require('express');
const path = require('path');
const multer = require('multer');
const upload = multer();

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.resolve('./index.html'));
});

app.post('/file', upload.single('file'), (req, res) => {
  if (!req.file) {
    res.json({
      error: 'No file submitted'
    });
  } else {
    res.json({
      size: req.file.size
    });
  }
});

app.listen(3000, () => {
  console.log('App listening on port 3000');
});
