import React from "react";
import FadeInSection from "./FadeInSection";
import { Carousel } from "react-responsive-carousel";
import heroPics from "../assets/pics/HeroPics";
const paras = [
  "A cryptocurrency is a distributed software built for the storing and transferring of value between two or more persons. It is secured due to cryptography, which it utilizes to prevent malicious parties from hacking, counterfeiting, or spending a single unit multiple times. Most are decentralized blockchain networks which are essentially distributed ledgers that are secured by a network of computers. They generally do not have a central authority which acts to issue or control them, which makes them inherently resistant to outside intervention seeking to control or destroy them.",
  "NFT is an acronym for Non-Fungible Token. This means that the ownership of an item is independently verifiable by checking the blockchain which it was released on. You may be familiar with the term in regards to crazy internet art, with pieces occasionally being auctioned off worth millions of dollars. The price is justified in the eyes of some by the verifiable scarcity of the work, which makes it collectable. This digital art provides the opportunity for artists not only to profit from the sale of their work, but also from the resale of their work by means of royalties programmed into the code of each NFT.",
  "The use cases of this new technology does not end there, however. There are multiple use cases by which society can benefit from this and there are likely more yet to be discovered. We will likely see NFTs begin to be utilized in the following sectors over the next decade:",
  "There is strong potential for Cryptocurrency and NFTs to fundamentally change the word. Almost every day brings a new adoption story which nobody could have anticipated a few years ago. It seems every major company in the United States is getting involved in one way or another. A year ago I would not believe if someone had told me that Burger King, Pepsi, Walmart, Paris Hilton, or Melania Trump were going to launch their own NFTs. Now it is becoming so normal that we can expect more and more celebrities and companies to enter the space.",
  "  As interesting as all this is, it pales in comparison to the value this technology can bring to the developing world. Slashing the costs of remittances, protecting citizens against rampant inflation of local currencies, and allowing for the undocumented to be issued credit are just a few ways in which it can bring about change in the global financial system.",
];

const titles = ["What is a Cryptocurrency?", "What is an NFT?", "Why should we care?"];

const HomeSection = (props) => {
  return (
    <div
      className={
        props.isFlipped ? "homeGradient1 pt-32 h-3/6 lg:px-20 lg:pb-32" : "homeGradient pt-32 lg:px-20 lg:pb-32 h-3/6"
      }
    >
      <div>
        <FadeInSection className="shadow-2xl">
          <div className="card w-full h-auto flex flex-col items-center py-5 px-5 lg:card-side  card-bordered shadow-2xl bg-palSilver bg-opacity-70 rounded-3xl">
            {!props.isFlipped && (
              <figure>
                <img className=" object-scale-down  h-64 w-full lg:object-cover " src={props.pic} alt="img" />
              </figure>
            )}

            <div className="card-body">
              <h2 className="card-title">{titles[Number(props.title)]}</h2>
              <p className="leading-6">{paras[Number(props.para1)]}</p>
              <br />
              <p className="leading-6">{paras[Number(props.para2)]}</p>

              {props.hasList && (
                <ul className="w-full flex flex-col items-center leading-6 justify-center">
                  <br />
                  <li className="list-disc">Real Estate</li>
                  <li className="list-disc">Healthcare</li>
                  <li className="list-disc">Intellectual Property</li>
                  <li className="list-disc">Supply Chain</li>
                  <li className="list-disc">Verifying Authenticity of Goods</li>
                  <li className="list-disc">Gaming and Metaverse</li>
                </ul>
              )}
            </div>
            {props.isFlipped && (
              <div className="container-fluid max-w-sm h-full ">
                <Carousel autoPlay={true} infiniteLoop={true} showArrows={false} showThumbs={false} showStatus={false}>
                  {heroPics.map((pic, i) => (
                    <div className="" key={i}>
                      <img src={pic} className="" alt="img" />
                    </div>
                  ))}
                </Carousel>
              </div>
            )}
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default HomeSection;
