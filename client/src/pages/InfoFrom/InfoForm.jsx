import React, { useState } from "react";
import "./Infoform.css";
import { useNavigate } from "react-router-dom";
function InfoForm() {
  const navigate =  useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bloodGroup: "",
    phone: "",
    address: "",
    datetime: "",
    picture: null,
    gender: "",
    birthdate: "",
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
    mcqAnswers: {
      q1: "",
      q2: "",
      q3: "",
      q4: "",
      q5: "",
    },
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

  const handlePictureChange = (event) => {
    setFormData({
      ...formData,
      picture: event.target.files[0],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const dateTime = new Date(formData.datetime);
    const formattedDateTime = dateTime.toLocaleString();

    // You can perform further validation or send the form data to a server here

    alert(`Appointment booked for ${formData.name} on ${formattedDateTime}`);
    navigate('/chat')
    // Reset form fields
    setFormData({
      name: "",
      email: "",
      bloodGroup: "",
      phone: "",
      address: "",
      datetime: "",
      picture: null,
      gender: "",
      birthdate: "",
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
      mcqAnswers: {
        q1: "",
        q2: "",
        q3: "",
        q4: "",
        q5: "",
      },
    });
  };

  return (
    <div className="container max-w-screen-sm border-0">
      <h2 className=" font-bold text-primary text-3xl">General Information</h2>
      <form onSubmit={handleSubmit}>
        {/* Existing form fields */}
        <label className="font-bold text-primary" htmlFor="name">
          Full Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {/* Add more fields */}
        <label className="font-bold text-primary" htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label className="font-bold text-primary" htmlFor="bloodGroup">
          Blood Group:
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
          Phone No:
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
          Address:
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <label className="font-bold text-primary" htmlFor="datetime">
          Select Date and Time:
        </label>
        <input
          type="datetime-local"
          id="datetime"
          name="datetime"
          value={formData.datetime}
          onChange={handleChange}
          required
        />
        <label className="font-bold text-primary" htmlFor="picture">
          Upload Picture:
        </label>
        <input
          type="file"
          id="picture"
          name="picture"
          accept="image/*"
          onChange={handlePictureChange}
          required
        />

        <label className="font-bold text-primary" htmlFor="gender">
          Gender:
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

        <label className="font-bold text-primary" htmlFor="birthdate">
          Birthdate:
        </label>
        <input
          type="date"
          id="birthdate"
          name="birthdate"
          value={formData.birthdate}
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
          required
        />
        <label className="font-bold text-primary" htmlFor="weight">
          Weight (kg):
        </label>
        <input
          className=" p-3 h-10 border border-primary rounded-lg "
          type="number"
          id="weight"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          required
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
        <h3 className="font-bold text-primary text-xl my-2">Healthy & Unhealthy Habits</h3>
        <div className="mcq-container my-5">
          <div className="mcq-question">
            <h4 className='font-bold text-primary'  >Exercise:</h4>
            <input
              className="radio radio-primary radio-xs"
              type="radio"
              id="q1_option1"
              name="q1"
              value="option1"
              onChange={handleChange}
            />
            <label className="mx-2" htmlFor="q1_option1">
              Never
            </label>

            <input
              className="radio radio-primary radio-xs"
              type="radio"
              id="q1_option2"
              name="q1"
              value="option2"
              onChange={handleChange}
            />
            <label className="mx-2" htmlFor="q1_option2">
              1-2 days
            </label>

            <input
              type="radio"
              className="radio radio-primary radio-xs"
              
              id="q1_option3"
              name="q1"
              value="option3"
              onChange={handleChange}
            />
            <label className="mx-2" htmlFor="q1_option3">
              3-4 days
            </label>

            <input
              type="radio"
              className="radio radio-primary radio-xs"
              id="q1_option4"
              name="q1"
              value="option4"
              onChange={handleChange}
            />
            <label className="mx-2" htmlFor="q1_option4">
              5+ days
            </label>
            <h4 className='font-bold text-primary'>Eating following a diet:</h4>
            <input
              type="radio"
              className="radio radio-primary radio-xs"
              id="q2-option1"
              name="q2"
              value="option1"
              onChange={handleChange}
            />
            <label className="mx-2" htmlFor="q2_option1">
              I have a loose diet
            </label>
            <input
              type="radio"
              className="radio radio-primary radio-xs"
              id="q2_option2"
              name="q2"
              value="option2"
              onChange={handleChange}
            />
            <label className="mx-2" htmlFor="q2_option2">
              I have a strict diet
            </label>
            <input
              type="radio"
              className="radio radio-primary radio-xs"
              id="q2_option3"
              name="q2"
              value="option3"
              onChange={handleChange}
            />
            <label className="mx-2" htmlFor="q2_option3">
              I don't have a diet plan
            </label>
            <h4 className='font-bold text-primary'>Alcohol Consumption:</h4>
            <input
              type="radio"
              className="radio radio-primary radio-xs"
              id="q3_option1"
              name="q3"
              value="option1"
              onChange={handleChange}
            />
            <label className="mx-2" htmlFor="q3_option1">
              I don't drink
            </label>

            <input
              type="radio"
              className="radio radio-primary radio-xs"
              id="q3_option2"
              name="q3"
              value="option2"
              onChange={handleChange}
            />
            <label className="mx-2" htmlFor="q3_option2">
              1-2 glasses/day
            </label>

            <input
              type="radio"
              className="radio radio-primary radio-xs"
              id="q3_option3"
              name="q3"
              value="option3"
              onChange={handleChange}
            />
            <label className="mx-2" htmlFor="q3_option3">
              3-4 glasses/day
            </label>

            <input
              type="radio"
              className="radio radio-primary radio-xs"
              id="q3_option4"
              name="q3"
              value="option4"
              onChange={handleChange}
            />
            <label className="mx-2" htmlFor="q3_option4">
              5+ glasses/day
            </label>
            <h4 className='font-bold text-primary' >Caffeine Consumption:</h4>
            <input
              type="radio"
              className="radio radio-primary radio-xs"
              id="q4_option1"
              name="q4"
              value="option1"
              onChange={handleChange}
            />
            <label className="mx-2" htmlFor="q4_option1">
              I don't use caffeine
            </label>

            <input
              type="radio"
              className="radio radio-primary radio-xs"
              id="q4_option2"
              name="q4"
              value="option2"
              onChange={handleChange}
            />
            <label className="mx-2" htmlFor="q4_option2">
              1-2 cups/day
            </label>

            <input
              type="radio"
              className="radio radio-primary radio-xs"
              id="q4_option3"
              name="q4"
              value="option3"
              onChange={handleChange}
            />
            <label className="mx-2" htmlFor="q4_option3">
              3-4 cups/day
            </label>

            <input
              type="radio"
              className="radio radio-primary radio-xs"
              id="q4_option4"
              name="q4"
              value="option4"
              onChange={handleChange}
            />
            <label className="mx-2" htmlFor="q4_option4">
              5+ cups/day
            </label>
            <h4 className='font-bold text-primary'>Do you smoke?</h4>
            <input
              type="radio"
              className="radio radio-primary radio-xs"
              id="q5_option1"
              name="q5"
              value="option1"
              onChange={handleChange}
            />
            <label className="mx-2" htmlFor="q5_option1">
              No
            </label>

            <input
              type="radio"
              className="radio radio-primary radio-xs"
              id="q5_option2"
              name="q5"
              value="option2"
              onChange={handleChange}
            />
            <label className="mx-2" htmlFor="q5_option2">
              0-1 packet/day
            </label>

            <input
              type="radio"
              className="radio radio-primary radio-xs"
              id="q5_option3"
              name="q5"
              value="option3"
              onChange={handleChange}
            />
            <label className="mx-2" htmlFor="q5_option3">
              1-2 packets/day
            </label>

            <input
              type="radio"
              className="radio radio-primary radio-xs"
              id="q5_option4"
              name="q5"
              value="option4"
              onChange={handleChange}
            />
            <label className="mx-2" htmlFor="q5_option4">
              2+ packets/day
            </label>
          </div>
        </div>

        <div>
          <button className="btn text-white font-bold my-2 h-10 " type="submit">Save</button>
          <button
          className="btn font-bold my-2 h-10 "
            type="button"
            onClick={() => setFormData({ ...formData, picture: null })}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default InfoForm;
