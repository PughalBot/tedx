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
      <div className="p-8 space-y-8 bg-white shadow-lg rounded-3xl">
        <h1 className="text-4xl md:text-5xl text-center text-[#db1068] font-hj">Choose Your Pass</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <Link href="https://rzp.io/l/GeteralPass">
            <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gray-200 md:h-96 rounded-3xl text-center"
            >
                <h2 className="text-xl font-bold mb-4">General Pass</h2>
                <p className='text-sm md:text-md font-semibold '>◆ Goodies</p>
                <p className='text-sm md:text-md font-semibold mt-4'>◆ Goodies</p>
            </motion.div>
          </Link>

          <Link href="https://rzp.io/l/TedxGoldPass">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-yellow-400 bg-cover md:h-96 rounded-3xl text-center"
          >
            <h2 className="text-xl font-bold mb-4">Gold Pass</h2>
            <p className='text-sm md:text-md font-semibold '>◆ Interactive Session with Speakers</p>
            <p className='text-sm md:text-md font-semibold mt-4'>◆ Goodies</p>
          </motion.div>
          </Link>

        </div>
      </div>
    </div>
    </>
  )
}
