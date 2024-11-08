import { Crosshair } from "lucide-react";
import bg from "../../assets/gradientBG.png";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import mailchimp from "../../assets/mailchimp.png";
import medium from "../../assets/medium.png";
import microsoft from "../../assets/microsoft.png";
import statImage1 from "../../assets/statImage1.png";
import statImage2 from "../../assets/statImage2.png";
import statImage3 from "../../assets/statImage3.png";
import upwork from "../../assets/upwork.png";

export default function Hero() {
  return (
    <div
      className="bg-black rounded-3xl md:rounded-none lg:rounded-none text-white flex items-center justify-center md:h-[90vh] lg:h-[90vh]"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container p-5 mt-5 md:m-auto">
        {/* Top Badge */}
        <div className="inline-flex items-center rounded-xl bg-white/10 px-4 py-1.5 text-sm font-medium text-white mb-4">
          <Crosshair className="mr-2 h-4 w-4" />
          Goals & Reporting
        </div>

        <div className="grid lg:grid-cols-2 gap-2 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl font-semibold lg:text-6xl leading-tight">
              Goals and Reporting
              <span className="block">In One Place</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-xl">
              Connect every team's work to company objectives, then track
              progress with real-time data
            </p>
            <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4">
              <button className="w-full sm:w-auto px-6 py-3 bg-white rounded-xl text-black font-medium hover:bg-gray-100 transition-colors">
                Get Started
              </button>
              <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 transition-colors">
                How it Works
              </button>
            </div>

            {/* Trusted By Section */}
            <div className="pt-8">
              <p className="text-sm text-gray-400 mb-4">
                Trusted by 2 million+ teams
              </p>
              <div className="grid grid-cols-3 gap-8 items-center opacity-70 md:grid-cols-4">
                {[mailchimp, medium, microsoft, upwork].map(
                  (company, index) => (
                    <div
                      key={index}
                      className={`h-8 ${
                        index === 3 ? "hidden md:block lg:block" : ""
                      }`}
                    >
                      <img
                        src={company}
                        alt={`company-logo-${index}`}
                        className="h-full object-contain"
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Right Content - Individual Stats Cards */}
          <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] mt-8 md:mt-0 floating">
            <div className="grid grid-cols-2 gap-4 gap-y-8 md:gap-6 h-full">
              <div className="col-span-1 row-span-1 relative">
                <img
                  src={statImage1}
                  alt="Stat 1"
                  className="absolute bottom-0 right-8 md:right-0 w-2/3 md:w-auto object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="col-span-1 row-span-1 relative">
                <img
                  src={statImage2}
                  alt="Stat 2"
                  className="absolute bottom-0 -left-4 md:left-0 md:w-auto object-cover rounded-2xl shadow-lg"
                />
                <img
                  src={icon1}
                  alt="Icon 1"
                  className="absolute -top-4 md:-top-8 -left-20 md:-left-24 w-16 h-16 md:w-24 md:h-24 z-10"
                />
              </div>
              <div className="col-span-2 row-span-1  relative">
                <img
                  src={statImage3}
                  alt="Stat 3"
                  className="absolute top-0 left-[15%] md:left-[30%] w-[70%] md:w-auto object-cover rounded-2xl shadow-lg"
                />
                <img
                  src={icon3}
                  alt="Icon 3"
                  className="absolute top-10 md:top-10 -right-5 md:-right-5 w-16 h-16 md:w-24 md:h-24 z-10"
                />
                <img
                  src={icon2}
                  alt="Icon 2"
                  className="absolute top-0 -left-[10px] md:left-[60px] w-16 h-16 md:w-24 md:h-24 z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
