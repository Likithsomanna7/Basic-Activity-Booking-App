const Booking = require("../models/Booking");

exports.bookActivity = async (req, res) => {
  try {
    const { activityId } = req.body;
    const booking = new Booking({ userId: req.userId, activityId });
    await booking.save();
    res.status(201).json({ message: "Activity booked" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.userId }).populate("activityId");
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
