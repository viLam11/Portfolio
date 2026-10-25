import React from "react";
import { styles } from "../styles.js";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative mx-auto flex min-h-svh w-full flex-col overflow-hidden">
      <div
        className={`${styles.paddingX} relative z-10 mx-auto flex w-full shrink-0 max-w-7xl items-start gap-4 pt-32 md:gap-5 md:pt-36`}
      >
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 h-30 sm:h-30 md:h-42 violet-gradient" />
        </div>

        <div className="max-w-2xl md:max-w-[52%]">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Ngọc</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop websites, mobile applications
          </p>
        </div>
      </div>
      <div className="relative z-0 mt-2 h-[40svh] min-h-50 w-full md:mt-0 md:h-[60svh] md:min-h-120">
        <ComputersCanvas />
      </div>
    </section>
  );
};

export default Hero;
