const express = require('express');
const cors = require('cors');
const port = 9000;
const cohortData = require('./cohorts');

const app = express();

app.use(cors());

const findById = (params, data) => {
    for(let i = 0; i < data.length; i++) {
        let holderString = data[i].id.toString();
        if (params === holderString) {
            console.log(data[i]);
            return data[i];
        } 
    }
    return null;
}

findById(2, cohortData);

app.get("/", (req, res, next) => {
    res.json({"schtuff": cohortData});
})

app.get("/:id", (req, res, next) => {
    console.log(req.params);
    const cohort = findById(req.params.id, cohortData);
    res.json({"stuff": cohort});
})

app.listen(port, () => {
    console.log(`Hey yomie, I am listeneing on ${port}`);
})
