import React from "react";
import { motion } from "framer-motion";
import JsImg from '../assets/images/skillsImages/javascript-logo.png'
import ReactImg from '../assets/images/skillsImages/react-jsx-logo.png'
import NodejsImg from '../assets/images/skillsImages/nodejs-icon.png'
import MongoDBImg from '../assets/images/skillsImages/mongodb-icon.png'
import AwsImg from '../assets/images/skillsImages/aws-icon.png'
import AzureImg from '../assets/images/skillsImages/azureicon.png'

import AwsCert from '../assets/images/certificates/aws-certified-solutions-architect-associate.png'
import MsAzure from '../assets/images/certificates/microsoft-certified-azure-fundamentals.png'
import PwcHCD from '../assets/images/certificates/human-centered-design.png'
import PwcDA from '../assets/images/certificates/digital-acumen.png'


// eslint-disable-next-line no-lone-blocks
{ /**Child components starts here */ }
// eslint-disable-next-line react/prop-types
const SkillsCard = ({ tech }) => {
  return (
    <>
      <motion.div className='w-[200px] shadow-xl border m-2 p-3 flex flex-col items-center justify-center dark:shadow-lg dark:shadow-slate-50 dark:rounded-lg rounded-lg '
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}>
        <img src={tech} alt="skills icon" />
        {/* <h1 className='text-md'>{title}</h1> */}
      </motion.div>
    </>
  )
}
// eslint-disable-next-line react/prop-types
const CertificateCard = ({ certificateName, verifyLink }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-between">
        <motion.div className='w-[200px] shadow-xl border m-2 p-3 flex flex-col items-center justify-center dark:shadow-lg dark:shadow-slate-50 dark:rounded-lg rounded-lg '
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}>
          <img src={certificateName} alt="certificate icon" />
          {/* <h1 className='text-md'>{title}</h1> */}
        </motion.div>
        <a href={verifyLink} target="_blank" className="mt-3 text-lg" rel="noreferrer">Verify</a>
      </div>
    </>
  )
}
const SkillList = () => {
  return (
    <>
      <div className="mt-6 py-4 flex flex-col items-center px-32">
        <div className="flex mt-2">
          <SkillsCard title="Javascript" tech={JsImg} />
          <SkillsCard title="ReactJs" tech={ReactImg} />
          <SkillsCard title="NodeJS" tech={NodejsImg} />
          <SkillsCard title="MongoDB" tech={MongoDBImg} />
          <SkillsCard title="AWS" tech={AwsImg} />
          <SkillsCard title="Azure" tech={AzureImg} />
        </div>
      </div>
    </>
  )
}
const CertificationList = () => {
  return (
    <>
      <div className='flex flex-col items-center'>
        <div className="flex">
          <CertificateCard verifyLink={'https://www.credly.com/badges/b3d8247d-2b8e-46f2-9adb-fd0ed9be79ed/'} certificateName={AwsCert} />
          <CertificateCard verifyLink={'https://learn.microsoft.com/api/credentials/share/en-us/FeeconBehera-2966/5B8137F8C7E1D33?sharingId=7538A1A860DF4211'} certificateName={MsAzure} />
          <CertificateCard verifyLink="https://www.credly.com/badges/7aba4c79-21ec-4ca8-9ea4-16683c6eeed8" certificateName={PwcHCD} />
          <CertificateCard verifyLink="https://www.credly.com/badges/452985ae-2578-44ea-a7ef-d97afe11a10e" certificateName={PwcDA} />
        </div>
      </div>

    </>
  )
}

/**Child components Ends here */

// const Skill = ({ name, x, y }) => {
//   return (
//     <motion.div
//       className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark absolute dark:bg-light dark:text-dark
//         lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:text-bold"
//       whileHover={{ scale: 1.05 }}
//       initial={{ x: 0, y: 0 }}
//       whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
//       viewport={{ once: true }}
//     >
//       {name}
//     </motion.div>
//   );
// };


//Export component


/**Parent component */
const SkillAndCertifications = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-40 justify-between">
        <h2 className='font-bold text-8xl w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
          Skills & Certifications
        </h2>
        {/* <div
          className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
            lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
            lg:bg-circularLightLg lg:dark:bg-circularDarkLg
            mb:bg-circularLightMb mb:dark:bg-circularDarkMb
            sm:bg-circularLightSm sm:dark:bg-circularDarkSm"
        >
          <motion.div
            className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark dark:bg-light dark:text-dark
                lg:p-6 md:p-4 xs:text-xs xs:p-2"
            whileHover={{ scale: 1.05 }}
          >
            Tech
          </motion.div>

          <Skill name="Software Architect" x="-25vw" y="2vw" />
          <Skill name="CSS" x="-5vw" y="-10vw" />
          <Skill name="JavaScript" x="20vw" y="6vw" />
          <Skill name="ReactJS" x="0vw" y="12vw" />
          <Skill name="NextJS" x="-20vw" y="-15vw" />
          <Skill name="Azure" x="15vw" y="-12vw" />
          <Skill name="MongoDB" x="0vw" y="-20vw" />
          <Skill name="NodeJs" x="-25vw" y="18vw" />
          <Skill name="MySQL" x="18vw" y="18vw" />
          <Skill name="Cloud Computing" x="32vw" y="-5vw" />
        </div> */}
        <div className="">
          <SkillList />
        </div>
        <div className="">

          <CertificationList />
        </div>

      </div>
    </>
  );
};

export default SkillAndCertifications;
