import { motion } from "framer-motion";
import { styles } from "../styles";
import ComputerCanvas from "./canvas/Computers";;
import { slideIn } from "../utils/motion";
import CarCanvas from "./canvas/car";
// import{ComputerCanvas} from "./canvas/Computers"

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] flex flex-row gap-5 max-w-7xl mx-auto items-start `}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="h-5 w-5 rounded-full bg-[#915eff]" />
          <div className="w-1  sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            hi, I'am <span className="text-[#915eff]">Prashant</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2  text-white-100`}>
            i develop user interface
            <br className="sm:block hidden" /> and web application
          </p>
        </div>
      </div>

<div className="h-screen w-full flex flex-row justify-between">
<div className="w-[50%] hidden md:block">
<CarCanvas />
</div>
<div className="w-[100%] md:w-[50%]">
<ComputerCanvas />
</div>
</div>

        <div className="absolute xs:bottom-15 bottom-[80px] w-full flex items-start justify-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] border-secondary rounded-3xl border-2 flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
