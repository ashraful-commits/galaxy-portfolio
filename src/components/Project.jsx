import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import gallary1 from "../../public/movix.png";
import gallary2 from "../../public/media.png";
import gallary3 from "../../public/admin.png";
import gallary4 from "../../public/admin dashboard.png";
import gallary5 from "../../public/devashraf.png";
import gallary6 from "../../public/ecom.png";
// import gallary7 from "../../public/social app.png";
const Project = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const Projects = [
    {
      id: 1,
      name: "Movix",
      live: "https://movixproject01.netlify.app/",
      github: "https://github.com/ashraful-commits/movix",
      shortdis:
        "It is a ftp server realted project.It's made with tmdb api. Here you can watch Movie Trailer",
      preview: gallary1,
      tools: ["React", "Redux toolkit", "React-lazy-loader", "Axios"],
      type: "ftp-server",
    },
    {
      id: 2,
      name: "MediaKites",
      live: "https://media-kits-app-clone.vercel.app/",
      github: "https://github.com/ashraful-commits/mediaKitsapp-clone.git",
      shortdis: "It's social media app.You can share your via with that!",
      preview: gallary2,
      tools: ["React", "Redux toolkit", "Firebase"],
      type: "social",
    },
    {
      id: 3,
      name: "Admin Dashboard",
      live: "https://admin-dashboard-seven-kappa.vercel.app/",
      github: "https://github.com/ashraful-commits/admin-dashboard.git",
      shortdis: "It's an admin dashboard",
      preview: gallary3,
      tools: ["React", "Redux toolkit", "React query"],
      type: "e-commerce",
    },
    {
      id: 4,
      name: "Admin Dashboard",
      live: "https://wolmart-dashboard.vercel.app/",
      github: "https://github.com/ashraful-commits/movix",
      shortdis: "It's an admin dashboard for E-commerce website",
      preview: gallary4,
      tools: ["React", "Redux toolkit"],
      type: "e-commerce",
    },
    {
      id: 5,
      name: "PortFolio",
      live: "https://developerashraful.vercel.app/",
      github: "https://github.com/ashraful-commits/portfolio.git",
      shortdis: "This is protFolio",
      preview: gallary5,
      tools: ["NextJs", "Redux toolkit"],
      type: "portfolio",
    },
    {
      id: 6,
      name: "E-Commerce",
      live: "https://e-comwebapp.vercel.app/",
      github: "https://github.com/ashraful-commits/e-commerce-web.git",
      shortdis: "It's E-commerce App",
      preview: gallary6,
      tools: ["React", "Redux toolkit"],
      type: "e-commerce",
    },
  ];
  return (
    <div className="relative z-0 w-full min-h-screen">
      <div className="absolute top-0 left-0 z-10 w-full h-full">
        <img className="object-cover w-full h-full" src="/galaxy.gif" />
      </div>
      <div className="relative z-20">
        <h2 className="text-white reflection text-[32px] lg:text-[50px] md:text-[50px] font-syncopate my-14 leading-9 z-20 text-center">
          All projects
        </h2>
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
              Portfolio
            </Tab>
            <Tab
              className={` uppercase px-3 py-1 text-white border my-1 border-gray-900 active:bg-blue-500 font-gruppo text-[16px] cursor-pointer reflection ${
                tabIndex == 2 ? "bg-blue-600" : "bg-blue-600 bg-opacity-20"
              }`}
            >
              e-commerce
            </Tab>
            <Tab
              className={` uppercase px-3 py-1 text-white border my-1 border-gray-900 active:bg-blue-500 font-gruppo text-[16px] cursor-pointer reflection ${
                tabIndex == 3 ? "bg-blue-600" : "bg-blue-600 bg-opacity-20"
              }`}
            >
              social
            </Tab>
            <Tab
              className={` uppercase px-3 py-1 text-white border my-1 border-gray-900 active:bg-blue-500 font-gruppo text-[16px] cursor-pointer reflection ${
                tabIndex == 4 ? "bg-blue-600" : "bg-blue-600 bg-opacity-20"
              }`}
            >
              ftp server
            </Tab>
            <Tab
              className={` uppercase px-3 py-1 text-white border my-1 border-gray-900 active:bg-blue-500 font-gruppo text-[16px] cursor-pointer reflection ${
                tabIndex == 5 ? "bg-blue-600" : "bg-blue-600 bg-opacity-20"
              }`}
            >
              education
            </Tab>
            <Tab
              className={` uppercase px-3 py-1 text-white border my-1 border-gray-900 active:bg-blue-500 font-gruppo text-[16px] cursor-pointer reflection ${
                tabIndex == 6 ? "bg-blue-600" : "bg-blue-600 bg-opacity-20"
              }`}
            >
              mobile
            </Tab>
            <Tab
              className={` uppercase px-3 py-1 text-white border my-1 border-gray-900 active:bg-blue-500 font-gruppo text-[16px] cursor-pointer reflection ${
                tabIndex == 7 ? "bg-blue-600" : "bg-blue-600 bg-opacity-20"
              }`}
            >
              Blog
            </Tab>
            <Tab
              className={` uppercase px-3 py-1 text-white border my-1 border-gray-900 active:bg-blue-500 font-gruppo text-[16px] cursor-pointer reflection ${
                tabIndex == 8 ? "bg-blue-600" : "bg-blue-600 bg-opacity-20"
              }`}
            >
              dashboard
            </Tab>
          </TabList>
          <hr className="my-2 border-0 " />
          <div className="px-5">
          <TabPanel className="flex items-center justify-center">
            <div className="grid items-center justify-center w-full grid-cols-1 gap-1 lg:grid-cols-3 md:grid-cols-3">
              {Projects.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="relative w-full overflow-hidden border border-gray-900 h-80 group"
                  >
                    <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full bg-blue-500 gap-y-3 bg-opacity-10 group-hover:bg-opacity-80">
                      <h5 className="text-[24px] font-gruppo text-white">
                        {item.name}
                      </h5>
                      <a
                        target="blank"
                        className=" text-white  font-gruppo bg-blue-500 border-0 hover:bg-opacity-100 bg-opacity-30 w-[70px] flex justify-center items-center h-[30px]"
                        href={item.live}
                      >
                        Live
                      </a>
                      <a
                        target="blank"
                        className=" text-white  font-gruppo bg-blue-500 border-0 hover:bg-opacity-100 bg-opacity-30 w-[70px] flex justify-center items-center h-[30px]"
                        href={item.github}
                      >
                        github
                      </a>
                    </div>
                    <img
                      className="transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                      src={item.preview}
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
          </TabPanel>
          <TabPanel className="flex items-center justify-center">
            <div className="grid items-center justify-center w-full grid-cols-1 gap-1 lg:grid-cols-3 md:grid-cols-3">
              {Projects.filter((item) => item.type == "portfolio").map(
                (item, index) => {
                  return (
                    <div
                      key={index}
                      className="relative w-full overflow-hidden border border-gray-900 h-80 group"
                    >
                      <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full bg-blue-500 gap-y-3 bg-opacity-10 group-hover:bg-opacity-80">
                        <h5 className="text-[24px] font-gruppo text-white">
                          {item.name}
                        
                        </h5>
                        <div className="flex gap-x-5">
                        <a
                          target="blank"
                          className=" text-white  font-gruppo bg-blue-500 border-0 hover:bg-opacity-100 bg-opacity-30 w-[70px] flex justify-center items-center h-[30px]"
                          href={item.live}
                        >
                          Live
                        </a>
                        <a
                          target="blank"
                          className=" text-white  font-gruppo bg-blue-500 border-0 hover:bg-opacity-100 bg-opacity-30 w-[70px] flex justify-center items-center h-[30px]"
                          href={item.github}
                        >
                          github
                        </a>
                        
                        </div>
                      </div>
                      <img
                        className="transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                        src={item.preview}
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
              {Projects.filter((item) => item.type == "e-commerce").map(
                (item, index) => {
                  return (
                    <div
                      key={index}
                      className="relative w-full overflow-hidden border border-gray-900 h-80 group"
                    >
                      <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full bg-blue-500 gap-y-3 bg-opacity-10 group-hover:bg-opacity-80">
                        <h5 className="text-[24px] font-gruppo text-white">
                          {item.name}
                        
                        </h5>
                        <div className="flex gap-x-5">
                        <a
                          target="blank"
                          className=" text-white  font-gruppo bg-blue-500 border-0 hover:bg-opacity-100 bg-opacity-30 w-[70px] flex justify-center items-center h-[30px]"
                          href={item.live}
                        >
                          Live
                        </a>
                        <a
                          target="blank"
                          className=" text-white  font-gruppo bg-blue-500 border-0 hover:bg-opacity-100 bg-opacity-30 w-[70px] flex justify-center items-center h-[30px]"
                          href={item.github}
                        >
                          github
                        </a>
                        
                        </div>
                      </div>
                      <img
                        className="transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                        src={item.preview}
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
              {Projects.filter((item) => item.type == "social").map(
                (item, index) => {
                  return (
                    <div
                      key={index}
                      className="relative w-full overflow-hidden border border-gray-900 h-80 group"
                    >
                      <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full bg-blue-500 gap-y-3 bg-opacity-10 group-hover:bg-opacity-80">
                        <h5 className="text-[24px] font-gruppo text-white">
                          {item.name}
                        
                        </h5>
                        <div className="flex gap-x-5">
                        <a
                          target="blank"
                          className=" text-white  font-gruppo bg-blue-500 border-0 hover:bg-opacity-100 bg-opacity-30 w-[70px] flex justify-center items-center h-[30px]"
                          href={item.live}
                        >
                          Live
                        </a>
                        <a
                          target="blank"
                          className=" text-white  font-gruppo bg-blue-500 border-0 hover:bg-opacity-100 bg-opacity-30 w-[70px] flex justify-center items-center h-[30px]"
                          href={item.github}
                        >
                          github
                        </a>
                        
                        </div>
                      </div>
                      <img
                        className="transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                        src={item.preview}
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
              {Projects.filter((item) => item.type == "ftp-server").map(
                (item, index) => {
                  return (
                    <div
                      key={index}
                      className="relative w-full overflow-hidden border border-gray-900 h-80 group"
                    >
                      <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full bg-blue-500 gap-y-3 bg-opacity-10 group-hover:bg-opacity-80">
                        <h5 className="text-[24px] font-gruppo text-white">
                          {item.name}
                        
                        </h5>
                        <div className="flex gap-x-5">
                        <a
                          target="blank"
                          className=" text-white  font-gruppo bg-blue-500 border-0 hover:bg-opacity-100 bg-opacity-30 w-[70px] flex justify-center items-center h-[30px]"
                          href={item.live}
                        >
                          Live
                        </a>
                        <a
                          target="blank"
                          className=" text-white  font-gruppo bg-blue-500 border-0 hover:bg-opacity-100 bg-opacity-30 w-[70px] flex justify-center items-center h-[30px]"
                          href={item.github}
                        >
                          github
                        </a>
                        
                        </div>
                      </div>
                      <img
                        className="transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                        src={item.preview}
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
              {Projects.filter((item) => item.type == "education").map(
                (item, index) => {
                  return (
                    <div
                      key={index}
                      className="relative w-full overflow-hidden border border-gray-900 h-80 group"
                    >
                      <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full bg-blue-500 gap-y-3 bg-opacity-10 group-hover:bg-opacity-80">
                        <h5 className="text-[24px] font-gruppo text-white">
                          {item.name}
                        
                        </h5>
                        <div className="flex gap-x-5">
                        <a
                          target="blank"
                          className=" text-white  font-gruppo bg-blue-500 border-0 hover:bg-opacity-100 bg-opacity-30 w-[70px] flex justify-center items-center h-[30px]"
                          href={item.live}
                        >
                          Live
                        </a>
                        <a
                          target="blank"
                          className=" text-white  font-gruppo bg-blue-500 border-0 hover:bg-opacity-100 bg-opacity-30 w-[70px] flex justify-center items-center h-[30px]"
                          href={item.github}
                        >
                          github
                        </a>
                        
                        </div>
                      </div>
                      <img
                        className="transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                        src={item.preview}
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
              {Projects.filter((item) => item.type == "mobile").map(
                (item, index) => {
                  return (
                    <div
                      key={index}
                      className="relative w-full overflow-hidden border border-gray-900 h-80 group"
                    >
                      <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full bg-blue-500 gap-y-3 bg-opacity-10 group-hover:bg-opacity-80">
                        <h5 className="text-[24px] font-gruppo text-white">
                          {item.name}
                        
                        </h5>
                        <div className="flex gap-x-5">
                        <a
                          target="blank"
                          className=" text-white  font-gruppo bg-blue-500 border-0 hover:bg-opacity-100 bg-opacity-30 w-[70px] flex justify-center items-center h-[30px]"
                          href={item.live}
                        >
                          Live
                        </a>
                        <a
                          target="blank"
                          className=" text-white  font-gruppo bg-blue-500 border-0 hover:bg-opacity-100 bg-opacity-30 w-[70px] flex justify-center items-center h-[30px]"
                          href={item.github}
                        >
                          github
                        </a>
                        
                        </div>
                      </div>
                      <img
                        className="transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                        src={item.preview}
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
              {Projects.filter((item) => item.type == "admin-dashboard").map(
                (item, index) => {
                  return (
                    <div
                      key={index}
                      className="relative w-full overflow-hidden border border-gray-900 h-80 group"
                    >
                      <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full bg-blue-500 gap-y-3 bg-opacity-10 group-hover:bg-opacity-80">
                        <h5 className="text-[24px] font-gruppo text-white">
                          {item.name}
                        
                        </h5>
                        <div className="flex gap-x-5">
                        <a
                          target="blank"
                          className=" text-white  font-gruppo bg-blue-500 border-0 hover:bg-opacity-100 bg-opacity-30 w-[70px] flex justify-center items-center h-[30px]"
                          href={item.live}
                        >
                          Live
                        </a>
                        <a
                          target="blank"
                          className=" text-white  font-gruppo bg-blue-500 border-0 hover:bg-opacity-100 bg-opacity-30 w-[70px] flex justify-center items-center h-[30px]"
                          href={item.github}
                        >
                          github
                        </a>
                        
                        </div>
                      </div>
                      <img
                        className="transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                        src={item.preview}
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
  );
};

export default Project;
