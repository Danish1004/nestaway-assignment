import React, { useState, useEffect } from "react";
import "./BookingForm.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function BookingForm() {
  const { available_from } = useParams();
  const history = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    contact: "+91",
    bookingDate: "",
  });

  useEffect(() => {
    if (available_from) {
      // const availableDate = new Date(available_from);

      // // Convert it to the desired format: "YYYY-MM-DD"
      // const formattedAvailableDate = `${availableDate.getFullYear()}-${String(
      //   availableDate.getMonth() + 1
      // ).padStart(2, "0")}-${String(availableDate.getDate()).padStart(2, "0")}`;

      // Set the formatted date as the min attribute
      const dateInput = document.querySelector(
        ".inpt-details[name='bookingDate']"
      );
      if (dateInput) {
        dateInput.min = available_from;
      }
    }
    console.log(available_from);
  }, [available_from]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "contact") {
      const phoneNumber = value.replace(/[^\d ]/g, "");

      if (phoneNumber.match(/^\+91 \d{0,10}$/)) {
        setErrorMessage("");
      } else {
        setErrorMessage("Invalid phone number");
      }
    } else {
      setErrorMessage("");
    }

    // Format the date value to YYYY-MM-DD
    if (name === "bookingDate") {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.contact || !formData.bookingDate) {
      setErrorMessage("All fields are required");
    } else {
      const formattedBookingDate = formData.bookingDate;

      if (formattedBookingDate < available_from) {
        setErrorMessage(
          "Property is not available for the selected date (available from: " +
            available_from +
            ")"
        );
        setConfirmationMessage("");
      } else {
        setErrorMessage("");
        setConfirmationMessage("Booking confirmed!");
      }
      setTimeout(() => {
        history("/");
      }, 3000);
    }
  };

  return (
    <div>
      <div className="booking-form">
        <div className="base-details">
          <h2>Booking Form</h2>
        </div>
        <form className="book-form" onSubmit={handleSubmit}>
          <input
            className="inpt-details"
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            className="inpt-details"
            type="text"
            name="contact"
            placeholder="Contact Information (+91)"
            value={formData.contact}
            onChange={handleChange}
          />
          <input
            className="inpt-details"
            type="date"
            name="bookingDate"
            placeholder="Desired Booking Date"
            value={formData.bookingDate}
            onChange={handleChange}
          />
          <button className="form-btn" type="submit">
            Submit
          </button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {confirmationMessage && (
          <p className="confirmation-message">{confirmationMessage}</p>
        )}
      </div>
    </div>
  );
}

export default BookingForm;
