
import { classTypes, SelectedPage } from '@/shared/types'
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import { motion } from 'framer-motion'
import HText from '@/shared/HText'
import Class from './Class'


const classes:Array<classTypes> = [
    {
        name: "Weight Training Classes",
        description: "we offer a variety of weight training classes that are designed to help you build strength, increase muscle mass, and boost your confidence. Whether you're a beginner or an experienced lifter, we have a class that's perfect for you.",
        image: image1,
    },
    {
        name: "Yoga  Classes",
        description: "Our experienced instructors will guide you through a series of poses and breathing exercises that will help you to improve your flexibility, balance, and overall well-being",
        image: image2,
    },
    {
        name: "Ab Core Training Classes",
        description: "Classes that are designed to help you strengthen your core muscles, improve your posture, and reduce the risk of injury.",
        image: image3,
    },
    {
        name: "Adventure Training Classes",
        description: "Our experienced trainers will guide you through a series of exercises and activities that will test your limits and help you explore new horizons.",
        image: image4,
    },
    {
        name: "Fitness Classes",
        description: "At our gym, we offer a variety of fitness classes that are designed to be fun, effective, and challenging",
        image: image5,
    },
    {
        name: "Training Classes",
        description: ". Whether you're a beginner or an experienced athlete, we have a class that's perfect for you. Here's a closer look at our training classes",
        image: image6,
    },
]


type Props = {
    setSelectedPage : (value: SelectedPage) => void
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id="ourclasses" className='w-full bg-primary-100 py-40'>
        <motion.div
            onViewportEnter={()=>setSelectedPage(SelectedPage.OurClasses)}        
        >
            <motion.div
            className='mx-auto w-5/6'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            >
                <div className='md:w-3/5'>
                    <HText>
                        OUR CLASSES
                    </HText>

                    <p className='py-5 '>
                    At our gym, we offer a wide range of classes to cater to every fitness level
                     and interest. Whether you're looking to build strength,
                     improve your flexibility, or simply have fun while you work out, we have a class
                      that's perfect for you.
                    </p>
                </div>

            </motion.div>

            <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
                <ul className='w-[2800px] whitespace-nowrap'>
                    {
                        classes.map((item: classTypes, index) =>(
                            <Class
                             key={`${item.name}-${index}`}
                             name={item.name}
                             description={item.description}
                             image={item.image}
                            />
                        ))
                    }

                </ul>

            </div>

        </motion.div>

    </section>
  )
}

export default OurClasses