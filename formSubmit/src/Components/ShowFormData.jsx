import React from 'react';
import './ShowFormData.css';

const ShowFormData = ({ formData }) => {
  return (
    <div>
      <h1>Form Data</h1>

      <h3 data-cy="first-name">First Name: {formData.firstName}</h3>

      <h3 data-cy="last-name">Last Name: {formData.lastName}</h3>

      <h3 data-cy="email">Email: {formData.email}</h3>

      <h3 data-cy="password">Password: {formData.password}</h3>

      <h3 data-cy="phNumber">Phone: {formData.phNumber}</h3>

      <h3 data-cy="country">Country: {formData.country}</h3>

      <h3 data-cy="birth-date">Birth Date: {formData.birthDate}</h3>

      <h3 data-cy="marriage-status">
        Married: {formData.marriageStatus ? 'Yes' : 'No'}
      </h3>

      <h3 data-cy="image-url">Image URL: {formData.avatar}</h3>

      <h3 data-cy="gender">Gender: {formData.gender}</h3>
    </div>
  );
};

export default ShowFormData;