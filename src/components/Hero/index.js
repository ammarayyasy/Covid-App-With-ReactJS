import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Image from "../ui/Image";
import Paragraph from "../ui/Paragraph";
import HeroStyled from "./Hero.styled";

function Hero() {
  return (
    <HeroStyled>
      <section>
        <div className="hero__left">
          <Heading size="lg">Covid ID</Heading>
          <Heading color="info">Monitoring Perkembangan Covid</Heading>
          <Paragraph>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam cum accusamus quisquam earum velit ea nobis maiores exercitationem nam temporibus.</Paragraph>
          <Button size="lg">Vaccine</Button>
        </div>
        <div className="hero__right">
          <Image  src={`${process.env.PUBLIC_URL}/img/hero.png`} alt="" />
        </div>
      </section>
    </HeroStyled>
  );
}

export default Hero;
