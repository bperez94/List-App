const router = require("express").Router();
var listCont = require("../controllers/listController");


// db.List.create({name: "List"})
//     .then((dblist) => {
//        console.log(dblist); 
//     })
//     .catch((err) => {
//        console.log(err);
//     });

router.get('/', (req, res) => {
   listCont.findAll
    .then((dblists) => {
        res.json(dblists);
        console.log(dblists);
        console.log("working");
    })
    .catch(err => {
        res.json(err);
        console.log(err);
    });
});

// router.get('/api/user/: id', (req, res) => {
//     db.List.findById({})
//     .then((dblist) => {
//         res.json(dblist);
//     })
//     .catch(err => {
//         res.json(err);
//         console.log(err);
//     });
// });

// router.post('/api/user', (req, res) => {
//     db.List.update({})
//     .then((dblist) => {
//         res.json(dblist)
        
//     })
//     .catch((err) => {
//         res.json(err);
//         console.log(err);
//     });
// });

// router.post('/api/user', (req, res) => {
//     db.List.remove({})
//     .then((dblist) => {
//         res.json(dblist)
//     })
//     .catch((err) => {
//         res.json(err);
//         console.log(err);
//     });
// });


module.exports = router;