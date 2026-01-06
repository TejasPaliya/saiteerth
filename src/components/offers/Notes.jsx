import React from 'react'

const Notes = () => {
  return (
    <div className='flex flex-col items-center'>
        <div className='bg-white rounded-[42px] border border-[#848484] p-8 max-w-6xl mx-auto mt-16 w-full'>
            <div className='flex items-center gap-3 '>
                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 0C7.82694 0 0 7.82763 0 17.5C0 27.1731 7.82763 35 17.5 35C27.1731 35 35 27.1724 35 17.5C35 7.82694 27.1724 0 17.5 0ZM17.5 32.2656C9.33837 32.2656 2.73438 25.6611 2.73438 17.5C2.73438 9.33837 9.33892 2.73438 17.5 2.73438C25.6616 2.73438 32.2656 9.33892 32.2656 17.5C32.2656 25.6616 25.6611 32.2656 17.5 32.2656Z" fill="#7F050A"/>
<path d="M17.5 8.81006C16.7449 8.81006 16.1328 9.42215 16.1328 10.1772V18.9815C16.1328 19.7366 16.7449 20.3486 17.5 20.3486C18.2551 20.3486 18.8672 19.7366 18.8672 18.9815V10.1772C18.8672 9.42215 18.2551 8.81006 17.5 8.81006Z" fill="#7F050A"/>
<path d="M17.5 25.7141C18.5194 25.7141 19.3457 24.8878 19.3457 23.8684C19.3457 22.8491 18.5194 22.0227 17.5 22.0227C16.4806 22.0227 15.6543 22.8491 15.6543 23.8684C15.6543 24.8878 16.4806 25.7141 17.5 25.7141Z" fill="#7F050A"/>
</svg>
<div className='font-anek font-semibold text-[55px] leading-[100%] tracking-[0%] text-[#7F050A]'>Important Notes</div>

            </div>
        <ul className="font-anek font-normal text-[35px] leading-[53px] tracking-[0%] mt-8 list-disc list-inside">
  <li>Add on Rs.149/- for Combo Thali Limited.</li>
  <li>Tickets are limited for Thursday Bonanza offer.</li>
  <li>18% Taxes applicable extra</li>
</ul>

        </div>
             <div className='bg-white rounded-[42px] border border-[#848484] p-8 max-w-6xl mx-auto mt-16 w-full'>
            <div className='flex items-center gap-3 '>
                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 0C7.82694 0 0 7.82763 0 17.5C0 27.1731 7.82763 35 17.5 35C27.1731 35 35 27.1724 35 17.5C35 7.82694 27.1724 0 17.5 0ZM17.5 32.2656C9.33837 32.2656 2.73438 25.6611 2.73438 17.5C2.73438 9.33837 9.33892 2.73438 17.5 2.73438C25.6616 2.73438 32.2656 9.33892 32.2656 17.5C32.2656 25.6616 25.6611 32.2656 17.5 32.2656Z" fill="#7F050A"/>
<path d="M17.5 8.81006C16.7449 8.81006 16.1328 9.42215 16.1328 10.1772V18.9815C16.1328 19.7366 16.7449 20.3486 17.5 20.3486C18.2551 20.3486 18.8672 19.7366 18.8672 18.9815V10.1772C18.8672 9.42215 18.2551 8.81006 17.5 8.81006Z" fill="#7F050A"/>
<path d="M17.5 25.7141C18.5194 25.7141 19.3457 24.8878 19.3457 23.8684C19.3457 22.8491 18.5194 22.0227 17.5 22.0227C16.4806 22.0227 15.6543 22.8491 15.6543 23.8684C15.6543 24.8878 16.4806 25.7141 17.5 25.7141Z" fill="#7F050A"/>
</svg>
<div className='font-anek font-semibold text-[55px] leading-[100%] tracking-[0%] text-[#7F050A]'>Terms & Conditions</div>

            </div>
        <ul className="font-anek font-normal text-[35px] leading-[53px] tracking-[0%] mt-8 list-disc list-inside">
  <li>Children below 3.3 feet tall can enter for free.</li>
  <li>An extra 18% tax will be added to your bill.</li>
  <li>Food, beverages and shopping are not included in the ticket price. You will need to pay extra for these.</li>
  <li>Once you buy a ticket, you cannot get your money back.</li>
  <li>Alcohol and drunk visitors are not allowed in the park.</li>
  <li>Show times may change based on the crowd. / शो के समय भीड़ के आधार पर बदले जा सकते हैं।</li>
  <li>You can bring your phone, but you cannot take pictures or videos of the attractions.</li>
  <li>It usually takes about 3 hours to see everything in the park.</li>
  <li>You can store your bags for Rs.50 at our dedicated baggage counter.</li>
  <li>Parking will be available at extra cost.</li>
  <li>Smoking is prohibited inside the park.</li>
</ul>

        </div>
          <span className="bg-yellow-400 text-[#80050A]  my-6 mx-auto font-extrabold py-3 px-10 rounded-full uppercase tracking-tight shadow-sm hover:bg-yellow-500 transition-colors duration-200">
                Book Your Tickets Now
              </span>
    </div>
  )
}

export default Notes