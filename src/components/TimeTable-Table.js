import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Table } from "reactstrap";

class TimeTable_Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: this.props.schedule,
    };
  }

  componentDidMount() {
    this.renderTable();
  }

  splitSubject = (subject) => {
    if (subject === "기술가정") {
      return "기가";
    } else if (subject === "예술체육") {
      return "예체";
    }
    return subject.substr(0, 2);
  };

  renderTable = () => {
    const { schedule } = this.state;
    schedule.map((x, i) => {
      if (i === 4 && schedule[5] === undefined) {
        return (
          <td>
            {x[0].subject}, {"테스트"}
          </td>
        );
      } else {
        return <td>{x[0].subject}</td>;
      }
    });
  };

  render() {
    const { schedule } = this.state;

    return (
      <Table bordered className="timetable__table">
        <thead>
          <tr>
            <th id="blank"></th>
            <th id="monday">월</th>
            <th id="tuseday">화</th>
            <th id="wendsday">수</th>
            <th id="thursday">목</th>
            <th id="friday">금</th>
            <th id="saturday">토</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1교시</th>
            {schedule.map((x, i) => (
              <td key={i}>{this.splitSubject(x[0].subject)}</td>
            ))}
            <td>
              {schedule[5] !== undefined
                ? this.splitSubject(schedule[5][0].subject)
                : ""}
            </td>
          </tr>
          <tr>
            <th scope="row">2교시</th>
            {schedule.map((x, i) => (
              <td key={i}>{this.splitSubject(x[1].subject)}</td>
            ))}
            <td>
              {schedule[5] !== undefined
                ? this.splitSubject(schedule[5][1].subject)
                : ""}
            </td>
          </tr>
          <tr>
            <th scope="row">3교시</th>
            {schedule.map((x, i) => (
              <td key={i}>{this.splitSubject(x[2].subject)}</td>
            ))}
            <td>
              {schedule[5] !== undefined
                ? this.splitSubject(schedule[5][2].subject)
                : ""}
            </td>
          </tr>
          <tr>
            <th scope="row">4교시</th>
            {schedule.map((x, i) => (
              <td key={i}>{this.splitSubject(x[3].subject)}</td>
            ))}
            <td>
              {schedule[5] !== undefined
                ? this.splitSubject(schedule[5][3].subject)
                : ""}
            </td>
          </tr>
          <tr>
            <th scope="row">5교시</th>
            {schedule.map((x, i) => (
              <td key={i}>{this.splitSubject(x[4].subject)}</td>
            ))}
            <td>
              {schedule[5] !== undefined
                ? this.splitSubject(schedule[5][4].subject)
                : ""}
            </td>
          </tr>
          <tr>
            <th scope="row">6교시</th>
            {schedule.map((x, i) => (
              <td key={i}>{this.splitSubject(x[5].subject)}</td>
            ))}
            <td>
              {schedule[5] !== undefined
                ? this.splitSubject(schedule[5][5].subject)
                : ""}
            </td>
          </tr>
          <tr>
            <th scope="row">7교시</th>
            {schedule.map((x, i) => (
              <td key={i}>
                {x[6] !== undefined ? this.splitSubject(x[6].subject) : ""}
              </td>
            ))}
            <td>
              {schedule[5] !== undefined
                ? this.splitSubject(schedule[5][6].subject)
                : ""}
            </td>
          </tr>
          <tr>
            <th scope="row">8교시</th>
            {schedule.map((x, i) => (
              <td key={i}>{x[7] !== undefined ? x[7].subject : ""}</td>
            ))}
            <td>
              {schedule[5] !== undefined
                ? this.splitSubject(schedule[5][7].subject)
                : ""}
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default withRouter(TimeTable_Table);
