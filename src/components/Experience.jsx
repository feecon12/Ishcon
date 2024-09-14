/* eslint-disable react/prop-types */
import Education from './Education'

const ExperienceCard = ({ designation, companyName, duration, location, description }) => {
    return (
        <>
            <div className="border shadow-xl mt-6 px-8 py-8">
                <div>
                    <span className="text-dark/75 text-xl">{designation}</span> <span className="text-primary text-2xl font-bold">@{companyName}</span>
                </div>
                <div className="text-sm text-dark/55">{duration} | {location}</div>
                <p>{description}</p>
            </div>

        </>
    )
}


const Experience = () => {
    return (
        <>
            <div className="min-h-screen mt-6 py-8 col-span-12 flex flex-col items-center px-32">
                <h1 className='text-7xl font-bold items-center justify-center'>Experience</h1>
                <div>
                    <ExperienceCard
                        designation="Experiened Associate"
                        companyName="PwC"
                        duration="Apr 2021 - Oct 2023"
                        location="Bangalore, Karnataka"
                        description="Worked as a Full stack developer cum test engineer. Responsible for implementation of features in UI and testing the data flows from front end to backend, and vice versa. Equipped with multiple testing methodologies and able to create test plans and test cases."
                    />
                    <ExperienceCard
                        designation="Intern"
                        companyName="Capgemini"
                        duration="Jun 2020 - Nov 2020"
                        location="Remote"
                        description="Involved in learning multiple tech like Database Management System, Javascript, HTML/CSS, and implementing in ReactJs. Created a static website of car showroom, where different cars are displayed as per the brand categories and their prices."
                    />
                </div>
                <Education />
            </div>
        </>
    )
}

export default Experience