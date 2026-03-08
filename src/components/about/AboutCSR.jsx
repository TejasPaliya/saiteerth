import React from 'react';

const AboutCSR = () => {
  const features = [
    "Strong rural distribution network",
    "Creating jobs and opportunities",
    "Diversified business interests",
    "Stress-free and safe environment",
  ];

  return (
    <section className="font-['Anek_Latin'] max-w-6xl mx-auto p-6 md:p-12 bg-white">
      {/* Top Section: Image and Text */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
        {/* Left: Image with rounded corners and shadow */}
        <div className="w-full md:w-1/2">
          <div className="relative h-[400px] w-full rounded-[2rem] overflow-hidden shadow-2xl">
            <img
              src="/about.png" 
              alt="Malpani Group Transformation"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-[2.5rem] font-bold leading-tight mb-6 text-[#892201]">
            Transforming Communities
          </h2>
          <div className="text-gray-700 space-y-4 leading-relaxed">
            <p>
              <span className="font-bold">Malpani Group</span> is glad to have played an active role in 
              the transformation of Sangamner and in putting it on the industrial map of the world. 
              We are committed to drawing upon the wisdom of past generations while utilising the 
              innovation and enthusiasm of the present generation in scaling greater heights than ever before.
            </p>
            <p>
              Today, India is a global economic powerhouse. Urban and rural consumption is at an 
              all-time high and increasing. The Malpani Group is also an integral and important 
              part of this economic development.
            </p>
          </div>

          {/* Checklist */}
          <ul className="mt-8 space-y-3">
            {features.map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-700">
                <div className="bg-[#CD3F0D] rounded-full p-1 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section: Orange Banner */}
      <div className="bg-[#CD3F0D] rounded-[2.5rem] p-10 md:p-16 text-center text-white shadow-lg">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          A Healthy, Happy and Wealthy City!
        </h3>
        <p className="max-w-3xl mx-auto text-lg opacity-90 leading-relaxed">
          The Malpani Group is confident that Sangamner will soon become a beacon for 
          those who wish to create a lifestyle where modern education and entertainment 
          amenities co-exist in a stress-free and safe environment.
        </p>
      </div>
    </section>
  );
};

export default AboutCSR;