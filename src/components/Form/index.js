import { useState } from "react";
import Alert from "../Alert";
import { nanoid } from "nanoid";
import Image from "../ui/Image";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import FormStyled from "./Form.styled";
import { useDispatch, useSelector } from "react-redux";
import { setProvinces } from "../../features/ProvinsiSlice";

function Form(props) {
  // Destructing props: state movies
  // const { provinces, setProvinces } = props;
  const provinces = useSelector((state) => state.provinces.provinces);
  const dispatch = useDispatch();

  // Membuat state provinsi, status, & jumlah
  const [provinsi, setProvinsi] = useState("");
  const [status, setStatus] = useState("");
  const [jumlah, setJumlah] = useState("");

  // Membuat state: isProvinsiError, isStatusError, & isJumlahError
  const [isProvinsiError, setIsProvinsiError] = useState(false);
  const [isStatusError, setIsStatusError] = useState(false);
  const [isJumlahError, setIsJumlahError] = useState(false);


  function handleProvinsi(e) {
    setProvinsi(e.target.value);
  }

  function handleStatus(e) {
    setStatus(e.target.value);
  }

  function handleJumlah(e) {
    setJumlah(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (provinsi === "") {
      setIsProvinsiError(true);
    }
    else if (status === "") {
      setIsStatusError(true);
      setIsProvinsiError(false);
    }
    else if (jumlah === "") {
      setIsJumlahError(true);
      setIsStatusError(false);
    }
    else {
      let updatedCovidData = provinces.map((data) => ({ ...data }));
      const dataToUpdate = updatedCovidData.find((data) => data.kota === provinsi);
      if (dataToUpdate) {
        if (status === "kasus") {
          dataToUpdate.kasus += Number(jumlah);
        } else if (status === "sembuh") {
          dataToUpdate.sembuh += Number(jumlah);
        } else if (status === "dirawat") {
          dataToUpdate.dirawat += Number(jumlah);
        } else if (status === "meninggal") {
          dataToUpdate.meninggal += Number(jumlah);
        } else {
          if (status === "kasus") {
            updatedCovidData.push({
              province: {
                id: nanoid(),
                kota: provinsi,
                kasus: Number(jumlah),
                sembuh: 0,
                meninggal: 0,
                dirawat: 0,
              },
            });
          } else if (status === "sembuh") {
            updatedCovidData.push({
              province: {
                id: nanoid(),
                kota: provinsi,
                kasus: 0,
                sembuh: Number(jumlah),
                meninggal: 0,
                dirawat: 0,
              },
            });
          } else if (status === "dirawat") {
            updatedCovidData.push({
              province: {
                id: nanoid(),
                kota: provinsi,
                kasus: 0,
                sembuh: 0,
                meninggal: 0,
                dirawat: Number(jumlah),
              },
            });
          } else if (status === "meninggal") {
            updatedCovidData.push({
              province: {
                id: nanoid(),
                kota: provinsi,
                kasus: 0,
                sembuh: 0,
                meninggal: Number(jumlah),
                dirawat: 0,
              },
            });
          }
        }
      }
      // setProvinces(updatedCovidData);
      dispatch(setProvinces(updatedCovidData));

      setIsProvinsiError(false);
      setIsStatusError(false);
      setIsJumlahError(false);
    }
  }

  return (
    <FormStyled>
      <section>
        <div className="form__left">
          <Image src={`${process.env.PUBLIC_URL}/img/form.png`} alt="" />
        </div>

        <div className="form__right">
          <Heading size="md" mb="3" center>Form Covid</Heading>
          <form onSubmit={handleSubmit}>
            <div className="form__group">
              <label htmlFor="provinsi">
                Provinsi
              </label>
              <select className="form__input" id="provinsi" name="provinsi" onChange={handleProvinsi} value={provinsi}>
                <option value="">Pilih provinsi</option>
                {provinces.map((provi) => {
                  return <option value={provi.kota}>{provi.kota}</option>;
                })}
              </select>
              {isProvinsiError && <Alert>Provinsi Wajib Dipilih</Alert>}
            </div>

            <div className="form__group">
              <label htmlFor="status">
                Status
              </label>
              <select className="form__input" id="status" name="status" onChange={handleStatus} value={status}>
                <option value="">Pilih status</option>
                <option value="kasus">Positive</option>
                <option value="sembuh">Sembuh</option>
                <option value="dirawat">Dirawat</option>
                <option value="meninggal">Meninggal</option>
              </select>
              {isStatusError && <Alert>Status Wajib Dipilih</Alert>}
            </div>

            <div className="form__group">
              <label htmlFor="jumlah">
                Jumlah
              </label>
              <input id="jumlah" className="form__input" type="number" name="jumlah" onChange={handleJumlah} value={jumlah} />
              {isJumlahError && <Alert>Jumlah Wajib Diisi</Alert>}
            </div>

            <div>
              <Button size="lg" mt="2" full>Submit</Button>
            </div>
          </form>
        </div>
      </section>
    </FormStyled>
  );
}

export default Form;
