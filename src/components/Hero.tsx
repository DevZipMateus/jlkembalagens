
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="h-screen relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[url('/lovable-uploads/184a8e1b-366d-469f-8080-3a9caf90469c.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container-custom relative z-10 h-full flex items-end pb-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Empty content as requested */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
