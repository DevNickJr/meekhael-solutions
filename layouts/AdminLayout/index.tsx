import React from 'react'
import SideNav from '@/components/SideNav'
import Head from '@/components/Head'

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  

  return (
      <div className='flex w-full h-screen overflow-hidden bg-footer-bg'>
        <SideNav />
        <div className="relative flex-1 pt-12 overflow-hidden overflow-y-auto bg-black/5">
          <Head />
          {children}
        </div>
      </div>
  )
}

export default AdminLayout