import './zaraFashion.css';
import Section1 from "./Section1/Section1";
import './Section1/section1.css';
import Section2 from "./section2/section2";
import './section2/section2.css';

import './Section3/section3.css';
import Section3 from "./Section3/Section3";
import './Section4/section4.css';
import './Section5/section5.css';
export default function ZaraFashion(){
    return(
        <div className="zara-fashion">
            <Section1 />
            <Section2 />
            <Section3 />
        </div>
    )
}
