"use client";
import Image from "next/image";
import Counter from "./component/AutoCounter";

const Home = () => {
  return (
    <>
      <section className="wrapper !bg-[#f2f1f5]">
        <div className="container justify-center items-center py-[4.5rem] xl:pt-28 lg:pt-28 md:pt-28 xl:pb-40 lg:pb-40 md:pb-40 m-auto">
          <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-50px] xl:mt-0 lg:mt-0">
            <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] px-[15px] xl:px-[35px] lg:px-[20px] max-w-full text-center lg:text-left xl:text-left mt-[50px] xl:mt-0 lg:mt-0">
              <h3 className="xl:text-[1.8rem] !leading-[1.3] text-[calc(1.305rem_+_0.66vw)] font-bold mb-3 xl:pr-20">
                We are proud of our works
              </h3>
              <p className="lead !text-[1.05rem] !leading-[1.6] font-medium !mb-0 xxl:pr-10">
                We bring solutions to make life easier for our customers.
              </p>
            </div>

            <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] px-[15px] xl:px-[35px] lg:px-[20px] max-w-full xl:!mt-2 lg:!mt-2 mt-[50px]">
              <div className="flex flex-wrap mx-[-15px] items-center counter-wrapper mt-[-30px] !text-center">
                <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] mt-[30px] max-w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="mb-3 !w-[4rem] !h-[4rem] m-[0_auto]"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                    />
                  </svg>

                  <h3 className="font-semibold counter xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] tracking-[normal] !leading-none mb-2">
                    <Counter startValue={201} />
                  </h3>
                  <p className="text-[0.8rem] font-medium !mb-0">
                    Completed Projects
                  </p>
                </div>

                <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] mt-[30px] max-w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="mb-3 !w-[4rem] !h-[4rem] m-[0_auto]"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                    />
                  </svg>
                  <h3 className="font-semibold counter xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] tracking-[normal] !leading-none mb-2">
                    <Counter startValue={250} />
                  </h3>
                  <p className="text-[0.8rem] font-medium !mb-0">
                    Happy Customers
                  </p>
                </div>

                <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] mt-[30px] max-w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="mb-3 !w-[4rem] !h-[4rem] m-[0_auto]"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                    />
                  </svg>
                  <h3 className="font-semibold counter xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] tracking-[normal] !leading-none mb-2">
                    <Counter startValue={310} />
                  </h3>
                  <p className="text-[0.8rem] font-medium !mb-0">
                    Expert Employees
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wrapper !bg-[#ffffff]">
        <div className="container py-[4.5rem] xl:p-[6rem_15px_7rem] lg:p-[6rem_15px_7rem] md:p-[6rem_15px_7rem] m-auto">
          <div className="itemgrid !mb-[4.5rem] xl:!mb-[8rem] lg:!mb-[8rem] md:!mb-[8rem] mt-3">
            <div className="flex flex-wrap mx-[-15px] isotope mt-[-9rem] xl:!mt-[-15rem] lg:!mt-[-15rem] md:!mt-[-15rem]">
              <div className="item md:w-6/12 lg:w-6/12 xl:w-3/12 flex-[0_0_auto] px-[15px] mt-[30px] max-w-full">
                <div className="card !bg-[#ffffff] rounded-lg !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] card-border-bottom  !border-[#fddcd6] after:!border-t-[calc(0.4rem_-_6px)] after:!border-b-[6px]">
                  <div className="card-body flex-[1_1_auto] p-[40px]">
                    <div className="flex items-center text-left relative before:content-['\201d'] before:absolute before:top-[-2rem] before:right-[-2rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                      <div className="card-image md:w-3/12 lg:w-3/12 xl:w-3/12 flex-[0_0_auto] mr-2">
                        <Image
                          src={"/image.jpg"}
                          alt="image"
                          width={120}
                          height={120}
                          className=" rounded-full"
                        ></Image>
                      </div>
                      <div className="info !pl-0 md:w-6/12 lg:w-6/12 xl:w-6/12 flex-[0_0_auto]">
                        <h5 className="!mb-1 text-[.9rem] !leading-[1.5] font-sans">
                          Coriss Ambady
                        </h5>
                        <span className="ratings  inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3"></span>
                      </div>
                    </div>
                    <blockquote className="text-[0.85rem] leading-[1.7] font-medium mt-4 icon !mb-0 relative p-0 border-0 ">
                      <p>
                        “Vivamus sagittis lacus vel augue laoreet rutrum
                        faucibus dolor auctor. Vestibulum id ligula porta. Cras
                        mattis consectetur.”
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="item md:w-6/12 lg:w-6/12 xl:w-3/12 flex-[0_0_auto] px-[15px] mt-[30px] max-w-full">
                <div className="card !bg-[#ffffff] rounded-lg !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] card-border-bottom  !border-[#fddcd6] after:!border-t-[calc(0.4rem_-_6px)] after:!border-b-[6px]">
                  <div className="card-body flex-[1_1_auto] p-[40px]">
                    <div className="flex items-center text-left relative before:content-['\201d'] before:absolute before:top-[-2rem] before:right-[-2rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                      <div className="card-image md:w-3/12 lg:w-3/12 xl:w-3/12 flex-[0_0_auto] mr-2">
                        <Image
                          src={"/image.jpg"}
                          alt="image"
                          width={120}
                          height={120}
                          className=" rounded-full"
                        ></Image>
                      </div>
                      <div className="info !pl-0 md:w-6/12 lg:w-6/12 xl:w-6/12 flex-[0_0_auto]">
                        <h5 className="!mb-1 text-[.9rem] !leading-[1.5] font-sans">
                          Coriss Ambady
                        </h5>
                        <span className="ratings  inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3"></span>
                      </div>
                    </div>
                    <blockquote className="text-[0.85rem] leading-[1.7] font-medium mt-4 icon !mb-0 relative p-0 border-0 ">
                      <p>
                        “Vivamus sagittis lacus vel augue laoreet rutrum
                        faucibus dolor auctor. Vestibulum id ligula porta. Cras
                        mattis consectetur.”
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="item md:w-6/12 lg:w-6/12 xl:w-3/12 flex-[0_0_auto] px-[15px] mt-[30px] max-w-full">
                <div className="card !bg-[#ffffff] rounded-lg !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] card-border-bottom  !border-[#fddcd6] after:!border-t-[calc(0.4rem_-_6px)] after:!border-b-[6px]">
                  <div className="card-body flex-[1_1_auto] p-[40px]">
                    <div className="flex items-center text-left relative before:content-['\201d'] before:absolute before:top-[-2rem] before:right-[-2rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                      <div className="card-image md:w-3/12 lg:w-3/12 xl:w-3/12 flex-[0_0_auto] mr-2">
                        <Image
                          src={"/image.jpg"}
                          alt="image"
                          width={120}
                          height={120}
                          className=" rounded-full"
                        ></Image>
                      </div>
                      <div className="info !pl-0 md:w-6/12 lg:w-6/12 xl:w-6/12 flex-[0_0_auto]">
                        <h5 className="!mb-1 text-[.9rem] !leading-[1.5] font-sans">
                          Coriss Ambady
                        </h5>
                        <span className="ratings  inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3"></span>
                      </div>
                    </div>
                    <blockquote className="text-[0.85rem] leading-[1.7] font-medium mt-4 icon !mb-0 relative p-0 border-0 ">
                      <p>
                        “Vivamus sagittis lacus vel augue laoreet rutrum
                        faucibus dolor auctor. Vestibulum id ligula porta. Cras
                        mattis consectetur.”
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="item md:w-6/12 lg:w-6/12 xl:w-3/12 flex-[0_0_auto] px-[15px] mt-[30px] max-w-full">
                <div className="card !bg-[#ffffff] rounded-lg !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] card-border-bottom  !border-[#fddcd6] after:!border-t-[calc(0.4rem_-_6px)] after:!border-b-[6px]">
                  <div className="card-body flex-[1_1_auto] p-[40px]">
                    <div className="flex items-center text-left relative before:content-['\201d'] before:absolute before:top-[-2rem] before:right-[-2rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                      <div className="card-image md:w-3/12 lg:w-3/12 xl:w-3/12 flex-[0_0_auto] mr-2">
                        <Image
                          src={"/image.jpg"}
                          alt="image"
                          width={120}
                          height={120}
                          className=" rounded-full"
                        ></Image>
                      </div>
                      <div className="info !pl-0 md:w-6/12 lg:w-6/12 xl:w-6/12 flex-[0_0_auto]">
                        <h5 className="!mb-1 text-[.9rem] !leading-[1.5] font-sans">
                          Coriss Ambady
                        </h5>
                        <span className="ratings  inline-block relative w-20 h-[0.8rem] text-[0.9rem] leading-none before:text-[rgba(38,43,50,0.1)] after:inline-block after:not-italic after:font-normal after:absolute after:text-[#fcc032] after:content-['\2605\2605\2605\2605\2605'] after:overflow-hidden after:left-0 after:top-0 before:inline-block before:not-italic before:font-normal before:absolute before:text-[#fcc032] before:content-['\2605\2605\2605\2605\2605'] before:overflow-hidden before:left-0 before:top-0 five !mb-3"></span>
                      </div>
                    </div>
                    <blockquote className="text-[0.85rem] leading-[1.7] font-medium mt-4 icon !mb-0 relative p-0 border-0 ">
                      <p>
                        “Vivamus sagittis lacus vel augue laoreet rutrum
                        faucibus dolor auctor. Vestibulum id ligula porta. Cras
                        mattis consectetur.”
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
