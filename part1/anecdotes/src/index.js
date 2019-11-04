import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = props => {
  const init_state = props.anecdotes;

  const [selected, setSelected] = useState(0);
  const [list, setList] = useState(init_state);

  const randomNumber = () => Math.floor(Math.random() * list.length);
  const handleDisplay = () => {
    setSelected(randomNumber());
  };

  const inCreaseVote = i => {
    const anecdoteDisplayed = list.map((anecdote, j) => {
      if (j === i) {
        return { ...anecdote, vote: anecdote.vote + 1 };
      } else {
        return anecdote;
      }
    });
    setList(anecdoteDisplayed);
  };

  const toSee = list.map((anecdote, index) => (
    <div key={anecdote.id}>
      {anecdote.message}
      <div> Has {anecdote.vote} votes.</div>
      <button type="button" onClick={() => inCreaseVote(index)}>
        vote
      </button>
    </div>
  ));

  var max = list.reduce((prev, current) => {
    return prev.vote > current.vote ? prev : current;
  });
  return (
    <div>
      <div>
        <h2>Anecdote of the day</h2>
        {toSee[selected]}
        <button onClick={handleDisplay}>next anecdote</button>
      </div>
      <div>
        <h2>Anecdote with most votes</h2>
        {max.message}
      </div>
    </div>
  );
};

const anecdotes = [
  { message: "If it hurts, do it more often", vote: 0, id: 0 },
  {
    message: "Adding manpower to a late software project makes it later!",
    vote: 0,
    id: 1
  },
  {
    message:
      "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    vote: 0,
    id: 2
  },
  {
    message:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    vote: 0,
    id: 3
  },
  {
    message: "Premature optimization is the root of all evil.",
    vote: 0,
    id: 4
  },
  {
    message:
      "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    vote: 0,
    id: 5
  }
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
