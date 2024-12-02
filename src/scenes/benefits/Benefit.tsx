import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import AnchorLink from "react-anchor-link-smooth-scroll"

const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
}

type Props = {
    icon: JSX.Element,
    title: string,
    description: string,
    setSelectedPage: (value: SelectedPage) => void,
}

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
    return (
        <motion.div
            variants={childVariant}
            className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
        >
            <div className="mb-4 flex justify-center">
                {/* Add motion.div for icon hover and click animations */}
                <motion.div
                    className="rounded-full border-2 border-gray-100 bg-indigo-500 p-4"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {icon}
                </motion.div>
            </div>
            <h4 className="font-bold">{title}</h4>
            <p className="my-3">{description}</p>
            <AnchorLink
                className="text-sm font-bold text-purple-500 underline hover:text-indigo-500"
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}
            >
                <p>Learn More</p>
            </AnchorLink>
        </motion.div>
    )
}

export default Benefit
