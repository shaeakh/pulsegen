import Navbar from "./Navbar";
import Footer from "./Footer";
import React, { useState } from "react";
import Doctor from "./Doctor";

export default function Specialists() {
  const Doctors = [
    {
      depertment: "a",
      id: "0",
      name: "a",
      img: "https://img.freepik.com/free-photo/portrait-expressive-young-man-wearing-formal-suit_273609-6942.jpg",
      deg: "m",
      rank: "asd",
      badge: "asd",
      tag: "asd",
      active: true,
      place: "asd",
      exp: "4",
      r_n: "320",
      rating: "3.2",
      c_fee: 150,
      avail_2: "t",
      avail_t: "t",
      gender: "male",
    },
    {
      depertment: "a",
      id: "1",
      name: "b",
      img: "https://img.freepik.com/free-photo/portrait-expressive-young-man-wearing-formal-suit_273609-6942.jpg",
      deg: "asd",
      rank: "asd",
      badge: "asd",
      tag: "asd",
      active: true,
      place: "asd",
      exp: "9",
      r_n: "150",
      rating: "4.1",
      c_fee: 220,
      avail_2: "t",
      avail_t: "f",
      gender: "male",
    },
    {
      depertment: "a",
      id: "2",
      name: "c",
      img: "https://static.vecteezy.com/system/resources/thumbnails/024/354/297/small_2x/business-woman-isolated-illustration-ai-generative-free-photo.jpg",
      deg: "asd",
      rank: "asd",
      badge: "asd",
      tag: "asd",
      active: true,
      place: "asd",
      exp: "7",
      r_n: "453",
      rating: "3.49",
      c_fee: 190,
      avail_2: "f",
      avail_t: "t",
      gender: "female",
    },
    {
      depertment: "a",
      id: "3",
      name: "d",
      img: "https://img.freepik.com/free-photo/portrait-expressive-young-man-wearing-formal-suit_273609-6942.jpg",
      deg: "asd",
      deg: "asd",
      badge: "asd",
      tag: "asdf",
      active: true,
      place: "asd",
      exp: "2",
      r_n: "199",
      rating: "2.5",
      c_fee: 850,
      avail_2: "f",
      avail_t: "f",
      gender: "male",
    },
    {
      depertment: "a",
      id: "4",
      name: "e",
      img: "https://img.freepik.com/free-photo/portrait-expressive-young-man-wearing-formal-suit_273609-6942.jpg",
      deg: "asd",
      deg: "asd",
      badge: "asd",
      tag: "asdf",
      active: false,
      place: "asd",
      exp: "9",
      r_n: "1999",
      rating: "4.9",
      c_fee: 250,
      avail_2: "t",
      avail_t: "t",
      gender: "male",
    },
    {
      depertment: "a",
      id: "5",
      name: "f",
      img: "https://static.vecteezy.com/system/resources/thumbnails/024/354/297/small_2x/business-woman-isolated-illustration-ai-generative-free-photo.jpg",
      deg: "asd",
      deg: "asd",
      badge: "asd",
      tag: "asdf",
      active: false,
      place: "asd",
      exp: "15",
      r_n: "250",
      rating: "5",
      c_fee: 1000,
      avail_2: "t",
      avail_t: "f",
      gender: "female",
    },
    {
      depertment: "a",
      id: "6",
      name: "g",
      img: "https://img.freepik.com/free-photo/portrait-expressive-young-man-wearing-formal-suit_273609-6942.jpg",
      deg: "asd",
      deg: "asd",
      badge: "asd",
      tag: "asdf",
      active: false,
      place: "asd",
      exp: "5",
      r_n: "50",
      rating: "5",
      c_fee: 250,
      avail_2: "f",
      avail_t: "t",
      gender: "male",
    },
    {
      depertment: "a",
      id: "7",
      name: "h",
      img: "https://static.vecteezy.com/system/resources/thumbnails/024/354/297/small_2x/business-woman-isolated-illustration-ai-generative-free-photo.jpg",
      deg: "asd",
      deg: "asd",
      badge: "asd",
      tag: "asdf",
      active: false,
      place: "asd",
      exp: "9",
      r_n: "500",
      rating: "4.6",
      c_fee: 500,
      avail_2: "f",
      avail_t: "f",
      gender: "female",
    },
    {
      depertment: "a",
      id: "8",
      name: "i",
      img: "https://static.vecteezy.com/system/resources/thumbnails/024/354/297/small_2x/business-woman-isolated-illustration-ai-generative-free-photo.jpg",
      deg: "asd",
      deg: "asd",
      badge: "asd",
      tag: "asdf",
      active: true,
      place: "asd",
      exp: "2",
      r_n: "166",
      rating: "3.6",
      c_fee: 145,
      avail_2: "f",
      avail_t: "t",
      gender: "female",
    },
    {
      depertment: "a",
      id: "9",
      name: "j",
      img: "https://static.vecteezy.com/system/resources/thumbnails/024/354/297/small_2x/business-woman-isolated-illustration-ai-generative-free-photo.jpg",
      deg: "asd",
      deg: "asd",
      badge: "asd",
      tag: "asdf",
      active: true,
      place: "asd",
      exp: "5",
      r_n: "197",
      rating: "3.9",
      c_fee: 200,
      avail_2: "f",
      avail_t: "t",
      gender: "female",
    },
    {
      depertment: "a",
      id: "10",
      name: "k",
      img: "https://static.vecteezy.com/system/resources/thumbnails/024/354/297/small_2x/business-woman-isolated-illustration-ai-generative-free-photo.jpg",
      deg: "asd",
      deg: "asd",
      badge: "asd",
      tag: "asdf",
      active: false,
      place: "asd",
      exp: "5.6",
      r_n: "102",
      rating: "2.3",
      c_fee: 450,
      avail_2: "t",
      avail_t: "t",
      gender: "female",
    },
    {
      depertment: "a",
      id: "11",
      name: "l",
      img: "https://img.freepik.com/free-photo/portrait-expressive-young-man-wearing-formal-suit_273609-6942.jpg",
      deg: "asd",
      deg: "asd",
      badge: "asd",
      tag: "asdf",
      active: false,
      place: "asd",
      exp: "10",
      r_n: "1000",
      rating: "5",
      c_fee: 500,
      avail_2: "f",
      avail_t: "t",
      gender: "male",
    },
  ];
  const [cfee_min, setCfee_min] = useState(0);
  const [cfee_max, setCfee_max] = useState(999999999999);

  const [filters, setFilters] = useState({
    onlineNow: false,
    availableNext2Hours: false,
    availableToday: false,
    maleOnly: false,
    femaleOnly: false,
    sortBy: "",
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFilters({ ...filters, [name]: checked });
    console.log(filters);
  };

  const handleSortByChange = (event) => {
    const sortBy = event.target.value;
    setFilters({ ...filters, sortBy });
  };

  let filteredDoctors = [...Doctors];
  if (filters.onlineNow) {
    filteredDoctors = filteredDoctors.filter((doc) => doc.active);
  }
  if (filters.availableNext2Hours) {
    filteredDoctors = filteredDoctors.filter((doc) => doc.avail_2 === "t");
  }
  if (filters.availableToday) {
    filteredDoctors = filteredDoctors.filter((doc) => doc.avail_t === "t");
  }
  if (filters.maleOnly) {
    filteredDoctors = filteredDoctors.filter((doc) => doc.gender === "male");
  }
  if (filters.femaleOnly) {
    filteredDoctors = filteredDoctors.filter((doc) => doc.gender === "female");
  }
  if (filters.sortBy) {
    switch (filters.sortBy) {
      case "feesHighToLow":
        filteredDoctors.sort((a, b) => b.c_fee - a.c_fee);
        break;
      case "feesLowToHigh":
        filteredDoctors.sort((a, b) => a.c_fee - b.c_fee);
        break;
      case "rating":
        filteredDoctors.sort((a, b) => b.rating - a.rating);
        break;
      case "experience":
        filteredDoctors.sort((a, b) => b.exp - a.exp);
        break;
      case "popularity":
        filteredDoctors.sort((a, b) => b.r_n - a.r_n);
        break;
      default:
        break;
    }
  }

  // console.log(cfee_min);
  // console.log(cfee_max);
  // let cfee_min=0;
  // let cfee_max=99999999999;
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
                  onChange={handleCheckboxChange}
                  checked={filters.onlineNow}
                  className="checkbox checkbox-sm mr-2"
                />
                <h1>Online Now</h1>
              </div>
              <div className="flex flex-row justify-start ml-5 mt-2">
                <input
                  type="checkbox"
                  name="availableNext2Hours"
                  defaultChecked
                  onChange={handleCheckboxChange}
                  className="checkbox checkbox-sm mr-2"
                />
                <h1>Available in next 2 hour</h1>
              </div>
              <div className="flex flex-row justify-start ml-5 mt-2">
                <input
                  type="checkbox"
                  name="availableToday"
                  defaultChecked
                  onChange={handleCheckboxChange}
                  className="checkbox checkbox-sm mr-2"
                />
                <h1>Available today</h1>
              </div>
              <div className="flex flex-row justify-start ml-5 mt-2">
                <input
                  type="checkbox"
                  name="femaleOnly"
                  defaultChecked
                  onChange={handleCheckboxChange}
                  className="checkbox checkbox-sm mr-2"
                />
                <h1>Female doctors only</h1>
              </div>
              <div className="flex flex-row justify-start ml-5 mt-2">
                <input
                  type="checkbox"
                  onChange={handleCheckboxChange}
                  name="maleOnly"
                  defaultChecked
                  className="checkbox checkbox-sm mr-2"
                />
                <h1>Male doctors only</h1>
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
                  className="radio checked:bg-primary  mr-2"
                  checked
                />
                <span className="label-text">Relevance</span>
              </div>

              <div className="form-control flex flex-row justify-start items-center mt-2 ml-5">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-primary  mr-2"
                  checked
                />
                <span className="label-text">Popularity</span>
              </div>
              <div className="form-control flex flex-row justify-start items-center mt-2 ml-5">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-primary  mr-2"
                  checked
                />
                <span className="label-text">Fees : High to low</span>
              </div>
              <div className="form-control flex flex-row justify-start items-center mt-2 ml-5">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-primary  mr-2"
                  checked
                />
                <span className="label-text">Fees : Low to high</span>
              </div>
              <div className="form-control flex flex-row justify-start items-center mt-2 ml-5">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-primary  mr-2"
                  checked
                />
                <span className="label-text">Rating</span>
              </div>
              <div className="form-control flex flex-row justify-start items-center mt-2 ml-5">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-primary  mr-2"
                  checked
                />
                <span className="label-text">Experience</span>
              </div>
              <div className="form-control flex flex-row justify-start items-center mt-2 ml-5">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-primary  mr-2"
                  checked
                />
                <span className="label-text">Specialist First</span>
              </div>
              <div className="form-control flex flex-row justify-start items-center mt-2 ml-5">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-primary  mr-2"
                  checked
                />
                <span className="label-text">Ranking</span>
              </div>
            </div>
          </div>

          <div className="w-4/5 p-5 ">
            {Doctors.map((D, i) => {
              return (
                <Doctor
                  depertment={D.depertment}
                  id={D.id}
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
