import SkillList from "./SkillList";
import {
    SiCsharp,
    SiCss3,
    SiDotnet,
    SiGit,
    SiHtml5,
    SiMicrosoftsqlserver, SiNpm,
    SiReact,
    SiRedux,
    SiReduxsaga,
    SiSass,
    SiTypescript
} from "react-icons/si";
import {SkillIcon} from "./SkillIcon";

export default function ProfessionalSkills() {
    return (
        <SkillList title="Professionally">
            <SkillIcon title="TypeScript" Icon={SiTypescript} hoverFill="hover:fill-typescript"/>
            <SkillIcon title="React" Icon={SiReact} hoverFill="hover:fill-react"/>
            <SkillIcon title="Redux" Icon={SiRedux} hoverFill="hover:fill-redux"/>
            <SkillIcon title="Redux-Saga" Icon={SiReduxsaga} hoverFill="hover:fill-reduxsaga"/>
            <SkillIcon title=".Net" Icon={SiDotnet} hoverFill="hover:fill-dotnet"/>
            <SkillIcon title="Git" Icon={SiGit} hoverFill="hover:fill-git"/>
            <SkillIcon title="NPM" Icon={SiNpm} hoverFill="hover:fill-npm"/>
            <SkillIcon title="HTML5" Icon={SiHtml5} hoverFill="hover:fill-html5"/>
            <SkillIcon title="CSS3" Icon={SiCss3} hoverFill="hover:fill-css3"/>
            <SkillIcon title="Sass" Icon={SiSass} hoverFill="hover:fill-sass"/>
            <SkillIcon title="C#" Icon={SiCsharp} hoverFill="hover:fill-csharp"/>
            <SkillIcon title="SQL Server" Icon={SiMicrosoftsqlserver} hoverFill="hover:fill-sqlserver"/>
        </SkillList>
    );
}