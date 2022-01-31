import TimelineEvent from "./TimelineEvent";

export default function Timeline() {
    return (
        <div className="w-full flex flex-col items-center gap-5 relative">
            <TimelineEvent name="FullStack Web Developer" period="2018-2021" place="ITSector"/>
            <TimelineEvent name="Degree in Software Engineering" period="2012-2017"/>
        </div>
    );
}