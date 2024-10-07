"use client"
import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import {createClient} from '@sanity/client'
import Link from 'next/link';
import Footer from '@/components/Footer';
import NavBar2 from '@/components/NavBar2';


export async function getServerSideProps() {
    const client = createClient({
      projectId: "p0ke04pe",
      dataset: "production",
      useCdn: false,
      apiVersion:'2023-05-03'
    });
  
    const query = `*[_type == "blog"]`;
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
  
const Blogs = ({blogs,profile}) => {
    const client =  createClient ({
        projectId: 'p0ke04pe',
        dataset: 'production',
        apiVersion: '2022-03-10',
      });
       const builder = imageUrlBuilder(client);  
      
    return (<>
        <div>   
<NavBar2 profile={profile} />
            <div className="bg-grey-50 mt-16" id="blog">
                <div className="container py-16 md:py-20 mx-auto">
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
                        { blogs.map((item) => {
                            return <Link key={item.slug.current} href={"/blog/" + item.slug.current} className="shadow">
                                <div>
                                    <div
                                        style={{ backgroundImage: `url(${item.blogimage?builder.image(item.blogimage).width(200).url(): '/assets/img/post-01.png'})` }}
                                        className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72"
                                    >
                                        <span
                                            className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"
                                        ></span>
                                        <span
                                            className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-[#5540af] px-6 py-2 text-center font-body text-sm font-bold uppercase text-purple-200 md:text-base bg-[#5540af] "
                                        >Read More</span
                                        >
                                    </div>
                                    <div className="bg-white py-6 px-5 xl:py-8">
                                        <span className="block font-body text-lg font-semibold text-black"
                                        >{item.title}</span
                                        >
                                        <span className="block pt-2 font-body text-grey-20"
                                        >{item.metadesc}</span
                                        >
                                    </div>
                                </div>
                            </Link>
                        })}

                    </div>
                </div>
            </div>
        </div>
        <Footer profile={profile}/>
        </>
    )
}

export default Blogs
