import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import ExerciseLady from "@/assets/exersizelady.png"

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
    title: "State of the Art Facilities",
    description: "Our equipment is up to date and we constantly are improving getting new equipement for all consumers, including children"  
    },
    {
        icon: <UserGroupIcon className="h-6 w-6"/>,
    title: "100s of Diverse Classes",
    description: "We provide classes for the whole family, including the children and the old age folk, as well as fitness courses and session workouts in groups"  
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6"/>,
    title: "Expert and Pro Trainers",
    description: "Our Trainers are well equiped with knowledge of all the types of Cardio and Muscle fitness training, including sport games, and one on one fitness couches"  
    },
  
]

const container = {
    hidden: {},
    visible: {
        transition:  {staggerChildren: 0.4}
    }
}


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

function Benefits({setSelectedPage}: Props) {
  return (

    <section
    id="benefits"
    className="mx-auto min-h-full gradient-background2 py-20 ">
     <motion.div  onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
       {/* HEADER  */}
        <motion.div className="w-5/6 mx-auto text-center min-h-full md:my-5 "
         initial="hidden"
         whileInView="visible"
         viewport={{once: true, amount:0.5}}
         transition={{delay: 0.7, duration: 2}}
         variants={{
             hidden: {opacity:0, x:-100},
             visible: {opacity: 1, x:0}
         }}>
            <HText>MORE THAN JUST A GYM</HText>
            <div className="md:w-3/5">
               <p className="my-5 text-sm">Our gym is more than just a place to work out—its a vibrant community of excellence, empowerment, and growth. Here, youll find not just state-of-the-art equipment but also a supportive network of trainers and members committed to helping you thrive. We believe in fostering an environment where every achievement, big or small, is celebrated. Whether youre a beginner or a seasoned athlete, youll feel at home in a space that values connection, inspiration, and personal transformation. Join us and experience the difference of a gym thats built on community and fueled by your success.</p>   
            </div>
        </motion.div>
        {/* BENEFITS SECTION  */}
        <motion.div className="md:flex mt-5 mx-auto w-5/6 items-center justify-between gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        variants={container}
        
        >
            {benefits.map((benefit: BenefitType) => (
                <Benefit
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                setSelectedPage={setSelectedPage}
                />
            ))}
        </motion.div>
       {/* Graphics and description  */}
<div className="mt-16 items-center justify-between gap-20 md:flex w-4/5 mx-auto">
    {/* Graphic - on left for md screens and above */}
    <motion.img
        className="mx-auto md:mx-0 h-[550px] order-1 md:order-first"
        src={ExerciseLady}
        alt="benefits-page-graphic"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
    />
    
    {/* Description - on right for md screens, centered for mobile */}
    <div className="flex flex-col items-center text-center md:text-left md:items-start order-2 md:order-last">
        {/* Title with abstract waves background */}
        <div className="relative w-full mt-10">
            <div >
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount:0.5}}
                    transition={{delay: 0.7, duration: 2}}
                    variants={{
                        hidden: {opacity:0, x:100},
                        visible: {opacity: 1, x:0}
                    }}
                >
                    <div className="text-center mt-10 md:text-left">
                     <HText >
                        MILLIONS OF HAPPY MEMBERS GETTING{" "}
                        <span className="text-indigo-600">FIT</span>
                    </HText>
                    </div>
                  
                </motion.div>
            </div>
        </div>
        
        {/* Paragraphs */}
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount:0.5}}
            transition={{delay: 0.7, duration: 2}}
            variants={{
                hidden: {opacity:0, x:-100},
                visible: {opacity: 1, x:0}
            }}
            className="w-full md:w-5/6"
        >
            <p className="my-5">
                Millions of people are transforming their lives and achieving their fitness goals at our gym, where state-of-the-art facilities meet a supportive and motivating environment. With cutting-edge equipment, tailored workout programs, and expert trainers, we provide everything needed to turn ambitions into accomplishments. Whether it's building strength, improving endurance, or simply staying active, our members benefit from personalized guidance that ensures every step of their fitness journey is effective and enjoyable. At our gym, fitness isn't just a routine—it's a lifestyle embraced by a thriving community that celebrates every milestone.
            </p>
            <p className="mb-5">
                Beyond the physical benefits, our gym offers a space where mental and emotional well-being are prioritized. Members not only see results in their physique but also experience increased confidence, energy, and resilience. Group classes foster camaraderie, while one-on-one coaching provides the accountability and support many need to stay on track. Whether you're a seasoned athlete or stepping into a gym for the first time, you'll find yourself surrounded by a diverse group of individuals united by a shared commitment to health and self-improvement. Join the millions who are redefining what it means to be fit and discover how our gym can make a difference in your life.
            </p>
        </motion.div>

        {/* BUTTON */}
        <div className="relative mt-16 ">
            <div >
                <ActionButton setSelectedPage={setSelectedPage}>
                    Join Now
                </ActionButton>
            </div>
        </div>
    </div>
</div>
     </motion.div>
    </section>
  )
}

export default Benefits