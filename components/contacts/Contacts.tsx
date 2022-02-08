import React from 'react';
import {SiLinkedin, SiGithub} from "react-icons/si";
import {BiMailSend} from "react-icons/bi";

const Contacts = () => {
    return (
        <div className={"flex gap-4"}>
            <a href="https://www.linkedin.com/in/devtiago" target="_blank" rel="noreferrer">
                <div className={"rounded bg-[#dcdcdc] hover:bg-white"}>
                    <SiLinkedin size={22}
                                className={`cursor-pointer fill-[#095db2] hover:fill-[#1072d3] hover:scale-110 transition-transform`}/>
                </div>
            </a>
            <a href="https://github.com/tgfnds" target="_blank" rel="noreferrer">
                <SiGithub size={22}
                          className={`cursor-pointer fill-[#181717] hover:fill-[#565252] dark:fill-[#dcdcdc] dark:hover:fill-[#fff] hover:scale-110 transition-transform`}/>
            </a>
            <a href="mailto:tgfnds23@gmail.com">
                <BiMailSend size={24}
                            className={`cursor-pointer fill-[#181717] hover:fill-[#565252] dark:fill-[#dcdcdc] dark:hover:fill-[#fff] hover:scale-110 transition-transform`}/>
            </a>
        </div>
    );
};

export default Contacts;