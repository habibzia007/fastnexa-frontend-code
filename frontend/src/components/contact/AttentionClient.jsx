// import { useEffect, useState } from "react";
// import http from '../../http';
// import config from '../../config';
// import { attentionClientData } from "../../utils/fakedb/data.jsx";
//
// const AttentionToEveryClient = () => {
//     const [data, setData] = useState(null);
//     const { baseURL } = config;
//
//     useEffect(() => {
//         http.get('/contact-us-header-api')
//             .then((res) => {
//                 setData(res.data);
//             })
//             .catch((err) => {
//                 console.error('Error fetching data:', err); // Log any errors
//             });
//     }, []);
//
//     return (
//         <div className="max-w-[1184px] mx-auto py-10 lg:py-12 px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-8 lg:mb-12">
//                 <h2 className="font-Poppins font-bold text-2xl lg:text-4xl text-[#1F1F1F] mb-4">
//                     {data && data.contactus_headerapi && data.contactus_headerapi.length > 0 && data.contactus_headerapi[0].section_heading}
//                 </h2>
//                 <p className="font-Poppins md:text-sm text-xs lg:text-base text-[#747474] max-w-3xl mx-auto">
//                     {data && data.contactus_headerapi && data.contactus_headerapi.length > 0 && data.contactus_headerapi[0].section_desc}
//                 </p>
//             </div>
//             <div className="flex flex-col md:flex-row gap-8 justify-center">
//                 {data && data.contactpage_items && data.contactpage_items.map((card, index) => (
//                     <div
//                         key={card.id}
//                         className="flex flex-col justify-center items-center bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 py-6 px-4"
//                     >
//                         <img
//                             src={`${baseURL}${card.image}`}
//                             alt={card.contact_item_heading}
//                             className="lg:h-[4.188rem] object-cover"
//                         />
//                         <div className="p-6 text-center">
//                             <h3 className="font-Poppins font-bold md:text-xl text-lg text-[#1F1F1F] mb-2">
//                                 {card.contact_item_heading}
//                             </h3>
//                             <div className="font-Poppins md:text-sm text-xs text-[#747474]">
//                                 {index === data.contactpage_items.length - 1
//                                     ? attentionClientData[2].description
//                                     : card.contact_item_desc}
//                             </div>
//                             {index === data.contactpage_items.length - 1 && attentionClientData[2].socialIcons && (
//                                 <div className="flex justify-center space-x-4 mt-4">
//                                     {attentionClientData[2].socialIcons.map((icon, iconIndex) => (
//                                         <a
//                                             key={iconIndex}
//                                             href={icon.link}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                         >
//                                             <img
//                                                 src={icon.icon}
//                                                 alt="social icon"
//                                                 className="w-6 h-6 transition transform hover:scale-110 object-contain"
//                                             />
//                                         </a>
//                                     ))}
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };
//
// export default AttentionToEveryClient;


import { attentionClientData } from "../../utils/fakedb/data.jsx";

const AttentionToEveryClient = () => {
    return (
        <div className="max-w-[1184px] mx-auto py-10 lg:py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 lg:mb-12">
                <h2 className="font-Poppins font-bold text-2xl lg:text-4xl text-[#1F1F1F] mb-4">
                    Attention to Every Client
                </h2>
                <p className="font-Poppins md:text-sm text-xs lg:text-base text-[#747474] max-w-3xl mx-auto">
                    We value your feedback, inquiries, and business opportunities. Whether you’re looking to learn more about our services, explore partnership opportunities, or need support, our team is here to assist you.
                </p>
            </div>
            <div className="flex flex-col md:flex-row gap-8 justify-center">
                {attentionClientData.map((card, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-center items-center bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 py-6 px-4"
                    >
                        <img
                            src={card.image}
                            alt={card.title}
                            className="lg:h-[4.188rem] object-cover"
                        />
                        <div className="p-6 text-center">
                            <h3 className="font-Poppins font-bold md:text-xl text-lg text-[#1F1F1F] mb-2">
                                {card.title}
                            </h3>
                            <p className="font-Poppins md:text-sm text-xs text-[#747474]">
                                {card.description}
                            </p>
                            {card.socialIcons && (
                                <div className="flex justify-center space-x-4 mt-4">
                                    {card.socialIcons.map((icon, iconIndex) => (
                                        <a
                                            key={iconIndex}
                                            href={icon.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                src={icon.icon}
                                                alt="social icon"
                                                className="w-6 h-6 transition transform hover:scale-110"
                                            />
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AttentionToEveryClient;