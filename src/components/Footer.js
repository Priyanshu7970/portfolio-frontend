
import { Tooltip } from "react-bootstrap";
import XIcon from '@mui/icons-material/X';
import GitHub from "@mui/icons-material/GitHub";
import FacebookIcon from '@mui/icons-material/Facebook';
import CodeIcon from '@mui/icons-material/Code';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from  '@mui/icons-material/Instagram';
const Footer = ({profile})=>{
    return (<>
     <div className="bg-primary">
<div className="container flex flex-col justify-between py-6 sm:flex-row">
  <p className="text-center font-body text-white md:text-left">
    © Copyright 2024. All right reserved, PriyanshuPortfolio.
  </p>
  <div
          className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0"
        >
          <a href={`${profile.fblink}`} className="relative">
            <Tooltip id="tooltip" placement="top" title="facebook" >
            <FacebookIcon 
              className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"
            />
           
            </Tooltip>
          </a>
          <a href={`${profile.twitterlink}`} className="pl-4">
          <Tooltip   id="tooltip" placement="top" title="threads">
            <XIcon className="text-2xl text-white hover:text-yellow"/>
            </Tooltip>
          
          </a>
          <a href={`${profile.leetcodelink}`} className="pl-4">
            <Tooltip   id="tooltip" placement="top" title="leetcode">
            <CodeIcon
              className="bx text-2xl text-white hover:text-yellow"
            />
            </Tooltip>
          </a>
          <a href={`${profile.linkedinlink}`} className="pl-4">
            <Tooltip id="tooltip" placement="top" title="linkedin" >
            <LinkedInIcon
              className=" text-2xl text-white hover:text-yellow"
            />
            </Tooltip>
          </a>
          <a href={`${profile.instagramlink}`} className="pl-4">
            <Tooltip id="tooltip" placement="top" title="instagram" >
            <InstagramIcon
              className=" text-2xl text-white hover:text-yellow"
            />
            </Tooltip>
          </a>
          <a href={`${profile.githublink}`} className="pl-4">
            <Tooltip id="tooltip" placement="top" title="github" >
            <GitHub className="text-2xl text-white hover:text-yellow"/>
            </Tooltip>
          </a>
        </div>
</div>
</div>
    </>)
}
export default Footer;