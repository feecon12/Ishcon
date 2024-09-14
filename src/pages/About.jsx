import myImg from "../assets/images/dev-pic.jpg"
import Education from "../components/Education"
// import Education from "../components/Education"
import Experience from "../components/Experience"
import SkillAndCertifications from "../components/SkillAndCertifications"
const About = () => {
  return (
    <>
      <main className="px-32 w-full min-h-screen  text-dark my-6">
        <div className="grid grid-cols-8 gap-8">
          <div className="col-span-3 px-6 py-2">
            <h2 className="text-2xl font-bold text-primary">About me</h2>
            <p className="mt-4">
              Greetings, I m Feecon - a Full stack web developer in MERN stack and UI/UX designer driven to craft exquisite, practical, and user-centric digital encounters. Armed with a 3-year tenure in this realm, I perpetually seek novel and inventive means to actualize my clients visions.
            </p>
            <p className="my-4">
              I believe that design is about more than just making things look pretty - its about solving problems and creating intuitive, enjoyable experiences for users.
            </p>
            <p className="mt-4">
              Whether I m working on a website, mobile app, or
              other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
            </p>
          </div>
          <div className="col-span-3 w-full h-full px-6 py-2 flex justify-center ">
            <div className="shadow-xl border mt-12 ">
              <img src={myImg} alt="developer\'s image" width={400} />
            </div>
          </div>
          <div className="col-span-2 mt-10 px-6 py-2 flex flex-col items-end justify-between">
            <div className="flex flex-col items-end justify-center">
              <span className="inline-block text-7xl font-bold text-primary">4+</span>
              <h1 className="font-bold capitalize text-dark/75 text-lg">satisfied clients</h1>
            </div>
            <div className="flex flex-col items-end justify-center">
              <span className="inline-block text-7xl font-bold text-primary">10+</span>
              <h1 className="font-bold capitalize text-dark/75 text-lg">projects completed</h1>
            </div>
            <div className="flex flex-col items-end justify-center">
              <span className="inline-block text-7xl font-bold text-primary">3+</span>
              <h1 className="font-bold capitalize text-dark/75 text-lg">years of experiences</h1>
            </div>
          </div>
        </div>
        <SkillAndCertifications />
        <Experience />
        <Education />
      </main>

    </>
  )
}

export default About