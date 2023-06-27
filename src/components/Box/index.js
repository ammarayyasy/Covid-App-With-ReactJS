import Heading from "../ui/Heading";
import BoxStyled from "./Box.styled";

function Box({data}) {

  //kapital huruf pertama
  const kapital = data.status.charAt(0).toUpperCase() + data.status.slice(1);

  //function format angka
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  };

  return (
    <BoxStyled>
      <Heading size="sm">{kapital}</Heading>
      <Heading className="number" size="md">{formatNumber(data.total)}</Heading>
    </BoxStyled>
  );
}

export default Box;
