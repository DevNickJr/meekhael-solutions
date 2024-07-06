import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import About2 from '@/assets/about1.png'
import About1 from '@/assets/about2.png'
import dbConnect from '@/lib/dbConnection';
import About from '@/models/AboutModel';


const joinUsImages  = [
  About2,
  About1,
] 

const AboutUs = (props: any) => {
    const { about } = props
    const [t, setTranslated] = useState<IPageContent | null>(null)

  useEffect(() => {
    setTranslated(AboutContent['en'])
  }, [])

    // console.log({props})
  return (
    <div className='overflow-hidden'>
        <Header />
        <section className='flex flex-col items-center justify-center gap-3 px-12 pt-40 text-center text-white bg-white py-28 lg:px-24 grad-to-right'>
            <h1 className="mb-3 text-4xl font-extrabold text-white md:text-5xl font-argentinum">{t?.title || "About Meekhaael Solution"}</h1>
            <p className='max-w-lg md:text-lg'>{t?.content || "Empowering Businesses Through Innovative Technology Solutions"}</p>
        </section>
        <section className='px-12 py-20 text-black bg-white lg:px-24'>
          <div data-aos="fade-in" className='flex flex-col items-center gap-3 mb-12 text-center'>
            <h2 className='text-3xl font-semibold text-primary'>{t?.joinUs?.title || "Empowering Your Financial Journey"}</h2>
            <p className='max-w-lg md:text-lg md:text-base'>{t?.joinUs?.content || "Join us on this journey towards financial growth and prosperity"}.</p>
          </div>
          <div className='grid gap-6 mb-8 md:gap-12 md:grid-cols-2'>
            {
              t?.joinUs?.subsections?.map((item, index) => (
                <div key={index} data-aos="slide-up" className="flex flex-col w-full gap-3 p-6 rounded-md shadow-md">
                  <div className="flex-[0_0_48px] relative">
                    <Image src={joinUsImages[index]} alt={item.title} className='object-cover rounded-md aspect-video max-h-60' />
                  </div>
                  <span className='text-lg font-semibold text-black'>{item.title}</span>
                  <span>{item.content}</span>
                </div>
              )
            )}
          </div>
        </section>
        <section className='px-12 py-20 text-white grad-to-right lg:px-24'>
          <div data-aos="fade-in" className='flex flex-col items-center gap-3 mb-12 text-center'>
            <h2 className='text-3xl font-semibold'>{t?.history?.title || "Our Trading Company In Numbers"}</h2>
            <p className='max-w-lg md:text-lg md:text-base'>{t?.history?.content || "Trace the history of our company since its foundation in 2016"}</p>
          </div>
        </section>
        <section className="py-12 text-center section md:py-20">
          <div className="flex flex-col items-center max-w-2xl gap-4 mx-auto mb-12">
            <h3 className="mb-3 text-3xl font-extrabold capitalize md:text-5xl">
              Our Services
            </h3>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-[#F9E9E8] w-full rounded-2xl p-8 py-12 flex flex-col items-center gap-3">
              <Image src={About1} alt="" className="w-16 h-16" />
              <h5 className="mb-3 text-2xl font-extrabold capitalize">Dynamic Web Apps</h5>
              <p className="text-[#6D6D6D]">We develop dynamic web apps with enhanced security and strict SLA compliance for maintenance.</p>
            </div>
            <div className="bg-[#F9E9E8] w-full rounded-2xl p-8 py-12 flex flex-col items-center gap-3">
              <Image src={About1} alt="" className="w-16 h-16" />
              <h5 className="mb-3 text-2xl font-extrabold capitalize">Mobile App Solutions</h5>
              <p className="text-[#6D6D6D]">Develop and maintain mobile apps to maximize uptime and enhance user experience</p>
            </div>
            <div className="bg-[#F9E9E8] w-full rounded-2xl p-8 py-12 flex flex-col items-center gap-3">
              <Image src={About1} alt="" className="w-16 h-16" />
              <h5 className="mb-3 text-2xl font-extrabold capitalize">Tailored Business Solutions</h5>
              <p className="text-[#6D6D6D]">Custom solutions to meet unique business needs, driving efficiency and transformation</p>
            </div>
            {/* <div className="bg-[#F9E9E8] w-full rounded-2xl p-8 py-12 flex flex-col items-center gap-3">
              <Image src={About1} alt="" className="w-16 h-16" />
              <h5 className="mb-3 text-2xl font-extrabold capitalize">Expertise in Content Creation</h5>
              <p className="text-[#6D6D6D]">Specializing in impactful content writing and engaging digital communication strategies.</p>
            </div>
            <div className="bg-[#F9E9E8] w-full rounded-2xl p-8 py-12 flex flex-col items-center gap-3">
              <Image src={About1} alt="" className="w-16 h-16" />
              <h5 className="mb-3 text-2xl font-extrabold capitalize">Beyond Technology</h5>
              <p className="text-[#6D6D6D]">Enhancing landscapes and promoting environmental beautification as part of our mission</p>
            </div>
            <div className="bg-[#F9E9E8] w-full rounded-2xl p-8 py-12 flex flex-col items-center gap-3">
              <Image src={About1} alt="" className="w-16 h-16" />
              <h5 className="mb-3 text-2xl font-extrabold capitalize">Effective Design Solutions</h5>
              <p className="text-[#6D6D6D]">Crafting designs that resonate and drive engagement across digital platforms</p>
            </div> */}
          </div>
        </section>
        <Footer />
    </div>
  )
}

export default AboutUs

export const getServerSideProps = async () => {
    let about = []
    try {
        await dbConnect()
        const res = await About.find().lean();
        about = JSON.parse(JSON.stringify(res[0]))
    } catch (error) {
        console.log(error)
        return {
            props: {
                title: 'About Us',
                about: {},
                status: 'failed'
            }
        }
    }

    return {
        props: {
            title: 'About Us',
            about: about || {},
            status: 'success'
        }
    }
}

interface ITranslations {
  en: IPageContent;
}


export interface IPageContent {
  title: string;
  content: string;
  joinUs: Section;
  history: Section;
}

interface Section {
  title?: string;
  content?: string;
  subsections?: Subsection[];
}
interface Subsection {
  title: string;
  content: string;
}

export const AboutContent: ITranslations = {
  en: {
    title: "About Meekhaael Solution",
    content: "Empowering Businesses Through Innovative Technology Solutions",
    joinUs: {
        title: "Explore Opportunities with Meekhaael Solutions",
        content: "Join us on this journey to better solutions",
        subsections: [
          {
            title: "Our Mission",
            content: "At Meekhaael Solutions, our mission is to empower businesses with cutting-edge technology solutions that drive growth, efficiency, and transformation"
          },
          {
            title: "Our Vision",
            content: "At Meekhaael Solutions, our mission is to empower businesses with cutting-edge technology solutions that drive growth, efficiency, and transformation"
          }
        ]
      },
      history:       {
        title: "Get in Touch",
        // title: "Meekhaael Solutions specializes in:",
        content: "Explore how Meekhaael Solutions can transform your business. Contact us today to discuss your project and discover the power of innovative technology solutions.",
      }
  },
};