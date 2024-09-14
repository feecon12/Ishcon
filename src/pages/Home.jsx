import HeroImage from '../assets/images/hero-homepage.png'
import { Link } from 'react-router-dom'
import { ArrowIcon } from '../components/Icons'
import Resume from '../Feecon_Behera_Resume.pdf'
// import About from './About'
// import AnimatedText from '../components/AnimatedText'
// import Layout from '../components/Layout'
const Home = () => {
  return (
    <>
      <main className="mt-8 grid grid-cols-2 text-dark bg-light w-full min-h-screen px-32">

        <div className='grid-cols-1 items-center justify-between'>
          <img src={HeroImage} alt='an excited developer' />
        </div>
        <div className='grid-cols-1 items-center justify-between'>
          {/* <AnimatedText text="Something"/> */}
          <h1 className='font-bold text-7xl'>Bringing Dreams to Life: Where Vision Meets Code and Design.</h1>
          <p className='my-4 text-base font-medium'>
            Being a proficient full-stack developer, I am committed to translating concepts into inventive web applications. Discover my recent projects and articles, spotlighting my expertise in React.js and web development.
          </p>
          <div className='flex items-center self-start mt-2'>
            <Link
              to={Resume}
              download={true}
              target='blank'
              className='flex items-center bg-primary text-light py-2 px-6 rounded-lg text-lg font-semibold
                            hover:bg-light hover:text-primary border-2 border-solid hover:border-primary '
            >
              Resume

              <ArrowIcon className="w-5 ml-1" />
            </Link>

            <Link
              to="/contact"
              className='ml-4 text-lg font-medium capitalize text-dark underline'
            >
              Contact
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
export default Home