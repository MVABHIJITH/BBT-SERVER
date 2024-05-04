const testdrive = require('../Models/TestDrive')

// add test drive
exports.addTestdrive = async (req, res) => {
    console.log("Inside Add testdrive request!!");
    console.log(req.payload);
    console.log(req.body);
    const { name, phone, carmodel, carname, confdate } = req.body
    const userId = req.payload
    try {
        const exisitingtestdrive = await testdrive.findOne({ userId })
        if (exisitingtestdrive) {
            res.status(406).json(" Car Already added !!")
        } else {
            const newtestdrive = new testdrive({
                name, phone, carmodel, carname, confdate, userId
            })
            await newtestdrive.save()
            res.status(200).json(newtestdrive)
        }

    } catch (err) {
        res.status(401).json(err)
    }
}
// get user testdrive
exports.getUserTesdrive = async (req, res) => {
     try {
        const usertestdrive = await testdrive.find()
        res.status(200).json(usertestdrive)
    } catch (err) {
        res.status(401).json(err)
    }
}


// remove car
exports.removeTesDrive = async (req, res) => {
    console.log("inside remove testdrive");
    const { pid } = req.params
    try {
        const testdriveDetials = await testdrive.findByIdAndDelete({ _id: pid })
        res.status(200).json(testdriveDetials)
    } catch (err) {
        res.status(401).json(err)
    }
}

exports.getAdminTestdrive = async (req, res) => {
    try {
       const adminTestdrive = await testdrive.find()
       res.status(200).json(adminTestdrive)
   } catch (err) {
       res.status(401).json(err)
   }
}
