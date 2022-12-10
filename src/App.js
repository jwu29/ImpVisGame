import "./styles.css";
import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
const questions = [
  {
    question: "PCR is used to",
    choices: [
      "amplify gene of interest",
      "construct RAPD maps",
      "detect the presence of transgene in an organism",
      "all of the above"
    ],
    rightAnswer: "amplify gene of interest",
    hint:
      "If you already need help with this question, then you should actually watch the videos!",
    hintType: "text"
  },
  {
    question:
      "The right order of PCR process 1. Denaturation 2. Annealing 3. Extension?",
    choices: ["1,2,3", "2,3,1", "2,1,3", "None Of The Above"],
    rightAnswer: "1,2,3",
    hint: "It's definitely not D.",
    hintType: "text"
  },
  {
    question: "By which enzyme is RNA copied into complementary DNA (cDNA)?",
    choices: [
      "Taq DNA polymerase",
      "RNA polymerase II",
      "Reverse transcriptase",
      "Uracil-N-Glycosylase"
    ],
    rightAnswer: "Reverse transcriptase",
    hint:
      "Remember, the process that convert RNA into cDNA is known as reverse transcription. Can you guess which is the answer now?",
    hintType: "text"
  },
  {
    question: "The basic reaction of PCR reaction include",
    choices: [
      "DNA segment to be amplified",
      "two oligonucleotide primers",
      "a heat stable DNA polymerase",
      "all of the above"
    ],
    rightAnswer: "all of the above",
    hint: "https://youtu.be/iQsu3Kz9NYo?t=29",
    hintType: "link"
  },
  {
    question: "Denaturation involves",
    choices: [
      "heating between 90-98'C",
      "heating between 40-60'C",
      "heating between 72'C",
      "none of the above"
    ],
    rightAnswer: "heating between 90-98'C",
    hint: "https://youtu.be/iQsu3Kz9NYo?t=70",
    hintType: "link"
  },
  {
    question:
      "The process of binding of primer to the denatured strand is called?",
    choices: ["denaturation", "annealing", "renaturation", "none of the above"],
    rightAnswer: "annealing",
    hint: "https://youtu.be/iQsu3Kz9NYo?t=84",
    hintType: "link"
  },
  {
    question:
      "What would be the effect on the PCR reaction if any of the following circumstances arose: 1) there are no primers? 2) there are no dNTPs in the reaction, 3) there is no Taq polymerase in the reaction?",
    choices: [
      "PCR would proceed normally",
      "Non-specific PCR of random templates will occur",
      "The reaction will cease after a few cycles",
      "The PCR will not commence"
    ],
    rightAnswer: "The PCR will not commence",
    hint:
      "Both no primers and no dNTPs means no annealing process, and no Taq polymerase will result in no extension process either.",
    hintType: "text"
  },
  {
    question:
      "What would the expected effect be on a PCR reaction if the primers used were slightly shorter and more variable than the intended oligonucleotide sequences?",
    choices: [
      "The PCR reaction would not commence",
      "The PCR reaction would end after one cycle",
      "The reaction would generate a single short PCR product",
      "The reaction would yield a mixture of non-specific products"
    ],
    rightAnswer: "The reaction would yield a mixture of non-specific products",
    hint:
      "Remember, a primer is a short single-strained nucleic acid used by all living organisms in the initiation of DNA synthesis which bind to the single strand DNA by complementary base pairing.",
    hintType: "text"
  },
  {
    question: "Which type of gene is used as an internal control gene?",
    choices: [
      "housekeeping gene",
      "plasmid",
      "target gene",
      "maintenence gene"
    ],
    rightAnswer: "housekeeping gene",
    hint:
      "In many RT-qPCR reactions, housekeeping genes are used as internal control genes without proper validation. Target Gene often just means Gene Of Interest, or the particular gene being studied or manipulated in an experiment.",
    hintType: "text"
  },
  {
    question:
      "Through which phase of the amplification plot is the threshold line drawn to work out Ct values?",
    choices: [
      "ground phase",
      "exponential phase",
      "linear phase",
      "plateau phase"
    ],
    rightAnswer: "exponential phase",
    hint: "https://youtu.be/Kq1YfWJHgOQ?t=45",
    hintType: "link"
  }
];

function openLink(url, newTab) {
  newTab
    ? window.open(url, "_blank", "noopener noreferrer")
    : (window.location.href = url);
}

const Prices = [
  "100",
  "500",
  "1,000",
  "5,000",
  "10,000",
  "50,000",
  "100,000",
  "250,000",
  "500,000",
  "1,000,000"
];

export default function App() {
  // Hint Modal
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  // Correct/Incorrect
  const [Valid, setValid] = useState("NoAnswer");
  const changeValid = () => {
    setValid("NoAnswer");
  };

  // Option Buttons
  const [styleA, setStyleA] = useState("button");
  const changeStyleA = () => {
    if (styleA === "button") {
      setStyleA("button clicked");
      setAnswer(questions[questionIndex].choices[0]);
      if (styleB === "button clicked") {
        setStyleB("button");
      }
      if (styleC === "button clicked") {
        setStyleC("button");
      }
      if (styleD === "button clicked") {
        setStyleD("button");
      }
    }
    if (styleA === "button clicked") {
      setStyleA("button");
    }
  };

  const [styleB, setStyleB] = useState("button");
  const changeStyleB = () => {
    if (styleB === "button") {
      setStyleB("button clicked");
      setAnswer(questions[questionIndex].choices[1]);
      if (styleA === "button clicked") {
        setStyleA("button");
      }
      if (styleC === "button clicked") {
        setStyleC("button");
      }
      if (styleD === "button clicked") {
        setStyleD("button");
      }
    }
    if (styleB === "button clicked") {
      setStyleB("button");
    }
  };

  const [styleC, setStyleC] = useState("button");
  const changeStyleC = () => {
    if (styleC === "button") {
      setStyleC("button clicked");
      setAnswer(questions[questionIndex].choices[2]);
      if (styleA === "button clicked") {
        setStyleA("button");
      }
      if (styleB === "button clicked") {
        setStyleB("button");
      }
      if (styleD === "button clicked") {
        setStyleD("button");
      }
    }
    if (styleC === "button clicked") {
      setStyleC("button");
    }
  };

  const [styleD, setStyleD] = useState("button");
  const changeStyleD = () => {
    if (styleD === "button") {
      setStyleD("button clicked");
      setAnswer(questions[questionIndex].choices[3]);
      if (styleA === "button clicked") {
        setStyleA("button");
      }
      if (styleB === "button clicked") {
        setStyleB("button");
      }
      if (styleC === "button clicked") {
        setStyleC("button");
      }
    }
    if (styleD === "button clicked") {
      setStyleD("button");
    }
  };

  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(questions.length + 1);
  const [answer, setAnswer] = useState("");

  //50:50
  const [Fifty, setFifty] = useState("fif");
  const changeFifty = () => {
    if (Fifty === "fif") {
      setFifty("fif clicked");
      var ans = questions[questionIndex].rightAnswer;
      var ans_i = questions[questionIndex].choices.indexOf(ans);
      switch (ans_i) {
        default:
          break;
        case 0:
          setStyleC("button used");
          setStyleD("button used");
          break;
        case 1:
          setStyleA("button used");
          setStyleC("button used");
          break;
        case 2:
          setStyleB("button used");
          setStyleD("button used");
          break;
        case 3:
          setStyleA("button used");
          setStyleB("button used");
          break;
      }
    }
  };

  // Call your supervisor
  const [Call, setCall] = useState("call");
  const changeCall = () => {
    if (Call === "call") {
      if (questions[questionIndex].hintType === "link") {
        openLink(questions[questionIndex].hint, true);
      }
      setCall("call clicked");
      if (questions[questionIndex].hintType === "text") {
        handleOpen();
      }
    }
  };

  //Poll
  const [Poll, setPoll] = useState("poll");
  const changePoll = () => {
    if (Poll === "poll") {
      setPoll("poll clicked");
      change_pollper();
    }
  };

  const [pollper, set_pollper] = useState([25, 25, 25, 25]);
  const change_pollper = () => {
    var ans = questions[questionIndex].rightAnswer;
    var ans_i = questions[questionIndex].choices.indexOf(ans);
    var Y1 = Math.floor(Math.random() * 10) + 25;
    var Y2 = Math.floor(Math.random() * 10) + 20;
    var Y3 = Math.floor(Math.random() * 10) + 20;
    var Y4 = 100 - (Y1 + Y2 + Y3);
    switch (ans_i) {
      default:
        break;
      case 0:
        set_pollper([Y1, Y2, Y3, Y4]);
        break;
      case 1:
        set_pollper([Y4, Y1, Y2, Y3]);
        break;
      case 2:
        set_pollper([Y3, Y4, Y1, Y2]);
        break;
      case 3:
        set_pollper([Y2, Y3, Y4, Y1]);
        break;
    }
  };

  const [RA, setRA] = useState("ra");
  const changeRA = () => {
    if (RA === "ra") {
      openLink("https://www.youtube.com/watch?v=dQw4w9WgXcQ", true);
    }
    setRA("ra clicked");
  };

  const restart = () => {
    clearTimeout();
    setScore(0);
    setAnswer("");
    setQuestionIndex(0);
    setStyleA("button");
    setStyleB("button");
    setStyleC("button");
    setStyleD("button");
    setValid("NoAnswer");
    setFifty("fif");
    setCall("call");
    setPoll("poll");
    setRA("ra");
  };

  const CorrectAnswer = () => {
    setScore((score) => score + 1);
    setStyleA("button");
    setStyleB("button");
    setStyleC("button");
    setStyleD("button");
    if (Fifty === "fif clicked") {
      setFifty("fif used");
    }
    if (Poll === "poll clicked") {
      setPoll("poll used");
    }
    if (Call === "call clicked") {
      setCall("call used");
    }
    if (RA === "ra clicked") {
      setRA("ra used");
    }
    if (questionIndex < questions.length) {
      setQuestionIndex((i) => i + 1);
    }
    setTimeout(changeValid, 1500);
  };

  const submit = (e) => {
    e.preventDefault();
    if (answer === questions[questionIndex].rightAnswer) {
      setValid("Correct");
      clearTimeout();
      setTimeout(changeValid, 1500);
      switch (questions[questionIndex].choices.indexOf(answer)) {
        default:
          break;
        case 0:
          setTimeout(setStyleA("button correct"), 500);
          setTimeout(setStyleB(styleB + " nocursor"), 500);
          setTimeout(setStyleC(styleC + " nocursor"), 500);
          setTimeout(setStyleD(styleD + " nocursor"), 500);
          break;
        case 1:
          setTimeout(setStyleB("button correct"), 500);
          setTimeout(setStyleA(styleA + " nocursor"), 500);
          setTimeout(setStyleC(styleC + " nocursor"), 500);
          setTimeout(setStyleD(styleD + " nocursor"), 500);
          break;
        case 2:
          setTimeout(setStyleC("button correct"), 500);
          setTimeout(setStyleB(styleB + " nocursor"), 500);
          setTimeout(setStyleA(styleA + " nocursor"), 500);
          setTimeout(setStyleD(styleD + " nocursor"), 500);
          break;
        case 3:
          setTimeout(setStyleD("button correct"), 500);
          setTimeout(setStyleB(styleB + " nocursor"), 500);
          setTimeout(setStyleC(styleC + " nocursor"), 500);
          setTimeout(setStyleA(styleA + " nocursor"), 500);
          break;
      }
      setTimeout(CorrectAnswer, 1500);
    } else {
      setScore((score) => score - 0.05);
      setValid("Incorrect");
      switch (questions[questionIndex].choices.indexOf(answer)) {
        default:
          break;
        case 0:
          setStyleA("button wrong");
          break;
        case 1:
          setStyleB("button wrong");
          break;
        case 2:
          setStyleC("button wrong");
          break;
        case 3:
          setStyleD("button wrong");
          break;
      }
    }
  };

  const BackToStart = () => {
    setQuestionIndex((i) => i + 1);
  };

  function CheckQNum(n) {
    if (n === questionIndex) {
      return "price_current";
    } else {
      return "price_tr";
    }
  }

  //Game Engine
  if (questionIndex < questions.length) {
    const N = questions.length;
    var arr_p = Array.from({ length: N }, (_, index) => index + 1).reverse();
    var arr_q = arr_p.slice(
      Math.max(N - questionIndex - 5, 0),
      Math.max(N - questionIndex, 5)
    );
    return (
      <div>
        <div class="top_row_left">
          <table class="lifelines_table">
            <tr>
              <button class={Fifty} onClick={changeFifty}>
                50:50
              </button>
            </tr>
            <tr>
              <button class={Call} onClick={changeCall}>
                Phone Your Supervisor
              </button>
            </tr>
            <tr>
              <button class={Poll} onClick={changePoll}>
                Ask the Audience
              </button>
            </tr>
            <tr>
              <button class={RA} onClick={changeRA}>
                Ask RA
              </button>
            </tr>
          </table>
        </div>
        <img
          class="quiz"
          src={require("./Who_wants_to_be.png")}
          alt="The Who Wants to be a Researcher Logo"
        ></img>
        <div class="icon"></div>
        <div class="top_row_right">
          <table class="price_table">
            <th>Your current research funding</th>
            {arr_q.map((c) => {
              return (
                <tr class={CheckQNum(c - 1)}>
                  <td class="price_td">{`${c}. £${
                    Prices[Math.min(c - 1, N)]
                  }`}</td>
                </tr>
              );
            })}
          </table>
        </div>
        <div>
          <div>
            <div class="question">{questions[questionIndex].question}</div>
          </div>
          <div class="button_div">
            <input
              type="button"
              class={styleA}
              value={`A. ${questions[questionIndex].choices[0]}`}
              onClick={changeStyleA}
              onChange={(e) => setAnswer(questions[questionIndex].choices[0])}
              checked={answer === questions[questionIndex].choices[0]}
            />
            <input
              type="button"
              className={styleB}
              value={`B. ${questions[questionIndex].choices[1]}`}
              onClick={changeStyleB}
              onChange={(e) => setAnswer(e.target.value)}
              checked={answer === questions[questionIndex].choices[1]}
            />
          </div>
          <div class="button_div">
            <input
              type="button"
              className={styleC}
              value={`C. ${questions[questionIndex].choices[2]}`}
              onClick={changeStyleC}
              onChange={(e) => setAnswer(e.target.value)}
              checked={answer === questions[questionIndex].choices[2]}
            />
            <input
              type="button"
              className={styleD}
              value={`D. ${questions[questionIndex].choices[3]}`}
              onClick={changeStyleD}
              onChange={(e) => setAnswer(e.target.value)}
              checked={answer === questions[questionIndex].choices[3]}
            />
          </div>
          <div>
            {Poll === "poll clicked" ? (
              <div class="poll_results">
                Poll Results
                <table class="poll_table">
                  <tr>
                    <th class="poll_th">A</th>
                    <th class="poll_th">B</th>
                    <th class="poll_th">C</th>
                    <th class="poll_th">D</th>
                  </tr>
                  <tr>
                    <td class="poll_td">{pollper[0]}%</td>
                    <td class="poll_td">{pollper[1]}%</td>
                    <td class="poll_td">{pollper[2]}%</td>
                    <td class="poll_td">{pollper[3]}%</td>
                  </tr>
                </table>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div>
            {styleA === "button clicked" ||
            styleB === "button clicked" ||
            styleC === "button clicked" ||
            styleD === "button clicked" ? (
              <div class="answer_sub">
                <button type="button" onClick={submit}>
                  Final Answer?
                </button>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div className={Valid}>{Valid}</div>
        <div>
          {questions[questionIndex].hintType === "text" ? (
            <div>
              <Modal
                onClose={handleClose}
                open={open}
                style={{
                  position: "absolute",
                  border: "2px solid #000",
                  backgroundColor: "gray",
                  boxShadow: "3px solid black",
                  height: "50vh",
                  width: "75vw",
                  margin: "auto",
                  fontFamily: "Verdana",
                  textAlign: "center"
                }}
              >
                <div>
                  <h2>From your supervisor:</h2>
                  <p>{questions[questionIndex].hint}</p>
                  <p class="bottomtext">Click anywhere to close.</p>
                </div>
              </Modal>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
  }
  if (questionIndex === questions.length) {
    return (
      <form>
        <div>
          <h1>Your Final Research Funding</h1>
          <p class="finalprice">{`£ ${(
            (score / questionIndex) *
            Prices[questionIndex - 1].replaceAll(",", "")
          ).toFixed(2)}`}</p>
          <button type="button" onClick={BackToStart}>
            Try Again
          </button>
        </div>
      </form>
    );
  }
  if (questionIndex === questions.length + 1) {
    return (
      <div>
        <div class="StartLogo">
          <h1>Who Wants to be a Researcher?</h1>
          <img
            class="start"
            src={require("./Who_wants_to_be.png")}
            alt="The Who Wants to be a Researcher Logo"
          ></img>
        </div>
        <br />
        <div>
          <h2>Rules</h2>
          <ul>
            <li>
              You've a researcher looking to gather funding for your PCR lab.
              Luckily, your supervisor has entered you into a quiz competition,
              in which you could win £1,000,000 worth of funding!
            </li>
            <li>
              During the competition, your funding increases for each correct
              answer. However, you will lose some funding if you get a question
              wrong.
            </li>
            <li>
              You're allowed to use lifelines to help you answer a question. The
              lifelines include:
              <ul>
                <li>50:50 - remove two incorrect answers.</li>
                <li>
                  Phone your supervisor - call your supervisor for a hint. The
                  hint may be a short text or a video.
                </li>
                <li>
                  Ask the audience - Make a poll of your colleagues' opinions.
                </li>
                <li>Ask RA - Ask your research assistant.</li>
              </ul>
            </li>
            <li>
              The quiz will include content in the videos above, so please watch
              them!
            </li>
          </ul>
          <br />
          <button class="Start" type="button" onClick={restart}>
            Start
          </button>
        </div>
      </div>
    );
  }
}
