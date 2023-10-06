import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <>
    <Head>
        <meta name="description" content="TEDxSriSairamEngineeringCollege is a local manifestation of the TEDx movement, driven by a passionate and dynamic team of students, faculty members, and staff at Sri Sairam Engineering College. Our mission is to amplify the voice of innovative thinkers and creative minds within our community. We believe that ideas have the power to shape the world, and our event serves as a platform for these ideas to flourish."/>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta property='og:image' content="/x.png"/>
        <link rel='icon' href='/x.png' />
        <title>Plans</title>
    </Head>

    <div className="min-h-screen flex items-center justify-center bg-[#2c1262]">
      <div className="p-8 space-y-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl md:text-5xl text-center text-[#db1068] font-hj">Choose Your Pass</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
        <Link href="https://rzp.io/l/TedxGoldPass">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-yellow-400 md:w-80 bg-cover md:h-hit rounded-3xl"
          >
            <h2 className="text-xl font-bold text-center mb-4">Premium Pass</h2>
            <p className='text-sm md:text-md'>Elevate your TEDx experience with the Premium Pass. Immerse yourself in exclusive sessions and cherish added memorabilia that commemorates your time with us.</p>
            <p className='text-sm md:text-md mt-4'><span className='font-semibold'>◆ Interactive Session with Speakers: </span>Engage in intimate conversations and deepen your understanding over a luxurious high tea with our esteemed speakers.</p>
            <p className='text-sm md:text-md mt-4'><span className='font-semibold'>◆ Exclusive Tees: </span>Elevate your style with our exclusive TEDx-themed t-shirts</p>
            <p className='text-sm md:text-md mt-4 mb-6'><span className='font-semibold'>◆ Relish all the advantages that come with the Standard Pass: </span>Elevate your TEDxSriSairamEngineeringCollege experience with this premium offering</p>
          </motion.div>
          </Link>


          <Link href="https://rzp.io/l/GeneralPass">
            <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gray-200 md:w-80 md:h-fit rounded-3xl"
            >
                <h2 className="text-xl font-bold text-center mb-4">Standard Pass</h2>
                <p className='text-sm md:text-md'>Experience TEDx at its core with our Standard Pass. Dive into a day of inspiration and enlightenment, and take home memories curated just for you. Your Standard Pass includes:</p>
                <p className='text-sm md:text-md mt-4'><span className='font-semibold'>◆ Gift Bag: </span>Indulge in an exclusive Gift Bag thoughtfully curated by TEDxSriSairamEngineeringCollege</p>
                <p className='text-sm md:text-md mt-4'><span className='font-semibold'>◆ Certificate: </span>Commemorate your participation with an official Attendee Certificate, a token of your TEDxSriSairamEngineeringCollege experience.</p>
                <p className='text-sm md:text-md mt-4 mb-1'><span className='font-semibold'>◆ Lunch: </span>Savor a delectable lunch spread prepared to tantalize your taste buds, ensuring a delightful culinary journey during your TEDx event.</p>
            </motion.div>
          </Link>

        </div>
      </div>
    </div>
    </>
  )
}
