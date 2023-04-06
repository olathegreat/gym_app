import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "We pride ourselves on providing the latest and greatest in fitness equipment and amenities to help you achieve your health and wellness goals. Here's what you can expect from our top-of-the-line facilities",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "At our gym, we pride ourselves on offering a diverse range of fitness classes to suit all interests and fitness levels. From high-energy cardio to calming yoga, we've got something for everyone.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Experts and PRO Traines",
    description:
      "At our gym, we're dedicated to providing the highest-quality fitness services to our members, which is why we only work with the most experienced and qualified trainers in the industry. Here's what you can expect from our expert trainers",
  },
];

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2}
    }
}

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
        {/* HEADER */}

        <motion.div 
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.5 }}
           transition={{ duration: 0.5 }}
           variants={{
             hidden: { opacity: 0, x: -50 },
             visible: { opacity: 1, x: 0 },
           }}     
          className="md:my-5  md:w-3/5">
          <HText>MORE THAN JUST A GYM</HText>

          <p className="my-5 text-sm">
            We provide world class fitness equipments, trainers and classes to
            get you to your ultimate fitness goals with ease. we provide true
            care into each and every member
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div 

        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5}}
        variants={container}
        
        className="mt-5 items-center justify-between gap-8 md:flex"
        
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

        {/* Graphics and description */}
        <div className="mt-16 justify-between items-center gap-20 md:mt-28 md:flex">
            {/* Graphic */}
            <img className="mx-auto "
              alt="benefits-page-graphic"
              src={BenefitsPageGraphic}            
            />

            {/* description */}
          

            <div>
                {/* Title */}
                <div className="relative">
                    <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">

                        <motion.div
                               initial="hidden"
                               whileInView="visible"
                               viewport={{ once: true, amount: 0.5 }}
                               transition={{ duration: 0.5 }}
                               variants={{
                                 hidden: { opacity: 0, x: 50 },
                                 visible: { opacity: 1, x: 0 },
                               }}                             
                        >
                            <HText>
                                MILLIONS OF HAPPY MEMBERS {" "}

                                <span className="text-primary-500"> FIT</span>
                            </HText>
                        </motion.div>

                    </div>

                </div>

                {/* Description */}

                <motion.div
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.5 }}
                 transition={{ delay:0.2, duration: 0.5 }}
                 variants={{
                   hidden: { opacity: 0, x: 50 },
                   visible: { opacity: 1, x: 0 },
                 }}     
                >
                    <p className="my-5 ">

                        At our gym, we pride ourselves on providing top-quality fitness services that keep our
                        members happy and healthy. But don't just take our word for it - here's what some of
                        our millions of happy members have to say:

                    </p>

                    <p className="mb-5">
                    "I've been a member of this gym for years, and I wouldn't go anywhere else. The facilities 
                    are state-of-the-art, the classes are fun and challenging, and the trainers are knowledgeable
                     and supportive. But what really sets this gym apart is the sense of community.
                      Everyone is so friendly and welcoming, and I've made some great friends here. I always leave
                      feeling better than when I came in, and I can't recommend this gym enough!" - Lisa S.

                    </p>
                
                </motion.div>


                {/* Button */}
                <div className="relative mt-16">
                    <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now

                        </ActionButton>

                    </div>

                </div>
            </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
