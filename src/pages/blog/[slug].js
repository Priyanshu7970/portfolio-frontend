import Head from 'next/head';
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import Footer from '@/components/Footer';
import NavBar2 from '@/components/NavBar2';
import { Tooltip } from 'react-bootstrap';
import XIcon from '@mui/icons-material/X';
import GitHub from '@mui/icons-material/GitHub';
import Image from 'next/image';
import CodeIcon from '@mui/icons-material/Code';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from 'next/link';
import { memo, useCallback, useEffect, useMemo } from 'react';
import { PortableText } from '@portabletext/react'
import ImageComponent from '@/components/ImageComponent';



export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "p0ke04pe",
    dataset: "production",
    useCdn: false,
    apiVersion: '2021-08-31'
  });

  const { slug } = context.query;
  const query = `*[_type == "blog" && slug.current =='${slug}'][0]`;
  const blog = await client.fetch(query);
 
  const authorRef = blog.Author.director._ref;

  const author = await client.fetch('*[_type == "author" && _id == $authorRef][0]', { authorRef });
  const profileQuery = `*[_type == "profile"] [0]`;
  const profile = await client.fetch(profileQuery);
  const ImageContentblock = blog.content.filter((item) => { return item._type = "image" });
  const imageContent = ImageContentblock[0]; 

  
  const query2 = `*[_type == "blog" && slug.current =='${slug}'][0]`;
  const blog2 = await client.fetch(query2);
  console.log(blog2);

  
  return {
    props: {
      blog,
      author,
      profile,
      blog2

    }
  }
}

const Post = ({ blog, author, profile,blog2 }) => {
  const client = createClient({
    projectId: "p0ke04pe",
    dataset: "production",
    useCdn: false,
    apiVersion: '2021-08-31'
  });
  const builder = imageUrlBuilder(client);




  return <>
    <Head>
      <meta charSet="utf-8" />

      <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />

      <meta
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
        name="viewport"
      />

      <title>{blog.title}</title>

      <meta property="og:title" content="{blog.title}" />

      <meta property="og:locale" content="en_US" />

      <link
        rel="canonical"
        href="//post"
      />

      <meta
        property="og:url"
        content="//post"
      />

      <meta
        name="description"
        content="Web developer portfolio."
      />

      <link rel="icon" type="image/png" href="/assets/img/favicon.png" />

      <meta name="theme-color" content="#5540af" />

      <meta property="og:site_name" content="Atom Template" />

      <meta property="og:image" content="//assets/img/social.jpg" />

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:site" content="@tailwindmade" />

      <link
        crossOrigin="crossorigin"
        href="https://fonts.gstatic.com"
        rel="preconnect"
      />


    </Head>

    <div id="main" className="relative">
      <NavBar2 profile={profile} />

      <div
        className="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden"
      >
        <div
          className="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3"
        >
          <button
            className="absolute top-0 right-0 mt-4 mr-4"
            click="mobileMenu = false"
          >
            <Image src="/assets/img/icon-close.svg" height={100} width={200} className="h-10 w-auto" alt="" />
          </button>

          <ul className="mt-8 flex flex-col">

            <li className="py-2">

              <span
                click="triggerMobileNavItem('#about')"
                className="cursor-pointer pt-1 font-header font-semibold uppercase text-white"
              >About</span
              >

            </li>

            <li className="py-2">

              <span
                click="triggerMobileNavItem('#services')"
                className="cursor-pointer pt-1 font-header font-semibold uppercase text-white"
              >Services</span
              >

            </li>

            <li className="py-2">

              <span
                click="triggerMobileNavItem('#portfolio')"
                className="cursor-pointer pt-1 font-header font-semibold uppercase text-white"
              >Portfolio</span
              >

            </li>


            <li className="py-2">

              <span
                click="triggerMobileNavItem('#work')"
                className="cursor-pointer pt-1 font-header font-semibold uppercase text-white"
              >Work</span
              >

            </li>

            <li className="py-2">

              <span
                click="triggerMobileNavItem('#statistics')"
                className="cursor-pointer pt-1 font-header font-semibold uppercase text-white"
              >Statistics</span
              >

            </li>

            <li className="py-2">

              <span
                click="triggerMobileNavItem('#blog')"
                className="cursor-pointer pt-1 font-header font-semibold uppercase text-white"
              >Blog</span
              >

            </li>

            <li className="py-2">

              <span
                click="triggerMobileNavItem('#contact')"
                className="cursor-pointer pt-1 font-header font-semibold uppercase text-white"
              >Contact</span
              >

            </li>

          </ul>
        </div>
      </div>
      <div>
        <div className="container py-6 md:py-10 ">
          <div className="mx-auto max-w-4xl mt-10">
            <div className=''>
              <h1
                className="pt-5 font-body text-2xl font-semibold text-primary sm:text-4xl md:text-5xl xl:text-6xl"
              >
                {blog.title}
              </h1>
              <div className="flex items-center pt-5 md:pt-10">
                <div>
                  <Image
                    src={`${builder.image(author.Image)}`} width={200} height={200}
                    className=" w-20 h-20 rounded-full border-2 border-grey-70 shadow"
                    alt="author image"
                  />
                </div>
                <div className="pl-5">
                  <span className="block font-body text-xl font-bold text-grey-10"
                  >{author.name}</span
                  >
                  <span
                    className="block pt-1 font-body text-xl font-bold text-grey-30"
                  >{blog._createdAt}</span
                  >
                </div>
              </div>
            </div>
            <div className="prose max-w-none pt-8">
              <PortableText value={blog2.content} components={{
                block: {
                  h4: ({children}) => <h4 className="text-3xl">{children}</h4>,
                  normal:({children})=> <p className='text-black'>{children}</p>,
                  blockquote: ({children}) => <blockquote className="border-l-purple-500">{children}</blockquote>,
              
                  customHeading: ({children}) => (
                    <h4 className="text-lg text-primary text-purple-700">{children}</h4>
                  ),
                },
                types:{
                  image:ImageComponent
                }
                
                
              }}/>

            </div>

            <div className="flex pt-10">
              <Link
                href="/"
                className="rounded-xl bg-primary px-4 py-1 font-body font-bold text-white hover:bg-grey-20"
              >Frontend</Link>

              <Link
                href="/"
                className="ml-2 block rounded-xl bg-primary px-4 py-1 font-body font-bold text-white hover:bg-grey-20"
              >Design</Link>

            </div>
            <div className="mt-10 flex justify-between border-t border-lila py-12">
              <Link href="/" className="flex items-center">
                <i className="bx bx-left-arrow-alt text-2xl text-primary"></i>
                <span
                  className="block pl-2 font-body text-lg font-bold uppercase text-primary md:pl-5"
                >Previous Post</span
                >
              </Link>
              <Link href="/" className="flex items-center">
                <span
                  className="block pr-2 font-body text-lg font-bold uppercase text-primary md:pr-5"
                >Next Post</span
                >
                <i className="bx bx-right-arrow-alt text-2xl text-primary"></i>
              </Link>
            </div>
            <div
              className="flex flex-col items-center border-t border-lila py-12 pt-12 md:flex-row md:items-start xl:pb-20"
            >
              <div className="w-3/4 sm:w-2/5 lg:w-1/4 xl:w-1/5">
                <Image
                  src={`${builder.image(author.Image)}`}
                  width={360} height={360}
                  className="rounded-full shadow h-36 w-36"
                  alt="author image"
                />
              </div>
              <div className="ml-0 text-center md:ml-10 md:w-5/6 md:text-left">
                <h3
                  className="pt-10 font-body text-2xl font-bold text-secondary md:pt-0"
                >
                  {author.name}
                </h3>
                <p
                  className="pt-5 font-body text-lg leading-8 text-secondary sm:leading-9 md:text-xl md:leading-9 lg:leading-9 xl:leading-9"
                >
                  {author.about}
                </p>
                <div
                  className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0"
                >
                  <Link href={`${profile.fblink}`} >
                    <Tooltip id="tooltip" placement="top" title="facebook" >
                      <FacebookIcon
                        className="bx bxl-facebook-square text-2xl text-primary hover:text-yellow"
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
                        className=" text-2xl text-primary hover:text-yellow"
                      />
                    </Tooltip>
                  </Link>
                  <Link href={`${profile.instagramlink}`} className="pl-4">
                    <Tooltip id="tooltip" placement="top" title="instagram" >
                      <InstagramIcon
                        className="bx bxl-instagram text-2xl text-primary hover:text-yellow"
                      />
                    </Tooltip>
                  </Link>
                  <Link href={`${profile.githublink}`} className="pl-4">
                    <Tooltip id="tooltip" placement="top" title="github" >
                      <GitHub className="text-2xl text-primary hover:text-yellow" />

                    </Tooltip>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer profile={profile} />
    </div>
  </>
}
export default Post;

