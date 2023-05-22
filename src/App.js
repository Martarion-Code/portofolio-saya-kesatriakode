// import React from "react";

/**
 *
 * lowercase
 * snake_case
 * camelCase
 * UPPERCASE/CONSTANT
 * PascalCase
 */

import "./App.css";
const PORTFOLIO_DATA = {
  nama_lengkap: "Mahardika Bayu Setya Budi",
  pekerjaan: "Front-end Developer",
  photo_profile: "/assets/Artboard 1_2.png",
  tentang_saya_1: `Halo.. Nama saya Mahardika Bayu Setya Budi, asal saya dari Brebes, umur saya 19 tahun. Saya adalah web programmer yang berkutat di bidang Frontend dan sekarang sedang belajar framework atau library Javascript, seperti React.js.`,
  tentang_saya_2: `Saat ini, saya adalah seorang mahasiswa Institut Teknologi Telkom Purwokerto Fakultas Informatika, program studi Teknik Informatika.`,
  tentang_saya_3: `
    Saya memiliki ketertarikan terhadap buku, pemrograman, game, film, dan sekarang sedang mulai tertarik dengan olahraga seperti fitness. 
    `,
  portfolio: [
    {
      image: "/assets/download.jpg",
      judul: "Website Pembelian Diamond Mobile Legend",
      deskripsi: "Top Up Diamond Murah",
    },
    {
      image: "/assets/6098ee3a87108.jpg",
      judul: "Website Portal Alumni Kampus",
      deskripsi:
        "Website yang berisi informasi alumni kampus dan informasi kegiatan",
    },
  ],
};

const MyPortfolio = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <div
        className="hero-bg-cont"
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          className="gradient-effect1"
          style={{ position: "absolute" }}
        ></div>
        <div
          className="gradient-effect2"
          style={{ position: "absolute" }}
        ></div>
        <img
          src={PORTFOLIO_DATA.photo_profile}
          style={{ width: "6rem", height: "6rem", borderRadius: "50%" }}
          alt="photo_profile"
        />
        <h1 style={{ fontSize: "2.5rem", margin: "20px 0 0 0" }}>
          Hello, I'm {PORTFOLIO_DATA.nama_lengkap}
        </h1>
        <h3 style={{ fontSize: "1.5rem" }}>{PORTFOLIO_DATA.pekerjaan}</h3>

        {/* <div style={{
          paddingTop: "2rem",
          paddingLeft: "4rem",
          paddingRight: "4rem",
        }}>
          <h3>Tentang Saya</h3>
          <p style={{ textAlign: "justify" }}>{PORTFOLIO_DATA.tentang_saya}</p>
        </div> */}
      </div>
      <div
        className="tentang-saya_cont"
        style={{
          height: "100vh",
          paddingTop: "2rem",
          paddingLeft: "20%",
          paddingRight: "20%",
        }}
      >
        <div
          className="gradient-effect3"
          style={{ position: "absolute" }}
        ></div>
        <h1 style={{ fontSize: "2rem" }}>Tentang Saya</h1>
        <p style={{ textAlign: "justify" }}>{PORTFOLIO_DATA.tentang_saya_1}</p>
        <p style={{ textAlign: "justify" }}>{PORTFOLIO_DATA.tentang_saya_2}</p>
        <p style={{ textAlign: "justify" }}>{PORTFOLIO_DATA.tentang_saya_3}</p>
      </div>
      <div
        style={{
          minHeight: "100vh",
          paddingTop: "2rem",
          paddingLeft: "20%",
          paddingRight: "20%",
          paddingBottom: "4rem",
          overflow:"hidden"
        }}
      >
        <h1 style={{ paddingBottom: "50px", fontSize: "2rem" }}>
          Portfolio Saya
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "5rem",
            flexWrap: "wrap",
            justifyContent: "center",
            position: "relative ",
           
          }}
        >
          <div
            className="gradient-effect4"
            style={{ position: "absolute" }}
          ></div>
          {PORTFOLIO_DATA.portfolio.map((item, index) => (
            <div
              key={`portfolio-${index}`}
              className="box-portofolio"
              style={{
                border: "1px solid #666666",
                borderRadius: "12px",
                padding: "12px",
                width: "16rem",
                minHeight: "24rem",
                backgroundColor: "whitesmoke",
              }}
            >
              <img
                src={item.image}
                style={{
                  width: "100%",
                  height: "12rem",
                  objectFit: "contain",
                }}
                alt="photo_profile"
              />
              <h4>{item.judul}</h4>
              <p>{item.deskripsi}</p>
            </div>
          ))}
        </div>
        <div
        className="madeby"
          style={{ display: "flex", justifyContent: "center"}}
        >
          build with ♥ by &nbsp;
          <a href="https://www.instagram.com/mahardikabayu_desu/">
            mahardikabayu_desu
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
