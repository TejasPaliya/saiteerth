import React from 'react';

const ContactDetails = () => {
  return (
    <section className="bg-[#FFF8E7] py-16 px-4 md:px-8 font-['Anek_Latin']">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#80050A] mb-4">
            Perfect for Every Group
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Whether it's a corporate event, family reunion, or school trip, we've got you covered
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Column: Staggered Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Top Left Image */}
            <div className="rounded-3xl overflow-hidden shadow-lg aspect-[4/5]">
              <img 
                src="/g1.png" 
                alt="Corporate group" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top Right Image (Higher Offset) */}
            <div className="rounded-3xl overflow-hidden shadow-lg aspect-[4/5] mt-12">
              <img 
                src="/g2.png" 
                alt="Group activity" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Left: Yellow Rating Card */}
            <div className="bg-[#FBBC05] rounded-3xl p-6 flex flex-col justify-center items-center text-center shadow-md">
              <div className="bg-white rounded-full p-2 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M11.5248 2.295C11.5687 2.20646 11.6364 2.13193 11.7203 2.07983C11.8042 2.02772 11.9011 2.00011 11.9998 2.00011C12.0986 2.00011 12.1955 2.02772 12.2794 2.07983C12.3633 2.13193 12.431 2.20646 12.4748 2.295L14.7848 6.974C14.937 7.28197 15.1617 7.54841 15.4395 7.75045C15.7173 7.9525 16.04 8.08411 16.3798 8.134L21.5458 8.89C21.6437 8.90418 21.7357 8.94547 21.8113 9.0092C21.887 9.07293 21.9433 9.15655 21.9739 9.25061C22.0045 9.34467 22.0081 9.44541 21.9844 9.54144C21.9607 9.63747 21.9107 9.72495 21.8398 9.794L18.1038 13.432C17.8575 13.6721 17.6731 13.9685 17.5667 14.2956C17.4602 14.6228 17.4349 14.9709 17.4928 15.31L18.3748 20.45C18.3921 20.5478 18.3816 20.6486 18.3443 20.7407C18.3071 20.8328 18.2448 20.9126 18.1644 20.971C18.084 21.0294 17.9888 21.064 17.8897 21.0709C17.7906 21.0778 17.6915 21.0567 17.6038 21.01L12.9858 18.582C12.6816 18.4222 12.343 18.3388 11.9993 18.3388C11.6557 18.3388 11.3171 18.4222 11.0128 18.582L6.39585 21.01C6.30818 21.0564 6.20924 21.0773 6.1103 21.0703C6.01135 21.0632 5.91636 21.0286 5.83614 20.9702C5.75592 20.9119 5.69368 20.8322 5.6565 20.7402C5.61933 20.6483 5.6087 20.5477 5.62585 20.45L6.50685 15.311C6.56504 14.9717 6.53983 14.6234 6.43338 14.296C6.32694 13.9687 6.14245 13.6722 5.89585 13.432L2.15985 9.795C2.08844 9.72603 2.03784 9.6384 2.01381 9.54207C1.98978 9.44575 1.99328 9.34462 2.02393 9.25019C2.05457 9.15576 2.11111 9.07184 2.18712 9.00798C2.26313 8.94413 2.35555 8.9029 2.45385 8.889L7.61885 8.134C7.9591 8.0845 8.28224 7.95306 8.56043 7.75099C8.83863 7.54892 9.06355 7.28227 9.21585 6.974L11.5248 2.295Z" stroke="#CD3F0D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">4.9/5</h3>
              <p className="text-sm text-gray-800">Average rating from 500+ groups</p>
            </div>

            {/* Bottom Right: Red/Orange Gradient Card */}
            <div 
              className="rounded-3xl p-6 flex flex-col justify-center items-center text-center shadow-md text-white mt-4"
              style={{ background: 'linear-gradient(180deg, #CD3F0D 0%, #80050A 100%)' }}
            >
              <div className="bg-white rounded-full p-2 mb-6">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21" stroke="#CD3F0D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#CD3F0D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M22 21V19C21.9993 18.1137 21.7044 17.2528 21.1614 16.5523C20.6184 15.8519 19.8581 15.3516 19 15.13" stroke="#CD3F0D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#CD3F0D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              </div>
              <h3 className="text-2xl font-bold">20+</h3>
              <p className="text-sm opacity-90">Minimum group size for special rates</p>
            </div>
          </div>

          {/* Right Column: Category List */}
          <div className="flex flex-col gap-6 self-center">
            
            {/* Corporate Events */}
            <div className="bg-white p-6 rounded-[2rem] shadow-sm flex items-center gap-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-[linear-gradient(180deg,_#CD3F0D_0%,_#80050A_100%)] p-4 rounded-2xl flex-shrink-0">
                 <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M21.3332 28V25.3333C21.3332 23.9188 20.7713 22.5623 19.7711 21.5621C18.7709 20.5619 17.4143 20 15.9998 20H7.99984C6.58535 20 5.2288 20.5619 4.2286 21.5621C3.22841 22.5623 2.6665 23.9188 2.6665 25.3333V28" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.9998 14.6667C14.9454 14.6667 17.3332 12.2789 17.3332 9.33333C17.3332 6.38781 14.9454 4 11.9998 4C9.05432 4 6.6665 6.38781 6.6665 9.33333C6.6665 12.2789 9.05432 14.6667 11.9998 14.6667Z" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M29.3335 28V25.3333C29.3326 24.1516 28.9393 23.0037 28.2153 22.0698C27.4913 21.1358 26.4777 20.4688 25.3335 20.1733" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M21.3335 4.17334C22.4807 4.46707 23.4975 5.13427 24.2237 6.06975C24.9498 7.00523 25.344 8.15578 25.344 9.34001C25.344 10.5242 24.9498 11.6748 24.2237 12.6103C23.4975 13.5457 22.4807 14.2129 21.3335 14.5067" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#CD3F0D]">Corporate Events</h4>
                <p className="text-gray-500 text-sm">Perfect for team building, company outings, and employee celebrations</p>
              </div>
            </div>

            {/* School & College Trips */}
            <div className="bg-white p-6 rounded-[2rem] shadow-sm flex items-center gap-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-[linear-gradient(180deg,_#CD3F0D_0%,_#80050A_100%)] p-4 rounded-2xl flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M10.6665 2.66667V8" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M21.3335 2.66667V8" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M25.3333 5.33333H6.66667C5.19391 5.33333 4 6.52724 4 8V26.6667C4 28.1394 5.19391 29.3333 6.66667 29.3333H25.3333C26.8061 29.3333 28 28.1394 28 26.6667V8C28 6.52724 26.8061 5.33333 25.3333 5.33333Z" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4 13.3333H28" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#CD3F0D]">School & College Trips</h4>
                <p className="text-gray-500 text-sm">Educational and fun experiences for students of all ages</p>
              </div>
            </div>

            {/* Family Gatherings */}
            <div className="bg-white p-6 rounded-[2rem] shadow-sm flex items-center gap-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-[linear-gradient(180deg,_#CD3F0D_0%,_#80050A_100%)] p-4 rounded-2xl flex-shrink-0">
                 <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M15.3665 3.06C15.4249 2.94195 15.5152 2.84258 15.6271 2.7731C15.739 2.70362 15.8681 2.66681 15.9998 2.66681C16.1315 2.66681 16.2606 2.70362 16.3725 2.7731C16.4844 2.84258 16.5747 2.94195 16.6331 3.06L19.7131 9.29867C19.916 9.70929 20.2155 10.0645 20.586 10.3339C20.9564 10.6033 21.3866 10.7788 21.8398 10.8453L28.7278 11.8533C28.8583 11.8722 28.9809 11.9273 29.0818 12.0123C29.1826 12.0972 29.2577 12.2087 29.2985 12.3341C29.3393 12.4596 29.3442 12.5939 29.3126 12.7219C29.281 12.85 29.2142 12.9666 29.1198 13.0587L24.1385 17.9093C23.81 18.2295 23.5642 18.6246 23.4222 19.0608C23.2803 19.497 23.2465 19.9612 23.3238 20.4133L24.4998 27.2667C24.5228 27.3971 24.5087 27.5314 24.4591 27.6542C24.4095 27.7771 24.3264 27.8835 24.2192 27.9613C24.112 28.0392 23.9851 28.0853 23.853 28.0945C23.7208 28.1037 23.5887 28.0756 23.4718 28.0133L17.3145 24.776C16.9088 24.563 16.4574 24.4517 15.9991 24.4517C15.5409 24.4517 15.0895 24.563 14.6838 24.776L8.5278 28.0133C8.4109 28.0752 8.27899 28.1031 8.14706 28.0937C8.01514 28.0843 7.88849 28.0381 7.78152 27.9603C7.67456 27.8825 7.59157 27.7763 7.542 27.6536C7.49243 27.531 7.47827 27.3969 7.50113 27.2667L8.6758 20.4147C8.75339 19.9623 8.71977 19.4979 8.57785 19.0614C8.43592 18.6249 8.18994 18.2295 7.86113 17.9093L2.8798 13.06C2.78459 12.968 2.71712 12.8512 2.68508 12.7228C2.65304 12.5943 2.65771 12.4595 2.69857 12.3336C2.73942 12.2077 2.81482 12.0958 2.91616 12.0106C3.01751 11.9255 3.14073 11.8705 3.2718 11.852L10.1585 10.8453C10.6121 10.7793 11.043 10.6041 11.4139 10.3347C11.7848 10.0652 12.0847 9.7097 12.2878 9.29867L15.3665 3.06Z" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#CD3F0D]">Family Gatherings</h4>
                <p className="text-gray-500 text-sm">Reunions, birthdays, and special family celebrations made memorable</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;