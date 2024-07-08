import { useEffect, useState } from 'react'
import Head from "next/head";
import AdminLayout from "@/layouts/AdminLayout"
import AuthHOC from '@/components/AuthHOC'
import Table from '@/components/Table'
import { ICandidate } from "@/interfaces"
import usePost from '@/hooks/usePost';
import { toast } from 'react-toastify';
import Loader from '@/components/Loader';
import Image from 'next/image';
import WelcomeImg from '@/assets/welcome.svg'


const Home = () => {
  const [data, setData] = useState<ICandidate[]>([])
  const [loading, setLoading] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const { loading: posting, error, post, data: deleted } = usePost({ 
    api: "/candidates",
    method: "DELETE",
    onSuccess: () => {
        toast('Candidate deleted successfully')
    } 
})

const deleteCandidate = (id: string, route: string) => {
    post({
      id,
    }, route)
}


const columns = [
  {
    name: "name",
    label: "Name",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "email",
    label: "Email",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "number",
    label: "Number",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "category",
    label: "Category",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "delete",
    label: "Action",
    extra: true,
    custom: (val: string, meta: any) => {
      return  (
        <div className="justify-center gap-4">
          <button onClick={() => deleteCandidate(meta?._id, `candidates/${meta?._id}`)} className="p-2 px-4 text-white bg-red-600 rounded-full">Delete</button>
          {/* <BiEdit size="1.2rem" className="text-orange" />
          <MdOutlineDelete size="1.2rem" className="text-red-400" /> */}
        </div>
      )
    },
  },
  
];

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       setLoading(true)
  //       const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/candidates`)
  //       const data = await res.json()
        
  //       if (!res.ok) throw new Error(data.message)

  //       console.log({data})
  //       setData(data)
  //     } catch (error) {
  //       console.log({error})
  //     }
  //     setLoading(false)

  //   }

  //   fetchUser()
  // }, [deleted])



  return (
    <AdminLayout>
      <Head>
        <title>Meekhaael Solutions Ltd</title>
        <meta name="description" content="Meekhaael Solutions Limited official website" />
        <link rel="icon" href="/meek.png" />
      </Head>
      {(loading || posting) && <Loader modalOpen={true} />}
      <div className='flex flex-col items-center justify-center h-full p-4 py-12 overflow-y-auto sm:px-12'>
        <h1 className='mb-12 text-3xl text-center text-black/70 font-argentinum'>Welcome to the Admin Dashboard</h1>
        <div className="flex justify-center">
          <Image src={WelcomeImg} alt='welcome image' className='w-2/3 md:w-1/2 md:h[90%]' />
        </div>
        {/* <Table<ICandidate> data={data} columns={columns} className={''} /> */}
      </div>
    </AdminLayout>
  );
}


export default AuthHOC(Home)

