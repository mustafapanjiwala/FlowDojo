import { companies } from "../data/data.js";

export default function Proof() {
  return (
    <section className="py-16 bg-white">
      {/* <div className="container mx-auto px-4"> */}
      <div className="px-4 md:mx-[5%] lg:mx-[5%]">
        <h2 className="text-center text-l text-gray-400 mb-12">
          Trusted by 2 million+ teams
        </h2>

        <div className="w-full flex flex-wrap gap-6 items-center justify-around mx-auto md:gap-14">
          {companies.map((company, index) => (
            <div
              key={company.name}
              className={`w-24 md:w-40 flex items-center justify-center opacity-70 transition-opacity hover:opacity-100 `}
            >
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
