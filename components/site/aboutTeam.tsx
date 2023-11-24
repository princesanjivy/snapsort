import { NameCardProps } from "@/types/interface";

const NameCard = ({ name, description, title }: NameCardProps) => {
    return (
        <>
            <blockquote
                className="flex flex-col-reverse items-center justify-between w-full col-span-1 p-6 mb-16 text-center transition-all duration-200 bg-gray-100 rounded-lg md:flex-row md:text-left hover:bg-white hover:shadow ease">
                <div className="flex flex-col pr-8">
                    <div className="relative pl-12">
                        <svg className="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                            <path
                                d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
                        </svg>
                        <p className="mt-2 text-base text-gray-600">
                            {description}
                        </p>
                    </div>
                    <h3 className="pl-12 mt-3 text-base font-medium leading-5 text-gray-800 truncate">
                        {name}
                        <span className="mt-1 text-sm leading-5 text-gray-500 truncate"> - {title}</span></h3>
                    <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                </div>
                <img className="flex-shrink-0 object-cover w-24 h-24 mb-5 bg-gray-300 rounded-full md:mb-0"
                    src={"/static/images/" + name.toLowerCase() + ".jpeg"}
                    alt={name} />
            </blockquote>
        </>
    )
};

const AboutTeam = () => {
    return (
        <>
            <div id="about-team"
                className="flex items-center justify-center w-full px-8 py-10 border-t border-gray-200 md:py-16 lg:py-24 xl:py-40 xl:px-0">
                <div className="max-w-6xl mx-auto">
                    <div className="flex-col items-center ">
                        <div className="flex flex-col items-center justify-center w-full h-full max-w-2xl pr-8 mx-auto text-center">
                            <h3 className="max-w-3xl px-5 mt-2 text-3xl font-black leading-tight text-center text-emerald-500 sm:mt-0 sm:px-0 sm:text-6xl">
                                Meet the team
                            </h3>
                            <p className="my-6 text-xl font-medium text-gray-500">
                                To build an ecosystem that brings out the photographer and socialite inside every human
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center max-w-2xl py-8 mx-auto xl:flex-row xl:max-w-full">
                            <div className="w-full xl:w-1/2 xl:pr-8">
                                <NameCard name="Sanjivy" description="I build apps & APIs. Instructor for Python & Flutter. SDE @striim" title="Frontend" />
                                <NameCard name="Yuva" description="Unqork Developer" title="UI/UX Designer & Content" />
                            </div>
                            <div className="w-full xl:w-1/2 xl:pl-8">
                                <NameCard name="Yadava" description="AWS AI/ML Developer" title="Backend" />
                                <NameCard name="Thamizh" description="Passionate in career ideas and digital marketing" title="Marketing" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default AboutTeam;
