import {
  FaCloudUploadAlt,
  FaCode,
  FaDatabase,
  FaFolderOpen,
  FaLaptop,
  FaReact,
  FaServer,
  FaShoppingCart,
  FaUsers,
} from "react-icons/fa";

const Service = () => {
  return (
    <div id="service" className="container relative z-0 w-full min-h-screen group ">
        <div className="absolute top-0 left-0 z-10 w-full h-full ">
            <img className="object-cover w-full h-full" src="/galaxy.gif" alt="" />
        </div>
         <h2 className="text-white reflection text-[32px] lg:text-[50px] md:text-[50px] font-syncopate my-20 leading-9 z-20 text-center relative group-hover:text-yellow-500 ">
          All Services
        </h2>
     
      <div className="relative z-10 grid grid-cols-1 gap-2 md:grid-cols-4 lg:grid-cols-4">
        <div className="w-full min-h-[35vh] border border-gray-900 bg-blue-600 bg-opacity-5 hover:backdrop-blur-sm p-5 flex flex-col items-center justify-center hover:bg-opacity-20 transition-all ease-in-out duration-300">
          <FaLaptop size={70} color="white" className="reflection group-hover:fill-red-500" />
          <h4 className="my-6 font-normal text-center text-white font-syncopate text-[18px] reflection leading-5  ">
            Web Development
          </h4>
          <p className="text-sm text-justify text-gray-300 font-gruppo">
            Providing end-to-end web development solutions using the MERN stack
            to create modern, responsive, and user-friendly websites and
            applications. I specialize in crafting seamless user experiences and
            robust functionalities to meet your business goals.
          </p>
        </div>

        <div className="w-full min-h-[35vh] border border-gray-900 bg-blue-600 bg-opacity-5 hover:backdrop-blur-sm p-5 flex flex-col items-center justify-center hover:bg-opacity-20 transition-all ease-in-out duration-300">
          <FaShoppingCart size={70} color="white" className="reflection group-hover:fill-red-500" />
          <h4 className="my-6 font-normal text-center text-white font-syncopate text-[18px] reflection leading-5  ">
            Custom Web Applications
          </h4>
          <p className="text-sm text-justify text-gray-300 font-gruppo">
            Crafting tailor-made web applications for your specific needs. From
            building complex e-commerce platforms with secure payment gateways
            to creating engaging social media networks, I bring your unique
            ideas to life
          </p>
        </div>

        <div className="w-full min-h-[35vh] border border-gray-900 bg-blue-600 bg-opacity-5 hover:backdrop-blur-sm p-5 flex flex-col items-center justify-center hover:bg-opacity-20 transition-all ease-in-out duration-300">
          <FaCode size={70} color="white" className="reflection group-hover:fill-red-500" />
          <h4 className="my-6 font-normal text-center text-white font-syncopate text-[18px] reflection leading-5  ">
            API Development
          </h4>
          <p className="text-sm text-justify text-gray-300 font-gruppo">
            Developing robust and efficient APIs to power your applications.
            Whether it&apos;s designing RESTful APIs for traditional
            communication or implementing GraphQL for flexible data retrieval, I
            ensure smooth interactions between your front-end and back-end.
          </p>
        </div>

        <div className="w-full min-h-[35vh] border border-gray-900 bg-blue-600 bg-opacity-5 hover:backdrop-blur-sm p-5 flex flex-col items-center justify-center hover:bg-opacity-20 transition-all ease-in-out duration-300">
          <FaDatabase size={70} color="white" className="reflection group-hover:fill-red-500" />
          <h4 className="my-6 font-normal text-center text-white font-syncopate text-[18px] reflection leading-5  ">
            Database Management
          </h4>
          <p className="text-sm text-justify text-gray-300 font-gruppo">
            Managing data effectively through optimized database solutions. I
            excel in designing MongoDB databases, ensuring data integrity, and
            enhancing performance by optimizing queries and indexing.
          </p>
        </div>

        <div className="w-full min-h-[35vh] border border-gray-900 bg-blue-600 bg-opacity-5 hover:backdrop-blur-sm p-5 flex flex-col items-center justify-center hover:bg-opacity-20 transition-all ease-in-out duration-300">
          <FaReact size={70} color="white" className="reflection group-hover:fill-red-500" />
          <h4 className="my-6 font-normal text-center text-white font-syncopate text-[18px] reflection leading-5  ">
            Front-End Development
          </h4>
          <p className="text-sm text-justify text-gray-300 font-gruppo">
            Designing captivating user interfaces with React.js. I create
            interactive, pixel-perfect front-end designs that provide seamless
            user interactions and engaging visual experiences.
          </p>
        </div>

        <div className="w-full min-h-[35vh] border border-gray-900 bg-blue-600 bg-opacity-5 hover:backdrop-blur-sm p-5 flex flex-col items-center justify-center hover:bg-opacity-20 transition-all ease-in-out duration-300">
          <FaServer size={70} color="white" className="reflection group-hover:fill-red-500" />
          <h4 className="my-6 font-normal text-center text-white font-syncopate text-[18px] reflection leading-5  ">
            Back-End Development
          </h4>
          <p className="text-sm text-justify text-gray-300 font-gruppo">
            Building the backbone of your applications using Node.js and
            Express.js. I handle server-side logic, API development, and data
            management to ensure a reliable and efficient back-end architecture.
          </p>
        </div>

        <div className="w-full min-h-[35vh] border border-gray-900 bg-blue-600 bg-opacity-5 hover:backdrop-blur-sm p-5 flex flex-col items-center justify-center hover:bg-opacity-20 transition-all ease-in-out duration-300">
          <FaCloudUploadAlt size={70} color="white" className="reflection group-hover:fill-red-500" />
          <h4 className="my-6 font-normal text-center text-white font-syncopate text-[18px] reflection leading-5  ">
            Deployment and Hosting
          </h4>
          <p className="text-sm text-justify text-gray-300 font-gruppo">
            Streamlining deployment processes for hassle-free hosting. With
            expertise in DevOps practices and CI/CD pipelines, I ensure your
            applications are deployed smoothly on platforms like AWS, Heroku, or
            Netlify.
          </p>
        </div>

        <div className="w-full min-h-[35vh] border border-gray-900 bg-blue-600 bg-opacity-5 hover:backdrop-blur-sm p-5 flex flex-col items-center justify-center hover:bg-opacity-20 transition-all ease-in-out duration-300">
          <FaUsers size={70} color="white" className="reflection group-hover:fill-red-500" />
          <h4 className="my-6 font-normal text-center text-white font-syncopate text-[18px] reflection leading-5  ">
            Collaboration and Communication
          </h4>
          <p className="text-sm text-justify text-gray-300 font-gruppo">
            Collaborating effectively to bring projects to life. I leverage
            version control systems like Git to facilitate seamless teamwork and
            open lines of communication to understand and meet project
            requirements.
          </p>
        </div>

        <div className="w-full min-h-[35vh] border border-gray-900 bg-blue-600 bg-opacity-5 hover:backdrop-blur-sm p-5 flex flex-col items-center justify-center hover:bg-opacity-20 transition-all ease-in-out duration-300">
          <FaFolderOpen size={70} color="white" className="reflection group-hover:fill-red-500" />
          <h4 className="my-6 font-normal text-center text-white font-syncopate text-[18px] reflection leading-5  ">
            Case Studies and Projects
          </h4>
          <p className="text-sm text-justify text-gray-300 font-gruppo">
            Showcasing real-world projects that exemplify my skills. Explore my
            portfolio to see projects that demonstrate my ability to create
            dynamic and functional applications using the MERN stack.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
