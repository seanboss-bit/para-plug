import React from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import ContactBody from '../../../components/ContactBody'
export const metadata = {
  icons: {
    icon: "/para.png",
    shortcut: "/para.png",
    apple: "/para.png",
  },
};

const page = () => {
  return (
    <div>
      <Navbar />
      <ContactBody />
      <Footer />
    </div>
  )
}

export default page