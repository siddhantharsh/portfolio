const services = [
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-400"><rect x="3" y="3" width="18" height="18" rx="4" strokeWidth="2"/><path d="M7 7h10v10H7z" strokeWidth="2"/></svg>
    ),
    title: 'Web Design',
    description: 'Clean, elegant, and user-friendly websites with strong visual appeal.'
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-green-400"><rect x="3" y="3" width="18" height="18" rx="4" strokeWidth="2"/><path d="M8 8h8v8H8z" strokeWidth="2"/></svg>
    ),
    title: 'Web Development',
    description: 'Clean, maintainable code using React, Next.js, and Tailwind for efficient development.'
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-yellow-400"><rect x="3" y="3" width="18" height="18" rx="4" strokeWidth="2"/><path d="M12 8v8M8 12h8" strokeWidth="2"/></svg>
    ),
    title: 'Chrome Extensions',
    description: 'Automate repetitive tasks and enhance your workflow with custom browser extensions.'
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-purple-400"><rect x="3" y="3" width="18" height="18" rx="4" strokeWidth="2"/><path d="M6 18L18 6M6 6l12 12" strokeWidth="2"/></svg>
    ),
    title: 'Hosting & Cloudflare',
    description: 'Deploy and secure your sites on major providers, with speed and reliability.'
  }
];

const Services = () => (
  <section className="c-space section-spacing" id="services">
    <h2 className="text-heading text-4xl font-extrabold mb-8">What I Do</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service, idx) => (
        <div key={idx} className="bg-neutral-900/90 border border-white/10 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="mb-4">{service.icon}</div>
          <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
          <p className="text-neutral-300">{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services; 