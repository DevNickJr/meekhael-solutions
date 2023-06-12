import { FormEvent, useEffect, useReducer, useState, useCallback } from 'react'
import Head from "next/head";
import AdminLayout from "@/layouts/AdminLayout"
import AuthHOC from '@/components/AuthHOC'
import Button from '@/components/Button';
import { useRouter } from 'next/router';
import { IFaqs, IReducerAction } from '@/interfaces'
import usePost from '@/hooks/usePost';
import { toast } from 'react-toastify';
import Loader from '@/components/Loader';




const initialState: IFaqs = {
    question: '',
    answer: '',
}

type IAction = 'question' | 'answer' | 'reset' | 'update'

const EditFaq = () => {
    const [loading, setLoading] = useState(false)
    const [faqs, dispatch] = useReducer((state: IFaqs, action: IReducerAction<IAction>) => {
        if (action.type === 'reset') return initialState
        if (action.type === 'update') {
            if (typeof action.data !== 'string') 
            return { ...state, ...action.data }
        }
        return { ...state, [action.type]: action.payload }
    }, initialState)

    const router = useRouter()
    
    const { id } = router.query

    // console.log({id})

    const { loading: posting, error, data, post } = usePost({ 
        api: `/faqs/${id}`,
        method: 'PATCH',
        onSuccess: () => {
            toast('Faq Edited')
            fetchFaq()
            // dispatch({ type: 'reset'})
        } 
    })

    const editMember = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log({faqs})
        post(faqs)
    }

    const fetchFaq = useCallback(
        async () => {
            try {
              setLoading(true)
              const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/faqs/${id}`)
              const data = await res.json()
              
              if (!res.ok) throw new Error(data.message)
      
              // console.log({data})
              dispatch({ type: 'update', data: data })
            } catch (error) {
              console.log({error})
            }
            setLoading(false)
          },
      [id],
    )
     
    useEffect(() => {
        fetchFaq()
      }, [id, fetchFaq])



    return (
        <AdminLayout>
        <Head>
            <title>Brilliant Brains</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/faviconimg.png" />
        </Head>
        {(loading || posting) && <Loader modalOpen={true} />}
        <div className='p-4 py-12 sm:px-12 h-full overflow-y-auto'>
            <div className="flex items-center gap-4 justify-between mb-16">
                <h1 className='text-3xl text-black/70 font-argentinum'>Edit Faq</h1>
                <Button onClick={() => router.push("/admin/faqs")} className="text-white px-4 sm:px-6 py-2 rounded-xl text-sm">View Faqs</Button>
            </div>
            <form className="flex flex-col gap-4" onSubmit={editMember}>
                <div className="flex flex-col gap-1">
                    <label htmlFor="question" className="text-black/70">Question</label>
                    <input required onChange={(e) => dispatch({ type: 'question', payload: e.target.value })} value={faqs?.question} type="text" name="question" id="question" className="border border-black/20 rounded-md p-2" />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="answer" className="text-black/70">Answer</label>
                    <input required onChange={(e) => dispatch({ type: 'answer', payload: e.target.value })} value={faqs?.answer} type="text" name="answer" id="answer" className="border border-black/20 rounded-md p-2" />
                </div>
                
                <div className="flex items-center gap-4 mt-8">
                    <Button type='submit' className="text-white px-4 sm:px-6 py-2 rounded-xl text-sm">Update</Button>
                    <button onClick={() => dispatch({ type: 'reset' })} className="text-black/60 px-4 sm:px-6 py-2 rounded-md text-sm">Clear</button>
                </div>
            </form>
        </div>
        </AdminLayout>
    );
}


export default AuthHOC(EditFaq)
