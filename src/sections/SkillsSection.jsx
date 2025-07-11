import CardSwap, { Card } from '../components/CardSwap';

const skills = [
  {
    icon: <span style={{fontSize: 18, marginRight: 8}}></span>,
    label: 'Full Stack Development',
    content: 'Building responsive, end-to-end web apps using React.js, Node.js, Express.js, and Flask. Experienced in structuring clean REST APIs and integrating frontend with SQL/NoSQL databases like MySQL, PostgreSQL, and Firebase.'
  },
  {
    icon: <span style={{fontSize: 18, marginRight: 8}}></span>,
    label: 'AI, App Dev & Tooling',
    content: 'Hands-on with ML tools (Keras, Pandas, NumPy, OpenCV), built AI visualizers and predictors. Developed mobile apps using Flutter + Isar DB. Skilled in Git, Postman, Streamlit, Netlify, and CI/CD deployments.'
  },
  {
    icon: <span style={{fontSize: 18, marginRight: 8}}></span>,
    label: 'UI Engineering & Design Systems',
    content: 'Crafting performant, accessible interfaces with HTML5, CSS3, Tailwind, Bootstrap, and jQuery. Experienced with Figma, Canva, and Spline for UI/UX design and 3D interactivity.'
  },
];

const SlimCard = ({ icon, label }) => (
  <div style={{
    width: '100%',
    height: 44,
    background: 'linear-gradient(90deg, #18111c 80%, #23212b 100%)',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    display: 'flex',
    alignItems: 'center',
    padding: '0 1.2rem',
    color: '#fff',
    fontWeight: 600,
    fontSize: '1.1rem',
    boxShadow: '0 2px 8px 0 rgba(0,0,0,0.18)',
    border: '1.5px solid #23212b',
    borderBottom: 'none',
    position: 'relative',
    zIndex: 2,
  }}>
    {icon}
    {label}
  </div>
);

const MainCard = ({ bgColor, title, content }) => (
  <div style={{
    width: '100%',
    height: 356,
    background: 'transparent',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: '0',
    color: '#fff',
    boxShadow: '0 8px 32px 0 rgba(0,0,0,0.13)',
    border: '1.5px solid #23212b',
    borderTop: 'none',
    position: 'relative',
    zIndex: 1,
  }}>
    <div style={{
      background: bgColor,
      borderRadius: 16,
      margin: '18px',
      width: 'calc(100% - 36px)',
      height: 'calc(100% - 36px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      padding: '2.2rem 2rem 2rem 2rem',
      color: '#fff',
      boxShadow: '0 4px 16px 0 rgba(0,0,0,0.10)'
    }}>
      <div style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.1rem', letterSpacing: '-0.01em', lineHeight: 1.2 }}>{title}</div>
      <div style={{ fontSize: '1.08rem', fontWeight: 400, color: 'rgba(255,255,255,0.96)', lineHeight: 1.6 }}>{content}</div>
    </div>
  </div>
);

const SkillsSection = () => (
  <section className="relative flex items-center justify-between c-space section-spacing meisken-skills-section" id="skills" style={{ minHeight: '70vh', background: '#000000' }}>
    <div className="flex-1 flex flex-col justify-center items-start z-10" style={{ maxWidth: 600 }}>
      <h2 style={{ fontSize: '2.7rem', fontWeight: 700, color: '#eae8db', marginBottom: '1.2rem', lineHeight: 1.1 }}>
        Crafted Skills. Clear Thinking.
      </h2>
      <p style={{ fontSize: '1.3rem', color: '#a6a1b5', marginBottom: '2rem', maxWidth: 500 }}>
        Every skill below is a layer in how I build, think, and collaborate.
      </p>
    </div>
    <div className="flex-1 flex justify-end items-center relative" style={{ minWidth: 400, minHeight: 400 }}>
      <div style={{ height: 400, width: 500, position: 'relative' }}>
        <CardSwap cardDistance={60} verticalDistance={70} delay={5000} pauseOnHover={false} width={500} height={400}>
          {skills.map((skill, idx) => (
            <Card key={idx}>
              <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <SlimCard icon={skill.icon} label={skill.label} />
                <MainCard bgColor={skill.bgColor} title={skill.label} content={skill.content} />
              </div>
            </Card>
          ))}
        </CardSwap>
      </div>
    </div>
  </section>
);

export default SkillsSection; 