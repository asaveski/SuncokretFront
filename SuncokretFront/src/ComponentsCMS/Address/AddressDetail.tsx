// AddressDetail.tsx

import React, { useState, useEffect } from "react";
import {
  getAddressById,
  updateAddress,
  deleteAddress,
} from "../../services/api.ts";

interface Address {
  id: number;
  street: string;
  city: string;
  addressType: string;
  // Add other properties as needed
}

interface AddressDetailProps {
  addressId: number;
  onBack: () => void;
}

const AddressDetail: React.FC<AddressDetailProps> = ({ addressId, onBack }) => {
  const [address, setAddress] = useState<Address | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState<Address | null>(null);

  useEffect(() => {
    // Fetch the address details when the component loads
    const fetchAddress = async () => {
      const data = await getAddressById(addressId);
      setAddress(data);
      setEditData(data); // Initialize editData with the fetched data
    };
    fetchAddress();
  }, [addressId]);

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (editData) {
      setEditData({ ...editData, [name]: value });
    }
  };

  const handleSave = async () => {
    if (editData) {
      await updateAddress(editData.id, editData);
      setAddress(editData);
      setIsEditing(false);
    }
  };

  const handleDelete = async () => {
    if (address) {
      await deleteAddress(address.id);
      onBack(); // Go back to list view after deletion
    }
  };

  if (!address) return <div>Loading...</div>;

  return (
    <div>
      <h2>Address Detail</h2>
      {isEditing ? (
        <div>
          <input
            type="text"
            name="street"
            value={editData?.street || ""}
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            value={editData?.city || ""}
            onChange={handleChange}
          />
          <input
            type="text"
            name="zipCode"
            value={editData?.addressType || ""}
            onChange={handleChange}
          />
          {/* Add additional fields here */}
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <p>Street: {address.street}</p>
          <p>City: {address.city}</p>
          <p>Zip Code: {address.addressType}</p>
          {/* Display other fields here */}
          <button onClick={handleEditToggle}>Edit</button>
        </div>
      )}
      <button onClick={handleDelete}>Delete</button>
      <button onClick={onBack}>Back</button>
    </div>
  );
};

export default AddressDetail;
