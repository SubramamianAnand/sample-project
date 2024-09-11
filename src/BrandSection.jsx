import { useRef } from "react";
import "./styles.css"; // Import the CSS file
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import roomPic from "./assets/image.jpg"

const BrandSection = () => {

    const brandRef = useRef(null);
  //register the ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
      //create a gsap timeline
      const tl = gsap.timeline();
      tl.from( brandRef.current, {
        //scrolltrigger settings
        scrollTrigger: {
          trigger: "#brandStory",
          start: "top 80%",
          end: "50% 20%",
          scrub: true,
          toggleActions: "play none none reverse",
          markers: true
        },
        opacity: 0,
        y: 100,
        duration: 0.5,
        ease: "power3.out"
      });

      tl.fromTo( "#brandImg",
        //from animation
        {
          opacity: 0,
          x: -100
        }, 
        //to animation
      {
        //scrolltrigger settings
        scrollTrigger: {
          trigger: "#brandImg",
          start: "top 80%",
          end: "80% 20%",
          scrub: true,
          toggleActions: "play none none reverse"
        },
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: "power3.out"
      });

  }, []);

  return (
    <section id="brandStory">
      <div ref={brandRef} className="brandTextContainer">
        <h1 className="brandTitle">Brand Story</h1>
        <p className="brandDescription">
          We are passionate about creating a serene escape through the art of
          lofi music.
        </p>
      </div>
      <div id="brandImg">
        <img src={roomPic} alt="heroPic" width={800} height={800} />
      </div>
    </section>
  );
};

export default BrandSection;
