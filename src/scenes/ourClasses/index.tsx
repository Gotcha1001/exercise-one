import { ClassType, SelectedPage } from "@/shared/types"
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";


const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description: "Our weight training classes are perfect for building strength, improving muscle tone, and boosting overall fitness. These sessions offer expert guidance on free weights, resistance machines, and bodyweight exercises, helping you achieve your goals effectively and safely.",
        image: image1,
    },
    {
        name: "Training Classes",
      
        image: image2,
    },
    {
        name: "Fitness Classes",
        description: "Fitness classes at our gym are designed to energize and challenge you while improving endurance and overall health. With high-energy music and professional trainers, you'll stay motivated and have fun every step of the way.",
        image: image3,
    },
    {
        name: "Adventure Classes",
        description: "Adventure classes combine fitness and fun, offering unique activities that push your limits and enhance teamwork. These outdoor or themed sessions provide a refreshing way to stay active while exploring new challenges.",
        image: image4,
    },
    {
        name: "Ab Core Classes",
        description: "Our ab core classes target your midsection with exercises designed to strengthen and sculpt your core muscles. These sessions are ideal for improving posture, stability, and functional strength in an encouraging group setting.",
        image: image5,
    },
    {
        name: "Yoga Classes",
        description: "Yoga classes offer a peaceful escape to improve flexibility, balance, and mental well-being. With expert instructors guiding each pose, you'll leave feeling rejuvenated and centered, ready to tackle the day with ease.",
        image: image6,
    },
];



type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
   <section id="ourclasses" className="w-full bg-indigo-500 py-40">
    <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>

    </motion.div >
    <motion.div
    className="mx-auto w-5/6"
    initial="hidden"
    whileInView="visible"
    viewport={{once: true, amount:0.5}}
    transition={{delay: 0.7, duration: 2}}
    variants={{
        hidden: {opacity:0, x:-100},
        visible: {opacity: 1, x:0}
    }}
    >
        <div className="md:w-3/5 mx-auto">
            <HText>OUR CLASSES</HText>
            <p className="py-5">Our gym classes are designed to energize, challenge, and inspire you, no matter your fitness level. From high-intensity workouts like spin and bootcamp to calming yoga and pilates sessions, there's something for everyone. Led by expert trainers in a fun and motivating environment, our classes focus on building strength, endurance, and flexibility while fostering a sense of community. Join us and transform your fitness routine into an exciting journey toward better health!</p>
        </div>

    </motion.div>
    <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
        <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
                <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
                />
            ))}
        </ul>
    </div>
   </section>
  )
}

export default OurClasses