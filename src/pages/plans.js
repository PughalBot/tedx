import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#2c1262]">
      <div className="p-8 space-y-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl text-[#db1068] font-hj font-bold">Choose Your Pass</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <Link href="https://rzp.io/l/GeteralPass">
            <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gray-200 rounded-lg text-center"
            >
                <h2 className="text-xl font-semibold mb-4">General Pass</h2>
                <p>Basic features and access.</p>
            </motion.div>
          </Link>

          <Link href="https://rzp.io/l/TedxGoldPass">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-yellow-300 rounded-lg text-center"
          >
            <h2 className="text-xl font-semibold mb-4">Gold Pass</h2>
            <p>Premium features and priority support.</p>
          </motion.div>
          </Link>

        </div>
      </div>
    </div>
  )
}
