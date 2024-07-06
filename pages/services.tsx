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

const Services = () => {

  return (
    <div className='overflow-hidden'>
        <Header />
        <section className='flex flex-col items-center justify-center gap-3 px-12 pt-40 text-center text-white bg-white py-28 lg:px-24 grad-to-right'>
            <h1 className="mb-3 text-4xl font-extrabold text-white md:text-5xl font-argentinum">Explore Our Comprehensive Services</h1>
            <p className='max-w-lg md:text-lg'>Transforming businesses through innovation</p>
        </section>
        <main className='max-w-5xl py-20 mx-auto'>
            <section className='px-12 pb-10 text-black bg-white lg:px-24'>
                <div className="md:text-left md:items-start">
                    <div className="mb-3 text-2xl md:text-3xl text-primary">Our Services:</div>
                    <p className="md:text-lg">
                        Welcome to Meekhaael Solutions Limited, where innovation meets expertise in information technology and beyond. Explore our comprehensive range of services designed to empower businesses and organizations across various sectors
                    </p>
                </div>
            </section>
            <section className='px-12 text-black bg-white lg:px-24'>
                <div className="mb-10 md:text-left md:items-start">
                    <div className="mb-1 text-lg md:text-xl text-primary">Web Development & Maintenance</div>
                    <p className="text-sm md:text-base">
                        We specialize in creating dynamic web applications and providing meticulous web app maintenance solutions. Our services adhere to strict Service Level Agreements (SLAs) and encompass:
                    </p>
                    <ul className='pl-8 mt-2 list-disc'>
                        <li>Testing, debugging, and customization</li>
                        <li>Enhanced security measures</li>
                        <li>Database maintenance and management</li>
                        <li>Real-time monitoring and updates</li>
                    </ul>
                </div>
                <div className="mb-10 md:text-left md:items-start">
                    <div className="mb-1 text-lg md:text-xl text-primary">Mobile App Development</div>
                    <p className="text-sm md:text-base">
                        Enhance your mobile presence with our expert mobile app development services. We focus on:
                    </p>
                    <ul className='pl-8 mt-2 list-disc'>
                        <li>Maximizing app uptime and performance</li>
                        <li>Improving UI/UX design</li>
                        <li>Enhancing Business Process Management (BPM)</li>
                        <li>Seamless integration with web services</li>
                    </ul>
                </div>
                <div className="mb-10 md:text-left md:items-start">
                    <div className="mb-1 text-lg md:text-xl text-primary">Customized Business Solutions</div>
                    <p className="text-sm md:text-base">
                        Transform your business with our tailored solutions that include:
                    </p>
                    <ul className='pl-8 mt-2 list-disc'>
                        <li>Enterprise architecture</li>
                        <li>CMS development</li>
                        <li>Portal development</li>
                        <li>Application security</li>
                        <li>Quality assurance and ongoing support</li>
                    </ul>
                </div>
                <div className="mb-10 md:text-left md:items-start">
                    <div className="mb-1 text-lg md:text-xl text-primary">Content Writing, Design, and Digital Communication</div>
                    <p className="text-sm md:text-base">
                        Reach your audience effectively with our expertise in:
                    </p>
                    <ul className='pl-8 mt-2 list-disc'>
                        <li>Content writing for diverse platforms</li>
                        <li>Creative design solutions</li>
                        <li>Strategic digital communication</li>
                        <li>Data-driven insights and client feedback integration</li>
                    </ul>
                </div>
                <div className="mb-10 md:text-left md:items-start">
                    <div className="mb-1 text-lg md:text-xl text-primary">Environmental Initiatives</div>
                    <p className="text-sm md:text-base">
                        We are committed to environmental sustainability through:
                    </p>
                    <ul className='pl-8 mt-2 list-disc'>
                        <li>Landscaping and environmental beautification</li>
                        <li>Providing sanitary mobile toilets for events</li>
                    </ul>
                </div>
            </section>
            {/* <section className="pb-12 text-center section md:py-20">
            <div className="flex flex-col items-center max-w-2xl gap-4 mx-auto mb-12">
                <h3 className="mb-3 text-2xl font-extrabold capitalize md:text-3xl">
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
                <div className="bg-[#F9E9E8] w-full rounded-2xl p-8 py-12 flex flex-col items-center gap-3">
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
                </div>
            </div>
            </section> */}
        </main>
        <Footer />
    </div>
  )
}

export default Services

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
