import Head from "next/head";
import { FormEvent, useEffect, useReducer, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Button from "@/components/Button";
import Image from "next/image";
import HeroImg from '@/assets/img1.png'
import QualifiedImg from '@/assets/img2.png'
import HeroBg from '@/assets/hero-bg.png'
import PrimaryImg from '@/assets/primary.png'
import SecondaryImg from '@/assets/school.png'
import UniversityImg from '@/assets/university.png'
import TeacherImg from '@/assets/teacher.png'
import StudentImg from '@/assets/student.png'
import AmazedImg from '@/assets/amazed.png'
import NewsImg from '@/assets/news.png'
import { BiCircle } from 'react-icons/bi'
import Link from "next/link";
import { ICandidate, IReducerAction } from '@/interfaces'
import usePost from '@/hooks/usePost';
import { toast } from 'react-toastify';
import Loader from '@/components/Loader';
import Ambassadors from "@/components/Ambassadors";
import Advisory from "@/components/Advisory";
import Winners from "@/components/Winners";


const initialState: ICandidate = {
  email: '',
  name: '',
  number: '',
  category: '',
}

type IAction = 'email' | 'name' | 'number' | 'category' | 'reset'

export default function Home() {
    const [candidate, dispatch] = useReducer((state: ICandidate, action: IReducerAction<IAction>) => {
      if (action.type === 'reset') return initialState
      return { ...state, [action.type]: action.payload }
  }, initialState)


  const { loading, error, data, post } = usePost({ 
    api: "/candidates",
    onSuccess: () => {
        toast('Your application has been submitted successfully')
        dispatch({ type: 'reset'})
    } 
  })



  const addCandidate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    post(candidate)
  }

  return (
    <div>
      <Head>
        <title>Brilliant Brains</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/faviconimg.png" />
      </Head>
      <div className="">
        {loading && <Loader modalOpen={true} />}
        <Header />
        <section className="section min-h-screen pt-24 md:pt-32">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="order-2 md:order-1 flex flex-col gap-4">
              <p className="text-primary font-bold text-lg mb-3">STUDY WITH US</p>
              <h1 className="text-4xl md:text-6xl font-extrabold capitalize mb-3">Free Scholarship For Every Bright Student</h1>
              <p className="md:text-lg">The Brilliant Brain Scholarship Scheme is a scholarship management platform with a vision to ensuring that no person of school age is denied access to education because of his or her financial status, since it is the fundamental right of every child to receive  qualitative and functional education</p>
              <div className="flex justify-between items-center bg-gray-100 rounded-xl max-w-md text-sm md:text-base">
                <p className="ml-4">Lets get started</p>
                <Button className="rounded-xl text-white py-3 md:py-4 px-5">Connect with us</Button>
              </div>
            </div>
            <div className="w-full min-h-96 order-1 md:order-2 flex flex-col justify-end relative">
              <Image src={HeroImg} alt="" className="object-cover object-top w-full h-full max-h-[450px]" />
              <div className="absolute top-0 left-0 -z-10 w-full h-full flex justify-center items-center">
                <Image src={HeroBg} alt="" width={200} height={200} className="w-64 sm:w-1/2 md:w-5/6" />
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2 py-12 mt-4">
            <BiCircle className="text-xs rounded-full border-none text-[#928E8E] bg-[#928E8E]" />
            <BiCircle className="text-xs rounded-full border-none text-[#928E8E] bg-[#928E8E]" />
            <BiCircle className="text-xs rounded-full border-none text-primary bg-primary" />
          </div>
        </section>
        <section className="section mb-32">
          <div className="grid md:grid-cols-2 gap-4 md:gap-12">
            <div className="flex-1 order-2 md:order-1 flex flex-col gap-4">
              <p className="text-primary font-bold text-xl mb-3">About Us</p>
              <h2 className="text-4xl md:text-6xl font-extrabold capitalize mb-3">Qualified and Highly Equipped Learning</h2>
              <p className="md:text-lg mb-4">We take pride in offering a learning environment that is led by qualified and dedicated educators. Our teaching staff consists of highly experienced professionals who are passionate about fostering academic growth and empowering students to reach their full potential.</p>
              <Button className="w-fit rounded-xl text-white py-3 md:py-4 px-5 text-sm md:text-base">Read More</Button>

            </div>
            <div className="w-full h-full min-h-96 order-1 md:order-2 flex flex-col  justify-end relative">
              <Image src={QualifiedImg} alt="" className="object-contain w-full max-h-[500px]" />
              <div className="absolute top-0 left-0 -z-10 w-full h-full flex justify-center items-center">
                <Image src={HeroBg} alt="" width={200} height={200} className="w-64 sm:w-1/2 md:w-5/6" />
              </div>
            </div>
          </div>
        </section>
        <section className="section mb-32 py-20 px-4 flex flex-col items-center gap-4 grad-to-right text-white">
          <div className="flex flex-col items-center gap-4 max-w-3xl text-center">
            <h3 className="text-3xl md:text-5xl font-extrabold capitalize mb-2">Looking for a bright new future. It starts here</h3>
            <p className="mb-4">We understand that you&#39;re looking for a bright new future, filled with endless possibilities and opportunities for personal and professional growth. Your quest for a better tomorrow starts right here, with us.</p>
            <button className="p-5 rounded-full font-bold bg-white text-black py-3 md:py-5 px-6 text-sm md:text-base md:px-10">Get in Touch</button>
          </div>
        </section>
        <section className="section mb-32 text-center">
          <div className="flex flex-col items-center gap-4 max-w-2xl mx-auto mb-12">
            <h2 className="text-primary font-bold text-2xl">Our Programmes</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold capitalize mb-3">
              Pick Your Educational Level
            </h3>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-[#F9E9E8] w-full rounded-2xl p-8 py-12 flex flex-col items-center gap-3">
              <Image src={PrimaryImg} alt="" className="w-16 h-16" />
              <h5 className="text-2xl font-extrabold capitalize mb-3">Primary Education</h5>
              <p className="text-[#6D6D6D]">Building Strong Foundations for Lifelong Learning</p>
            </div>
            <div className="bg-[#F9E9E8] w-full rounded-2xl p-8 py-12 flex flex-col items-center gap-3">
              <Image src={SecondaryImg} alt="" className="w-16 h-16" />
              <h5 className="text-2xl font-extrabold capitalize mb-3">Secondary Education</h5>
              <p className="text-[#6D6D6D]">Preparing Students for Success in a Dynamic World</p>
            </div>
            <div className="bg-[#F9E9E8] w-full rounded-2xl p-8 py-12 flex flex-col items-center gap-3">
              <Image src={UniversityImg} alt="" className="w-16 h-16" />
              <h5 className="text-2xl font-extrabold capitalize mb-3">Undergraduate Education</h5>
              <p className="text-[#6D6D6D]">Unlocking Your Potential for Advanced Learning</p>
            </div>
            <div className="bg-[#F9E9E8] w-full rounded-2xl p-8 py-12 flex flex-col items-center gap-3">
              <Image src={PrimaryImg} alt="" className="w-16 h-16" />
              <h5 className="text-2xl font-extrabold capitalize mb-3">Postgraduate Education</h5>
              <p className="text-[#6D6D6D]">Elevate Your Expertise and Propel Your Career Forward</p>
            </div>
          </div>
        </section>
        <section className="section mb-32">
          <div className="flex flex-col items-center gap-4 max-w-xl mx-auto mb-12 text-center">
            <h3 className="text-3xl md:text-5xl font-extrabold capitalize mb-3">Which One is Suitable For You</h3>
            <p>Are you a student that needs a scholarship? or a teacher who wish to Upgrade his/her Knowledge </p>
          </div>
          <div className="flex flex-col items-center lg:flex-row md:justify-center gap-8">
            <div className="max-w-md p-4 px-6 py-8 md:p-20 shadow-xl flex flex-col justify-center rounded-xl">
              <div className="max-w-sm flex flex-col gap-4 justify-center text-center mb-8">
                <Image src={StudentImg} alt="" className="h-44 w-44 rounded-full mx-auto" />
                <h4 className="text-xl md:text-2xl font-bold">Student</h4>
              </div>
              <div className="flex flex-col gap-3 font-bold mb-12 text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex-[0_0_32px]"></div>
                  <p>Financial support for education expenses</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex-[0_0_32px]"></div>
                  <p>Access to quality education opportunities</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex-[0_0_32px]"></div>
                  <p>Personal and professional growth opportunities</p>
                </div>
              </div>
              <Button className="md:px-8 w-fit rounded-3xl mx-auto text-white py-3 md:py-4 px-5 text-sm md:text-base">View Details</Button>
            </div>
            <div className="max-w-md p-4 px-6 py-8 md:p-20 shadow-xl flex flex-col justify-center rounded-xl grad-to-right text-white">
              <div className="max-w-sm flex flex-col gap-4 justify-center text-center mb-8">
                <Image src={TeacherImg} alt="" className="h-44 w-44 rounded-full mx-auto" />
                <h4 className="text-xl md:text-2xl font-bold">Teacher</h4>
              </div>
              <div className="flex flex-col gap-3 font-bold mb-12 text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex-[0_0_32px]"></div>
                  <p>Professional development support</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex-[0_0_32px]"></div>
                  <p>Enhanced teaching quality</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex-[0_0_32px]"></div>
                  <p>Networking and collaboration opportunities</p>
                </div>
              </div>
              <Button className="md:px-8 w-fit rounded-3xl mx-auto text-white py-3 md:py-4 px-5 text-sm md:text-base whitespace-nowrap">View Details</Button>
            </div>
          </div>
        </section>
       {/* <Ambassadors /> */}
        
        {/* <Winners /> */}
        <section className="section mb-32 grad-to-right">
          <div className="grid lg:grid-cols-2 gap-4 md:gap-12 text-white pt-12 md:pt-16">
            <div className="flex-1 flex flex-col gap-4 md:pb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold capitalize mb-3">Become Part of Us on Our Platform</h2>
              <p className="md:text-lg mb-4">The Brilliant Brain Scholarship Scheme is a scholarship management platform with a vision to ensuring that no person of school age is denied access to education because of his or her financial status, since it is the fundamental right of every child to receive  qualitative and functional education</p>
              <div className="grid grid-cols-2 gap-5 mb-4 max-w-fit">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex-[0_0_32px]"></div>
                    <p>Primary Education</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex-[0_0_32px]"></div>
                    <p>Secondary Education</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex-[0_0_32px]"></div>
                    <p>Undergraduate Education</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex-[0_0_32px]"></div>
                    <p>Postgraduate Education</p>
                  </div>
              </div>
              <button className="bg-yellow-400 text-white text-sm md:text-base px-6 py-3 rounded-lg w-fit">Apply Now</button>
            </div>
            <div className="w-full h-full min-h-96 md:min-h-[500px] relative flex justify-center items-center">
              <div className="absolute -z-0 flex justify-center items-center bg-yellow-400 rounded-full w-72 h-72 sm:w-96 sm:h-96 lg:w-[400px] lg:h-[400px]"></div>
              <Image src={AmazedImg} alt="" className="h-full w-full object-contain z-10 relative" />
            </div>
          </div>
        </section>
        <section className="section mb-32">
          <h2 className="text-3xl md:text-5xl font-extrabold capitalize mb-12 text-center">News & <br />Updates</h2>
          <div className="grid md:grid-cols-3 md:h-[500px] gap-8">
            <div className="w-full h-96 flex flex-col gap-2 place-self-start">
              <Image src={NewsImg} alt="" className="h-64 w-full object-cover rounded-xl z-10 relative" />
              <h3 className="text-xl font-bold font-argentinum">All You Need to Start</h3>
              <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet </p>
              <Link href="/news" className="text-primary font-bold text-xs">
                Read more
              </Link>
            </div>
            <div className="w-full h-96 flex flex-col gap-2 place-self-center">
              <Image src={NewsImg} alt="" className="h-64 w-full object-cover rounded-xl z-10 relative" />
              <h3 className="text-xl font-bold font-argentinum">All You Need to Start</h3>
              <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet </p>
              <Link href="/news" className="text-primary font-bold text-xs">
                Read more
              </Link>
            </div>
            <div className="w-full h-96 flex flex-col gap-2 place-self-end">
              <Image src={NewsImg} alt="" className="h-64 w-full object-cover rounded-xl z-10 relative" />
              <h3 className="text-xl font-bold font-argentinum">All You Need to Start</h3>
              <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet </p>
              <Link href="/news" className="text-primary font-bold text-xs">
                Read more
              </Link>
            </div>

          </div>
        </section>
        <section className="section mb-32 grad-to-right">
          <div className="grid lg:grid-cols-2 gap-4 md:gap-12 text-white py-12 md:py-16">
            <div className="flex-1 flex flex-col gap-4">
              <h3 className="text-3xl md:text-5xl font-extrabold capitalize mb-3">Sign up for Our Scholarship Program Now</h3>
              <p className="text-sm md:text-base mb-4">The Brilliant Brain Scholarship Scheme is a scholarship management platform with a vision to ensuring that no person of school age is denied access to education because of his or her financial</p>
            </div>
            <form className="flex-1 flex flex-col gap-4 w-full text-black" onSubmit={addCandidate}>
              <input required onChange={(e) => dispatch({ type: 'name', payload: e.target.value })} value={candidate?.name} className="p-4 px-5 text-sm md:p-5 md:px-8 rounded-full" type="text" name="name" id="name" placeholder="Full Name" />
              <input required onChange={(e) => dispatch({ type: 'email', payload: e.target.value })} value={candidate?.email} className="p-4 px-5 text-sm md:p-5 md:px-8 rounded-full" type="email" name="email" id="email" placeholder="Enter your email address" />
              <input required onChange={(e) => dispatch({ type: 'number', payload: e.target.value })} value={candidate?.number} className="p-4 px-5 text-sm md:p-5 md:px-8 rounded-full" type="tel" name="number" id="number" placeholder="Enter your Phone Number" />
              <select required onChange={(e) => dispatch({ type: 'category', payload: e.target.value })} value={candidate?.category} className="p-4 px-5 text-sm md:p-5 md:px-8 rounded-full text-black/60" name="category" id="category">
                <option className="text-black/60" value="">Select category</option>
                <option value="primary">Primary</option>
                <option value="secondary">Secondary</option>
                <option value="undergraduate">Undergraduate</option>
                <option value="postgraduate">Postgraduate</option>
              </select>
              <button className="bg-black text-white font-medium text-sm md:text-base px-8 md:px-12 py-4 md:py-4 rounded-full w-fit">Send Request</button>
            </form>
          </div>
        </section>
        <Advisory />
        <Footer />
      </div>
    </div>
  );
}
