const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express()

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

const PORT = 3003

app.use(bodyParser.urlencoded({ etended: false }))
app.use(bodyParser.json())

const postInfo = [{
        nickName: '__procherk__',
        subtitle: 'The best programmer in the world',
        countOfLikes: 98,
        photoDescription: 'I love my girlfriend 💗💗💗'
    },
    {
        nickName: 'platitenalogi',
        subtitle: 'Second best programmer in the world',
        countOfLikes: 54,
        photoDescription: '__procherk__ girlfriend the best one'
    },
    {
        nickName: 'sonnechkaaa',
        subtitle: 'The best girlfriend in the world',
        countOfLikes: 100357,
        photoDescription: 'I love you __procherk__'
    }
]

app.get("/posts", (req, res) => {
    res.send(postInfo)
})

app.listen(PORT, () => console.log(`Server is started on port ${PORT}`))