const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 9000;
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

app.get("/", (req, res, next) => {
    res.json({"schtuff": cohortData});
})

app.get("/:id", (req, res, next) => {
    console.log(req.params);
    const cohort = findById(req.params.id, cohortData);
    if (cohort) {
        res.json({"stuff": cohort});
    } else {
        res.json({
            error: {
                "message": "No record found!"
            }
        })
    }
})

app.listen(port, () => {
    console.log(`Hey yomie, I am listeneing on ${port}`);
})
