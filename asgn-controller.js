const asgn = require("./asgn-model");

exports.list = function (req, res) {
    asgn.find(function (err, asgns) {
        if (err) {
            res.json({
                status: 'error',
                message: err
            });
        };
        res.json({
            status: "success",
            message: "Assignments retrieved",
            data: asgns
        });
    })
}

exports.create = function (req, res) {
    var asgn = new asgn();
    asgn.courseName = req.body.name ? req.body.name : asgn.courseName;
    
}