import Head from "next/head";
import Nav from "../components/Nav";
import Slider from "../components/Slider";
import Slider2 from "../components/Slider2";
import ReviewSlider from "../components/ReviewSlider";

export default function Home() {

  const slider1Images = [
    {
      img: "https://mobirise.com/extensions/gamingamp/assets/images/header-bg9.jpg",
    },
    {
      img: "https://mobirise.com/extensions/gamingamp/assets/images/game1.jpg",
    },
    {
      img: "https://mobirise.com/extensions/gamingamp/assets/images/game3.jpg",
    },
  ];

  const slider2Images = [
    {
      img: "https://mobirise.com/extensions/gamingamp/assets/images/gaming4.jpg",
    },
    {
      img: "https://mobirise.com/extensions/gamingamp/assets/images/gaming5.jpg",
    },
    {
      img: "https://mobirise.com/extensions/gamingamp/assets/images/gaming6.jpg",
    },
  ];

  const reviews = [
    {
      name: "Nole Musk",
      img: "https://mobirise.com/extensions/gamingamp/assets/images/face3.jpg",
      review:
        "As our individual video gaming habits also the computer game landscape have altered, several defects have appeared in the ballot system. One was that it would over-represent games that we appreciated playing in the office together, like FIFA or Overwatch.",
    },
    {
      name: "Leo Hertz",
      img: "https://mobirise.com/extensions/gamingamp/assets/images/face4.jpg",
      review:
        "It's time to draw a line under one more year of pc gaming. Lots of people will remember 2018 as the year the massive on the internet fight royale video game Fortnite became an international sensation.Responsive Web Design Gamesite Template suits my needs perfectly.",
    },
    {
      name: "Lina Li",
      img: "https://mobirise.com/extensions/gamingamp/assets/images/face5.jpg",
      review:
        "One last note on eligibility: restricting the choice to video games that were launched this calendar year no more shows the method people make as well as play games, so we have actually enabled games that were released earlier yet got really considerable updates, were released on new platforms, or otherwise made a significant effect.",
    },
    {
      name: "Alison Portman",
      img: "https://mobirise.com/extensions/gamingamp/assets/images/face6.jpg",
      review:
        "this year was also surprisingly strong, offering up an incredibly varied mix of interactive experiences. There are the blockbusters, of course, like the free-wheeling Spider-Man and the meticulously detailed Red Dead Redemption 2. But 2018 was also a fantastic year for smaller games. Don't forget about Responsive Web Design Template.",
    },
    {
      name: "Aymard Sartre",
      img: "https://mobirise.com/extensions/gamingamp/assets/images/face1.jpg",
      review:
        "As our individual video gaming habits and the computer game landscape have altered, several defects have appeared in the ballot system. One was that it would over-represent games that we appreciated playing in the office together, like FIFA or Overwatch.",
    },
    {
      name: "Gustav Magnusson",
      img: "https://mobirise.com/extensions/gamingamp/assets/images/face2.jpg",
      review:
        "Don't fret excessive about the position. It's a fun with light exercise. Eventually, we suggest all of these games. That's why we have actually consisted of a little bit on what makes each one special. Responsive Web Design Template is awesone thing.",
    }
  ];

  const team = [
    {
      img: "https://mobirise.com/extensions/gamingamp/assets/images/team1.jpg",
      name: "Adrian Carey",
      role: "Founder",
    },
    {
      img: "https://mobirise.com/extensions/gamingamp/assets/images/team2.jpg",
      name: "Susan Crossman",
      role: "Manager",
    },
    {
      img: "https://mobirise.com/extensions/gamingamp/assets/images/team3.jpg",
      name: "Stephen Jenkin",
      role: "Developer",
    },
    {
      img: "https://mobirise.com/extensions/gamingamp/assets/images/team4.jpg",
      name: "Jennifer Bawerman",
      role: "Designer",
    },
  ];

  return (
    <div className="text-white relative">
      <Head>
        <meta name="description" content="Practice tailwind css" />
        <title>GamingAMP</title>
      </Head>
      <Nav/>
      <Slider images={slider1Images} />
      <div className="py-20 px-5 sm:px-10 lg:px-16 xl:px-32 bg-primary">
        <section className="grid md:grid-cols-2 gap-x-12 h-[600px] gap-y-5 md:gap-y-0 md:h-80">
          <div
            className="bg-cover bg-no-repeat"
            style={{
              backgroundImage:
                "url(https://mobirise.com/extensions/gamingamp/assets/images/gaming110.jpg)",
            }}
          >
            <div className="h-full duration-1000 flex justify-center items-end align-center p-5 hover:bg-cyan-300 transition hover:bg-opacity-20">
              <p className="text-4xl uppercase">pc</p>
            </div>
          </div>
          <div
            className="bg-cover bg-no-repeat"
            style={{
              backgroundImage:
                "url(https://mobirise.com/extensions/gamingamp/assets/images/gaming211.jpg)",
            }}
          >
            <div className="h-full duration-1000 flex justify-center items-end align-center p-5 hover:bg-cyan-300 transition hover:bg-opacity-20">
              <p className="text-4xl uppercase">console</p>
            </div>
          </div>
        </section>
        <section className="pt-32 lg:px-24">
          <Slider2 images={slider2Images} />
          <div className="py-10 px-5 md:px-16 bg-secondary rounded-b-xl">
            <div className="flex justify-between text-cyan-300">
              <p className="capitalize">event</p>
              <div className="flex justify-around">
                <a href="#" className="mx-2">
                  <i aria-hidden className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="mx-2">
                  <i aria-hidden className="fab fa-twitter"></i>
                </a>
                <a href="#" className="mx-2">
                  <i aria-hidden className="fab fa-youtube"></i>
                </a>
                <a href="#" className="mx-2">
                  <i aria-hidden className="fab fa-telegram-plane"></i>
                </a>
              </div>
            </div>
            <h3 className="text-3xl capitalize my-5">gaming festival 2021</h3>
            <p className="my-6">
              GAME Esports also Events- formerly known as Multiplay- has
              revealed it will be taking the Sleeplessness Gaming Celebration
              international. Sleeping disorders has this week validated a
              multi-year agreement with The International Event Monitoring Group
              as well as BME Global to bring the celebration to brand-new areas,
              consisting of Egypt, Dubai, Saudi Arabia, South America, and
              Australia.
            </p>
            <div className="md:flex justify-around">
              <div className="mb-5 md:mb-0">
                <p className="my-1">
                  <i
                    aria-hidden
                    className="fas fa-check text-cyan-300 mr-3 text-xs"
                  ></i>{" "}
                  Sector talks, exhibitor booths and networking
                </p>
                <p className="my-1">
                  <i
                    aria-hidden
                    className="fas fa-check text-cyan-300 mr-3 text-xs"
                  ></i>{" "}
                  Sector talks, exhibitor booths and networking
                </p>
                <p className="my-1">
                  <i
                    aria-hidden
                    className="fas fa-check text-cyan-300 mr-3 text-xs"
                  ></i>{" "}
                  Sector talks, exhibitor booths and networking
                </p>
                <p className="my-1">
                  <i
                    aria-hidden
                    className="fas fa-check text-cyan-300 mr-3 text-xs"
                  ></i>{" "}
                  Sector talks, exhibitor booths and networking
                </p>
              </div>
              <div className="">
                <p className="my-1">
                  <i
                    aria-hidden
                    className="fas fa-check text-cyan-300 mr-3 text-xs"
                  ></i>{" "}
                  Sector talks, exhibitor booths and networking
                </p>
                <p className="my-1">
                  <i
                    aria-hidden
                    className="fas fa-check text-cyan-300 mr-3 text-xs"
                  ></i>{" "}
                  Sector talks, exhibitor booths and networking
                </p>
                <p className="my-1">
                  <i
                    aria-hidden
                    className="fas fa-check text-cyan-300 mr-3 text-xs"
                  ></i>{" "}
                  Sector talks, exhibitor booths and networking
                </p>
                <p className="my-1">
                  <i
                    aria-hidden
                    className="fas fa-check text-cyan-300 mr-3 text-xs"
                  ></i>{" "}
                  Sector talks, exhibitor booths and networking
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-x-5 items-center bg-secondary my-28 py-16 md:pl-20 px-3 rounded-xl">
          <div>
            <p className="uppercase text-cyan-300 flex justify-between font-bold mb-3">
              <span>news</span> <span>23.05.2021</span>
            </p>
            <h3 className="text-3xl capitalize">Game Of The Year 2021</h3>
            <p className="my-7">
              Year-end listings are a squandered possibility, a relic from the
              prime time of publications as well as newspapers, a recap of the
              referrals you missed due to the fact that a concern obtained lost
              in the mail or consumed by the household pet dog.
            </p>
            <p className="my-7">
              They have a tendency to be a little bit foggy (why did I like this
              video game, once again?) and incomplete (what came out in
              January?). Worse, they arrive when we're too active with the
              holidays to place the lists to their meant usage. A list of the
              best games of the year is more useful, a lot more thoughtful also
              a lot more full, our team believe, if it collects all year long.
            </p>
            <div className="flex justify-between items-center mt-10 mb-10 md:mb-0">
              <button className="bg-cyan-500 hover:bg-cyan-600 py-4 px-10 rounded-lg focus:outline-none focus:ring-4 uppercase">
                read more
              </button>
              <div className="flex text-cyan-300">
                <i aria-hidden className="fas fa-star mx-1"></i>
                <i aria-hidden className="fas fa-star mx-1"></i>
                <i aria-hidden className="fas fa-star mx-1"></i>
                <i aria-hidden className="fas fa-star mx-1"></i>
                <i aria-hidden className="fas fa-star mx-1"></i>
              </div>
            </div>
          </div>
          <img
            src="https://mobirise.com/extensions/gamingamp/assets/images/game3.jpg"
            alt="game poster"
            className="rounded-2xl"
          />
        </section>
        <section className="mt-26">
          <h1 className="capitalize text-4xl my-10 text-center font-bold">
            about game
          </h1>
          <div className="md:flex">
            <div className="flex-1">
              <p className="mb-3">
                If you're not the artsy type, Video game could shock you.
                Utilizing the movement sensors for the HTC Vive or the Oculus
                Rift Touch controllers, the app permits you to "paint" in a
                three-dimensional space to create definitely stunning works of
                art, in any kind of color conceivable. The activity controls are
                remarkably precise, and the electronic medium indicates you can
                simply return to erase any mistakes you could have made. Also if
                you're not naturally creative, the video game will certainly
                draw out a brand-new side of you. Try Responsive Web Design
                Gamesite Template.
              </p>
              <p className="my-3">
                Along with painting (which, regretfully, is restricted to a
                solitary brush form), you can add great impacts like shimmering
                celebrities or smoke tracks to emphasize components of your
                paint. The Oculus Break variation flaunts a great "preview"
                feature, however the app is just as delightful on either
                platform. Currently, the developer has actually picked not to
                bring the game to PSVR, mentioning an absence of precision in
                the tracking software application. HTML Website Design would
                help you to figure out which game is the best. Responsive Web
                Design Gamesite Template would help you to adverise your works.
              </p>
            </div>
            <div className="flex-1">
              <img
                src="https://mobirise.com/extensions/gamingamp/assets/images/game1.jpg"
                alt="game photo"
                className="w-5/6 my-10 md:my-0 mx-auto md:ml-auto"
              />
            </div>
          </div>
          <div className="md:flex mt-5">
            <div className="flex-1">
              <img
                src="https://mobirise.com/extensions/gamingamp/assets/images/game2.jpg"
                alt="game photo"
                className="w-5/6 my-10 mx-auto md:mx-0 md:my-0"
              />
            </div>
            <div className="flex-1">
              <p className="mb-3">
                Fulldive VR costs itself as an "All-in-One System." What that
                means is that it supplies a system where users can search
                Virtual Reality material from a selection of resources, sharing
                their searchings for with buddies and even discussing them. The
                app's interface drops customers in a 3D atmosphere where they
                can browse food selections, change setups, also view their buddy
                checklist.
              </p>
              <p className="my-3">
                Just like many Cardboard apps, users can browse by checking out
                a particular icon. Along with trending videos, Fulldive kinds
                web content by feelings, like charming or scary, which isn't
                constantly the easiest means to locate what you're seeking.
                Explore an amazing world of HTML Website Design.
              </p>
            </div>
          </div>
        </section>
        <section className="mt-32">
          <p className="uppercase text-center text-4xl mb-10 font-bold">
            our sponsors
          </p>
          <div className="flex flex-wrap justify-around">
            <div className="m-2">
              <img src="img/sponsor-1.png" alt="sponsor-1" />
            </div>
            <div className="m-2">
              <img src="img/sponsor-2.png" alt="sponsor-2" />
            </div>
            <div className="m-2">
              <img src="img/sponsor-3.png" alt="sponsor-3" />
            </div>
            <div className="m-2">
              <img src="img/sponsor-4.png" alt="sponsor-4" />
            </div>
            <div className="m-2">
              <img src="img/sponsor-5.png" alt="sponsor-5" />
            </div>
          </div>
        </section>
        <section className="mt-32 md:px-20 relative">
          <ReviewSlider reviews={reviews} />
        </section>
        <section className="mt-32 grid gap-5 lg:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <div className="group rounded-lg bg-secondary text-center">
            <h3 className="text-2xl uppercase group-hover:text-cyan-300 transition my-5">
              standard
            </h3>
            <div className="p-5 bg-cyan-500 mb-10">
              <p className="text-2xl font-bold">$50</p>
              <p className="text-lg uppercase">per month</p>
            </div>
            <div className="px-16 my-5">
              <p className="capitalize border-b pb-3">personal use</p>
            </div>
            <div className="px-16 my-5">
              <p className="capitalize border-b pb-3">one site</p>
            </div>
            <div className="px-16 my-5">
              <p className="capitalize pb-3">email support</p>
            </div>
            <button className="bg-cyan-500 hover:bg-cyan-600 transition duration-200 py-4 px-10 rounded-lg focus:outline-none focus:ring-4 uppercase  mb-16">
              read more
            </button>
          </div>
          <div className="group rounded-lg bg-secondary text-center">
            <h3 className="text-2xl uppercase group-hover:text-cyan-300 transition my-5">
              BUSINESS
            </h3>
            <div className="p-5 bg-blue-400 mb-10">
              <p className="text-2xl font-bold">$100</p>
              <p className="text-lg uppercase">per month</p>
            </div>
            <div className="px-16 my-5">
              <p className="capitalize border-b pb-3">Commercial Use</p>
            </div>
            <div className="px-16 my-5">
              <p className="capitalize border-b pb-3">Unlimited Sites</p>
            </div>
            <div className="px-16 my-5">
              <p className="capitalize pb-3">email support</p>
            </div>
            <button className="bg-cyan-500 hover:bg-cyan-600 transition duration-200 py-4 px-10 rounded-lg focus:outline-none focus:ring-4 uppercase  mb-16">
              read more
            </button>
          </div>
          <div className="sm:col-span-2 md:col-span-1">
            <div className="group rounded-lg bg-secondary text-center sm:w-1/2 md:w-full mx-auto pt-5">
              <h3 className="text-2xl uppercase group-hover:text-cyan-300 transition mb-5">
                PREMIUM
              </h3>
              <div className="p-5 bg-purple-500 mb-10">
                <p className="text-2xl font-bold">$150</p>
                <p className="text-lg uppercase">per month</p>
              </div>
              <div className="px-16 my-5">
                <p className="capitalize border-b pb-3">personal use</p>
              </div>
              <div className="px-16 my-5">
                <p className="capitalize border-b pb-3">one site</p>
              </div>
              <div className="px-16 my-5">
                <p className="capitalize pb-3">Premium Support</p>
              </div>
              <button className="bg-cyan-500 hover:bg-cyan-600 transition duration-200 py-4 px-10 rounded-lg focus:outline-none focus:ring-4 uppercase  mb-16">
                read more
              </button>
            </div>
          </div>
        </section>
        <section className="mt-32">
          <p className="text-4xl capitalize my-16 text-center font-bold">
            our team
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((member, i) => (
              <div
                key={i}
                className="group rounded-xl bg-secondary overflow-hidden text-center"
              >
                <div className="relative">
                  <div className="absolute top-0 left-0 right-0 bottom-0 hover:bg-cyan-300 opacity-60 transition duration-500"></div>
                  <img src={member.img} alt={member.name} />
                </div>
                <p className="my-5 text-2xl capitalize group-hover:text-cyan-300 transition duration-500">
                  {member.name}
                </p>
                <p className="capitalize my-5 text-cyan-300">{member.role}</p>
                <div className="flex justify-center text-cyan-300 text-xl mb-10">
                  <a href="#" className="mx-2">
                    <i aria-hidden className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="mx-2">
                    <i aria-hidden className="fab fa-facebook"></i>
                  </a>
                  <a href="#" className="mx-2">
                    <i aria-hidden className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-32">
          <h3 className="text-4xl capitalize my-16 text-center font-bold">
            our contacts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-4xl">Contact Information</h3>
              <p className="my-5">
                Below you can see our contact information. Don't hesitate to
                wright to us. We would be hapy to help you in your questions.
              </p>
              <div>
                <div className="flex items-end my-2">
                  <i
                    aria-hidden
                    className="fas fa-phone-alt text-cyan-300 text-2xl mr-3 mb-2"
                  ></i>
                  <div>
                    <p className="capitalize">phone</p>
                    <p>+1 (8445) 8925-589-01</p>
                  </div>
                </div>
                <div className="flex items-end my-2">
                  <i
                    aria-hidden
                    className="fas fa-map-marker-alt text-cyan-300 text-2xl mr-3 mb-2"
                  ></i>
                  <div>
                    <p className="capitalize">location</p>
                    <p>350 5TH AVENUE, NY, USA</p>
                  </div>
                </div>
                <div className="flex items-end my-2">
                  <i
                    aria-hidden
                    className="fas fa-envelope text-cyan-300 text-2xl mr-3 mb-2"
                  ></i>
                  <div>
                    <p className="capitalize">email</p>
                    <a href="mailto:freelancerridoy247@gmail.com">
                      EXAMPLE@GAME.COM
                    </a>
                  </div>
                </div>
                <div className="flex my-5 text-cyan-300 text-2xl">
                  <a
                    href="#"
                    className="mr-5 hover:scale-110 transform transition"
                  >
                    <i aria-hidden className="fab fa-youtube"></i>
                  </a>
                  <a
                    href="#"
                    className="mr-5 hover:scale-110 transform transition"
                  >
                    <i aria-hidden className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="#"
                    className="mr-5 hover:scale-110 transform transition"
                  >
                    <i aria-hidden className="fab fa-google-plus-g"></i>
                  </a>
                  <a
                    href="#"
                    className="mr-5 hover:scale-110 transform transition"
                  >
                    <i aria-hidden className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="first name"
                  className="bg-secondary p-3 text-lg rounded-lg transition duration-500 focus:outline-none focus:border-cyan-300 border border-secondary hover:border-cyan-300"
                  required
                />
                <input
                  type="text"
                  placeholder="last name"
                  className="bg-secondary p-3 text-lg rounded-lg transition duration-500 focus:outline-none focus:border-cyan-300 border border-secondary hover:border-cyan-300"
                  required
                />
                <textarea
                  rows="5"
                  placeholder="message"
                  className="bg-secondary p-3 text-lg rounded-lg transition duration-500 focus:outline-none focus:border-cyan-300 border border-secondary hover:border-cyan-300 lg:col-span-2"
                  required
                ></textarea>
              </div>
              <button className="bg-cyan-500 hover:bg-cyan-600 py-4 px-10 rounded-lg focus:outline-none focus:ring-4 capitalize my-5 transition duration-300">
                submit
              </button>
            </form>
          </div>
        </section>
        <footer className="mt-32 text-xl text-center">
          <div className="flex justify-center flex-wrap">
            <a href="#" className="px-2 hover:text-cyan-300">
              Most Popular
            </a>
            <a href="#" className="px-2 hover:text-cyan-300">
              TheSpotLight
            </a>
            <a href="#" className="px-2 hover:text-cyan-300">
              YouTube
            </a>
          </div>
          <p className="mt-5">
            <i aria-hidden className="far fa-copyright"></i> Copyright 2021
            Mobirise - Responsive Web Design Template - All Rights Reserved
          </p>
        </footer>
      </div>
    </div>
  );
}