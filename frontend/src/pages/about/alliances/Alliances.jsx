import { useState, useEffect } from 'react';
import Navbar from "../../../components/Navbar.jsx";
import Footer from "../../../components/Footer.jsx";
import http from '../../../http.js';

function Alliances() {
    const [alliancesContent, setAlliancesContent] = useState('');

    useEffect(() => {
        fetchAlliances();
    }, []);

    const fetchAlliances = () => {
        http.get('/alliances-api')
            .then((res) => {
                if (res.data && res.data.alliances_sections && res.data.alliances_sections.length > 0) {
                    const content = res.data.alliances_sections[0].alliances_content;
                    setAlliancesContent(content);
                } else {
                    setAlliancesContent('<p>No alliances available at the moment.</p>');
                }
            })
            .catch((err) => {
                console.error('Error fetching alliances data:', err);
                setAlliancesContent('<p>Error loading alliances. Please try again later.</p>');
            });
    };

    return (
        <>
            <Navbar />
            <div className="flex w-full mt-[5rem] max-w-[1130px] mx-auto px-3">
                <div className="flex-1 flex flex-col">
                    <div dangerouslySetInnerHTML={{__html: alliancesContent}}/>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Alliances;

