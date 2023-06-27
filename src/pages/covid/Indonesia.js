import { useEffect } from "react";
import { useState } from "react";
import ENDPOINTS from "../../utils/constants/endpoints";
import axios from "axios";
import Hero from "../../components/Hero";
import Global from "../../components/Global";
import TableStyled from "../../components/Table/Table.styled";
import Heading from "../../components/ui/Heading";

function Indonesia() {
    const [indonesia, setIndonesia] = useState([]);
    const [provinces, isiProvinces] = useState([]);
    
    //function format angka
    const formatNumber = (num) => {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    };

  useEffect(() => {
    setIndonesiaData();
  }, []);

  async function setIndonesiaData() {
    const response = await axios(ENDPOINTS.INDONESIA);
    setIndonesia(response.data.indonesia);
    isiProvinces(response.data.regions);
  }
    return(
        <>
            <Hero/>
            <Global datas={indonesia} title="Indonesia"/>
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
                      <td>{provi.name}</td>
                      <td>{formatNumber(provi.numbers.confirmed)}</td>
                      <td>{formatNumber(provi.numbers.recovered)}</td>
                      <td>{formatNumber(provi.numbers.treatment)}</td>
                      <td>{formatNumber(provi.numbers.death)}</td>
                    </tr>
                  );
                })}
              </table>
          </TableStyled>
        </>
    )
}

export default Indonesia;