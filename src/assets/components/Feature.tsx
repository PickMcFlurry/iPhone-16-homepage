import "../../App.css";
import { FeatureVideo, Featimg, iphonepink } from "../utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Chip from "./Chip";
import Battery from "./Battery";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Feature = () => {
  return (
    <>
      <div className="gray-bg">
        <div className=" py-[109px] ">
          <div className="min-width">
            <div className="scroll-animate h1-style margin-l">
              <h1 className="text-custom-purple">Take total Camera Control.</h1>
              <h1>Touch. Zoom. Click. Quick.</h1>
            </div>
          </div>
        </div>
        <div>
          <video autoPlay playsInline muted className="w-full object-fill">
            <source src={FeatureVideo} type="video/mp4" />
          </video>
        </div>
        <div className="w-full h-[100vh] flex items-center ">
          <div className="bg-white rounded-[28px] w-[1040px] h-[594px] m-[auto] flex justify-between overflow-hidden">
            <div className="scroll-animate flex flex-col justify-center py-[56px] ml-[109px] w-[329px]">
              <h3 className="text-size">Visual intelligence</h3>
              <h1 className="font-sf-pro text-[32px] leading-[36px] font-medium mt-[25px]">
                See the world through an entirly new lens.
              </h1>
              <p className="m-text-size mt-[25px] text-text-gray">
                Use <strong className="strong-text">visual intelligence</strong>{" "}
                through Camera Control to instantly learn about objects and
                places you see. Just{" "}
                <strong className="strong-text">
                  point your iPhone 16 to discover more
                </strong>{" "}
                or interact with something in front of you. Pull up a review of
                a restaurant you pass, search for where to buy a new item you
                spotted, and more.
              </p>
            </div>
            <div className="mt-[60px] mr-[30px]">
              <img src={Featimg} alt="" width={419} height={564} />
            </div>
          </div>
        </div>
        <div className="bg-white w-full">
          <div className="scroll-animate min-width h-[789px] flex flex-col justify-center padding-l">
            <div className="w-[874px]">
              <h1 className="h1-style text-custom-pink">New Camera System</h1>
              <h1 className="h1-style">
                Go to great lengths to get the perfect shot.
              </h1>
            </div>
            <div className="w-[878px] mt-10">
              <p className="text-size">
                The{" "}
                <strong className="strong-text">
                  versatile new iPhone 16 camera system{" "}
                </strong>
                captures beautiful photos — from up close or far away. The
                two-in-one 48MP Fusion camera lets you take stunning
                super-high-resolution images, or zoom in with the 2x
                optical-quality Telephoto. The Ultra Wide camera shoots extreme
                close-up macro photos or wider, more expansive pictures.
                Altogether, it's like having{" "}
                <strong className="strong-text">
                  four lenses in your pocket
                </strong>
                . And with spatial capture, you can even take photos and videos
                in 3D, which you can watch with Apple Vision Pro.
              </p>
            </div>
          </div>
          <div className="pink-gradient relative">
            <div className="half-hidden-left">
              <img src={iphonepink} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Chip />
      <Battery />
    </>
  );
};

export default Feature;
