// components/Services.tsx
const Services = () => {
  return (
    <section className="services py-20">
      <div className="flexCenter flex-col gap-10 ">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="service bg-white p-6 shadow-md">
            <h3 className="text-xl font-bold mb-4">We provide a solution for you to be able to use our application when climbing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed nisi lacus sed viverra tellus in hac. Tellus pellentesque eu tincidunt tortor. Ac auctor augue mauris augue neque gravida in fermentum et.</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Learn More</button>
          </div>
          <div className="service bg-white p-6 shadow-md">
            <h3 className="text-xl font-bold mb-4">Lots of new locations every month</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed nisi lacus sed viverra tellus in hac. Tellus pellentesque eu tincidunt tortor. Ac auctor augue mauris augue neque gravida in fermentum et.</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Learn More</button>
          </div>
          <div className="service bg-white p-6 shadow-md">
            <h3 className="text-xl font-bold mb-4">Schedule an adventure with friends</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed nisi lacus sed viverra tellus in hac. Tellus pellentesque eu tincidunt tortor. Ac auctor augue mauris augue neque gravida in fermentum et.</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
