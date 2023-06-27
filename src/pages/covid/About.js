/* eslint-disable jsx-a11y/alt-text */
import styled from "styled-components";
import Heading from "../../components/ui/Heading";
import Paragraph from "../../components/ui/Paragraph";

function About() {
    const AboutStyled = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img{
            width: 30%;
            border-radius: 50%;
        }

        .img-container {
            display: flex;
            justify-content: space-between;
            margin-bottom: 3rem;
        }

        span{
            color: red;
        }

        p{
            font-size: 1.5rem;
        }

        @media (max-width: 768px){
            p{
                font-size: 1.2rem;
            }
        }

        @media (max-width: 425px){
            p{
                font-size: 1rem;
            }
        }
    `;
    return(
        <AboutStyled>
            <Heading size="lg" color="info" mb="0" center>MUHAMMAD AMMAR AYYASY</Heading>
            <Heading size="sm" mb="3" center>Teknik Informatika 2021</Heading>
            <div className="img-container">
                <img src={`${process.env.PUBLIC_URL}/img/ammar.jpeg`} />
                <img className="hidden" src={`${process.env.PUBLIC_URL}/img/ammar-cewe.jpeg`} />
                <img src={`${process.env.PUBLIC_URL}/img/ammar-asap.jpeg`} />
            </div>
            <Paragraph pd="5" mb="2" center><span></span>Pemuda yang lahir di kota Mojokerto, pada tanggal 31 Agustus 2003 ini adalah pemuda yang tidak bisa jujur pada dirinya sendiri. Kurang kuat dalam memiliki pendirian, tidak bisa membantah perintah orang tua. Saking tidak kuatnya dalam pendirian, cita-cita pemuda ini juga berubah-ubah. Dari kecil TK ingin menjadi ABRI karna sering bermain game perang, lalu SMP tidak punya karna sibuk kabur ke warnet saat di pondok, di SMA ingin menjadi orang perkapalan karna lihat tetangganya punya gaji besar. Dan sekali lagi karna tidak kuat dalam pendirian, pemuda ini harus merelakan kampus negeri jurusan perkapalan hasil SBMPTN-nya hanya karna orang tuanya memiliki teman yang lulusan perkapalan tapi masih nganggur. Ya iya masi setahun, sabar cuook cari loker susah. Dan dia di sarankan agar masuk ke teknik informatika saja sma org tuany (karna gratis). Untungnya anak ini masih punya minat di bidang tersebut.</Paragraph>

            <Paragraph pd="5" center><span></span>Tidak banyak hal yang menarik di diri pemuda ini. Kisah cintanya juga tidak pernah berhasil. Diselingkuhi, Dikekang, Ditikung honda brio, di roasting emak. Ya diroasting. Karna tidak ada yang menarik di pemuda ini, sang emak pun terheran-heran "apa gak ada org yg ganteng ya di SMA dia, kok mau sama kamu". Daamn. Karna mental yang diserang, dia memilih sadar diri. Tapi dia sekarang menyesal, kenapa mundur karna gitu doang. Dia suka org yang kurang menarik, pasti ada minimal satu hal menarik yang bisa bikin dia suka. <br /><span>GOBLOK!</span></Paragraph>
            
        </AboutStyled>
    )
}

export default About;