import Aos from "aos";
import { useEffect } from "react";
import imgHTML from '../assets/skills/icons8-html-96.webp';
import imgCSS from '../assets/skills/icons8-css-96.webp';
import imgSASS from '../assets/skills/icons8-avatar-sass-96.webp';
import imgJAVASCRIPT from '../assets/skills/icons8-javascript-96.webp';
import imgREACT from '../assets/skills/icons8-react-a-javascript-library-for-building-user-interfaces-96.webp';
import imgREDUX from '../assets/skills/icons8-redux-96.webp';
import imgGIT from '../assets/skills/icons8-git-96.webp';
import imgVISUALSTUDIO from '../assets/skills/icons8-visual-studio-96.webp';

const Skills = () => {
    useEffect(()=> {
        Aos.init({duration: 1000});
    }, [])
    return (
       <div id="Services" className="p-20 flex flex-col items-center justify-cente bg-neutral-700">
        <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-amber-500">Skills</h1>
        <div className="grid lg:grid-cols-8 md:grid-cols-4 grid-cols-2 justify-around gap-20">
            <div data-aos="fade-up" className="flex items-center justify-center flex-col">
                <img src={imgHTML} alt="" />
                <h2 className="font-semibold text-white">HTML</h2>
            </div>
            <div data-aos="fade-down" className="flex items-center justify-center flex-col">
                <img src={imgCSS} alt="" />
                <h2 className="font-semibold text-white">CSS</h2>
            </div>
            <div data-aos="fade-up" className="flex items-center justify-center flex-col">
                <img src={imgSASS} alt="" />
                <h2 className="font-semibold text-white">SASS</h2>
            </div>
            <div data-aos="fade-down" className="flex items-center justify-center flex-col">
                <img src={imgJAVASCRIPT} alt="" />
                <h2 className="font-semibold text-white">JAVASCRIPT</h2>
            </div>
            <div data-aos="fade-up" className="flex items-center justify-center flex-col">
                <img src={imgREACT} alt="" />
                <h2 className="font-semibold text-white">REACT</h2>
            </div>
            <div data-aos="fade-down" className="flex items-center justify-center flex-col">
                <img src={imgREDUX} alt="" />
                <h2 className="font-semibold text-white">REDUX</h2>
            </div>
            <div data-aos="fade-up" className="flex items-center justify-center flex-col">
                <img src={imgGIT} alt="" />
                <h2 className="font-semibold text-white">GIT</h2>
            </div>
            <div data-aos="fade-down" className="flex items-center justify-center flex-col">
                <img src={imgVISUALSTUDIO} alt="" />
                <h2 className="font-semibold text-white">VISUAL STUDIO</h2>
            </div>
        </div>
       </div>
    );
};

export default Skills;