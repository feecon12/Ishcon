import SmilingPanda from '../assets/images/panda-smiling.png'
const ErrorPage = () => {
    return (
        <div className="min-h-screen px-32 flex flex-col py-6 mt-6 items-center ">
            <h2 className="text-dark/50">Buy me a coffee? I will definitely build a feature on your current request.</h2>
            <h1 className="text-7xl font-bold text-dark/90">404</h1>
            {/* <span className="text-dark/50">Error</span> */}
            <h2 className="text-dark/50">Page Not Found</h2>
            <div>
                <img src={SmilingPanda} alt="smilling panda" width={300}/>
            </div>
        </div>

    )
}

export default ErrorPage