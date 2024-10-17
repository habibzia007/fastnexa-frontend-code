import {useEffect, useState} from "react";
import http from "../../http.js";


const Intro = () => {
    const [tachCards, setTachCards] = useState(null);

    useEffect(() => {
        http.get('/tech-page-header-api')
            .then((res) => {
                setTachCards(res.data.data[0]); // Assuming the first object contains the relevant data
            })
            .catch((err) => {
                console.error('Error fetching data:', err); // Log any errors
            });
    }, []);
    console.log(tachCards)
    if (!tachCards) return <p> </p>;
    return (
        <div className="container mx-auto p-4 max-w-[874px] border-orange-500">
            <div className="w-full h-auto pt-[37px]">
                <h3 className="font-Poppins font-bold text-[24px] sm:text-[36px] leading-[34px] sm:leading-[54.08px] text-[#1F1F1F] text-center">
                    {tachCards.section_heading} {/* Dynamic Heading */}
                </h3>
                <div
                    className="font-Poppins text-xs sm:text-[16px] leading-[22px] sm:leading-[30px] text-[#747474] font-normal text-center mt-[20px] sm:mt-[30px]"
                    dangerouslySetInnerHTML={{ __html: tachCards.section_desc }} // Dynamic Description
                />
                <div className="flex justify-center">
                    <a
                        href={tachCards.btn_url} // Dynamic button URL
                        className="font-Poppins text-[14px] sm:text-[16px] w-auto px-4 py-4 mt-[20px] sm:mt-[30px] ring-2 text-orange-500 rounded-md ring-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-500"
                    >
                        {tachCards.btn_text} {/* Dynamic Button Text */}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Intro;