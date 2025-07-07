import { Timeline } from "../components/Timeline";
import { achievements, certifications } from "../constants";

const Achievements = () => {
  return (
    <section className="c-space section-spacing" id="achievements">
      <h2 className="text-heading text-4xl font-extrabold mb-2">Achievements</h2>
      <div className="w-full mb-4">
        <Timeline data={achievements} />
      </div>
      
      <h2 className="text-heading text-4xl font-extrabold mb-2">Certifications</h2>
    <div className="w-full">
        <Timeline data={certifications} isCertification={true} />
    </div>
    </section>
  );
};

export default Achievements;
