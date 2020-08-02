import React, { Component } from "react";
import { Button } from "reactstrap";

import "../css/NotFound.css";

class NotFound extends Component {
  render() {
    return (
      <div className="notFound__container">
        <div className="notFound__title">404</div>
        <div className="notFound_content">잘못된 접근 경로입니다!</div>

        <Button className="notFound__button" color="primary" size="lg" href="/">
          메인 페이지로 돌아가기
        </Button>
      </div>
    );
  }
}

export default NotFound;
