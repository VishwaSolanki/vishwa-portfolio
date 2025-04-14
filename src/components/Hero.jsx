
import { ButtonPrimary, ButtonOutline } from "./Button";




const Hero = () => {

    const cvLink = "https://drive.google.com/file/d/1kEwIpcciQxLrPkUdb3r_u-PpF9n8NNbO/view?usp=sharing"; 


    return (
        <section className="pt-28 lg:pt-36" id="home">
            <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
            <div >

                <div className="flex items-centergap-3 gap-1.5">
                    <figure className="img-box w-9 h-9 rounded-lg">
                        <img src="/images/avatar-1.jpg"
                        width={40}
                        height={40}
                        alt="avatar-1"
                        className="img-cover"
                        />
                    </figure>

                    <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                        <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                            <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                        </span>
                        Available for work

                    </div>
                </div>

                <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch]mlg:max-w-[15ch] mt-5 mb-8 lg:mb-10">Building Scalable Modern Websites for the Future</h2>

                <div className="flex items-center gap-3">
                    <a href={cvLink} target="_blank" rel="noopener noreferrer">
                    <ButtonPrimary
                    label="Download CV"
                    icon="download"
                    />
                    </a>

                    <ButtonOutline
                    href="#about"
                    label="Scroll down"
                    icon="arrow_downward"
                    />
                </div>

        </div>

            <div className="hidden lg:block">
                <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
                    <img src="/images/my_photo-removebg-preview1.png"
                    width={656}
                    height={800}
                    alt="hero-banner"
                    className="w-full"
                      />
                </figure>
            </div>

            </div>
        </section>
    )
}

export default Hero;