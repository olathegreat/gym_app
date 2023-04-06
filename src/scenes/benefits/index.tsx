import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";

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

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
        {/* HEADER */}

        <div className="md:my-5  md:w-3/5">
          <HText>MORE THAN JUST A GYM</HText>

          <p className="my-5 text-sm">
            We provide world class fitness equipments, trainers and classes to
            get you to your ultimate fitness goals with ease. we provide true
            care into each and every member
          </p>
        </div>

        {/* BENEFITS */}
        <div className="mt-5 items-center justify-between gap-8 md:flex">
          {benefits.map((benefit: BenefitType) => (
            <Benefit
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description} 
                setSelectedPage={setSelectedPage}           
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
