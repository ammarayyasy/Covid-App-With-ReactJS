import { useSelector } from "react-redux";
import Heading from "../ui/Heading";
import TableStyled from "./Table.styled";

function Table() {
  // destructing data props
  const provinces = useSelector((state) => state.provinces.provinces);
  return (
    <TableStyled>
        <Heading size="lg" center>Provinsi</Heading>
        <Heading color="info" mb="5" center>Data Covid Berdasarkan Provinsi</Heading>
        <table>
          <tr>
            <th>Provinsi</th>
            <th>Positif</th>
            <th>Sembuh</th>
            <th>Dirawat</th>
            <th>Meninggal</th>
          </tr>
          {provinces.map((provi) => {
            return (
              <tr>
                <td>{provi.kota}</td>
                <td>{provi.kasus}</td>
                <td>{provi.sembuh}</td>
                <td>{provi.dirawat}</td>
                <td>{provi.meninggal}</td>

                {/* <td>{provi.kota || provi.name}</td>
                <td>{provi.kasus || provi.numbers.confirmed}</td>
                <td>{provi.sembuh || provi.numbers.recovered}</td>
                <td>{provi.dirawat || provi.numbers.treatment}</td>
                <td>{provi.meninggal || provi.numbers.death}</td> */}
              </tr>
            );
          })}
        </table>
    </TableStyled>
  );
}

export default Table;
