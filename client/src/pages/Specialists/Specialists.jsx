import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import Doctor from "./Doctor";

export default function Specialists() {
  return (
    <div className="flex flex-col items-center bg grey">
      <Navbar />
      <main>
        <div className="min-h-screen   flex flex-row justify-around  w-screen 	mt-20">
          {/* this is filter section */}
          <div className=" w-1/5    flex flex-col items-center justify-center">
            <div className="  px-5 mt-5 flex flex-row w-full justify-between items-center mb-2">
              <h1 className="text-lg font-semibold  flex justify-start mb-2 ml-2">
                Filter
              </h1>
              <button className="btn btn-sm ">Reset</button>
            </div>
            <div className="pl-5">
              <h1 className=" text-2xl font-semibold  flex justify-start mb-2 ml-5">
                Consultation Fee
              </h1>
              <div className="flex flex-row justify-around	">
                <input
                  type="text"
                  className='input border-primary  focus: focus:border-primary focus:outline-none w-1/3 mx-2"'
                />
                <input
                  type="text"
                  className='input border-primary  focus: focus:border-primary focus:outline-none w-1/3 mx-2"'
                />
              </div>
            </div>
            <div className="flex flex-col w-full my-5 pl-5">
              <div className="flex flex-row justify-start ml-5 ">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-sm mr-2"
                />
                <h1>Online Now</h1>
              </div>
              <div className="flex flex-row justify-start ml-5 mt-2">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-sm mr-2"
                />
                <h1>Available in next 2 hour</h1>
              </div>
              <div className="flex flex-row justify-start ml-5 mt-2">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-sm mr-2"
                />
                <h1>Available today</h1>
              </div>
              <div className="flex flex-row justify-start ml-5 mt-2">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-sm mr-2"
                />
                <h1>Female doctors only</h1>
              </div>
              <div className="flex flex-row justify-start ml-5 mt-2">
                <input
                  type="checkbox"
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
            <Doctor 
              depertment="Normal"
              name="Shaeakh Ahmed Chowdhury"
              img="https://media.licdn.com/dms/image/D4D03AQF-Ka5KMXONtQ/profile-displayphoto-shrink_200_200/0/1702552486719?e=2147483647&v=beta&t=1_5jb_mRU_vkKVhM0gtT7YCMkZH2Hmt0eM9e2tRMq70"
              degree="BSc in SWE"
              
              badge="Software Engineer"
              tag="Senior"
              active="Active now"
              place="Google"
              exp="2 "
              r_n="1000"
              rating="4+"
              c_fee="69"

            />
            <Doctor 
              depertment="Normal"
              name="Shaeakh Ahmed Chowdhury"
              img="https://media.licdn.com/dms/image/D4D03AQF-Ka5KMXONtQ/profile-displayphoto-shrink_200_200/0/1702552486719?e=2147483647&v=beta&t=1_5jb_mRU_vkKVhM0gtT7YCMkZH2Hmt0eM9e2tRMq70"
              degree="BSc in SWE"
              badge="Software Engineer"
              tag="Senior"
              active="Active now"
              place="Google"
              exp="2 "
              r_n="1000"
              rating="4+"
              c_fee="69"

            />
            
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
