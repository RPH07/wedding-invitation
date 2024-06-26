/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FaSignInAlt } from 'react-icons/fa';
import styled from 'styled-components';


import img1 from '../../assets/1e.jpg';
import img2 from '../../assets/2e.png';
import img3 from '../../assets/3e.jpg';
import img4 from '../../assets/4e.jpg';
import img5 from '../../assets/5e.jpg';
import img6 from '../../assets/6e.jpg';
import img7 from '../../assets/7e.jpg';
import img8 from '../../assets/8e.png';
import img9 from '../../assets/9e.jpeg';
import img10 from '../../assets/10e.jpeg';
import img11 from '../../assets/11e.jpeg';
import img12 from '../../assets/12e.jpeg';
import img1p from '../../assets/1p.png';
import img2p from '../../assets/2p.png';
import img3p from '../../assets/3p.png';
import img4p from '../../assets/4p.png';
import img5p from '../../assets/5p.jpg';
import img6p from '../../assets/6p.png';
import img1b from '../../assets/1b.jpeg';
import img2b from '../../assets/2b.jpeg';
import img3b from '../../assets/3b.jpeg';
import img4b from '../../assets/4b.jpeg';
import img5b from '../../assets/5b.jpeg';


const imagesEksklusif = [
  { src: img1, alt: "Traditional Bugis Pinishi" },
  { src: img2, alt: "Majestic Citadel" },
  { src: img3, alt: "Secret Garden New" },
  { src: img4, alt: "Traditional Java" },
  { src: img5, alt: "Traditional Minang" },
  { src: img6, alt: "Traditional Bali" },
  { src: img7, alt: "Blue Ice Lily" },
  { src: img8, alt: "White Roses" },
  { src: img9, alt: "Traditional Batak" },
  { src: img10, alt: "Vintage Minimalist" },
  { src: img11, alt: "Calm Blue" },
  { src: img12, alt: "Lotus In Red" },
];

const imagesPremium = [
  { src: img1p, alt: "After Sunset" },
  { src: img2p, alt: "Flowring White" },
  { src: img3p, alt: "Chinese Red" },
  { src: img4p, alt: "Old Ways Red" },
  { src: img5p, alt: "Minimaly Autumn" },
  { src: img6p, alt: "Purple Black Vintage" },
];

const imagesBasic = [
  { src: img1b, alt: "Nice Flower" },
  { src: img2b, alt: "Autmn Brown" },
  { src: img3b, alt: "Pink Rose Gold" },
  { src: img4b, alt: "Floral Dark Blue" },
  { src: img5b, alt: "Red Lotus" },
];



const DesignPage = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const Circle1 = styled.div`
    background: ${({ theme }) => theme.designGradient};
    position: absolute;
    transition: background-color 0.5s ease;

  `;

const Circle2 = styled.div`
  background: ${({ theme }) => theme.designGradient2};
  position: absolute;
  transition: background-color 0.5s ease;

`;

const HomeDesignSection = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  position: relative;
  transition: background-color 0.5s ease;

h2 {
  color: ${({ theme }) => theme.color};
}

h1{
  color: ${({ theme }) => theme.color};
}

p{
  color: ${({ theme }) => theme.color};
}

h3{
  color: ${({ theme }) => theme.color};
}
`;

const SectionDesign = styled.div`
  background: ${({ theme }) => theme.sectionDesign};
  transition: background-color 0.5s ease;
    .custom-text {
      color: ${({ theme }) => theme.textColor};
      transition: background-color 0.5s ease;
    }
`;

  return (
    <div className="relative w-full max-w-full m-0 bg-white">
      {/* Hero Section */}
      <HomeDesignSection className="relative w-full h-[610px] flex justify-center items-center overflow-hidden">
        {/* Ellipse 1 */}
        <Circle1 className=" w-[984px] h-[923px] left-[-280px] top-[-358px] rounded-full"></Circle1>

        {/* Ellipse 2 */}
        <Circle2 className=" w-[570px] h-[533px] left-[-118px] top-[-179px] rounded-full"></Circle2>

        {/* Text Content 1 */}
        <div className="absolute top-24 sm:top-28 w-full flex flex-col items-center text-center px-4">
          <h2 className="text-3xl sm:text-5xl font-semibold font-montserrat text-black mb-4 sm:mb-6">
            Wedding Invitation Presets
          </h2>
          <p className="text-base sm:text-lg text-black mb-4 sm:mb-6">
            With these presets, <br />
            you can choose a theme
            <span className="text-[#C66B6B]"> that suits your preference</span>
          </p>
        </div>

        {/* Text Content 2 */}
        <div className="absolute top-[250px] sm:top-[300px] w-full flex flex-col items-center text-center px-4">
          <h3 className="text-2xl sm:text-3xl font-bold font-montserrat text-black mb-4">
            See What’s Popular
          </h3>
          <p className="text-base sm:text-lg text-black mb-4 sm:mb-6">
            MAKE YOUR WEDDING INVITATIONS <br />
            <span className="text-[#C66B6B]">UNFORGETTABLE FOR YOUR MEMORIES</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            <button className="w-[120px] sm:w-[150px] h-[40px] bg-[#C66B6B] rounded-[20px] text-white text-lg sm:text-xl font-normal" onClick={() => handleNavigate("/semua")}>
              Semua
            </button>
            <button className="w-[120px] sm:w-[150px] h-[40px] bg-[#C66B6B] rounded-[20px] text-white text-lg sm:text-xl font-normal" onClick={() => handleNavigate("/basic")}>
              Basic
            </button>
            <button className="w-[120px] sm:w-[150px] h-[40px] bg-[#C66B6B] rounded-[20px] text-white text-lg sm:text-xl font-normal" onClick={() => handleNavigate("/premium")}>
              Premium
            </button>
            <button className="w-[120px] sm:w-[150px] h-[40px] bg-[#C66B6B] rounded-[20px] text-white text-lg sm:text-xl font-normal" onClick={() => handleNavigate("/eksklusif")}>
              VIP
            </button>
          </div>
        </div>
      </HomeDesignSection>

      {/* Section Design Eksklusif */}
      <section>
        <SectionDesign className="relative w-full py-12 flex justify-center items-center overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12 px-4">
            {imagesEksklusif.map((image, index) => (
              <div key={index} className="border border-yellow-600 rounded-md flex flex-col justify-between items-center p-4 relative group">
                <div className="w-full flex justify-center">
                  <img src={image.src} alt={image.alt} className="w-full sm:w-4/5 transition-opacity duration-300 group-hover:opacity-50" />
                </div>
                <div className=" text-lg font-medium text-center flex flex-col gap-4 mt-4 custom-text">
                  <div>{image.alt}</div>
                </div>
                <div className="absolute inset-0 flex justify-center items-center bg-pink-100 bg-opacity-70 text-black text-xl font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-80 cursor-pointer"
                  onClick={() => handleNavigate(`/vip-invitation`)}>
                  VIP
                </div>
              </div>
            ))}
          </div>
        </SectionDesign>
      </section>

      {/* Section Design Premium */}
      <section>
        <SectionDesign className="relative w-full py-12 flex justify-center items-center overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12 px-4">
            {imagesPremium.map((image, index) => (
              <div key={index} className="border border-purple-600 rounded-md flex flex-col justify-between items-center p-4 relative group">
                <div className="w-full flex justify-center">
                  <img src={image.src} alt={image.alt} className="w-full sm:w-4/5 transition-opacity duration-300 group-hover:opacity-50" />
                </div>
                <div className=" text-lg font-medium text-center flex flex-col gap-4 mt-4 custom-text">
                  <div>{image.alt}</div>
                </div>
                <div className="absolute inset-0 flex justify-center items-center bg-pink-100 bg-opacity-70 text-black text-xl font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-80 cursor-pointer"
                  onClick={() => handleNavigate(`/envelope`)}>
                  Premium
                </div>
              </div>
            ))}
          </div>
        </SectionDesign>
      </section>

      {/* Section Design Basic */}
      <section>
        <SectionDesign className="relative w-full py-12  flex justify-center items-center overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12 px-4">
            {imagesBasic.map((image, index) => (
              <div key={index} className="border border-grey-600 rounded-md flex flex-col justify-between items-center p-4 relative group">
                <div className="w-full flex justify-center">
                  <img src={image.src} alt={image.alt} className="w-full sm:w-4/5 transition-opacity duration-300 group-hover:opacity-50" />
                </div>
                <div className=" text-lg font-medium text-center flex flex-col gap-4 mt-4 custom-text">
                  <div>{image.alt}</div>
                </div>
                <div className="absolute inset-0 flex justify-center items-center bg-pink-100 bg-opacity-70 text-black text-xl font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-80 cursor-pointer"
                  onClick={() => handleNavigate(`/basic3-invitation`)}>
                  Basic
                </div>
              </div>
            ))}
          </div>
        </SectionDesign>
      </section>
    </div>
  );
};

export default DesignPage;
