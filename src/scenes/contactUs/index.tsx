import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'
import HText from "@/shared/HText";
import { p } from "framer-motion/client";




type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({setSelectedPage}: Props) => {

  const inputStyles = `mb-5 w-full rounded-lg bg-indigo-600 px-5 py-3 placeholder-white`

  const {register, trigger, formState: {errors}} = useForm()

  const onSubmit = async (e: any) => {
    const isValid = await trigger()
     if (!isValid) {
      e.preventDefault()
     }

  }
  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
            {/* HEADER  */}
            <motion.div className="md:w-3/5 gradient-background2 p-3 rounded-lg"
             initial="hidden"
             whileInView="visible"
             viewport={{once: true, amount:0.5}}
             transition={{duration: 2}}
             variants={{
                 hidden: {opacity:0, x:-100},
                 visible: {opacity: 1, x:0}
             }}>
              <HText>
                <span className="text-purple-950">JOIN NOW</span>{" "}TO GET IN SHAPE
              </HText>
              <p className="my-5">Join us now to get kick started in your life transformational experience with our lovely community and professional coaches and vibrant community</p>

            </motion.div>
            {/* FORM AND IMAGE */}
            <div className="mt-10 justify-between gap-8 md:flex ">
              <motion.div className="mt-10 basis-3/5 md:mt-0"
               initial="hidden"
               whileInView="visible"
               viewport={{once: true, amount:0.5}}
               transition={{duration: 2}}
               variants={{
                   hidden: {opacity:0, y:100},
                   visible: {opacity: 1, y:0}
               }}>
                <form target="_blank"
                onSubmit={onSubmit}
                method="POST"
                action="https://formsubmit.co/8649a98c8bc8636691758c78226745f1"
                > 
                <input className={inputStyles}
                type="text"
                placeholder="NAME"
                {...register("name" , {
                  required: true,
                  maxLength: 100,
                })}
                  />
                  {errors.name && (
                    <p className="mt-1 text-blue-700">
                      {errors.name.type === "required" && "This field is required"}
                      {errors.name.type === "maxLength" && "Max Length is a 100 characters"}
                    </p>
                  )}
                  <input className={inputStyles}
                type="text"
                placeholder="EMAIL"
                {...register("email" , {
                  required: true,
                  pattern:  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-blue-700">
                      {errors.email.type === "required" && "This field is required"}
                      {errors.email.type === "pattern" && "Invalid Email Address"}
                    </p>
                  )}
                   <textarea className={inputStyles}
                rows={4}
                cols={50}
                placeholder="MESSAGE"
                {...register("message" , {
                  required: true,
                  maxLength: 2000,
                })}
                  />
                  {errors.message && (
                    <p className="mt-1 text-blue-700">
                      {errors.message.type === "required" && "This field is required"}
                      {errors.message.type === "maxLength" && "Max Length is a 2000 characters"}
                    </p>
                  )}
                  <button
                  type="submit"
                  className="mt-5 rounded-lg bg-purple-950 px-20 py-3 transition duration-500 hover:text-white font-bold"
                  >
                    SUBMIT
                  </button>
                </form>

              </motion.div>
              {/* IMAGE */}
              <motion.div className="relative mt-16 basis-2/5 md:mt-0"
                     initial="hidden"
                     whileInView="visible"
                     viewport={{once: true, amount:0.5}}
                     transition={{ delay: 0.4, duration: 2}}
                     variants={{
                         hidden: {opacity:0, y:100},
                         visible: {opacity: 1, y:0}
                     }}>
                      <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                        <img className="w-full" src={ContactUsPageGraphic} alt="contact-us" />
                      </div>

              </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default ContactUs