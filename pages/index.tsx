import type {NextPage} from 'next';
import Head from 'next/head';
import Section from "../components/ui/Section";
import ProfessionalSkills from "../components/skills/ProfessionalSkills";
import HobbySkills from "../components/skills/HobbySkills";
import InterestedSkills from "../components/skills/InterestedSkills";
import Timeline from "../components/career/Timeline";
import LinkButton from "../components/ui/LinkButton";

const paragraphs = [
    `I'm a graduate in Software Engineering, who has always been working as a Full-Stack developer
    but has always had more of an interest in Frontend stuff.`,
    `On my free time I like to build personal projects and also dabble on some game development
    with Godot Engine or Unity.`,
    `Apart from coding, I also like to game and travel.`,
];

const Home: NextPage = () => {
    return (
        <div className="mx-auto px-2 max-w-2xl flex flex-col gap-6">
            <Head>
                <title>Tiago&apos;s Home</title>
                <meta name="description"
                      content="Personal website from Tiago Fernandes, a Software Engineer based in Portugal."/>
                <link rel="icon" href="/static/images/favicon.ico"/>
            </Head>

            <Section id="intro" title="Hello, I'm Tiago!">
                {paragraphs.map((item, index) =>
                    <p key={index} className="first-of-type:mt-0 mt-5 leading-7">{item}</p>)}
            </Section>

            <Section id="skills" title="Skills">
                <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:justify-evenly">
                    <ProfessionalSkills/>
                    <HobbySkills/>
                    <InterestedSkills/>
                </div>
            </Section>

            <Section id="career" title="Career">
                <Timeline/>
            </Section>

            <LinkButton>Projects</LinkButton>
        </div>
    )
}

export default Home;
