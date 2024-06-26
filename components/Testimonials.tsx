"use client"
import { useEffect, useState } from 'react';

const Testimonials = () => {
  type Testimonial = {
    message: string;
    author: string;
  };

  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  useEffect(() => {
    fetch('/api/testimonials')
      .then(response => response.json())
      .then(data => setTestimonials(data));
  }, []);
  return (
    <section className="testimonials py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial bg-white p-6 shadow-md">
              <p className="mb-4">"{testimonial.message}"</p>
              <p className="font-bold">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  ); 
};

export default Testimonials;