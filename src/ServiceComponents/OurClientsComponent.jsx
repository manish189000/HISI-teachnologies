import React from "react";
import { SiContributorcovenant } from "react-icons/si";
import { SiBmcsoftware } from "react-icons/si";

const OurClientsComponent = () => {
  return (
    <>
      <div className="mainContainer main-container bg-white py-20 air:py-0 air:pt-12 air:pb-16 px-10 w-[100%] air:px-6 m480:px-4">
        <div
          className="empower pb-4  text-[#7f7f7f] font-mons
           text-lg font-medium"
        >
          <p>Our Clients</p>
        </div>
        <div className="build">
          <h1 className="text-black text-5xl font-medium font-int leading-[1.2] md:text-4xl">
            <span className="text-[#7f7f7f]">We are Trusted 15+ &nbsp;</span>
            Countries Worldwide, Ensuring Excellence Everywhere
          </h1>
        </div>
        <div className="clientsInfo w-[100%] flex pt-14 air:flex-col air:space-y-12">
          <div className="left w-[50%] space-y-4 px-4 air:px-0 air:w-[100%]">
            <div className="top flex items-center gap-5">
              <SiContributorcovenant className="w-12 h-12 air:w-8 air:h-8  shadow-lg text-[#7f7f7f] text-xl rounded-lg flex items-center justify-center " />
              <div className="drkLt">
                <h2 className="text-lg font-int text-black font-semibold">
                  Moonkle LTD
                </h2>
                <p className="font-mons">Client of Company</p>
              </div>
            </div>
            <div className="bottom">
              <p className="font-mons">
                Patience. Infinite patience. No shortcuts. Very well thought out
                and articulate communication. Clear milestones, deadlines and
                fast work. Even if the client is being careless. The best
                part...always solving problems with great original ideas!.
              </p>
            </div>
          </div>
          <div className="right w-[50%] space-y-4 px-4 air:px-0 air:w-[100%]">
            <div className="top flex items-center gap-5">
              <SiBmcsoftware className="w-12 h-12 air:w-8 air:h-8 shadow-lg text-[#7f7f7f] text-xl rounded-lg flex items-center justify-center" />
              <div className="drkLt">
                <h2 className="text-lg font-int text-[#7f7f7f]800 font-semibold">
                  Soft Tech
                </h2>
                <p className="font-mons"> Manager of Company</p>
              </div>
            </div>
            <div className="bottom">
              <p className="font-mons">
                Very well thought out and articulate communication. Clear
                milestones, deadlines and fast work. Patience. Infinite
                patience. No shortcuts. Even if the client is being careless.
                The best part...always solving problems with great original
                ideas!.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurClientsComponent;
