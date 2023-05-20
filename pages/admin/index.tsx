import { useEffect, useState } from 'react'
import Head from "next/head";
import AdminLayout from "@/layouts/AdminLayout"
import AuthHOC from '@/components/AuthHOC'
import Table from '@/components/Table'
import { ICandidate } from "@/interfaces"
import usePost from '@/hooks/usePost';
import { toast } from 'react-toastify';


const Home = () => {
  const [data, setData] = useState<ICandidate[]>([])

  const { loading, error, post, data: deleted } = usePost({ 
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


const testColumns = [
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
        <div className="gap-4 justify-center">
          <button onClick={() => deleteCandidate(meta?._id, `candidates/${meta?._id}`)} className="p-2 px-4 bg-red-600 text-white rounded-full">Delete</button>
          {/* <BiEdit size="1.2rem" className="text-orange" />
          <MdOutlineDelete size="1.2rem" className="text-red-400" /> */}
        </div>
      )
    },
  },
  
];

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/candidates`)
        const data = await res.json()
        
        if (!res.ok) throw new Error(data.message)

        console.log({data})
        setData(data)
      } catch (error) {
        console.log({error})
      }

    }

    fetchUser()
  }, [deleted])



  return (
    <AdminLayout>
      <Head>
        <title>Brilliant Brains</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/faviconimg.png" />
      </Head>
      <div className='p-4 pt-12 sm:px-12 h-full'>
        <h1 className='text-3xl text-black/70 font-argentinum  mb-12'>Candidates</h1>
        <Table<ICandidate> data={data} columns={testColumns} className={''} />
      </div>
    </AdminLayout>
  );
}


export default AuthHOC(Home)

