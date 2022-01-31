import SkillList from "./SkillList";
import {
    SiFirebase,
    SiGit,
    SiMaterialui,
    SiMongodb,
    SiNextdotjs,
    SiNpm,
    SiSass,
    SiTailwindcss,
    SiTypescript
} from "react-icons/si";
import {SkillIcon} from "./SkillIcon";

export default function HobbySkills() {
    return (
        <SkillList title="As a Hobby">
            <SkillIcon title="TypeScript" Icon={SiTypescript} hoverFill="hover:fill-typescript"/>
            <SkillIcon title="NextJS" Icon={SiNextdotjs} hoverFill="hover:fill-nextjs"/>
            <SkillIcon title="TailwindCSS" Icon={SiTailwindcss} hoverFill="hover:fill-tailwind"/>
            <SkillIcon title="Firebase" Icon={SiFirebase} hoverFill="hover:fill-firebase"/>
            <SkillIcon title="MongoDB" Icon={SiMongodb} hoverFill="hover:fill-mongodb"/>
            <SkillIcon title="Git" Icon={SiGit} hoverFill="hover:fill-git"/>
            <SkillIcon title="Sass" Icon={SiSass} hoverFill="hover:fill-sass"/>
            <SkillIcon title="NPM" Icon={SiNpm} hoverFill="hover:fill-npm"/>
            <SkillIcon title="MUI" Icon={SiMaterialui} hoverFill="hover:fill-mui"/>
        </SkillList>
    );
}