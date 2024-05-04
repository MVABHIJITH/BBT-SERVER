const cars = require('../Models/Carmodel')

// add cars
exports.addCar = async (req, res) => {
    console.log("Inside Add project request!!");
    console.log(req.payload);
    console.log(req.body);
    console.log(req.files);
    const { carname, fuel, year, kmdrive, geartype, model, phoneNo, price } = req.body
    const userId = req.payload
    const carImage = req.files.map(file => file.filename);
    try {
        const exisitingCars = await cars.findOne({ phoneNo })
        if (exisitingCars) {
            res.status(406).json(" Car Already added !!")
        } else {
            const newcar = new cars({
                carname, fuel, year, kmdrive, geartype, model, phoneNo, price, carImage, userId
            })
            await newcar.save()
            res.status(200).json(newcar)
        }

    } catch (err) {
        res.status(401).json(err)
    }
}

// get all car
exports.getAllcar = async (req, res) => {
    const searchKey = req.query.search
    const query = {
        model: {
            $regex: searchKey, $options: 'i'
        }
    }

    try {
        const allcars = await cars.find(query)
        res.status(200).json(allcars)
    } catch (err) {
        res.status(401).json(err)
    }
}

// remove car
exports.removeCar = async (req, res) => {
    console.log("inside remove car");
    const { pid } = req.params
    try {
        const carDetails = await cars.findByIdAndDelete({ _id: pid })
        res.status(200).json(carDetails)
    } catch (err) {
        res.status(401).json(err)
    }
}

// get book car
exports.getBookCars = async (req, res) => {
    try {
        const Bookcar = await cars.find()
        res.status(200).json(Bookcar)
    } catch (err) {
        res.status(401).json(err)
    }
}
