// components/Services.tsx
const Services = () => {
  return (
    <section className="services py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="service bg-white p-6 shadow-md">
            <h3 className="text-xl font-bold mb-4">Service 1</h3>
            <p>Brief description of Service 1.</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Learn More</button>
          </div>
          <div className="service bg-white p-6 shadow-md">
            <h3 className="text-xl font-bold mb-4">Service 2</h3>
            <p>Brief description of Service 2.</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Learn More</button>
          </div>
          <div className="service bg-white p-6 shadow-md">
            <h3 className="text-xl font-bold mb-4">Service 3</h3>
            <p>Brief description of Service 3.</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
