import React from "react";

const Details = () => {
  return (
    <div className="details">
      <div className="w-full h-screen bg-[#222222] text-[#D9D9D9]">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl inline border-b-2 border-[#6A8FD4]">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl">
              <p>
                Hi, I'm Michael. I am glad that your here. Please take a few
                moments and review some of my work.
              </p>
            </div>
            <div>
              <p className="text-[#8892b0]">
                I am passionate about software development and producing high
                end, top quality software solutions that go beyond your
                expectations and satisfy your personal and professional needs. I
                offer a wide range of software solutions from Full-stack web
                development with the ability to offer hosting, blockchain and
                smart contracts and mobile app development for both IOS and
                Android phones. I can design any software solution regardless of
                individual, a small-business owner or a large enterprise
                corporation.
                <br /> <br />
                Let’s collaborate and build a long lasting business
                relationship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
