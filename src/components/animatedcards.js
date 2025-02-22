import { motion } from "framer-motion";

export default function AnimatedCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {/* Card 1: Hover Scale */}
      <motion.div
        className="relative w-full max-w-sm bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300"
        whileHover={{ scale: 1.05 }}
      >
        <img src="/assets/bgmi.jpeg" alt="Card Image" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800">Exciting Battle Awaits</h2>
          <p className="text-gray-600 mt-2">
            Enter the battleground and showcase your skills in an intense survival
            challenge. Are you ready to dominate the competition and claim
            victory?
          </p>
        </div>
      </motion.div>

      {/* Card 2: Rotate on Hover */}
      <motion.div
        className="relative w-full max-w-sm bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300"
        whileHover={{ rotate: 5 }}
      >
        <img src="/assets/bgmi.jpeg" alt="Card Image" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800">Tilted Effect</h2>
          <p className="text-gray-600 mt-2">Experience the dynamic visual effect as the card tilts on hover.</p>
        </div>
      </motion.div>

      {/* Card 3: Shadow Expansion */}
      <motion.div
        className="relative w-full max-w-sm bg-white shadow-lg rounded-2xl overflow-hidden transition duration-300"
        whileHover={{ boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)" }}
      >
        <img src="/assets/bgmi.jpeg" alt="Card Image" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800">Deep Shadow Effect</h2>
          <p className="text-gray-600 mt-2">Hover to see the shadow expand dynamically, adding depth.</p>
        </div>
      </motion.div>

      {/* Card 4: Slide In from Bottom */}
      <motion.div
        className="relative w-full max-w-sm bg-white shadow-lg rounded-2xl overflow-hidden transition duration-300"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src="/assets/bgmi.jpeg" alt="Card Image" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800">Slide In Effect</h2>
          <p className="text-gray-600 mt-2">Watch the card smoothly appear as you scroll.</p>
        </div>
      </motion.div>

      {/* Card 5: Opacity Change on Hover */}
      <motion.div
        className="relative w-full max-w-sm bg-white shadow-lg rounded-2xl overflow-hidden transition duration-300"
        whileHover={{ opacity: 0.8 }}
      >
        <img src="/assets/bgmi.jpeg" alt="Card Image" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800">Opacity Shift</h2>
          <p className="text-gray-600 mt-2">Hover to see the card subtly fade for an elegant effect.</p>
        </div>
      </motion.div>
    </div>
  );
}