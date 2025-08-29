import HeroRight from "./heroRight"
import HeroLeft from "./heroLeft"
export default function HeroSection(){
    return(
        <section className="HeroSection">
            <HeroLeft />
            <HeroRight />
        </section>
    )
}
