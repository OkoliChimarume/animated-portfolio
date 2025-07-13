import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

export const NAV_LINKs = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Work", to: "/work" },
  { name: "Contact", to: "/contact" },
];

export const SOCIALS = [
  {
    name: "Instagram",
    iconComponent: (
      <InstagramIcon fontSize="inherit" className="bg-transparent" />
    ),
  },
  {
    name: "Facebook",
    iconComponent: (
      <FacebookIcon fontSize="inherit" className="bg-transparent" />
    ),
  },
  {
    name: "Twitter",
    iconComponent: (
      <TwitterIcon fontSize="inherit" className="bg-transparent" />
    ),
  },
  {
    name: "Linkedin",
    iconComponent: (
      <LinkedInIcon fontSize="inherit" className="bg-transparent" />
    ),
  },
  {
    name: "Youtube",
    iconComponent: (
      <YouTubeIcon fontSize="inherit" className="bg-transparent" />
    ),
  },
];
export const Works = [
  {
    name: "wor 1",
    to: "/work/1",
    description: "Description of work 1",
    image: "/path/to/image1.jpg",
  },
  {
    name: "wor 2",
    to: "/work/2",
    description: "Description of work 2",
    image: "/path/to/image2.jpg",
  },
  {
    name: "wor 3",
    to: "/work/3",
    description: "Description of work 3",
    image: "/path/to/image3.jpg",
  },
  {
    name: "wor 4",
    to: "/work/4",
    description: "Description of work 4",
    image: "/path/to/image4.jpg",
  },
  {
    name: "wor 5",
    to: "/work/5",
    description: "Description of work 5",
    image: "/path/to/image5.jpg",
  },
  {
    name: "wor 6",
    to: "/work/6",
    description: "Description of work 6",
    image: "/path/to/image6.jpg",
  },
];
