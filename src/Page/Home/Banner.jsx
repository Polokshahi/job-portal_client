import { motion } from "framer-motion";
import Team1 from "../../assets/team1.jpeg";
import Team2 from "../../assets/team2.jpeg";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex justify-between flex-col-reverse lg:flex-row  items-center gap-10">

        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left">
          <motion.h1
            animate={{ x: 50 }}
            transition={{
              duration: 3,
              delay: 2,
              ease: "easeIn",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
          >
            Latest{" "}
            <motion.span
              animate={{ color: "#ecff33" }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              Job
            </motion.span>{" "}
            For You!
          </motion.h1>

          <p className="py-6 text-sm sm:text-base text-gray-600 max-w-md mx-auto lg:mx-0">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary mt-4">Get Started</button>
        </div>

        {/* Image Section */}
        <div className="flex-1 relative flex flex-col items-center lg:items-start">
          <motion.img
            src={Team1}
            className="w-64 sm:w-72 md:w-[350px] rounded-t-[35px] rounded-br-[35px] border-l-4 border-b-4 border-blue-500"
            animate={{  y: [25, 50, 25] }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          <motion.img
            src={Team2}
            className="w-64 sm:w-72 md:w-[350px] mt-6 lg:mt-0 lg:ml-20 rounded-t-[35px] rounded-br-[35px] border-l-4 border-b-4 border-blue-500"
            animate={{  x: [25, 50, 25] }}
            delay={1.5}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
