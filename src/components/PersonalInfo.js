import React from "react";

function PersonalInfo({ formData, setFormData }) {
  return (
    <div className="personal-info-container">
      <input
        type="text"
        placeholder="First Name..."
        value={formData.firstName}
        onChange={(e) => {
          setFormData({ ...formData, firstName: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Last Name..."
        value={formData.lastName}
        onChange={(e) => {
          setFormData({ ...formData, lastName: e.target.value });
        }}
      />
      <input
        type=""
        placeholder="Mobile No..."
        value={formData.mobile}
        onChange={(e) => {
          setFormData({ ...formData, mobile: e.target.value });
        }}
      />
    </div>
  );
}

export default PersonalInfo;
