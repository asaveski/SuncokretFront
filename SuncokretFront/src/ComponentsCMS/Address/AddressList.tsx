import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAddresses } from "../../services/api.ts";

interface Address {
  addressId: number;
  streetName: string;
  city: string;
  number: number;
  addressType: string;
}

const AddressList: React.FC = () => {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAddresses();
      setAddresses(data);
    };
    fetchData();
  }, []);

  const handleAddressClick = (addressId: number) => {
    navigate(`/addresses/${addressId}`);
  };

  return (
    <div>
      <h2>Address List</h2>
      <ul>
        {addresses.map((address) => (
          <li
            key={address.addressId}
            onClick={() => handleAddressClick(address.addressId)}
            style={{ cursor: "pointer", marginBottom: "10px" }}
          >
            {address.streetName}, {address.city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddressList;
