import BoxRegions from "../BoxRegions";
import Heading from "../ui/Heading";
import RegionsStyled from "./Regions.styled";

function Regions({datas}) {
    return(
        <RegionsStyled>
            <section>
                <Heading size="lg">Situations by Regions</Heading>
                <Heading color="info" mb="4">Bacaan Pilihan Covid</Heading>
                <div className="box-container">
                    {datas.map((data)=>{
                        return <BoxRegions data={data}/>
                    })}
                </div>
            </section>
        </RegionsStyled>
    )
}

export default Regions;