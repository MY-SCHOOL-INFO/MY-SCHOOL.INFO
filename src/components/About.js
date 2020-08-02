import React from "react";
import "../css/About.css";

import { isMobile } from "react-device-detect";
import { faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About() {
  return (
    <div className="about__container">
      <div className="about__content">
        <div className="content__title">
          <span id="content__title">Ab</span>out
        </div>
        해당 웹사이트는 기존의{" "}
        <a id="comcigan" href="https://comci.kr/st" title="MY-SCHOOL">
          컴시간 사이트
        </a>
        가 IOS에서는 작동하지 않아 <br />
        매번 PC로 확인해야하는 불편함을 겪어 이를 해결하고자 제작하였습니다.
        <br />
        <br />
        해당 프로젝트는 이근혁님의{" "}
        <a id="comcigan" href="https://github.com/leegeunhyeok">
          comcigan-parser
        </a>{" "}
        라이브러리를 수정 후 사용하였습니다.
        <br />
        수정 버전:{" "}
        <a
          id="comcigan"
          href="https://github.com/Comcigan-Timetable/Comcigan-Parser-Edited"
        >
          Comcigan-Parser-Edited
        </a>{" "}
        <br />
        <br />
        {"이 </> 는 React로 제작된 Create React App 이용한 프로젝트입니다."}
      </div>
      <div className="about__contact">
        <div className="contact__title">
          <span id="contact__title">Co</span>
          <span>ntact</span>
        </div>
        <div className="contact__content">
          <div className="contact_item">Email: i_hansu_oo@naver.com</div>
          <div className="contact_item">
            <a href="https://github.com/hanseo0507" title="Github">
              <FontAwesomeIcon id="contact__icon" icon={faGithub} size="2x" />
            </a>

            <a href="https://discord.gg/m4j7ZeV" title="Discord">
              <FontAwesomeIcon id="contact__icon" icon={faDiscord} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function About_Main() {
  return (
    <div className="about__container">
      {isMobile ? (
        <div className="about__mobile">
          <About />
        </div>
      ) : (
        <div className="about__browser">
          <About />
        </div>
      )}
    </div>
  );
}

export default About_Main;
