import TimelineEvent from "./TimelineEvent";

export default function Timeline() {
    return (
        <div className="w-full flex flex-col items-center gap-5 relative">
            <TimelineEvent name="Full-Stack Web Developer" period="2022-CURRENT" place="Imaginary Cloud"/>
            <TimelineEvent name="Full-Stack Web Developer" period="2018-2021" place="ITSector"/>
            <TimelineEvent name="Degree in Software Engineering" period="2012-2017"/>
        </div>
    );
}