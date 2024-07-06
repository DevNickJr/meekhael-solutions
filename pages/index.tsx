import Head from "next/head";
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Button from "@/components/Button";
import Image from "next/image";
import HeroImg from '@/assets/img1.png'
import QualifiedImg from '@/assets/img2.png'
import HeroBg from '@/assets/hero-bg.png'
import Primary1Img from '@/assets/primary-1.png'
import SecondaryImg from '@/assets/school.png'
import UniversityImg from '@/assets/university.png'
import NewsImg from '@/assets/news.png'
import GradImg from '@/assets/graduation.png'
import Link from "next/link";
import { IAdvisory, ICandidate, ICms, INews, IReducerAction } from '@/interfaces'
import dbConnect from '@/lib/dbConnection';
import CmsModel from '@/models/CmsModel';
import NewsModel from '@/models/NewsModel';
import { useRouter } from "next/router";
import NewsCard from "@/components/NewsCard";
import { AiOutlineCheck } from "react-icons/ai";



// const initialState: ICandidate = {
//   email: '',
//   name: '',
//   number: '',
//   category: '',
// }

// type IAction = 'email' | 'name' | 'number' | 'category' | 'reset'

export default function Home({ cms, news }: { cms: ICms, news: INews[] }) {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Meekhaael Solutions Limited</title>
        <meta name="description" content="Meekhaael Solutions Limited official website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <Header />
        <section className="pb-12 overflow-hidden section top-section lg:min-h-screen lg:mt-0 lg:pt-40">
          <div className="grid gap-8 lg:grid-cols-2 md:gap-12">
            <div className="flex flex-col order-2 gap-4 lg:order-1">
              {/* <p className="mb-3 text-lg font-bold text-primary">STUDY WITH US</p> */}
              <h1 className="mb-3 text-4xl font-extrabold capitalize md:text-6xl">{cms?.hero?.header || "Empower Your Business with IT Solutions"}</h1>
              <p className="md:text-lg">{cms?.hero?.text || "Meekhaael Solutions Limited offers innovative IT solutions across education, social, and finance sectors. Our expert team delivers tailored, result-driven services to meet your unique needs"}</p>
              <a href ="https/" className="flex items-center justify-between max-w-md text-sm bg-gray-100 rounded-xl md:text-base">
                <p className="ml-4">Lets get started</p>
                {/* <a href={`/`} className="px-6 py-3 text-sm text-white grad-to-right md:text-base rounded-xl w-fit">Connect with us</a> */}
                <Button className="px-5 py-3 text-white rounded-xl md:py-4">Connect with us</Button>
              </a>
            </div>
            <div className="relative flex flex-col justify-end order-1 w-full min-h-96 lg:order-2">
              <Image width={100} height={100} src={cms?.hero?.image || HeroImg} alt="" className="object-contain object-top w-full h-full max-h-[450px]" />
              <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full -z-10">
                <Image src={HeroBg} alt="" width={200} height={200} className="w-64 sm:w-1/2 md:w-5/6" />
              </div>
            </div>
          </div>
          {/* <div className="flex justify-center gap-2 py-12 mt-4">
            <span className="w-4 h-1 text-xs border-none rounded-full text-primary bg-primary" />
          </div> */}
        </section>
        <section className="section md:pb-20">
          <div className="grid gap-4 lg:grid-cols-2 md:gap-12">
            <div className="flex flex-col flex-1 order-2 gap-4">
              {/* <p className="mb-3 text-xl font-bold text-primary">About Us</p> */}
              <h2 className="mb-3 text-4xl font-extrabold capitalize md:text-6xl">{cms?.about?.header || "Innovate in Education, Social, & Finance"}</h2>
              <p className="mb-4 md:text-lg">{cms?.about?.text || "With a focus on education, social, and finance sectors, Meekhaael Solutions Limited provides top-notch IT solutions. Our experienced professionals ensure your unique needs are met with precision and excellence."}</p>
              <Button onClick={() => router.push('/about-us')} className="px-5 py-3 text-sm text-white w-fit rounded-xl md:py-4 md:text-base">Read More</Button>

            </div>
            <div className="relative flex flex-col justify-end order-1 w-full h-full min-h-96">
              <Image width={100} height={100} src={cms?.about?.image || QualifiedImg} alt="" className="object-contain w-full max-h-[500px]" />
              <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full -z-10">
                <Image src={HeroBg} alt="" width={200} height={200} className="w-64 sm:w-1/2 md:w-5/6" />
              </div>
            </div>
          </div>
        </section>
        <section id="signup" className="flex flex-col items-center gap-4 px-4 py-12 text-white section md:py-20 grad-to-right">
          <div className="flex flex-col items-center max-w-3xl gap-4 text-center">
            <h3 className="mb-2 text-3xl font-extrabold capitalize md:text-5xl">Discover Solutions with Meekhaael Solutions</h3>
            <p className="mb-4">
              Meekhaael Solutions Limited is dedicated to fostering your potential through our scholarship program. Sign up now and take the first step towards a future filled with opportunities
            </p>
            <a href={'/'} className="p-5 px-6 py-3 text-sm font-bold text-black bg-white rounded-full md:py-5 md:text-base md:px-10">Discover</a>
          </div>
        </section>
        <section className="py-12 text-center section md:py-20">
          <div className="flex flex-col items-center max-w-2xl gap-4 mx-auto mb-12">
            {/* <h2 className="text-2xl font-bold text-primary">Our Programmes</h2> */}
            <h3 className="mb-3 text-3xl font-extrabold capitalize md:text-5xl">
              Available Services
            </h3>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center w-full gap-3 p-8 py-12 shadow-lg rounded-2xl">
              <Image src={Primary1Img} alt="" className="w-16 h-16" />
              <h5 className="mb-3 text-2xl font-extrabold capitalize">Dynamic Web Apps</h5>
              <p className="text-[#6D6D6D]">We develop dynamic web apps with enhanced security and strict SLA compliance for maintenance.</p>
            </div>
            <div className="flex flex-col items-center w-full gap-3 p-8 py-12 shadow-lg rounded-2xl">
              <Image src={SecondaryImg} alt="" className="w-16 h-16" />
              <h5 className="mb-3 text-2xl font-extrabold capitalize">Mobile App Solutions</h5>
              <p className="text-[#6D6D6D]">Develop and maintain mobile apps to maximize uptime and enhance user experience</p>
            </div>
            <div className="flex flex-col items-center w-full gap-3 p-8 py-12 shadow-lg rounded-2xl">
              <Image src={UniversityImg} alt="" className="w-16 h-16" />
              <h5 className="mb-3 text-2xl font-extrabold capitalize">Tailored Business Solutions</h5>
              <p className="text-[#6D6D6D]">Custom solutions to meet unique business needs, driving efficiency and transformation</p>
            </div>
            {/* <div className="bg-[#F9E9E8] w-full rounded-2xl p-8 py-12 flex flex-col items-center gap-3">
              <Image src={PostGradImg} alt="" className="w-16 h-16" />
              <h5 className="mb-3 text-2xl font-extrabold capitalize">Postgraduate Education</h5>
              <p className="text-[#6D6D6D]">Elevate Your Expertise and Propel Your Career Forward</p>
            </div> */}
          </div>
        </section>
        <section className="py-12 section md:py-20 grad-to-right">
          <div className="grid gap-4 text-white lg:grid-cols-2 md:gap-12">
            <div className="flex flex-col flex-1 gap-4 md:pb-16">
              <h2 className="mb-3 text-3xl font-extrabold capitalize md:text-5xl">Become Part of Meekhaael Solutions</h2>
              <p className="mb-4 md:text-lg">
                Join Meekhaael Solutions Limited and access innovative IT services, including web development, mobile app creation, and custom business solutions. Be part of a team dedicated to driving success and excellence
              </p>
              <div className="grid gap-5 mb-4 max-w-fit">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex-[0_0_32px] flex justify-center items-center">
                      <AiOutlineCheck className="text-primary" />
                    </div>
                    <p>Web Development & Maintenance</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex-[0_0_32px] flex justify-center items-center">
                      <AiOutlineCheck className="text-primary" />
                    </div>
                    <p>Mobile App Development</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex-[0_0_32px] flex justify-center items-center">
                      <AiOutlineCheck className="text-primary" />
                    </div>
                    <p>Customized Business Solutions</p>
                  </div>
              </div>
              <a href={`/`} className="px-6 py-3 text-sm text-white bg-[#3B6396] md:text-base rounded-xl w-fit">Contact Us</a>
            </div>
            <div className="w-full h-full min-h-96 md:min-h-[500px] relative flex justify-center items-center">
              <div className="absolute -z-0 flex justify-center items-center bg-[#3B6396] rounded-full w-72 h-72 sm:w-96 sm:h-96 lg:w-[400px] lg:h-[400px]"></div>
              <Image src={GradImg} alt="" className="relative z-10 object-cover w-full h-full" />
            </div>
          </div>
        </section>
        <section className="py-12 section md:py-20">
          <h2 className="mb-12 text-3xl font-extrabold text-center capitalize md:text-5xl">News & <br />Updates</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {news?.slice(0, 3).map( (item, index) => (
              <NewsCard key={index} news={item} />
            ))}
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {news?.slice(0, 3).map( (item, index) => (
            <Link href="/news" key={index} className="flex flex-col w-full gap-2 shadow-md place-self-start rounded-xl">
              <Image src={item?.image || NewsImg} width={150} height={150} alt="" className="relative z-10 object-cover w-full h-64 rounded-xl" />
              <div className="p-2 px-4 pb-4">
                <h3 className="mb-3 overflow-hidden text-xl font-bold font-argentinum h-14">{item?.title}</h3>
                <p className="h-12 mb-3 overflow-hidden text-xs">{item?.snippet}</p>
                <span className="text-xs font-bold text-primary">
                  Read more
                </span>
              </div>
            </Link>
            ))}
          </div>
        </section>
          {/* <section className="py-12 section md:py-20">
          <div className="flex flex-col items-center max-w-xl gap-4 mx-auto mb-12 text-center">
            <h3 className="mb-3 text-3xl font-extrabold capitalize md:text-5xl">Which One is Suitable For You</h3>
            <p>Are you a student that needs a scholarship? or a teacher who wish to Upgrade his/her Knowledge </p>
          </div>
          <div className="flex flex-col items-center gap-8 lg:flex-row md:justify-center">
            <div className="flex flex-col justify-center max-w-md p-4 px-6 py-8 shadow-xl md:p-20 rounded-xl">
              <div className="flex flex-col justify-center max-w-sm gap-4 mb-8 text-center">
                <Image src={StudentImg} alt="" className="mx-auto rounded-full h-44 w-44" />
                <h4 className="text-xl font-bold md:text-2xl">Student</h4>
              </div>
              <div className="flex flex-col gap-3 mb-12 text-sm font-bold md:text-base">
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
              <Button className="px-5 py-3 mx-auto text-sm font-semibold text-white rounded-full md:px-8 w-fit md:py-4 md:text-base whitespace-nowrap">View Details</Button>
            </div>
            <div className="flex flex-col justify-center max-w-md p-4 px-6 py-8 text-white shadow-xl md:p-20 rounded-xl grad-to-right">
              <div className="flex flex-col justify-center max-w-sm gap-4 mb-8 text-center">
                <Image src={TeacherImg} alt="" className="mx-auto rounded-full h-44 w-44" />
                <h4 className="text-xl font-bold md:text-2xl">Teacher</h4>
              </div>
              <div className="flex flex-col gap-3 mb-12 text-sm font-bold md:text-base">
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
              <Button gradient='bg-white' className="px-5 py-3 mx-auto text-sm font-semibold bg-white rounded-full md:px-8 w-fit text-primary md:py-4 md:text-base whitespace-nowrap">View Details</Button>
            </div>
          </div>
        </section> */}
        {/* <Advisory advisory={advisory} /> */}
        <Footer />
      </div>
    </div>
  );
}


export const getServerSideProps = async () => {
  let cms = {}
  let news = []
  try {
      await dbConnect()
      const res = await CmsModel.findOne({}).lean();
      cms = JSON.parse(JSON.stringify(res))


      const news_res = await NewsModel.find({}).sort('-createdAt').lean();
      // console.log({news_res})
      news = JSON.parse(JSON.stringify(news_res))
      
  } catch (error) {
      console.log(error)
      return {
          props: {
              cms: {},
              news: [],
              status: 'failed'
          }
      }
  }


  return {
      props: {
          cms,
          news,
          status: 'success'
      }
  }
}