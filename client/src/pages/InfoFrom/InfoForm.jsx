import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Infoform.css";
import { useDispatch } from 'react-redux';
function InfoForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentDate = new Date();
  const date = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate() + 1
  );
  const formattedDate = date.toISOString().split("T")[0];
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    bloodGroup: "",
    phone: "",
    address: "",
    height: "",
    weight: "",
    diseases: {
      anemia: false,
      emotionalDisorder: false,
      heartDisease: false,
      kidneyDisease: false,
      asthma: false,
      cancer: false,
      diabetes: false,
      highBloodPressure: false,
      hepatitis: false,
      tuberculosis: false,
    },
    datetime: formattedDate,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        diseases: {
          ...formData.diseases,
          [name]: checked,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    dispatch({ type: 'UPDATE_USER', payload: {
      name: data.get('name'),
      age: data.get('age'),
      gender: data.get('gender'),
      bloodGroup: data.get('bloodGroup'),
      address:data.get('address')
     
    }});
    navigate("/chat");
  };

  return (
    <div className="container max-w-screen-sm border-0">
      <h2 className="font-bold text-primary text-3xl">General Information</h2>
      <form onSubmit={handleSubmit}>
        {/* Existing form fields */}
        <label className="font-bold text-primary" htmlFor="name">
          Full Name: <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label className="font-bold text-primary" htmlFor="age">
          Age: <span className="text-red-600">*</span>
        </label>
        <input
          className="p-3 h-10 border border-primary rounded-lg"
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <label className="font-bold text-primary" htmlFor="gender">
          Gender: <span className="text-red-600">*</span>
        </label>
        <div className="w-2/5  border border-primary rounded-l-lg rounded-lg flex justify-center items-center">
          <select
            id="gender"
            name="gender"
            className="w-full h-10 bg-transparent	"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <label className="font-bold text-primary" htmlFor="bloodGroup">
          Blood Group: <span className="text-red-600">*</span>
        </label>
        <div className="w-2/5  border border-primary rounded-l-lg rounded-lg flex justify-center items-center">
          <select
            className="w-full h-10 bg-transparent	"
            id="bloodGroup"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            required
          >
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="B+">B+</option>
            <option value="O+">O+</option>
            <option value="AB+">AB+</option>
            <option value="A-">A-</option>
            <option value="B-">B-</option>
            <option value="O-">O-</option>
            <option value="AB-">AB-</option>
          </select>
        </div>
        <label className="font-bold text-primary" htmlFor="phone">
          Phone No: <span className="text-red-600">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <label className="font-bold text-primary" htmlFor="address">
          Address: <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <label className="font-bold text-primary" htmlFor="height">
          Height (cm):
        </label>
        <input
          className="p-3 h-10 border border-primary rounded-lg "
          type="number"
          id="height"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
        <label className="font-bold text-primary" htmlFor="weight">
          Weight (kg):
        </label>
        <input
          className="p-3 h-10 border border-primary rounded-lg "
          type="number"
          id="weight"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
        />

        {/* New fields */}
        <h3 className="font-bold text-primary my-2">
          Have you ever had (please check all that apply):
        </h3>
        <div className="checkbox-container">
          <div className="left-checkboxes">
            <div>
              <input
                className="mr-2 checkbox checkbox-primary checkbox-xs"
                type="checkbox"
                id="anemia"
                name="anemia"
                checked={formData.diseases.anemia}
                onChange={handleChange}
              />
              <label htmlFor="anemia">Anemia</label>
            </div>
            <div>
              <input
                className="mr-2 checkbox checkbox-primary checkbox-xs"
                type="checkbox"
                id="emotionalDisorder"
                name="emotionalDisorder"
                checked={formData.diseases.emotionalDisorder}
                onChange={handleChange}
              />
              <label htmlFor="emotionalDisorder">Emotional Disorder</label>
            </div>
            <div>
              <input
                className="mr-2 checkbox checkbox-primary checkbox-xs"
                type="checkbox"
                id="heartDisease"
                name="heartDisease"
                checked={formData.diseases.heartDisease}
                onChange={handleChange}
              />
              <label htmlFor="heartDisease">Heart Disease</label>
            </div>
            <div>
              <input
                className="mr-2 checkbox checkbox-primary checkbox-xs"
                type="checkbox"
                id="kidneyDisease"
                name="kidneyDisease"
                checked={formData.diseases.kidneyDisease}
                onChange={handleChange}
              />
              <label htmlFor="kidneyDisease">Kidney Disease</label>
            </div>
            <div>
              <input
                className="mr-2 checkbox checkbox-primary checkbox-xs"
                type="checkbox"
                id="asthma"
                name="asthma"
                checked={formData.diseases.asthma}
                onChange={handleChange}
              />
              <label htmlFor="asthma">Asthma</label>
            </div>
          </div>
          <div className="right-checkboxes">
            <div>
              <input
                className="mr-2 checkbox checkbox-primary checkbox-xs"
                type="checkbox"
                id="cancer"
                name="cancer"
                checked={formData.diseases.cancer}
                onChange={handleChange}
              />
              <label htmlFor="cancer">Cancer</label>
            </div>
            <div>
              <input
                className="mr-2 checkbox checkbox-primary checkbox-xs"
                type="checkbox"
                id="diabetes"
                name="diabetes"
                checked={formData.diseases.diabetes}
                onChange={handleChange}
              />
              <label htmlFor="diabetes">Diabetes</label>
            </div>
            <div>
              <input
                className="mr-2 checkbox checkbox-primary checkbox-xs"
                type="checkbox"
                id="highBloodPressure"
                name="highBloodPressure"
                checked={formData.diseases.highBloodPressure}
                onChange={handleChange}
              />
              <label htmlFor="highBloodPressure">High Blood Pressure</label>
            </div>
            <div>
              <input
                className="mr-2 checkbox checkbox-primary checkbox-xs"
                type="checkbox"
                id="hepatitis"
                name="hepatitis"
                checked={formData.diseases.hepatitis}
                onChange={handleChange}
              />
              <label htmlFor="hepatitis">Hepatitis</label>
            </div>
            <div>
              <input
                className="mr-2 checkbox checkbox-primary checkbox-xs"
                type="checkbox"
                id="tuberculosis"
                name="tuberculosis"
                checked={formData.diseases.tuberculosis}
                onChange={handleChange}
              />
              <label htmlFor="tuberculosis">Tuberculosis</label>
            </div>
          </div>
        </div>

        <div>
          <button className="btn text-white font-bold my-2 h-10" type="submit">
            Proceed to Chat
          </button>
          <button
            className="btn font-bold my-2 h-10"
            type="button"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default InfoForm;
