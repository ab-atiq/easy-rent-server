const findSingleCarRent = require("../models/findSingleCarRentModal");
const router = require("express").Router();

router.post("/singleCarRent", async (req, res) => {
  // console.log(req.body);
  const singleCarRent = new findSingleCarRent({
    name: req.body.name,
    email: req.body.email,
    carName: req.body.carName,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    rent: req.body.rent,
    location: req.body.location,
  });

  try {
    const singleRentCar = await singleCarRent.save();
    res.status(201).json(singleRentCar);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/singleCarRent", async (req, res) => {
  try {
    const singleRentCar = await findSingleCarRent.find();
    res.status(200).json(singleRentCar);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;