import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Statistic = ({ text, value }) => {
  return (
    <div>
      <table>
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: 100 }}>{text}</td>
            <td>
              {value} {text === "positive" && <>%</>}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Statistics = props => {
  if (props.all === 0) {
    return <p>No feedback given</p>;
  } else
    return (
      <>
        <h2>statistics</h2>
        <Statistic text="good" value={props.good} />
        <Statistic text="neutral" value={props.neutral} />
        <Statistic text="bad" value={props.bad} />
        <Statistic text="all" value={props.all} />
        <Statistic text="average" value={props.average} />
        <Statistic text="positive" value={props.positive} />
      </>
    );
};

const Button = ({ onClick, text }) => {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  );
};

export default Button;

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  let positive;
  let average;
  let all = good + bad + neutral;

  if (good - bad === 0) {
    average = 0;
  } else average = (good - bad) / (good + bad + neutral);

  if (good === 0) {
    positive = 0;
  } else positive = (good * 100) / (good + bad + neutral);

  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
