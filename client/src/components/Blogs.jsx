import React from "react";
import Button from "../layouts/Button";
import BlogCard from "../layouts/BlogCard";
import img1 from "../assets/img/blog1.jpg";
import img2 from "../assets/img/blog2.jpg";
import img3 from "../assets/img/blog3.jpg";
import img4 from "../assets/img/blog4.jpg";
import img5 from "../assets/img/blog5.jpg";
import img6 from "../assets/img/blog6.jpg";

const Blogs = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Latest Post
          </h1>
          <p className=" mt-2 text-center lg:text-start">
          Discover the latest achievements and positive impact of our medical initiatives
          </p>
        </div>
        <div className=" mt-4 lg:mt-0">
          <Button title="Our Articles" />
        </div>
      </div>
      <div className=" my-8">
        <div className=" flex flex-wrap justify-center gap-5">
          <BlogCard 
          img={img1} 
          headlines="Unraveling the Mysteries of Sleep" 
          description="From understanding sleep patterns to unraveling its mysteries, we delve into the science behind a vital aspect of human health."/>

          <BlogCard 
          img={img2} 
          headlines="The Heart-Healthy Diet" 
          description=" Discover delicious and nutritious recipes, expert tips, and evidence-based strategies to support cardiovascular wellness.
                        Take charge of your heart's well-being with every bite, starting today."/>

          <BlogCard
            img={img3}
            headlines="Understanding Pediatric Vaccinations"
            description="Our comprehensive guide provides clear explanations, debunking myths, and outlining the importance of immunization for your child's health. Stay informed, 
                         protect your little ones, and ensure a bright, healthy future."
          />
          <BlogCard 
           img={img4} 
           headlines="Navigating Mental Health"
           description="With this in-depth guide on Navigating Mental Health, set out on a path towards mental well-being. Learn important information, 
                        useful hints, and resources to comprehend, take care of, and put your mental health first." />
          <BlogCard 
           img={img5} 
           headlines="The Importance of Regular Exercise"
           description="Use our guide to The Importance of Regular Exercise to discover the transformative impact of regular exercise. Learn how being active increases mood, lowers stress 
                        and improves general well-being in addition to improving physical health." />
          <BlogCard 
          img={img6} 
          headlines="Skin Health 101"
          description="Explore Skin Health, the all-inclusive manual for comprehending and caring for your skin. Discover professional advice, skincare tricks 
                       and successful routines designed to support long-term skin health and a glowing complexion." />
        </div>
      </div>
    </div>
  );
};

export default Blogs;