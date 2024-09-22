import SmilingPanda from '../assets/images/panda-smiling.png'
import TransitionEffect from '../components/TransitionEffect'
const ErrorPage = () => {
    return (
        <>
            <TransitionEffect />
            <div className="min-h-screen px-32 flex flex-col py-6 mt-6 items-center sm:text-xl sm:text-center sm:items-start">
                <h2 className="text-dark/50 dark:text-light ">Buy me a coffee? I am working on this page.</h2>
                <h1 className="text-7xl font-bold text-dark dark:text-light mt-4">404</h1>
                {/* <span className="text-dark/50">Error</span> */}
                <h2 className="text-dark dark:text-light sm:text-sm">Page Not Found</h2>
                <div className=''>
                    <img
                        src={SmilingPanda}
                        alt="smilling panda"
                        width={300}            
                    />
                </div>
            </div>

        </>

    )
}

export default ErrorPage