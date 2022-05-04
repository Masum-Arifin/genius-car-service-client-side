import React from "react";
import { useParams } from "react-router-dom";
import useServiceDetail from "../../../hooks/useServiceDetail";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  const [user] = useAuthState(auth);
  const handlePlaceOrder = e => {
      e.preventDefault();
      const order = {
        email:user.email,
        service: service.name,
        serviceId: serviceId,
        address: e.target.address.value,
        phone: e.target.phone.value
    }
  }
  return (
    <div className="w-50 mx-auto">
      <h2>Please Order: {service.name}</h2>
      <form onSubmit={handlePlaceOrder}>
        <input
          className="w-100 mb-2"
          type="text" value={user.displayName}
          name="name"
          placeholder="name"
          required readOnly disabled
        />
        <br />
        <input
          className="w-100 mb-2"
          type="email" value={user.email}
          name="email"
          placeholder="email"
          required readOnly disabled
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text" value={service.name}
          name="service"
          placeholder="service"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="address"
          placeholder="address"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="Phone"
          placeholder="Phone"
          required
        />
        <br />
        <input className="btn btn-primary"type="submit" value="Pleas Order" />
      </form>
    </div>
  );
};

export default Checkout;
