const express=require("express");

const Booking=require("../model/booking.model");


// Create a new booking
router.post('/bookings', async (req, res) => {


    try {
      const newBooking = await Booking.create(req.body);
      res.status(201).json(newBooking);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });