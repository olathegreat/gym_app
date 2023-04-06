import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion';
import {useForm} from "react-hook-form";
import ContactUsGraphic from "@/assets/ContactUsPageGraphic.png"
import HText from '@/shared/HText';


type Props = {
    setSelectedPage : (value: SelectedPage) => void;
}

const ContactUs = ({setSelectedPage}: Props) => {
    const{
        register,
         trigger,
        formState: {errors}
    } = useForm();



    const onSubmit = async (e: any) =>{
        const isValid = await trigger();

        if(!isValid){
            e.preventDefault();
        }

    }
  return (

    <section id="contactus" className='mx-auto w-5/6 pt-24 pb-32 '>
        <motion.div
           onViewportEnter={()=>setSelectedPage(SelectedPage.ContactUs)}        
        >
            {/* HEADER */}
            <motion.div
             className='md:w-3/5'
             initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
            }}
            >
                <HText>
                    <span className='text-primary-500'> JOIN NOW</span> TO GET IN SHAPE
                </HText>
                <p className='my-5'>


                Achieve Your Fitness Goals with Our State-of-the-Art Facilities and Expert Trainers

                Are you ready to take control of your health and achieve your fitness goals? Look no further than our
                gym! Our state-of-the-art facilities and expert trainers are here to help you get in shape, whether
                you're just starting out on your fitness journey or you're a seasoned athlete.

                </p>

            </motion.div>
            {/* FORM AND IMAGE */}

            <div className='mt-10 justify-between gap-8 md:flex'>
                <motion.div
                className='mt-10 basis-3/5 md:mt-0'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                >

                    <form
                     target='_blank'
                     onSubmit={onSubmit}
                     method= "POST"
                     action="https://formsubmit.co/ademolarotimi2000@gmail.com"
                    >

                        <input 
                        className='w-full  rounded-lg bg-primary-300 px-5 py-3 placeholder-white'
                        type="text"
                        placeholder='NAME'
                        {...register("name", {
                            required:true,
                            maxLength: 100,
                        })}
                        />
                        {errors.name && (
                            <p className='mt-1 text-primary-500'>
                                {errors.name.type === "required" && "This field is required."}
                                {errors.name.type === "maxLength" && "Max Length is 100 character"}
                            </p>
                        ) }



                       <input 
                        className='w-full mt-5 rounded-lg bg-primary-300 px-5 py-3 placeholder-white'
                        type="text"
                        placeholder='EMAIL'
                        {...register("email", {
                            required:true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                        })}
                        />
                        {errors.email && (
                            <p className='mt-1 text-primary-500'>
                                {errors.email.type === "required" && "This field is required."}
                                {errors.email.type === "pattern" && "Invalid Email Address"}
                            </p>
                        ) }



                        <textarea 
                        className='w-full mt-5 rounded-lg bg-primary-300 px-5 py-3 placeholder-white'
                        placeholder='MESSAGE'
                        {...register("message", {
                            required:true,
                            maxLength: 2000,
                        })}
                        rows={4}
                        cols={50}
                        />
                        {errors.message && (
                            <p className='mt-1 text-primary-500'>
                                {errors.message.type === "required" && "This field is required."}
                                {errors.message.type === "maxLength" && "Max Length is 2000 character"}
                            </p>
                        ) }


                        <button
                          type='submit'
                          className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white'
                        >
                            SUBMIT

                        </button>

                    </form>


                </motion.div>

                <motion.div
                 className='relative mt-6 basis-2/5 md:mt-0'
                 initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay:0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                >

                    <div className='md:before:content-evolvetext w-full before:absolute before:-bottom-10 before:-right-10 before:z-[-1]'>
                        <img
                        className='w-full'
                        alt='contactuspagegraphics'
                        src={ContactUsGraphic}
                        />

                    </div>


                </motion.div>

            </div>

        </motion.div>
        
    </section>
  )
}

export default ContactUs