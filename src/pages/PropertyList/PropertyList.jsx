import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./PropertyList.css";
import DetailsModal from "../../components/DetailsModal/DetailsModal";

function PropertyListPage() {
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);

  useEffect(() => {
    // Fetch property data from the mock API
    axios
      .get("https://mocki.io/v1/c1b8d087-971c-472f-870c-47185f710c17")
      .then((response) => {
        // Assuming the API response contains a 'houses' array
        const fetchedProperties = response.data.houses || [];
        setProperties(fetchedProperties);
      })
      .catch((error) => {
        console.error("Error fetching property data:", error);
      });
  }, []);
  const openModal = (property) => {
    setSelectedProperty(property);
  };

  const closeModal = () => {
    setSelectedProperty(null);
  };

  return (
    <div>
      <div className="property-list">
        {properties.map((property) => (
          <div key={property.id} className="property-item">
            <img
              className="property-img"
              src={property.image_url}
              alt={property.title}
            />
            <h3 className="property-head">{property.title}</h3>
            <div className="property-locat">
              <p>Location :</p>
              <p>{property.city}</p>
            </div>
            <p>Rent: {property.rent}</p>
            <Link className="details-btn" onClick={() => openModal(property)}>
              View Details
            </Link>
          </div>
        ))}
      </div>
      {selectedProperty && (
        <DetailsModal property={selectedProperty} onClose={closeModal} />
      )}
    </div>
  );
}

export default PropertyListPage;
