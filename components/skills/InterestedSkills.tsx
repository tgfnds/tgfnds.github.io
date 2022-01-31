import SkillList from "./SkillList";
import {SiDjango, SiFlutter, SiPython, SiVuedotjs,} from "react-icons/si";
import {SkillIcon} from "./SkillIcon";

export default function InterestedSkills() {
    return (
        <SkillList title="Interested in">
            <SkillIcon title="Flutter" Icon={SiFlutter} hoverFill="hover:fill-flutter"/>
            <SkillIcon title="VueJS" Icon={SiVuedotjs} hoverFill="hover:fill-vuejs"/>
            <SkillIcon title="Django" Icon={SiDjango} hoverFill="hover:fill-django"/>
            <SkillIcon title="Python" Icon={SiPython} hoverFill="hover:fill-python"/>
        </SkillList>
    );
}