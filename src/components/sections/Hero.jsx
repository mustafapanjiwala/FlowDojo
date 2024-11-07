import { Clock, ChevronRight, Crosshair } from "lucide-react";
import mailchimp from "../../assets/mailchimp.png";
import medium from "../../assets/medium.png";
import microsoft from "../../assets/microsoft.png";
import upwork from "../../assets/upwork.png";
import bg from "../../assets/gradientBG.png";
import heroRight from "../../assets/heroRight.png";

export default function Hero() {
  return (
    <div
      className=" bg-black rounded-3xl md:rounded-none lg:rounded-none text-white flex items-center justify-center md:h-[90vh] lg:h-[90vh]"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // height: "90vh",
      }}
    >
      <div className="container p-5 md:p-0 mt-5 md:m-auto">
        {/* Top Badge */}
        <div
          className="inline-flex items-center bg-white/10 px-4 py-1.5 text-sm font-medium text-white mb-4"
          style={{ borderRadius: "12px" }}
        >
          <Crosshair className="mr-2 h-4 w-4" />
          Goals & Reporting
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1
              className="text-5xl lg:text-6xl leading-tight"
              style={{ fontWeight: "600" }}
            >
              Goals and Reporting
              <span className="block">In One Place</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-xl">
              Connect every team's work to company objectives, then track
              progress with real-time data
            </p>
            <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4">
              <button
                className="w-full sm:w-auto px-6 py-3 bg-white text-black  font-medium hover:bg-gray-100 transition-colors"
                style={{
                  borderRadius: "12px",
                }}
              >
                Get Started
              </button>
              <button
                className="w-full sm:w-auto px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors"
                style={{
                  borderRadius: "12px",
                }}
              >
                How it Works
              </button>
            </div>

            {/* Trusted By Section */}
            <div className="pt-8">
              <p className="text-sm text-gray-400 mb-4">
                Trusted by 2 million+ teams
              </p>
              <div className="grid grid-cols-3  gap-8 items-center opacity-70 md:grid-cols-4">
                {[mailchimp, medium, microsoft, upwork].map(
                  (company, index) => (
                    <div
                      key={company}
                      className={`h-8 ${
                        index == 3 ? "hidden md:block lg:block" : ""
                      }`}
                    >
                      <img
                        src={`${company}`}
                        alt={company}
                        className="h-full object-contain"
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="mt-8 md:mt-0">
            <img
              src={heroRight}
              alt={heroRight}
              className="h-full object-contain floating"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
