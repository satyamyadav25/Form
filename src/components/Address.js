import React from "react";

function Address({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
      <input
        type="text"
        placeholder="City..."
        value={formData.city}
        onChange={(event) =>
          setFormData({ ...formData, city: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="State..."
        value={formData.state}
        onChange={(event) =>
          setFormData({ ...formData, state: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="PinCode..."
        value={formData.pin}
        onChange={(event) =>
          setFormData({ ...formData, pin: event.target.value })
        }
      />
      
    </div>
  );
}

export default Address;
