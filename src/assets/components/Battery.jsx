import React from "react";
import "../../App.css";
import { Advertimg } from "../utils";
const Battery = () => {
  return (
    <>
      <div className="teal-gradient">
        <div className="w-full">
          <div className="min-width">
            <div className="max-w-[900px] m-[auto]">
              <div className="mt-32">
                <h1 className="h1-style text-custom-green">
                  Even longer battery life.
                </h1>
                <h1 className="h1-style text-black">
                  You’ll need to recharge before it will.
                </h1>
              </div>
              <div className=" mt-20 ">
                <div className="flex justify-between">
                  <div className=" w-[52vh] flex flex-col gap-4">
                    <p className="p-text-size-gray">
                      iPhone 16 has been designed to make room for a larger
                      battery, which works together with A18 to deliver{" "}
                      <span className="text-black">
                        a big boost in battery life
                      </span>
                      , even with so many new features. So you can game, binge,
                      and rock on — and on.
                    </p>
                    <p className="p-text-size-gray">
                      Snap on a new MagSafe charger for{" "}
                      <span className="text-black">
                        even faster wireless charging
                      </span>{" "}
                      — up to 25W with a 30W power adapter or higher, enabling
                      up to 50% charge in around 30 minutes.7
                    </p>
                  </div>
                  <div className="flex flex-col gap-8 pr-[9vh]">
                    <p className="secondary-p-text text-black">
                      Up to <br />
                      <span className="new-span-b text-custom-green">
                        27 hours{" "}
                      </span>{" "}
                      <br />
                      <span className="new-p text-black">
                        Video playback <br /> on iPhone 16 plus
                      </span>
                    </p>
                    <p className="secondary-p-text text-black">
                      Up to <br />
                      <span className="new-span-b text-custom-green">
                        22 hours{" "}
                      </span>
                      <br />
                      <span className="new-p text-black">
                        Video playback <br /> on iPhone 16
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <img src={Advertimg} alt="" />
            </div>
            <div>
              <div className="max-w-[1102px] m-auto battery-border rounded-[28px] mb-40 ">
                <div className=" max-w-[887px] m-auto mt-[56px] flex gap-[140px] pb-20">
                  <p className="secondary-p-text text-black">
                    Up to <br />
                    <span className="new-span text-black">60% faster </span>
                    <span className="new-p text-black">6-core CPU</span>
                  </p>
                  <p className="secondary-p-text text-black">
                    Up to <br />
                    <span className="new-span text-black">2x faster </span>
                    <span className="new-p text-black">5-core GPU</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Battery;
