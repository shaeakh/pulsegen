import Navbar from "./Navbar";
import Footer from "./Footer";
import React, { useState } from "react";
import Doctor from "./Doctor";

export default function Specialists() {
  const [Doctors, setDoctors] = useState([]);

  fetch('http://localhost:5000/user/doctor')
  .then(res=> res.json())
  .then(data=>{
    setDoctors(data);
  })

  
  

  const [OnlineNow,setOnlineNow] = useState(false);
  const [availableNext2Hours,setAvailableNext2Hours] = useState(false);
  const [availableToday,setAvailableToday] = useState(false);
  const [isFemale,setIsFemale] = useState(false);
  const [sortBy,setSortBy] = useState(null);
  
  function handleOnlineNow (){setOnlineNow(!OnlineNow);}
  function handleAvailableNext2Hours (){setAvailableNext2Hours(!availableNext2Hours);}
  function handleAvailableToday (){setAvailableToday(!availableToday);}
  function handleIsFemale (){setIsFemale(!isFemale);}

  let filteredDoctors = [...Doctors];
  if (OnlineNow) {
    filteredDoctors = filteredDoctors.filter(doc => doc.active);
  }
  if (isFemale) {
    filteredDoctors = filteredDoctors.filter(doc => doc.isFemale);
  }

  function handleSetSortBy(sort) {
    
  }
  
  
  if (sortBy!=null) {
    console.log("hi from feesHighToLow");
    switch (sortBy) {
      case 'feesHighToLow':
        console.log("hi from feesHighToLow");
        // filteredDoctors.sort((a, b) => b.c_fee - a.c_fee);
        break;
      case 'feesLowToHigh':
        filteredDoctors.sort((a, b) => a.c_fee - b.c_fee);
        break;
      case 'rating':
        filteredDoctors.sort((a, b) => b.rating - a.rating);
        break;
      case 'experience':
        filteredDoctors.sort((a, b) => b.exp - a.exp);
        break;
      case 'popularity':
        filteredDoctors.sort((a, b) => b.r_n - a.r_n);
        break;
      case 'experience':
        filteredDoctors.sort((a, b) => b.r_n - a.r_n);
        break;
      default:
        setSortBy(null);
        break;
    }
  }

  
  const [cfee_min, setCfee_min] = useState(0);
  const [cfee_max, setCfee_max] = useState(999999999999);

  
  return (
    <div className="flex flex-col items-center bg grey">
      <Navbar />
      <main>
        <div className="min-h-screen   flex flex-row justify-around  w-screen 	mt-20">
          {/* this is filter section */}
          <div className=" w-1/5 h-min flex flex-col items-center justify-start sticky top-20">
            <div className="  px-5 mt-5 flex flex-row w-full justify-between items-center mb-2">
              <h1 className="text-lg font-semibold  flex justify-start mb-2 ml-2">
                Filter
              </h1>
              <button className="btn btn-sm ">Reset</button>
            </div>
            <div className="pl-5 ">
              <h1 className=" text-2xl font-semibold  flex justify-start mb-2 ml-5">
                Consultation Fee
              </h1>
              <div className="flex flex-row justify-around	">
                <input
                  type="text"
                  value={cfee_min}
                  onChange={(e) => setCfee_min(e.target.value)}
                  className='input border-primary  focus: focus:border-primary focus:outline-none w-1/3 mx-2"'
                />
                <input
                  type="text"
                  value={cfee_max}
                  onChange={(e) => setCfee_max(e.target.value)}
                  className='input border-primary  focus: focus:border-primary focus:outline-none w-1/3 mx-2"'
                />
              </div>
            </div>
            <div className="flex flex-col w-full my-5 pl-5">
              <div className="flex flex-row justify-start ml-5 ">
                <input
                  type="checkbox"
                  name="OnlineNow"
                  onChange={handleOnlineNow}
                  className="checkbox checkbox-sm mr-2"
                />
                <h1>Online Now</h1>
              </div>
              <div className="flex flex-row justify-start ml-5 mt-2">
                <input
                  type="checkbox"
                  name="availableNext2Hours"
                  onChange={handleAvailableNext2Hours}
                  className="checkbox checkbox-sm mr-2"
                />
                <h1>Available in next 2 hour</h1>
              </div>
              <div className="flex flex-row justify-start ml-5 mt-2">
                <input
                  type="checkbox"
                  name="availableToday"
                  onChange={handleAvailableToday}
                  className="checkbox checkbox-sm mr-2"
                />
                <h1>Available today</h1>
              </div>
              <div className="flex flex-row justify-start ml-5 mt-2">
                <input
                  type="checkbox"
                  onChange={handleIsFemale}
                  className="checkbox checkbox-sm mr-2"
                />
                <h1>Female doctors only</h1>
              </div>              
            </div>
            <div className="flex flex-col  w-full py-2 pl-5">
              <h1 className="text-2xl font-semibold   mb-2 ml-5">
                Select Rating
              </h1>
              <div className=" ml-2 flex justify-start  rating rating-md  ml-5">
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-primary"
                  checked
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-primary"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-primary"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-primary"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-primary"
                />
              </div>
            </div>
            <div className="flex flex-col w-full my-2 pl-5">
              <h1 className="text-2xl font-semibold  flex justify-start mb-2 ml-5">
                Sort by
              </h1>
              <div className="form-control flex flex-row justify-start items-center mt-2 ml-5">
                <input
                  type="radio"                  
                  name="radio-10"   
                  
                  // onChange={handleSetSortBy("feesHighToLow")}               
                  className="radio checked:bg-primary  mr-2"                  
                />
                <span className="label-text">Relevance</span>
              </div>

              <div className="form-control flex flex-row justify-start items-center mt-2 ml-5">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-primary  mr-2"
                  onChange={handleSetSortBy("popularity")}       
                  checked = {sortBy=="popularity"} 
                />
                <span className="label-text">Popularity</span>
              </div>
              <div className="form-control flex flex-row justify-start items-center mt-2 ml-5">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-primary  mr-2"                  
                  onChange={handleSetSortBy("feesHighToLow")}      
                  checked = {sortBy=="feesHighToLow"}   
                />
                <span className="label-text">Fees : High to low</span>
              </div>
              <div className="form-control flex flex-row justify-start items-center mt-2 ml-5">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-primary  mr-2"
                  onChange={handleSetSortBy("feesLowToHigh")} 
                  checked = {sortBy=="feesLowToHigh"}            
                />
                <span className="label-text">Fees : Low to high</span>
              </div>
              <div className="form-control flex flex-row justify-start items-center mt-2 ml-5">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-primary  mr-2"
                  onChange={handleSetSortBy("rating")}     
                  checked = {sortBy=="rating"}          
                />
                <span className="label-text">Rating</span>
              </div>
              <div className="form-control flex flex-row justify-start items-center mt-2 ml-5">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-primary  mr-2"
                  onChange={handleSetSortBy("experience")}       
                  checked = {sortBy=="experience"}        
                />
                <span className="label-text">Experience</span>
              </div>
              <div className="form-control flex flex-row justify-start items-center mt-2 ml-5">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-primary  mr-2"
                  
                />
                <span className="label-text">Specialist First</span>
              </div>
              <div className="form-control flex flex-row justify-start items-center mt-2 ml-5">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-primary  mr-2"                  
                />
                <span className="label-text">Ranking</span>
              </div>
            </div>
          </div>

          <div className="w-4/5 p-5 ">
            {filteredDoctors.map((D, i) => {
              if(D.c_fee >= cfee_min && D.c_fee <= cfee_max)
              return (                
                <Doctor
                  depertment={D.depertment}
                  _id={D._id}
                  name={D.name}
                  img={D.img}
                  deg={D.deg}
                  rank={D.rank}
                  badge={D.badge}
                  tag={D.tag}
                  active={D.active}
                  place={D.place}
                  exp={D.exp}
                  r_n={D.r_n}
                  rating={D.rating}
                  c_fee={D.c_fee}
                  avail_2={D.avail_2}
                  avail_t={D.avail_t}
                  gender={D.gender}
                ></Doctor>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
