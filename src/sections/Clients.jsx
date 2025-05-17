import { useRef } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import DataNub from "../assets/clients/Datanub-Site-logo-2048x641.png";
import Trigen from "../assets/clients/triGen.jpg";
import Loudster from "../assets/clients/loudstier.jpg";
import MantraLabs from "../assets/clients/MantraLabs.jpg";
import MCDMF from "../assets/clients/Mcdmf.jpg";
import Nexa from "../assets/clients/nexa.jpg";
import SustainEdge from "../assets/clients/sustaine.jpg";
import Geeks from "../assets/clients/geeks.svg";

const Clients = () => {
  const carouselRef = useRef(null);

  const clients = [
    { name: "DataNub", logo: DataNub },
    { name: "TriGen", logo: Trigen },
    { name: "Loudster", logo: Loudster },
    { name: "MantraLabs", logo: MantraLabs },
    { name: "MCDMF", logo: MCDMF },
    { name: "Nexa", logo: Nexa },
    { name: "SustainEdge", logo: SustainEdge },
    { name: "Geeks", logo: Geeks },
  ];

  const duplicatedClients = [...clients, ...clients];

  return (
    <section
      ref={carouselRef}
      className=" py-11 text-black overflow-hidden relative  bg-gradient-to-br from-primary-600  to-primary-800 w-full"
    >
      <div className=" absolute inset-0 bg-[url('../assets/UI/Curve_Line.svg')] bg-cover bg-center opacity-20"></div>
      <div className="px-16 md:px-24 lg:px-40">
        <SectionHeading
          subtitle="Our Clients"
          title="Trusted by Brands That Deliver"
          description="A true partnership is built on trust, respect, and open communication. Our clients share this belief, knowing that the best results come from collaborative, goal-driven relationships. Over time, this synergy grows stronger, adding deep industry insight and lasting value."
          light={true}
          center={true}
          mb="mb-4"
        />
      </div>
      <div className="overflow-hidden py-24">
        <div className="flex items-center justify-center  bg-white shadow-lg py-5">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {duplicatedClients.map((client, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 px-16 md:px-32 transition-opacity "
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-24 md:h-28 object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
