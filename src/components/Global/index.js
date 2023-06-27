import Box from "../Box";
import Heading from "../ui/Heading";
import GlobalStyled from "./Global.styled";

function Global({datas, title}) {
  return (
    <GlobalStyled>
      <section>
        <Heading size="lg">{title}</Heading>
        <Heading color="info">Data Covid Berdasarkan {title}</Heading>
        <div className="global__container">
          {datas.map((data) => {
            return <Box data={data} />;
          })}
        </div>
      </section>
    </GlobalStyled>
  );
}

export default Global;
