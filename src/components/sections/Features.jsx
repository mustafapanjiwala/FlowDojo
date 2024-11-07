import {
  Archive,
  Codepen,
  Crosshair,
  GitPullRequestIcon,
  Trello,
} from "lucide-react";
import f1 from "../../assets/f1.png";
import f2 from "../../assets/f2.png";
import f3 from "../../assets/f3.png";
import f4 from "../../assets/f4.png";

export default function Features() {
  const features = [
    {
      title: "Project Management",
      description:
        "Manage your projects from start to finish. With all of your projects in Ganttify, you'll always know who's doing what, by when",
      icon: Trello,
      image: f1,
    },
    {
      title: "Workflows and Automations",
      description:
        "Create more efficient processes so you can seamlessly manage projects across departments and get more done in less time",
      icon: GitPullRequestIcon,
      image: f2,
    },
    {
      title: "Goals and Reporting",
      description:
        "See how each project and portfolio ladders up to company objectives and keep everyone focused on the work that matters",
      icon: Crosshair,
      image: f3,
    },
    {
      title: "Resource Management",
      description:
        "Get the visibility you need to plan accurate timelines, adjust workloads, and stay on track to achieve your objectives",
      icon: Archive,
      image: f4,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="px-4 md:mx-[5%] lg:mx-[5%]">
        {/* <div className="container mx-auto px-4"> */}
        {/* Header */}
        <div className=" w-4/5 mx-3 ps-4 md:mx-auto mb-8 md:mb-24 md:w-full md:ps-8 lg:mb-24 lg:w-full">
          <div
            className="inline-flex items-center px-2 md:px-4 py-1.5 text-sm font-medium text-gray-500 mb-6"
            style={{
              border: "1px solid rgba(223, 225, 230, 1)",
              borderRadius: "12px",
            }}
          >
            <Codepen className="mr-2 h-4 w-4" />
            Features
          </div>
          <h2
            className="text-5xl md:text-6xl lg:text-7xl  leading-tight mb-6"
            style={{ fontWeight: "600" }}
          >
            Everything Your Team Looking For
          </h2>
          <p className="text-l md:text-xl text-gray-500">
            Ganttify's exceptional flexibility can handle any type of work. And
            we never stop innovating
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-1 lg:gap-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-gradient-to-b from-gray-50 to-white rounded-3xl p-6 md:p-8"
            >
              <div className="relative rounded-2xl overflow-hidden ">
                <img
                  src={feature.image}
                  alt={`${feature.title} interface example`}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="mt-4 mb-4 space-y-4">
                <div className="inline-flex justify-start items-center">
                  <feature.icon className="md:hidden lg:hidden h-6 w-6  me-3" />
                  <h3 className="text-xl" style={{ fontWeight: "600" }}>
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
