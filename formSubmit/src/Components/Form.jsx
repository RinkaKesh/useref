import React, { useState } from 'react';
import ShowFormData from './ShowFormData'; 
import './Form.css';

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phNumber: "",
    country: "",
    birthDate: "",
    avatar: "",
    marriageStatus: false, // default
    gender: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
  };

  return (
    <div style={{margin:"auto"}}>
      <h1 >React Form Assignments</h1>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"} }>
        <form onSubmit={handleFormSubmit}>
          <div className='child' style={{width:"100%"}}>
          {/* First Name */}
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            // data-cy="firstName"
            placeholder='First Name'
          />

          {/* Last Name */}
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            // data-cy="last-name"
            placeholder='Last Name'

          /> 
          </div>

          {/* Email */}
          <div  className='child'>
          <label htmlFor="email">Email</label>
          <input
            
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            // data-cy="email"
            style={{width:"100%"}}
            placeholder='example@gmail.com'

            
          />
          </div>

          {/* Password */}
          <div  className='child'>

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            style={{width:"100%"}}
            placeholder='password'

          />
          </div>


          {/* Phone number */}
          <div  className='child'>
          <label htmlFor="phNumber">Phone Number</label>
          <input
            type="number"
            name="phNumber"
            id="phNumber"
            value={formData.phNumber}
            onChange={handleChange}
            placeholder='99999999999'

          />

          {/* Country Select Tag */}
          <label htmlFor="country">Country</label>
          <select
            name="country"
            id="country"
            value={formData.country}
            onChange={handleChange}
            
          >
            <option>selecy an option</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="India">India</option>
            <option value="Canada">Canada</option>
            <option value="France">France</option>
            <option value="Germany">Germany</option>
            <option value="Japan">Japan</option>
            <option value="Italy">Italy</option>
            <option value="Spain">Spain</option>
            <option value="Russia">Russia</option>
            <option value="Brazil">Brazil</option>
            <option value="China">China</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Malaysia">Malaysia</option>

            
          </select>
          </div>

          {/* Birth Date Selector */}
          <div  className='child'>
          <label htmlFor="birthDate">Birth Date</label>
          <input
            type="date"
            name="birthDate"
            id="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
        
          />

          {/* Profile Pic Selector */}
          <label htmlFor="avatar">Choose Avatar</label>
          <input
            type="file"
            name="avatar"
            id="avatar"
            value={formData.avatar}
            onChange={handleChange}
        
          />
          </div>

          {/* Married Status Selector */}
          <div  className='child' style={{display:"flex",justifyContent:"space-between"}}>
          <div>Select If Married</div>
          <div>
          <input
            type="checkbox"
            name="marriageStatus"
            id="marriageStatus"
            checked={formData.marriageStatus}
            onChange={handleChange}
      
          />marriage Status
          </div>
          </div>

          {/* Gender Selector */}
          
          <div  className='child'>
          <label>Gender:</label>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
                
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
          
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="other"
                checked={formData.gender === 'other'}
                onChange={handleChange}
                
              />
              
              Other
            </label>
          </div>
          </div>
          {/* Submit Button */}
          <button type="submit" >
            Submit
          </button>
        </form>
        {isFormSubmitted && (
          <ShowFormData formData={formData} />
        )}
      </div>
    </div>
  );
}

export default Form;
