const FizzBuzzService = require('./models/FizzBuzzService');
const express = require('express');


const app = express();

const port = 4000;

app.use(express.json());

const router = express.Router();

router.get('/:score', ((req, res) => {
    const { score } = req.params;
    const {trick} = FizzBuzzService.appliValidationInExplorer({score});

    res.status(200).json({score,trick})
    }
));

app.use('/v1/fizzbuzz', router);


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})
