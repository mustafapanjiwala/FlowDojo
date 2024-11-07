import { User, Users } from "lucide-react";
import StarRating from "../common/StarRating";

export default function Customers() {
  const testimonials = [
    {
      rating: 4.8,
      quote:
        "Ganttify has revolutionized the way we manage our projects. Connecting tasks and workflows to our overall company goals has never been easier.",
      author: {
        name: "Charolette Hanlin",
        role: "Co-Founder, Heroes Digital",
        avatar: "https://randomuser.me/api/portraits/med/women/74.jpg",
      },
    },
    {
      rating: 4.8,
      quote:
        "Using Ganttify has streamlined our project management process. It's incredibly effective in aligning our daily tasks with the company's strategic goals.",
      author: {
        name: "Eleanor Pena",
        role: "Co-Founder, Heroes Digital",
        avatar: "https://randomuser.me/api/portraits/med/women/76.jpg",
      },
    },
    {
      rating: 4.8,
      quote:
        "Ganttify has provided us with a unified view of our projects. It connects our workflows directly to our business goals, making it easier to track progress.",
      author: {
        name: "Guy Hawkins",
        role: "Co-Founder, Heroes Digital",
        avatar: "https://randomuser.me/api/portraits/med/men/76.jpg",
      },
    },
    {
      rating: 4.8,
      quote:
        "Ganttify's ability to connect tasks with our company's goals has given us a new level of clarity and efficiency in our project management efforts.",
      author: {
        name: "Kristin Watson",
        role: "Co-Founder, Heroes Digital",
        avatar: "https://randomuser.me/api/portraits/med/women/75.jpg",
      },
    },
    {
      rating: 4.8,
      quote:
        "Using Ganttify, we've been able to ensure that all our project activities are aligned with our overarching business objectives, leading to better coordination and success.",
      author: {
        name: "Jane Cooper",
        role: "Co-Founder, Heroes Digital",
        avatar: "https://randomuser.me/api/portraits/med/men/78.jpg",
      },
    },
    {
      rating: 4.8,
      quote:
        "Ganttify has transformed our approach to project management. It ensures that every task, no matter how small, is aligned with our company's mission and goals.",
      author: {
        name: "Leslie Alexander",
        role: "Co-Founder, Heroes Digital",
        avatar: "https://randomuser.me/api/portraits/med/women/79.jpg",
      },
    },
  ];

  return (
    <section className="py-16 relative md:py-24 ">
      <div className=" hidden md:block lg:block z-50 h-[40%] w-full absolute bottom-0 bg-gradient-to-b from-transparent from-0% to-white to-100% "></div>
      {/* <section className="py-16 md:py-24 bg-white"> */}
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center  rounded-lg border-2 border-gray-200 px-4 py-1.5 text-sm text-gray-600 mb-8">
            <User className="mr-2 h-4 w-4" />
            Customers
          </div>
          <h2
            className="text-5xl md:text-4xls lg:text-5xl mb-6"
            style={{ fontWeight: "600" }}
          >
            See What Our Customers
            <br />
            Are Saying
          </h2>
          <p className="text-base text-gray-600">
            Here's what some of our customers say about our platform.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border border-gray-200 hover:border-purple-500 transition-colors"
            >
              <StarRating rating={testimonial.rating} />
              <blockquote className="mt-4 mb-6">
                <p className="text-lg text-black font-medium">
                  "{testimonial.quote}"
                </p>
              </blockquote>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.author.avatar}
                  alt=""
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.author.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.author.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}