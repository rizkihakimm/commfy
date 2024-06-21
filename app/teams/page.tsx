"use client"
import { useEffect, useState } from 'react';

const Teams = () => {
    type Mentor = {
        name: {
          first: string;
          last: string;
        };
        picture: {
          large: string;
        };
        email: string;
        phone: string;
    }; 
    const [teamMembers, setTeamMembers] = useState<Mentor[]>([]);

    useEffect(() => {
    fetch('https://randomuser.me/api/?results=6')
      .then(response => response.json())
      .then(data => setTeamMembers(data.results));
  }, []);

  return (
      <section className="py-20">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold text-center mb-8">Our Team</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member bg-white p-6 shadow-md text-center">
                <img src={member.picture.large} alt={member.name.first} className="mx-auto rounded-full mb-4" />
                <h2 className="text-xl font-bold">{`${member.name.first} ${member.name.last}`}</h2>
                <p>{member.email}</p>
                <p>{member.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Teams;
