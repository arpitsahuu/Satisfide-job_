import Image from "next/image";
import { RiArrowRightSLine, RiMapPinLine } from "react-icons/ri";

import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Container from "@/components/Container";
import { IoIosSearch, IoIosStar } from "react-icons/io";
import { IoLocationOutline, IoStar } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
const inter = Inter({ subsets: ["latin"] });
import { MdReviews } from "react-icons/md";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  var array = [1, 2, 3, 4, 5, 6];
  return (
    <div className="w-[100vw]">
      <Layout>
        <Container bgColor={""}>
          <div className="min-h-[100vh] mt-[100px]">
            
            <div className="page-1 ">
              <div className="part-1">
                <h1>
                  The <span id="span-1" >Easiest Way</span>{" "}
                  <span>to Get Your New Job</span>
                </h1>
                <p className="text-[2vh] ">
                  Each month, more than 3 million job seekers turn to website in
                  their search for work, making over 140,000 applications every
                  single day
                </p>
                <div className="search-feature">
                  <h3>
                  
                    <span>
                      <i className="ri-arrow-down-s-line" />
                    </span>
                  </h3>
                  <h3>
                    <span>
                      {" "}
                      <i className="ri-map-pin-line " />
                      <input
    type="text"
    placeholder="Enter your location"
    className=" w-64 py-2 border-0 px-4  border-gray-300 rounded-l focus:outline-none focus:border-blue-500"
  />

                    </span>
                    <span>
                      <i className="ri-arrow-down-s-line" />
                      
                    </span>
                  </h3>
                  <h3>
                    <span>
                      <i className="ri-bubble-chart-line" /> &nbsp;
                    </span>
                    <span>
                      <i className="ri-arrow-down-s-line" />
                      <input
    type="text"
    placeholder="Keyword"
    className="search-input w-64 py-2 px-4 border-0	 border-gray-300 rounded-l focus:outline-none focus:border-blue-500"
  />

                    </span>
                  </h3>
                  <button className="px-4 py-2  rounded-md text-green-500 text-lg flex items-center justify-center text-[#4f91ce]">
      <FontAwesomeIcon icon={faSearch} className="mr-2" />
    </button>


                </div>
             

              </div>
              <div className="part-2">
                <img
                  src="https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2023/03/hero-image.png"
                  alt=""
                />
              </div>
            </div>

          </div>
        </Container>
        {/* <Container bgColor={"#190B28"}>
          <div className="min-h-[95vh] md:min-h-[90vh] flex justify-center items-center md:justify-between">
            <div className=" pt-[70px] px-[150px]  flex-col gap-[80px] hidden md:flex">
              <p className="text-white text-4xl text-[#FFD166]">
                Get job in just 3 steps...
              </p>

              <div className="flex flex-col gap-[20px]">
                <p className="text-white text-4xl font-semibold tracking-[2px]">
                  Build Apna Profile & get discovered <br /> by HRs
                </p>
                <p className="text-white text-4xl font-semibold tracking-[2px] opacity-[0.8]">
                  Build Apna Profile & get discovered <br /> by HRs
                </p>
                <p className="text-white text-4xl font-semibold tracking-[2px] opacity-[0.5]">
                  Build Apna Profile & get discovered <br /> by HRs
                </p>
              </div>
            </div>
            <div className="mobile pt-[70px] px-[20px]">
              <img src="./a1.webp" alt="" className="w-[300px]" />
            </div>
          </div>
        </Container> */}
        
        <div className="min-h-[90vh] md:py-[80px]">
          <Container bgColor={"#F4F2F6"}>
            <p className="text-3xl font-[900] text-center py-[20px] md:py-[40px] job-cards">
              Job Openings in <span className="text-[#1e9bd9]">Top</span> companies
            </p>
          </Container>
          <div className=" w-[100vw] min-h-[50vh] flex items-center  overflow-x-auto ">
            {array.map((e, i) => (
              <>
                <div key={i} className="w-[350px] md:w-[400px] flex-shrink-0 h-[300px] py-[25px] md:py-[30px] px-[10px] md:px-[40px]  ml-[40px] bg-white rounded-lg flex justify-between flex-col">
                  <img src="./c1.webp" className="w-[80px]" alt="" />

                  <div className="flex flex-col gap-3">
                    <p className="subheading">Baja Finaxe limahpeoje</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolor{" "}
                    </p>
                  </div>
                  <div>
                    <button className="font-[500] text-[18px] text-green flex items-center text-sky-500 ">
                      <span>View jobs</span>
                      <RiArrowRightSLine />
                    </button>
                  </div>
                </div>
              </>
            ))}
          </div>

          <div className="w-full text-center">
            <button className="btn flex items-center justify-center">
              <span className="flex items-center gap-1 px-2 ">
                <p>View all</p>
                <RiArrowRightSLine className="text-lg" />
              </span>
            </button>
          </div>
        </div>

        <div className="min-h-[90vh] md:h-[80vh] flex items-center">
          <div className="flex flex-col md:flex-row">
            <div className="w-[100vw] md:w-[30vw] px-[10px] md:px-0 text-white h-[350px] md:h-[450px]  bg-green md:flex items-center justify-center flex-col relative">
              <div className=" text-white  font-semibold">
                <div className="icon w-[70px] my-[25px] bg-transparent rounded-ful flex items-center justify-center h-[70px]">
                  <MdReviews className="text-3xl" />
                </div>
                <h1 className="text-[30px]">
                  Join the community <br /> of 5 crore satisfied <br /> job
                  seekers...
                </h1>
                <div className="rating flex gap-1 my-[20px] items-center  ">
                  <p>Play Store Ratings</p>
                  <span className="flex gap-2 text-[#FFB400]">
                    <IoStar /> <IoStar /> <IoStar />
                    <IoStar />
                  </span>
                </div>
              </div>
            </div>
            <div className="w-[100vw] pl-[350px] md:pl-0 px-[20px] md:w-[70vw] h-[450px] md:px-[20px] flex items-center justify-center gap-3 overflow-x-auto">
              {array.map((e,i) => {
                return (
                  <>
                    <div key={i} className="h-[280px] flex-shrink-0 w-[90vw] md:w-[500px] bg-white rounded-lg px-[22px]">
                      <div className="gap-2 text-black  font-[500]">
                        <div className="flex items-center  gap-3">
                          <img
                            src="./profile.jpg"
                            className="w-[90px] -mt-[20px] h-[90px] rounded-md"
                            alt=""
                          />

                          <div>
                            <div className="flex gap-3 py-[11px] h-fit">
                              <p className="text-md font-semibold">
                                Aniket Patidar
                              </p>
                              <div className="text-green font-[500] flex  items-center">
                                <TiTick />
                                <p className=" ">Placed</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <p>4.5</p>
                              <span className="flex text-[#FFB400]">
                                <IoIosStar className="" />
                                <IoIosStar className="" />
                                <IoIosStar className="" />
                                <IoIosStar className="" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="mt-[12px] text-[14px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Similique alias aperiam maxime iure in labore sapiente
                        eligendi explicabo assumenda quibusdam modi vitae, odio
                        sint consequuntur! Quibusdam, doloremque. Nostrum,
                        deleniti qui!
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>

      </Layout>
    </div>
  );
}
