import { motion } from "framer-motion";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import HomePageText from '@/assets/HomePageText.png';
import HomePageGraphic from '@/assets/HomePageGraphic1.png';
import SponsorRedbull from '@/assets/SponsorRedBull.png';
import SponsorForbes from '@/assets/SponsorForbes.png';
import SponsorFortune from '@/assets/SponsorFortune.png';
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

function Home({ setSelectedPage }: Props) {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

    return (
        <section
            id="home"
            className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0 gradient-background2"
        >
            {/* Image and Main Header */}
            <motion.div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
            >
                {/* Main Header */}
                <div className="z-10 mt-32 md:basis=3/5">
                    {/* HEADINGS */}
                    <motion.div className="md:-mt-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount:0.5}}
                    transition={{duration: 2}}
                    variants={{
                        hidden: {opacity:0, x:-100},
                        visible: {opacity: 1, x:0}
                    }}
                    >
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:opacity-5 md:before:content-evolvetext">
                                <img src={HomePageText} alt="home-page-text"  />
                            </div>
                        </div>
                        <p className="mt-8 text-sm">
                            Achieve your dream body at our gym, where your fitness goals become reality! With state-of-the-art equipment, expert trainers, and a welcoming community, we provide everything you need to transform your health and confidence. Whether you're looking to tone up, build muscle, or boost your energy, our tailored programs and supportive environment will guide you every step of the way. Start your journey today—your dream body awaits!
                        </p>
                    </motion.div>
                   {/* ACTIONS */}
<motion.div className="mt-8 flex items-center gap-8"
 initial="hidden"
 whileInView="visible"
 viewport={{once: true, amount:0.5}}
 transition={{delay: 0.7, duration: 2}}
 variants={{
     hidden: {opacity:0, x:-100},
     visible: {opacity: 1, x:0}
 }}
>
    <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
    >
        <ActionButton setSelectedPage={setSelectedPage}>
            Join Now
        </ActionButton>
    </motion.div>
    <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
    >
        <AnchorLink
            className="text-sm font-bold text-purple-500 underline hover:text-indigo-500"
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
        >
            <p>Learn More</p>
        </AnchorLink>
    </motion.div>
</motion.div>

                </div>

                {/* Image */}
                <motion.div
                    className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end "
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <img
                        src={HomePageGraphic}
                        alt="home-pageGraphic"
                        className="h-[550px] mt-10"
                    />
                </motion.div>
            </motion.div>
           {/* SPONSORS */}
{isAboveMediumScreens && (
    <div className="absolute bottom-0 w-full bg-indigo-400 py-10">
        <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
                <img src={SponsorRedbull} alt="redbull-sponsor" />
                <img src={SponsorForbes} alt="forbes-sponsor" />
                <img src={SponsorFortune} alt="fortune-sponsor" />
            </div>
        </div>
    </div>
)}

        </section>
    );
}

export default Home;
