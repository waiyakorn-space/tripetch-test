import graphicDesktopBall from "../src/assets/graphic-desktop-ball.png"
import graphicDesktopBask from "../src/assets/graphic-desktop-bask.png"

import graphicTabletBall from "../src/assets/graphic-tablet-ball.png"
import graphicTabletBask from "../src/assets/graphic-tablet-bask.png"

import graphicMobileBall from "../src/assets/graphic-mobile-ball.png"
import graphicMobileBask from "../src/assets/graphic-mobile-bask.png"

function App() {
  return (
    <div>
      <img
        className="desktop:block absolute left-[175px] top-[35px] z-10 hidden h-[950px] w-[678px]"
        src={graphicDesktopBall}
        alt="graphicDesktopBall"
      />
      <img
        className="tablet:block desktop:hidden absolute left-0 top-[101px] z-10 hidden"
        src={graphicTabletBall}
        alt="graphicTabletBall"
      />
      <div className="tablet:hidden absolute inset-x-0 top-[70px] flex justify-center">
        <img
          className="h-[281px] w-[218px]"
          src={graphicMobileBall}
          alt="graphicMobileBall"
        />
      </div>

      <div>
        <div className="tablet:items-end tablet:pr-ct30 desktop:pr-ct195 flex flex-col">
          <div>
            <h1 className="pl-ct18 tablet:pl-0 text-50 leading-ct59 tablet:text-90 tablet:mt-ct87 desktop:mt-6 tablet:mb-9 desktop:mb-ct60 tablet:leading-ct105 text-ctLightGray">
              ATHLETS
            </h1>
            <div className="tablet:flex gap-x-ct10 tablet:mb-ct21 desktop:mb-ct31 hidden flex-row items-center">
              <div className="flex flex-col items-center justify-center">
                <span className="leading-ct21 mb-1 text-18 text-black">01</span>
                <div className="tablet:w-ct19 w-ct17 tablet:h-ct5 bg-ctPurple rounded-2.5 h-1" />
              </div>
              <h2 className="leading-ct42 text-4xl text-ctGray">CONNECTION</h2>
            </div>
            <span className="tablet:text-lg desktop:text-xl tablet:flex tablet:w-ct447 desktop:w-ct717 hidden">
              Connect with coaches directly, you can ping coaches to view
              profile.
            </span>
          </div>
        </div>
        <div className="px-ct18 tablet:hidden h-ct284 mt-ct237 flex flex-col bg-ctLightGray">
          <div className="mt-ct72">
            <div className="gap-x-ct10 mb-5 flex flex-row items-center">
              <div className="flex flex-col items-center">
                <span className="leading-ct18 text-sm text-black">02</span>
                <div className="tablet:w-ct19 w-ct14 tablet:h-ct5 bg-ctPurple rounded-2.5 h-1" />
              </div>
              <h2 className="leading-ct33 text-28 text-ctGray">
                COLLABORATION
              </h2>
            </div>
            <span className="text-15 mb-ct29 leading-ct18 mt-5 flex">
              Work with other student athletes to increase visability. When you
              share and like other players videos it will increase your
              visability as a player. This is the team work aspect to Surface 1.
            </span>
          </div>
          <div className="flex w-full justify-center">
            <div className="row-center">
              <div className="container-indicator">
                <div className="indicator-gray" />
                <div className="indicator-purple" />
                <div className="indicator-gray" />
              </div>
            </div>
          </div>
        </div>

        <div className="tablet:flex tablet:pr-ct30 desktop:pr-ct195 tablet:mt-ct30 desktop:mt-14 tablet:h-ct235 desktop:h-64 hidden flex-col items-end justify-center bg-ctLightGray">
          <div>
            <div className="tablet:flex gap-x-ct10 mb-ct21 hidden flex-row items-center">
              <div className="flex flex-col items-center justify-center">
                <span className="leading-ct21 mb-1 text-18 text-black">02</span>
                <div className="tablet:w-ct19 w-ct17 tablet:h-ct5 bg-ctPurple rounded-2.5 h-1" />
              </div>
              <h2 className="leading-ct42 text-4xl text-ctGray">
                COLLABORATION
              </h2>
            </div>
            <span className="tablet:text-lg desktop:text-xl tablet:max-w-ct447 desktop:max-w-ct717 flex">
              Work with other student athletes to increase visability. When you
              share and like other players videos it will increase your
              visability as a player. This is the team work aspect to Surface 1.
            </span>
          </div>
        </div>
        <div className="tablet:flex tablet:pr-ct30 desktop:pr-ct195 bg-ctPurple tablet:h-ct207 desktop:h-ct297 hidden flex-col items-end justify-center">
          <div>
            <div className="tablet:flex gap-x-ct10 mb-ct21 hidden flex-row items-center">
              <div className="flex flex-col items-center justify-center">
                <span className="leading-ct21 mb-1 text-18 text-black">03</span>
                <div className="tablet:w-ct19 w-ct17 tablet:h-ct5 rounded-2.5 h-1 bg-white" />
              </div>
              <h2 className="leading-ct42 text-4xl text-ctGray">GROWTH</h2>
            </div>
            <span className="tablet:text-lg desktop:text-xl tablet:max-w-ct447 desktop:max-w-ct717 flex text-white">
              Resources and tools for you to get better as a student Athelte.
              Access to training classes, tutor sessions, etc
            </span>
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          className="absolute bottom-[155px] right-[125px] z-10 hidden lg:block"
          src={graphicDesktopBask}
          alt="graphicDesktopBask"
        />
        <img
          className="tablet:block desktop:hidden absolute bottom-[189px] right-0 z-10 hidden"
          src={graphicTabletBask}
          alt="graphicTabletBask"
        />
        <div className="tablet:hidden absolute inset-x-0 bottom-[203px] flex justify-center">
          <img
            className="h-[250px] w-[302px]"
            src={graphicMobileBask}
            alt="graphicMobileBask"
          />
        </div>

        <div className="tablet:hidden flex flex-col">
          <h1 className="pl-ct18 mt-ct19 text-50 leading-ct59 text-ctLightGray">
            PLAYERS
          </h1>
          <div className="px-ct18 h-ct238 mt-ct237 flex flex-col bg-ctLightGray">
            <div className="mt-ct72">
              <div className="gap-x-ct10 mb-5 flex flex-row items-center">
                <div className="flex flex-col items-center">
                  <span className="leading-ct18 text-sm text-black">03</span>
                  <div className="w-ct14 bg-ctPurple rounded-2.5 h-1" />
                </div>
                <h2 className="leading-ct33 text-28 text-ctGray">GROWTH</h2>
              </div>
              <span className="text-15 mb-ct37 leading-ct18 mt-5 flex">
                Save your time, recruit proper athlets for your team.
              </span>
            </div>
            <div className="flex w-full justify-center">
              <div className="row-center">
                <div className="container-indicator">
                  <div className="indicator-gray" />
                  <div className="indicator-gray" />
                  <div className="indicator-purple" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tablet:flex hidden">
          <div className="tablet:pl-ct30 desktop:pl-ct322 tablet:mt-ct52 desktop:mt-ct124">
            <h1 className="tablet:text-90 tablet:mb-ct34 desktop:mb-ct68 tablet:leading-ct105 text-ctLightGray">
              PLAYERS
            </h1>
            <div className="gap-x-ct10 mb-ct21 flex flex-row items-center">
              <div className="flex flex-col items-center">
                <span className="leading-ct21 mb-1 text-18 text-black">01</span>
                <div className="tablet:w-ct19 w-ct17 tablet:h-ct5 bg-ctPurple rounded-2.5 h-1" />
              </div>
              <h2 className="leading-ct42 text-4xl text-ctGray">CONNECTION</h2>
            </div>
            <span className="tablet:text-lg desktop:text-xl tablet:w-ct432 desktop:w-ct717 flex">
              Connect with talented athlete directly, you can watch their skills
              through video showreels directly from Surface 1.
            </span>
          </div>
        </div>
        <div className="tablet:pl-ct30 desktop:pl-ct322 tablet:flex tablet:mt-ct-10 desktop:mt-ct69 tablet:h-ct235 desktop:h-ct245 hidden items-center bg-ctLightGray">
          <div>
            <div className="gap-x-ct10 mb-ct21 flex flex-row items-center">
              <div className="flex flex-col items-center">
                <span className="leading-ct21 mb-1 text-18 text-black">02</span>
                <div className="tablet:w-ct19 w-ct17 tablet:h-ct5 bg-ctPurple rounded-2.5 h-1" />
              </div>
              <h2 className="leading-ct42 text-4xl text-ctGray">
                COLLABORATION
              </h2>
            </div>
            <span className="tablet:text-lg desktop:text-xl tablet:w-ct432 desktop:w-ct717 flex">
              Work with recruiter to increase your chances of finding talented
              athlete.
            </span>
          </div>
        </div>
        <div className="bg-ctNavy tablet:pl-ct30 desktop:pl-ct322 tablet:flex tablet:h-ct207 desktop:h-60 hidden items-center">
          <div>
            <div className="gap-x-ct10 mb-ct21 flex flex-row items-center">
              <div className="flex flex-col items-center">
                <span className="text-ctPurple leading-ct21 mb-1 text-18">
                  03
                </span>
                <div className="tablet:w-ct19 w-ct17 tablet:h-ct5 rounded-2.5 h-1 bg-white" />
              </div>
              <h2 className="leading-ct42 text-4xl text-ctGray">GROWTH</h2>
            </div>
            <span className="tablet:text-lg desktop:text-xl tablet:w-ct432 desktop:max-w-ct717 flex text-white">
              Save your time, recruit proper athlets for your team.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
