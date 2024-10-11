import { createClient } from "@sanity/client";
import Head from "next/head";
import Script from "next/script"
import Link from "next/link";
import imageUrlBuilder from '@sanity/image-url'
import { use, useRef, useState } from "react";
import { useInputValidation } from "6pp";
import Alert from "@/components/Alert";
import { emailvalidator, namevalidator } from "@/utils/validator";
import { Tooltip } from "react-bootstrap";
import XIcon from '@mui/icons-material/X';
import GitHub from '@mui/icons-material/GitHub';
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import FacebookIcon from '@mui/icons-material/Facebook';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CodeIcon from '@mui/icons-material/Code';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import Image from "next/image";

export async function getServerSideProps() {
  const client = createClient({
    projectId: "p0ke04pe",
    dataset: "production",
    useCdn: false,
    apiVersion: '2021-08-31'
  });

  const query = `*[_type == "blog"] [0...3]`;
  const blogs = await client.fetch(query);
  const profileQuery = `*[_type == "profile"] [0]`;
  const profile = await client.fetch(profileQuery);



  return {
    props: {
      blogs,
      profile
    }
  }
}

export default function Home({ blogs, profile }) {
  const client = createClient({
    projectId: "p0ke04pe",
    dataset: "production",
    useCdn: false,
    apiVersion: '2021-08-31'
  });
  const builder = imageUrlBuilder(client);

  // const profile = {
  //   title:"PriyanshuPortfolio",
  //   name:"Priyanshu", 
  //   image:"../assets/img/dp.jpg",
  //   // image:"../assets/img/blog-author.jpg",
  //   fblink:"https://www.facebook.com/people/Priyanshu-Gupta/pfbid02bX8paAQyxZPJP7am51nHvfYeya3DiM9p3uYaby9StUAKxuWCTK4vBTcPLgdFNgAAl/",
  //   twitterlink:"https://x.com/Priyanshu241055",
  //   linkedinlink:"https://www.linkedin.com/in/priyanshu-gupta-a5b83722b/",
  //   instagramlink:"https://www.instagram.com/priyanshu_gupta_07_10_02/",

  // }
  const ref = useRef();
  const [showgreenAlert, setshowgreenAlert] = useState(false);
  const [disabled, setdisabled] = useState(false);
  const [joinAlert, setjoinAlert] = useState(false);
  const [clubemail, setClubemail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const Submit = (e) => { 
    e.preventDefault();
    setshowgreenAlert(!showgreenAlert);
    setMessage("");
    setEmail("");
    setName("");

  }
  const nameHandler = (e)=>{
    setName(e.target.value);
  }
  const emailHandler = (e)=>{
    setEmail(e.target.value);
  }
  const messageHandler = (e)=>{
    setMessage(e.target.value);
  }
  const SubmitEmail = (e) => {
    e.preventDefault();
    setjoinAlert(true);

  }
  const changeMessage = (e) => {
    setMessage(e.target.value);

  }

  return (<>
    <Script src="/assets/js/main.js"></Script>
    <Head>
      <meta charSet="utf-8" />

      <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />

      <meta
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
        name="viewport"
      />
      <title>{`${profile.title} - Developer | Coder | Software Geek`}</title>
      <meta property="og:title" content="Homepage | Atom Template" />
      <link rel="preload" href="/assets/img/bg-hero.jpg" as="image"></link>
      <link rel="preload" as="image" href="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fp0ke04pe%2Fproduction%2F3ce6deb7ee01d39613196b01e28be05d4968be28-1024x1024.jpg%3Fw%3D200&amp;w=640&amp;q=75"></link>
      <link rel="preload" href="/assets/img/bg-hero.jpg" as="image"/>
      <meta property="og:locale" content="en_US" />

      <link
        rel="canonical"
        href="//"
      />

      <meta
        property="og:url"
        content="//"
      />

      <meta
        name="description"
        content="priyanshu gupta portfolio"
      />

      <link rel="icon" type="image/png" href="/assets/img/favicon.png" />

      <meta name="theme-color" content="#5540af" />

      <meta property="og:site_name" content="Atom Template" />

      <meta property="og:image" content="//assets/img/social.jpg" />

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:site" content="@tailwindmade" />



    </Head>

    <div id="main" className="relative">
      <div
        x-data="{
  triggerNavItem(id) {
      $scroll(id)
  },
  triggerMobileNavItem(id) {
      mobileMenu = false;
      this.triggerNavItem(id)
  }
}"
      >
        <NavBar profile={profile} color={'#5540af00'} />


        <div><div
          className="relative bg-cover bg-center bg-no-repeat py-8"
          style={{ backgroundImage: "url(/assets/img/bg-hero.jpg)",
            width:"100%"
           }}>
          <div
            className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat"></div>

          <div
            className="container relative z-30 pt-10 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
            <div className="flex flex-col items-center justify-center lg:flex-row">
              <div className="rounded-full border-8 border-primary shadow-xl  ">
                <Image
                  src={builder.image(profile.image).width(300).url()}
                  width={400} height={200}
                  className="h-28 w-28 rounded-full lg:h-36 lg:w-40"
                  alt="author" priority={true} quality={80}
                />
              </div>
              <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
              <h1 class="text-center font-header text-3xl text-white  sm:text-left sm:text-4xl md:text-5xl">Hello I am {profile.name}!</h1>
                <div
                  className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                  <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                    <p className="font-body text-lg uppercase text-white">Let&#39;s connect</p>
                    <div className="hidden sm:block">
                      <ChevronRightIcon className="text-3xl text-yellow" />
                    </div>
                  </div>
                  <div
                    className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0"
                  >
                    <Link href={`${profile.fblink}`} className="relative">
                      <Tooltip id="tooltip" placement="top" title="facebook" >
                        <FacebookIcon
                          className="bx bxl-facebook-square text-3xl text-white hover:text-yellow"
                        />
                      </Tooltip>
                    </Link>
                    <Link href={`${profile.twitterlink}`} className="pl-4">
                      <Tooltip id="tooltip" placement="top" title="threads">
                        <XIcon className="text-2xl text-white hover:text-yellow" />
                      </Tooltip>

                    </Link>
                    <Link href={`${profile.leetcodelink}`} className="pl-4">
                      <Tooltip id="tooltip" placement="top" title="leetcode">
                        <CodeIcon
                          className="bx text-2xl text-white hover:text-yellow"
                        />
                      </Tooltip>
                    </Link>
                    <Link href={`${profile.linkedinlink}`} className="pl-4">
                      <Tooltip id="tooltip" placement="top" title="linkedin" >
                        <LinkedInIcon
                          className=" text-3xl text-white hover:text-yellow"
                        />
                      </Tooltip>
                    </Link>
                    <Link href={`${profile.instagramlink}`} className="pl-4">
                      <Tooltip id="tooltip" placement="top" title="instagram" >
                        <InstagramIcon
                          className=" text-3xl text-white hover:text-yellow"
                        />
                      </Tooltip>
                    </Link>
                    <Link href={`${profile.githublink}`} className="pl-4">
                      <Tooltip id="tooltip" placement="top" title="github" >
                        <GitHub className="text-3xl text-white hover:text-yellow" />
                      </Tooltip>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

          <div className="bg-grey-50" id="about">
            <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
              <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
                <h2
                  className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
                >
                  Who am I?
                </h2>
                <h4
                  className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
                >
                  I&#39;m {profile.name}, a {profile.work}
                </h4>
                <p className="pt-6 font-body leading-relaxed text-[#525252]">
                  {profile.desc}
                </p>
                <div
                  className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start"
                >
                  <div className="flex items-center justify-center sm:justify-start">
                    <p className="font-body text-lg font-semibold uppercase text-grey-20">
                      Connect with me
                    </p>

                    <div className="hidden sm:block">
                      <ChevronRightIcon className=" text-3xl text-primary" />
                    </div>
                  </div>
                  <div
                    className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0"
                  >
                    <Link href={`${profile.fblink}`} >
                      <Tooltip id="tooltip" placement="top" title="facebook" >
                        <FacebookIcon
                          className="bx bxl-facebook-square text-3xl text-primary hover:text-yellow"
                        />
                      </Tooltip>
                    </Link>
                    <Link href={`${profile.twitterlink}`} className="pl-4">
                      <Tooltip id="tooltip" placement="top" title="threads" >
                        <XIcon className="text-2xl text-primary hover:text-yellow" />
                      </Tooltip>
                    </Link>
                    <Link href={`${profile.leetcodelink}`} className="pl-4">
                      <Tooltip id="tooltip" placement="top" title="leetcode" >
                        <CodeIcon
                          className=" text-2xl text-primary hover:text-yellow"
                        />
                      </Tooltip>
                    </Link>
                    <Link href={`${profile.linkedin}`} className="pl-4">
                      <Tooltip id="tooltip" placement="top" title="linkedin" >
                        <LinkedInIcon
                          className=" text-3xl text-primary hover:text-yellow"
                        />
                      </Tooltip>
                    </Link>
                    <Link href={`${profile.instagramlink}`} className="pl-4">
                      <Tooltip id="tooltip" placement="top" title="instagram" >
                        <i
                          className="bx bxl-instagram text-2xl text-primary hover:text-yellow"
                        ></i>
                      </Tooltip>
                    </Link>
                    <Link href={`${profile.githublink}`} className="pl-4">
                      <Tooltip id="tooltip" placement="top" title="github" >
                        <GitHub className="text-3xl text-primary hover:text-yellow" />

                      </Tooltip>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
                <div>
                  <div className="flex items-end justify-between">
                    <h4 className="font-body font-semibold uppercase text-black">
                      Javascript
                    </h4>
                    <h3 className="font-body text-3xl font-bold text-primary">85%</h3>
                  </div>
                  <div className="mt-2 h-3 w-full rounded-full bg-lila">
                    <div className="h-3 rounded-full bg-primary" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div className="pt-6">
                  <div className="flex items-end justify-between">
                    <h4 className="font-body font-semibold uppercase text-black">Figma</h4>
                    <h3 className="font-body text-3xl font-bold text-primary">70%</h3>
                  </div>
                  <div className="mt-2 h-3 w-full rounded-full bg-lila">
                    <div className="h-3 rounded-full bg-primary" style={{ width: "70%" }}></div>
                  </div>
                </div>
                <div className="pt-6">
                  <div className="flex items-end justify-between">
                    <h4 className="font-body font-semibold uppercase text-black">
                      React
                    </h4>
                    <h3 className="font-body text-3xl font-bold text-primary">98%</h3>
                  </div>
                  <div className="mt-2 h-3 w-full rounded-full bg-lila">
                    <div className="h-3 rounded-full bg-primary" style={{ width: "98%" }}></div>
                  </div>
                </div>
                <div className="pt-6">
                  <div className="flex items-end justify-between">
                    <h4 className="font-body font-semibold uppercase text-black">Next.js</h4>
                    <h3 className="font-body text-3xl font-bold text-primary">91%</h3>
                  </div>
                  <div className="mt-2 h-3 w-full rounded-full bg-lila">
                    <div className="h-3 rounded-full bg-primary" style={{ width: "91%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container py-16 md:py-20" id="services">
            <h2
              className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
            >
              Here&#39;s what I&#39;m good at
            </h2>
            <h3
              className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
            >
              These are the services I offer
            </h3>

            <div
              className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
            >
              <div className="group rounded px-8 py-12 shadow hover:bg-primary">
                <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                  <div className="hidden group-hover:block">
                    <Image
                      src="/assets/img/icon-development-white.svg"
                      width={200} height={400}
                      alt="development icon"
                    />
                  </div>
                  <div className="block group-hover:hidden">
                    <Image
                      src="/assets/img/icon-development-black.svg"
                      width={200} height={400}
                      alt="development icon"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3
                    className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl"
                  >
                    WEB DEVELOPMENT
                  </h3>
                  <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                    Modern web development with cutting-edge technologies.
                  </p>
                </div>
              </div>
              <div className="group rounded px-8 py-12 shadow hover:bg-primary">
                <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                  <div className="hidden group-hover:block">
                    <Image
                      src="/assets/img/icon-react-white.svg"
                      width={200} height={400}
                      alt="content marketing icon"
                    />
                  </div>
                  <div className="block group-hover:hidden">
                    <Image
                      src="/assets/img/icon-react-black.svg"
                      width={200} height={400}
                      alt="content marketing icon"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3
                    className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl"
                  >
                    React Development
                  </h3>
                  <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                    Leveraging React for efficient and scalable development.
                  </p>
                </div>
              </div>
              <div className="group rounded px-8 py-12 shadow hover:bg-primary">
                <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                  <div className="hidden group-hover:block">
                    <Image
                      src="/assets/img/icon-nextjs-white.svg"
                      width={200} height={400}
                      alt="Mobile Application icon"
                    />
                  </div>
                  <div className="block group-hover:hidden">
                    <Image
                      src="/assets/img/icon-nextjs-black.svg"
                      width={200} height={400}
                      alt="Mobile Application icon"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3
                    className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl"
                  >
                    Next.js development
                  </h3>
                  <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                    Build high-performance, SEO-friendly web applications with Next.js
                  </p>
                </div>
              </div>
              <div className="group rounded px-8 py-12 shadow hover:bg-primary">
                <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                  <div className="hidden group-hover:block">
                    <Image
                      src="/assets/img/icon-backend-white.svg"
                      width={200} height={400}
                      alt="Backend icon"
                    />
                  </div>
                  <div className="block group-hover:hidden">
                    <Image
                      src="/assets/img/icon-backend-black.svg"
                      width={200} height={400}
                      alt="Backend icon"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3
                    className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl"
                  >
                    Backend Development
                  </h3>
                  <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                    Build robust, scalable backend systems that power your digital world.
                  </p>
                </div>
              </div>
              <div className="group rounded px-8 py-12 shadow hover:bg-primary">
                <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                  <div className="hidden group-hover:block">
                    <Image
                      src="/assets/img/icon-typescript-white.svg"
                      width={200} height={400}
                      alt="Theme Design icon"
                    />
                  </div>
                  <div className="block group-hover:hidden">
                    <Image
                      src="/assets/img/icon-typescript-black.svg"
                      width={200} height={400}
                      alt="Theme Design icon"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3
                    className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl"
                  >
                    Typsescript development
                  </h3>
                  <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                    Discover the power of static typing with TypeScript: Write better code, faster.
                  </p>
                </div>
              </div>
              <div className="group rounded px-8 py-12 shadow hover:bg-primary">
                <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                  <div className="hidden group-hover:block">
                    <Image
                      src="/assets/img/icon-graphics-white.svg"
                      width={200} height={400}
                      alt="Graphic Design icon"
                    />
                  </div>
                  <div className="block group-hover:hidden">
                    <Image
                      src="/assets/img/icon-graphics-black.svg"
                      width={200} height={400}
                      alt="Graphic Design icon"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3
                    className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl"
                  >
                    Web Design
                  </h3>
                  <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                    Crafting captivating websites that leave a lasting impression.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container py-16 md:py-20" id="portfolio">
            <h2
              className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
            >
              frameworks which i have worked
            </h2>
            <h3
              className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
            >
              Here&#39;s what I have worked with
            </h3>

            <div
              className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2"
            >
              <Link
                href="/"
                className="mx-auto transform transition-all hover:scale-105 md:mx-0"
              >
                <Image
                  src="/assets/img/tailwind-css.jpg"
                  width={800} height={900}
                  className="w-full shadow"
                  alt="portfolio image"
                />
              </Link>
              <Link
                href="/"
                className="mx-auto transform transition-all hover:scale-105 md:mx-0"
              >
                <Image
                  src="/assets/img/bootstrap.jpg"
                  width={800} height={900} priority={65}
                  className="w-full shadow"
                  alt="portfolio image"
                />
              </Link>
              <Link
                href="/"
                className="mx-auto transform transition-all hover:scale-105 md:mx-0"
              >
                <Image
                  src="/assets/img/Material-ui.jpg"
                  width={800} height={900}
                  className="w-full shadow"
                  alt="portfolio image"
                />
              </Link>
              <Link
                href="/"
                className="mx-auto transform transition-all hover:scale-105 md:mx-0"
              >
                <Image
                  src="/assets/img/shadcn.jpg"
                  width={755} height={950}
                  className="w-full shadow"
                  alt="portfolio image"
                />
              </Link>
            </div>
          </div>



          <div className="container py-16 md:py-20" id="work">
            <h2
              className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
            >
              My work experience
            </h2>
            <h3
              className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
            >
              Here&#39;s my projects!
            </h3>

            <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
              <span
                className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"
              ></span>

              <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
                <div className="md:w-2/5">
                  <div className="flex justify-center md:justify-start">
                    <span className="shrink-0">
                      <Image
                        src="/assets/img/logo-ecommerce.svg"
                        width={200} height={400}
                        className="h-auto w-[12rem]"
                        alt="company logo"
                      />
                    </span>
                    <div className="relative ml-3 hidden w-full md:block">
                      <span
                        className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"
                      ></span>
                    </div>
                  </div>
                </div>
                <div className="md:w-3/5">
                  <div className="relative flex md:pl-18">
                    <span
                      className="absolute left-8 top-2 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"
                    ></span>

                    <div className="mt-2 flex">
                      <ChevronRightIcon className=" hidden text-primary md:block" />
                      <div className="md:-mt-1 md:pl-8">
                        <span className="block font-body font-bold text-grey-40"
                        >April 2023 - March 2023</span
                        >
                        <span
                          className="block pt-2 font-header text-xl font-bold uppercase text-primary"
                        >Ecommerce Website</span
                        >
                        <div className="pt-2">
                          <span className="block font-body text-black"
                          >Built with MERN stack and Next.js, offers a seamless shopping experience with fast performance, dynamic content, and a user-friendly interface.</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
                <div className="md:w-2/5">
                  <div className="flex justify-center md:justify-start">
                    <span className="shrink-0">
                      <Image
                        src="/assets/img/logo-whatsapp.svg"
                        width={200} height={400}
                        className="h-auto w-[12rem]"
                        alt="company logo"
                      />
                    </span>
                    <div className="relative ml-3 hidden w-full md:block">
                      <span
                        className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"
                      ></span>
                    </div>
                  </div>
                </div>
                <div className="md:w-3/5">
                  <div className="relative flex md:pl-18">
                    <span
                      className="absolute left-8 top-2 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"
                    ></span>

                    <div className="mt-2 flex">
                      <ChevronRightIcon className=" hidden text-primary md:block" />
                      <div className="md:-mt-1 md:pl-8">
                        <span className="block font-body font-bold text-grey-40"
                        >March 2023 - September 2023</span
                        >
                        <span
                          className="block pt-2 font-header text-xl font-bold uppercase text-primary"
                        >Chat APP</span
                        >
                        <div className="pt-2">
                          <span className="block font-body text-black"
                          >The chat app, built with MERN stack and Next.js, provides a real-time, secure, and intuitive platform for seamless communication and connection with others.</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
                <div className="md:w-2/5">
                  <div className="flex justify-center md:justify-start">
                    <span className="shrink-0">
                      <Image
                        src="/assets/img/logo-portfolio.svg"
                        width={200} height={400}
                        className="h-auto w-[12rem]"
                        alt="company logo"
                      />
                    </span>
                    <div className="relative ml-3 hidden w-full md:block">
                      <span
                        className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"
                      ></span>
                    </div>
                  </div>
                </div>
                <div className="md:w-3/5">
                  <div className="relative flex md:pl-18">
                    <span
                      className="absolute left-8 top-2 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"
                    ></span>

                    <div className="mt-2 flex">
                      <ChevronRightIcon className="hidden text-primary md:block"></ChevronRightIcon>
                      <div className="md:-mt-1 md:pl-8">
                        <span className="block font-body font-bold text-grey-40"
                        >October 2023 - Feb 2024</span>
                        <span
                          className="block pt-2 font-header text-xl font-bold uppercase text-primary"
                        >Portfolio</span
                        >
                        <div className="pt-2">
                          <span className="block font-body text-black"
                          >My portfolio, built with Next.js and Sanity, showcases my skills and projects. It’s fast, SEO-friendly, and easy to update.</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="bg-cover bg-top bg-no-repeat pb-16 md:py-16 lg:py-24"
            style={{ backgroundImage: "url(/assets/img/experience-figure.png)" }}
            id="statistics"
          >
            <div className="container">
              <div
                className="mx-auto w-5/6 bg-white py-16 shadow md:w-11/12 lg:py-20 xl:py-24 2xl:w-full"
              >
                <div className="grid grid-cols-2 gap-5 md:gap-8 xl:grid-cols-4 xl:gap-5">
                  <div
                    className="flex flex-col items-center justify-center text-center md:flex-row md:text-left"
                  >
                    <div>
                      <Image
                        src="/assets/img/icon-project.svg"
                        width={200} height={400}
                        className="mx-auto h-12 w-auto md:h-20"
                        alt="icon project"
                      />
                    </div>
                    <div className="pt-5 md:pl-5 md:pt-0">
                      <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                        14
                      </h1>
                      <h4
                        className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl"
                      >
                        Finished Projects
                      </h4>
                    </div>
                  </div>

                  <div
                    className="flex flex-col items-center justify-center text-center md:flex-row md:text-left"
                  >
                    <div>
                      <Image
                        src="/assets/img/icon-award.svg"
                        width={200} height={400}
                        className="mx-auto h-12 w-auto md:h-20"
                        alt="icon award"
                      />
                    </div>
                    <div className="pt-5 md:pl-5 md:pt-0">
                      <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                        1
                      </h1>
                      <h4
                        className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl"
                      >
                        Awards Won
                      </h4>
                    </div>
                  </div>

                  <div
                    className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0"
                  >
                    <div>
                      <Image
                        src="/assets/img/icon-happy.svg"
                        width={200} height={400}
                        className="mx-auto h-12 w-auto md:h-20"
                        alt="icon happy clients"
                      />
                    </div>
                    <div className="pt-5 md:pl-5 md:pt-0">
                      <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                        8
                      </h1>
                      <h4
                        className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl"
                      >
                        Happy Clients
                      </h4>
                    </div>
                  </div>

                  <div
                    className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0"
                  >
                    <div>
                      <Image
                        src="/assets/img/icon-puzzle.svg"
                        width={200} height={200}
                        className="mx-auto h-12 w-auto md:h-20"
                        alt="icon puzzle"
                      />
                    </div>
                    <div className="pt-5 md:pl-5 md:pt-0">
                      <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                        99
                      </h1>
                      <h4
                        className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl"
                      >
                        Bugs Fixed
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-grey-50" id="blog">
            <div className="container relative py-16 md:py-20 mx-auto">
              <h2
                className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
              >
                I also like to write
              </h2>
              <h4
                className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
              >
                Check out my latest posts!
              </h4>
              <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10"
              >
                {blogs.map((item) => {
                  return <Link key={item.slug.current} href={"/blog/" + item.slug.current} className="shadow">
                    <div><div style={{ "backgroundImage": `url(${item.blogimage ? builder.image(item.blogimage).width(300).url() : '/assets/img/post-01.png'})` }}
                      className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72">
                      <span
                        className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                      <span
                        className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base cursor-pointer">Read
                        More</span>
                    </div>
                      <div className="bg-white py-6 px-5 xl:py-8">
                        <span className="block font-body text-lg font-semibold text-black"> {item.title}</span>
                        <span className="block pt-2 font-body text-grey-20">{item.metadesc}</span>
                      </div></div>
                  </Link>
                })}

                {/* <Link href="/post" className="shadow">
      <div
        style={{backgroundImage: "url(/assets/img/post-02.png)"}}
        className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72"
      >
        <span
          className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"
        ></span>
        <span
          className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base"
          >Read More</span
        >
      </div>
      <div className="bg-white py-6 px-5 xl:py-8">
        <span className="block font-body text-lg font-semibold text-black"
          >My personal productivity system</span
        >
        <span className="block pt-2 font-body text-grey-20"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.</span
        >
      </div>
    </Link>
    <Link href="/post" className="shadow">
      <div
        style={{backgroundImage: "url(/assets/img/post-03.png)"}}
        className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72"
      >
        <span
          className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"
        ></span>
        <span
          className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base"
          >Read More</span
        >
      </div>
      <div className="bg-white py-6 px-5 xl:py-8">
        <span className="block font-body text-lg font-semibold text-black"
          >My year in review 2020</span
        >
        <span className="block pt-2 font-body text-grey-20"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.</span
        >
      </div>
    </Link> */}
              </div>
              <Link href={'/blogs'}>
                <button className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full bg-[#5540ae]  px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base cursor-pointer"  >
                  More Blogs
                </button>
              </Link>
            </div>
          </div>

          <div className="container py-16 md:py-20" id="contact">
            {showgreenAlert && <Alert prompt={"Form is submitted sucessfully"} />}
            <h2
              className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
            >
              Here&#39;s a contact form
            </h2>
            <h4
              className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
            >
              Have Any Questions?
            </h4>
            <div className="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">

            </div>
            <form className="mx-auto w-full pt-10 sm:w-3/4"  >
              <div className="flex flex-col md:flex-row">
                <div className="flex flex-col w-full">
                  <input
                    className="mr-3 rounded border-grey-50 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5 lg:w-96"
                    placeholder={"Name"}
                    type="text"
                    id="name"
                    value={name}
                    onChange={nameHandler}
                  />
                  <span className="text-red-500 text-sm m-1">{name.error}</span>
                </div >
                <div className="flex flex-col w-full ">
                  <input
                    className="mt-6 rounded border-grey-50 px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5 lg:w-96"
                    placeholder={"Email"}
                    onChange={emailHandler}
                    value={email}
                    type="text"
                    id="email"
                  />
                  <span className="text-red-500 m-1 ml-6">{email.error}</span>
                </div>
              </div>
              <textarea
                className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-8"
                placeholder="Message"
                value={message}
                onChange={messageHandler}
                id="message"
                cols="30"
                rows="10"
              ></textarea>
              {<button onClick={Submit} disable={`${disabled}`}
                className={`mt-6 flex items-center justify-center rounded  px-8 py-3 font-header text-lg font-bold uppercase text-white ${message.length == 0 || email.error || name.error ? 'bg-gray-500' : 'bg-primary'}`}
              >
                Send
                <ChevronRightIcon className="relative -right-2 text-3xl" />
              </button>}
            </form>
            <div className="flex flex-col pt-16 lg:flex-row">
              <div
                className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3"
              >
                <div className="flex items-center">
                  <LocalPhoneIcon className=" text-2xl text-grey-40" />
                  <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                    My Phone
                  </p>
                </div>
                <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                  (+91) 7970136146
                </p>
              </div>
              <div
                className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2"
              >
                <div className="flex items-center">
                  <EmailIcon className=" text-2xl text-grey-40" />
                  <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                    My Email
                  </p>
                </div>
                <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                  priyanshugupta8720@gmail.com
                </p>
              </div>
              <div
                className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2"
              >
                <div className="flex items-center">
                  <MapsHomeWorkIcon className=" text-2xl text-grey-40" />
                  <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                    My Address
                  </p>
                </div>
                <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                  Ayodhya Bypass, Ratnagiri Square, Bhopal, Madhya Pradesh
                </p>
              </div>
            </div>
          </div>

          <div
            className="h-72 bg-cover bg-center bg-no-repeat sm:h-64 md:h-72 lg:h-96"
            style={{ backgroundImage: "url(/assets/img/map.png)" }}
          ></div>

          <div
            className="relative bg-primary bg-cover bg-center bg-no-repeat py-16 bg-blend-multiply lg:py-24"
            style={{ backgroundImage: "url(/assets/img/bg-cta.jpg)" }}
          >
            <div className="container relative z-30">
              <h3
                className="text-center font-header text-3xl uppercase leading-tight tracking-wide text-white sm:text-4xl lg:text-5xl"
              >
                Keep <span className="font-bold">up-to-date</span> <br />
                with what I&#39;m up to
              </h3>
              <form className="mt-6 flex flex-col justify-center sm:flex-row">
                {joinAlert && <Alert prompt={"Thankyou for joining the club"} />}
                <input
                  className="w-full rounded px-4 py-3 font-body text-black sm:w-2/5 sm:py-4 lg:w-1/3"
                  type="text"
                  id="email"
                  placeholder="Give me your Email"
                  value={clubemail}
                  onChange={(e) => setClubemail(e.target.value)}
                />
                <button onClick={SubmitEmail}
                  className="mt-2 rounded bg-yellow px-8 py-3 font-body text-base font-bold uppercase text-primary transition-colors hover:bg-primary hover:text-white focus:border-transparent focus:outline-none focus:ring focus:ring-yellow sm:ml-2 sm:mt-0 sm:py-4 md:text-lg"
                >
                  Join the club
                </button>
              </form>
            </div>
          </div>
        </div>

        <Footer profile={profile} />
      </div>
    </div>
  </>
  );
}



