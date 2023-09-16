import React from "react";
import "./DetailsModal.css";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

const DetailsModal = ({ property, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-button" onClick={onClose}>
          <CloseIcon />
        </button>
        <img
          className="detailed-img"
          src={property.image_url}
          alt={property.title}
        />
        <div className="main-head">
          <h3 className="property-head">{property.title}</h3>
          <h3>{property.nestaway_id}</h3>
        </div>
        <div className="property-desc">
          <p>{property.description.short_description}</p>
        </div>
        <div className="available-desc">
          <p>Available From : </p>
          <p>{property.available_from}</p>
        </div>
        <div className="amenity-list">
          <h4>Amenities:</h4>
          <ul className="list-container">
            {property.amenity_list.map((amenity, index) => (
              <li key={index} className="list-items">
                <img
                  className="amenity-icon"
                  src={amenity.icon_url}
                  alt={amenity.amenity}
                />
                {amenity.amenity}
              </li>
            ))}
          </ul>
        </div>
        <p>Rent: {property.rent}</p>
        <Link
          className="book-button"
          to={`/booking/${property.id}?available_from=${property.available_from}`}
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default DetailsModal;
