
import  { useState } from "react";

import aboutbg from "../../public/herobg3.jpg";
import aboutbg3 from "../../public/bgabout2.png";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const Blog = () => {

  const mernPosts = [
    {
      id: 1,
      title: "Getting Started with MERN Stack",
      description:
        "Learn how to set up and build your first MERN (MongoDB, Express.js, React, Node.js) application.",
      category: "react",
      img: "https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-600nw-1029506242.jpg",
    },
    {
      id: 2,
      title: "Building RESTful APIs with Node.js and Express",
      description:
        "Explore how to create RESTful APIs using Node.js and Express for your MERN applications.",
      category: "node",
      img: "https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-600nw-1029506242.jpg",
    },

    {
      id: 10,
      title: "Server-Side Rendering with Next.js in MERN",
      description:
        "Learn how to implement server-side rendering using Next.js in your MERN stack projects.",
      category: "next",
      img: "https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-600nw-1029506242.jpg",
    },
    {
      id: 3,
      title: "Creating Dynamic UIs with React Hooks",
      description:
        "Explore the power of React Hooks to create dynamic and interactive user interfaces in MERN applications.",
      category: "react",
      img: "https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-600nw-1029506242.jpg",
    },
    {
      id: 4,
      title: "Introduction to Express.js for Node.js Development",
      description:
        "Get started with Express.js, a popular framework for building web applications with Node.js in the MERN stack.",
      category: "node",
      img: "https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-600nw-1029506242.jpg",
    },
    {
      id: 5,
      title: "Building Single-Page Applications (SPAs) with React Router",
      description:
        "Learn how to implement client-side routing and build SPAs using React Router in MERN applications.",
      category: "react",
      img: "https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-600nw-1029506242.jpg",
    },
    {
      id: 6,
      title: "Handling Data with MongoDB in Node.js",
      description:
        "Discover how to integrate MongoDB with Node.js to manage data in MERN stack applications effectively.",
      category: "node",
      img: "https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-600nw-1029506242.jpg",
    },
    {
      id: 7,
      title: "Styling React Components with CSS Modules",
      description:
        "Learn how to use CSS Modules to style React components and avoid class naming conflicts in MERN projects.",
      category: "react",
      img: "https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-600nw-1029506242.jpg",
    },
    {
      id: 8,
      title: "Server-Side Rendering (SSR) with React and Next.js",
      description:
        "Explore the benefits of server-side rendering and how to implement SSR using React and Next.js in MERN apps.",
      category: "next",
      img: "https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-600nw-1029506242.jpg",
    },
    {
      id: 9,
      title: "RESTful API Design Best Practices",
      description:
        "Learn essential best practices for designing clean and effective RESTful APIs in MERN stack applications.",
      category: "node",
      img: "https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-600nw-1029506242.jpg",
    },
  ];

  const [tabIndex, setTabIndex] = useState(0);



  return (
    <div
      className="relative flex items-center justify-center w-full min-h-screen px-5"
      
    >
      
      <div className="absolute top-0 left-0 z-10 w-full h-full bg-black">
        <img
          className="object-cover w-full h-full dark:opacity-20"
          src="/galaxy.gif"
          alt="bg"
        />
      </div>
      <div
        className="w-full min-h-[100vh] relative z-20"
        
      >
        <h2 className="text-white reflection text-[32px] lg:text-[50px] md:text-[50px] font-syncopate my-14 leading-9 z-20 text-center">
          All Blogs
        </h2>
        <div className="w-full h-full">
            <div className="flex flex-col items-start w-full gap-5 p-4 bg-blue-500 rounded-lg group bg-opacity-10 md:flex-row lg:flex-row ">
              <div className="flex justify-center min-w-[50%] opacity-5 group-hover:opacity-100  items-center w-full h-full transition-all duration-200 ease-in-out">
                <img
                  src={aboutbg}
                  className="object-cover w-full h-full rounded-md "
                  alt="blog"
                />
              </div>
              <div className="w-full mb-5">
                <div className="flex justify-between mt-2 text-gray-500">
                  <span className="text-xs font-gruppo">Category</span>
                  <span className="ml-2 text-xs font-gruppo">12 September</span>
                </div>
                <h1 className="my-10 text-lg font-semibold text-white font-syncopate">
                  Lorem ipsum dolor sit amet.
                </h1>
                <p className="mt-2 text-[12px] text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                  consequatur.
                </p>
              </div>
            </div>
          </div>
        <div className="flex items-center justify-center my-10">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="flex flex-wrap justify-center border-0 border-b-gray-800 gap-x-2 ">
            <Tab
              className={` uppercase px-3 py-1 text-white border my-1 border-gray-900 active:bg-blue-500 font-gruppo text-[16px] cursor-pointer reflection ${
                tabIndex == 0 ? "bg-blue-600" : "bg-blue-600 bg-opacity-20"
              }`}
            >
              All
            </Tab>
            <Tab
              className={` uppercase px-3 py-1 text-white border my-1 border-gray-900 active:bg-blue-500 font-gruppo text-[16px] cursor-pointer reflection ${
                tabIndex == 1 ? "bg-blue-600" : "bg-blue-600 bg-opacity-20"
              }`}
            >
              React
            </Tab>
            <Tab
              className={` uppercase px-3 py-1 text-white border my-1 border-gray-900 active:bg-blue-500 font-gruppo text-[16px] cursor-pointer reflection ${
                tabIndex == 2 ? "bg-blue-600" : "bg-blue-600 bg-opacity-20"
              }`}
            >
             Next
            </Tab>
            <Tab
              className={` uppercase px-3 py-1 text-white border my-1 border-gray-900 active:bg-blue-500 font-gruppo text-[16px] cursor-pointer reflection ${
                tabIndex == 3 ? "bg-blue-600" : "bg-blue-600 bg-opacity-20"
              }`}
            >
              Node js
            </Tab>
            <Tab
              className={` uppercase px-3 py-1 text-white border my-1 border-gray-900 active:bg-blue-500 font-gruppo text-[16px] cursor-pointer reflection ${
                tabIndex == 4 ? "bg-blue-600" : "bg-blue-600 bg-opacity-20"
              }`}
            >
              Express js
            </Tab>
            
          </TabList>
          <hr className="my-2 border-0 " />
          <div className="w-full h-full">
          <TabPanel className="flex items-center justify-center">
            <div className="grid items-center justify-center w-full grid-cols-1 gap-1 lg:grid-cols-3 md:grid-cols-3">
              {mernPosts.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="relative flex w-full overflow-hidden border border-gray-900 h-80 group"
                  >
                    <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full p-5 text-center bg-blue-900 gap-y-3 bg-opacity-10 group-hover:bg-opacity-80 ">
                      <div className="flex justify-between w-full px-5">
                        <span className="block font-gruppo text-white text-[12px]">{item.category}</span>
                        <span className="block font-gruppo text-white text-[12px]">12 sep 2024</span>
                      </div>
                      <h5 className="text-[22px] font-gruppo text-white text-start leading-5">
                        {item.title}
                      </h5>
                      <p className="text-[16px] text-justify font-gruppo text-white">
                        {item.description}
                      </p>
                      <button className="px-5 py-2 text-white bg-blue-600 bg-opacity-20 font-gruppo">Read More</button>
                    
                    </div>
                    <img
                      className="transition-all duration-300 ease-in-out opacity-5 group-hover:opacity-100"
                      src={item.img}
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
          </TabPanel>
          <TabPanel className="flex items-center justify-center">
            <div className="grid items-center justify-center w-full grid-cols-1 gap-1 lg:grid-cols-3 md:grid-cols-3">
              {mernPosts.filter((item) => item.category== "react").map(
                (item, index) => {
                  return (
                   <div
                      key={index}
                      className="relative flex w-full overflow-hidden border border-gray-900 h-80 group"
                    >
                      <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full p-5 text-center bg-blue-900 gap-y-3 bg-opacity-10 group-hover:bg-opacity-80 ">
                      <div className="flex justify-between w-full px-5">
                        <span className="block font-gruppo text-white text-[12px]">{item.category}</span>
                        <span className="block font-gruppo text-white text-[12px]">12 sep 2024</span>
                      </div>
                        <h5 className="text-[24px] font-gruppo text-white leading-5">
                          {item.title}
                        
                        </h5>
                        <p className="text-[16px] text-justify font-gruppo text-white">
                        {item.description}
                      </p>
                       <button className="px-5 py-2 text-white bg-blue-600 bg-opacity-20 font-gruppo">Read More</button>
                       
                      </div>
                      <img
                        className="transition-all duration-300 ease-in-out opacity-5 group-hover:opacity-100"
                        src={item.img}
                        alt=""
                      />
                    </div>
                  );
                }
              )}
            </div>
          </TabPanel>
          <TabPanel className="flex items-center justify-center">
            <div className="grid items-center justify-center w-full grid-cols-1 gap-1 lg:grid-cols-3 md:grid-cols-3">
              {mernPosts.filter((item) => item.category== "next").map(
                (item, index) => {
                  return (
                   <div
                      key={index}
                      className="relative flex w-full overflow-hidden border border-gray-900 h-80 group"
                    >
                      <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full p-5 text-center bg-blue-900 gap-y-3 bg-opacity-10 group-hover:bg-opacity-80 ">
                      <div className="flex justify-between w-full px-5">
                        <span className="block font-gruppo text-white text-[12px]">{item.category}</span>
                        <span className="block font-gruppo text-white text-[12px]">12 sep 2024</span>
                      </div>
                        <h5 className="text-[24px] font-gruppo text-white leading-5">
                          {item.title}
                        
                        </h5>
                        <p className="text-[16px] text-justify font-gruppo text-white">
                        {item.description}
                      </p>
                       <button className="px-5 py-2 text-white bg-blue-600 bg-opacity-20 font-gruppo">Read More</button>
                       
                      </div>
                      <img
                        className="transition-all duration-300 ease-in-out opacity-5 group-hover:opacity-100"
                        src={item.img}
                        alt=""
                      />
                    </div>
                  );
                }
              )}
            </div>
          </TabPanel>
          <TabPanel className="flex items-center justify-center">
            <div className="grid items-center justify-center w-full grid-cols-1 gap-1 lg:grid-cols-3 md:grid-cols-3">
              {mernPosts.filter((item) => item.category== "node").map(
                (item, index) => {
                  return (
                   <div
                      key={index}
                      className="relative flex w-full overflow-hidden border border-gray-900 h-80 group"
                    >
                      <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full p-5 text-center bg-blue-900 gap-y-3 bg-opacity-10 group-hover:bg-opacity-80 ">
                      <div className="flex justify-between w-full px-5">
                        <span className="block font-gruppo text-white text-[12px]">{item.category}</span>
                        <span className="block font-gruppo text-white text-[12px]">12 sep 2024</span>
                      </div>
                        <h5 className="text-[24px] font-gruppo text-white leading-5">
                          {item.title}
                        
                        </h5>
                        <p className="text-[16px] text-justify font-gruppo text-white">
                        {item.description}
                      </p>
                       <button className="px-5 py-2 text-white bg-blue-600 bg-opacity-20 font-gruppo">Read More</button>
                       
                      </div>
                      <img
                        className="transition-all duration-300 ease-in-out opacity-5 group-hover:opacity-100"
                        src={item.img}
                        alt=""
                      />
                    </div>
                  );
                }
              )}
            </div>
          </TabPanel>
         
          <TabPanel className="flex items-center justify-center">
            <div className="grid items-center justify-center w-full grid-cols-1 gap-1 lg:grid-cols-3 md:grid-cols-3">
              {mernPosts.filter((item) => item.category== "express").map(
                (item, index) => {
                  return (
                   <div
                      key={index}
                      className="relative flex w-full overflow-hidden border border-gray-900 h-80 group"
                    >
                      <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full p-5 text-center bg-blue-900 gap-y-3 bg-opacity-10 group-hover:bg-opacity-80 ">
                      <div className="flex justify-between w-full px-5">
                        <span className="block font-gruppo text-white text-[12px]">{item.category}</span>
                        <span className="block font-gruppo text-white text-[12px]">12 sep 2024</span>
                      </div>
                        <h5 className="text-[24px] font-gruppo text-white leading-5">
                          {item.title}
                        
                        </h5>
                        <p className="text-[16px] text-justify font-gruppo text-white">
                        {item.description}
                      </p>
                       <button className="px-5 py-2 text-white bg-blue-600 bg-opacity-20 font-gruppo">Read More</button>
                       
                      </div>
                      <img
                        className="transition-all duration-300 ease-in-out opacity-5 group-hover:opacity-100"
                        src={item.img}
                        alt=""
                      />
                    </div>
                  );
                }
              )}
            </div>
          </TabPanel>
          </div>
        </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Blog;
