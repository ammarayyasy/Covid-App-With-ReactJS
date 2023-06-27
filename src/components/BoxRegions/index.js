import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import BoxRegionsStyled from "./BoxRegions.styled";

function BoxRegions({data}) {
    //function format angka
    const formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    };

    return(
        <BoxRegionsStyled>
                <Heading mb="2">{data.name}</Heading>
                <div className="box-group">
                    <div>
                        <Paragraph mb="0" left>Confirmed</Paragraph>
                        <Heading color="hijau" mt="0" left>{formatNumber(data.numbers.confirmed)}</Heading>
                    </div>
                    <img src={`${process.env.PUBLIC_URL}/img/mask.svg`} alt="" />
                </div>
                <div className="box-group">
                    <div>
                        <Paragraph mb="0" left>Recovered</Paragraph>
                        <Heading color="biru" mt="0" left>{formatNumber(data.numbers.recovered)}</Heading>
                    </div>
                    <img src={`${process.env.PUBLIC_URL}/img/smilling.svg`} alt="" />
                </div>
                <div className="box-group">
                    <div>
                        <Paragraph mb="0" left>Death</Paragraph>
                        <Heading color="merah" mt="0" left>{formatNumber(data.numbers.death)}</Heading>
                    </div>
                    <img src={`${process.env.PUBLIC_URL}/img/skull.svg`} alt="" />
                </div>
        </BoxRegionsStyled>
    )
}

export default BoxRegions;