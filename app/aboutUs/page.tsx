// pages/about.tsx
import Head from 'next/head';

const About = () => {
  return (
    <div>
      <section className="py-20">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold text-center mb-8">About Us</h1>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Company History</h2>
            <p className="mb-8">Our company was founded in [Year] and has since achieved several milestones...</p>
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="mb-8">Meet our dedicated team of professionals...</p>
            <h2 className="text-3xl font-bold mb-4">Our Culture</h2>
            <p>We believe in fostering a positive and inclusive workplace...</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
