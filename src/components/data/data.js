import {
  Archive,
  Crosshair,
  GitPullRequestIcon,
  Trello
} from "lucide-react";

import f1 from "../../assets/f1.png";
import f2 from "../../assets/f2.png";
import f3 from "../../assets/f3.png";
import f4 from "../../assets/f4.png";

import mailchimp from "../../assets/mailchimp_2.png";
import medium from "../../assets/medium_2.png";
import microsoft from "../../assets/microsoft_2.png";
import evernote from "../../assets/evernote.png";
import dropbox from "../../assets/dropbox.png";

export const navigation = [
  { name: "Product", href: "#" },
  { name: "Solutions", href: "#" },
  { name: "Resources", href: "#" },
  { name: "Company", href: "#" },
  { name: "Pricing", href: "#" },
];

// Footer Data
export const footerLinks = {
  ganttify: {
    title: "Ganttify",
    links: [
      { name: "Home", href: "#" },
      { name: "Product", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Customer Success", href: "#" },
      { name: "Templates", href: "#" },
      { name: "Trust & Security", href: "#" },
    ],
  },
  solutions: {
    title: "Solutions",
    links: [
      { name: "Project Management", href: "#" },
      { name: "Goal Management", href: "#" },
      { name: "Agile Management", href: "#" },
      { name: "Task Management", href: "#" },
      { name: "Productivity", href: "#" },
      { name: "Work Management", href: "#" },
      { name: "Project Planning", href: "#" },
      { name: "To Do Lists", href: "#" },
    ],
  },
  aboutUs: {
    title: "About Us",
    links: [
      { name: "Company", href: "#" },
      { name: "Leadership", href: "#" },
      { name: "Customers", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Changelog", href: "#" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { name: "Help Center", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Developers & API", href: "#" },
      { name: "Community", href: "#" },
      { name: "Events", href: "#" },
      { name: "Status", href: "#" },
    ],
  },
  helpfulLinks: {
    title: "Helpful Links",
    links: [
      { name: "Legal center", href: "#" },
      { name: "Privacy policy", href: "#" },
      { name: "Partnerships", href: "#" },
    ],
  },
};

// Testimonials data
export const testimonials = [
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

// Features Data
export const features = [
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

//Pricing Data
export const plans = [
  {
    name: "Personal",
    price_monthly: 29,
    price_yearly: 290,
    type: "number",
    description:
      "For individuals and small teams looking to manage their tasks",
    features: [
      "Unlimited contacts",
      "Bulk emailing",
      "AI Integration",
      "View & share up to 3 years",
      "Collaboration & permissions",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price_monthly: 39,
    price_yearly: 390,
    type: "number",
    description:
      "For growing teams that need to track their projects' progress and hit deadlines",
    features: [
      "Email sequences",
      "Send emails from multiple domains",
      "Connect multiple email accounts",
      "Fully adjustable sharing permissions",
      "Migration services",
    ],
    highlighted: true,
  },
  {
    name: "Beyond limits",
    price: "Custom Plan",
    type: "Not number",
    description:
      "For companies that need to manage a portfolio of work and goals across departments",
    features: [
      "White glove onboarding",
      "Custom billing",
      "Dedicated slack channel",
      "Dedicated point of contact",
      "Unlimited reporting",
    ],
    highlighted: false,
  },
];

//Proof Data
export const companies = [
  { name: "Medium", logo: medium },
  { name: "Mailchimp", logo: mailchimp },
  { name: "Evernote", logo: evernote },
  { name: "Dropbox", logo: dropbox },
  { name: "Microsoft", logo: microsoft },
];