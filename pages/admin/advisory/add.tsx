import { FormEvent, useEffect, useReducer, useState } from 'react'
import Head from "next/head";
import AdminLayout from "@/layouts/AdminLayout"
import AuthHOC from '@/components/AuthHOC'
import Button from '@/components/Button';
import { useRouter } from 'next/router';
import { IAdvisory, IReducerAction } from '@/interfaces'
import usePost from '@/hooks/usePost';
import { toast } from 'react-toastify';
import Loader from '@/components/Loader';
import useImage from '@/hooks/useImage';



const initialState: IAdvisory = {
    email: '',
    name: '',
    image: '',
    number: '',
    title: '',
    description: '',
}

type IAction = 'email' | 'name' | 'image' | 'number' | 'title' | 'description' | 'reset' 

const AddBoardMember = () => {
    const [advisory, dispatch] = useReducer((state: IAdvisory, action: IReducerAction<IAction>) => {
        if (action.type === 'reset') return initialState
        return { ...state, [action.type]: action.payload }
    }, initialState)
    const { url, uploadImage, error: errorImage, progress, setError, loading: uploadingImage } = useImage()


    const router = useRouter()
    const { loading, error, data, post } = usePost({ 
        api: "/advisory",
        onSuccess: () => {
            toast('Advisory Board Member Added')
            dispatch({ type: 'reset'})
        } 
    })

    const addMember = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        post(advisory)
    }


    useEffect(() => {
        if (url) {
            dispatch({ type: 'image', payload: url })
        }
    }, [url])

    return (
        <AdminLayout>
        <Head>
            <title>Brilliant Brains</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/faviconimg.png" />
        </Head>
        {(loading || uploadingImage) && <Loader modalOpen={true} />}
        <div className='p-4 py-12 sm:px-12 h-full overflow-y-auto'>
            <div className="flex items-center gap-4 justify-between mb-16">
                <h1 className='text-3xl text-black/70 font-argentinum'>Add Board Member</h1>
                <Button onClick={() => router.push("/admin/advisory")} className="text-white px-4 sm:px-6 py-2 rounded-xl text-sm">View Advisory</Button>
            </div>
            <form className="flex flex-col gap-4" onSubmit={addMember}>
                <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="text-black/70">Name</label>
                    <input required onChange={(e) => dispatch({ type: 'name', payload: e.target.value })} value={advisory?.name} type="text" name="name" id="name" className="border border-black/20 rounded-md p-2" />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-black/70">Email</label>
                    <input required onChange={(e) => dispatch({ type: 'email', payload: e.target.value })} value={advisory?.email} type="email" name="email" id="email" className="border border-black/20 rounded-md p-2" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-black/70">Upload Image</span>
                    <label className="border border-black/20 rounded-md p-2 min-h-[42px] max-h-12 whitespace-nowrap overflow-hidden bg-white" htmlFor="image">
                        {advisory?.image ? advisory?.image : ''}
                    </label>
                    <input type='file' name='image' id='image' className='w-0 h-0 invisible' onChange={(e) => uploadImage(e.target.files![0])} />
                    {/* {uploadingImage && <p>Uploading Image {progress}%</p>} */}
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="number" className="text-black/70">Phone</label>
                    <input required onChange={(e) => dispatch({ type: 'number', payload: e.target.value })} value={advisory?.number} type="tel" name="number" id="number" className="border border-black/20 rounded-md p-2" />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="title" className="text-black/70">Title</label>
                    <input required onChange={(e) => dispatch({ type: 'title', payload: e.target.value })} value={advisory?.title} type="text" name="title" id="title" className="border border-black/20 rounded-md p-2" />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="description" className="text-black/70">Description</label>
                    <textarea rows={5} required onChange={(e) => dispatch({ type: 'description', payload: e.target.value })} value={advisory?.description} name="description" id="description" className="border border-black/20 rounded-md p-2" />
                </div>
                <div className="flex items-center gap-4 mt-8">
                    <Button type='submit' className="text-white px-4 sm:px-6 py-2 rounded-xl text-sm">Add advisory</Button>
                    <button onClick={() => dispatch({ type: 'reset' })} className="text-black/60 px-4 sm:px-6 py-2 rounded-md text-sm">Clear</button>
                </div>
            </form>
        </div>
        </AdminLayout>
    );
}


export default AuthHOC(AddBoardMember)
