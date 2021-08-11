import {useState, useEffect, useMemo} from 'react'
import '../src/app.css'
import {data} from './data'
import Quiz from './components/Quiz'
import Timer from './components/Timer'
import Start from './components/Start'


function App() {
    const [questionNumber, setQuestionNumber] = useState(1);
    const [username, setUsername] = useState(null);
    const [stop, setStop] = useState(false);
    const [earned, setEarned] = useState("# 0")

    
  const moneyParameter = useMemo(
    () => 
    [
      {id: 1, amount: '₦ 5,000'},
      {id: 2, amount: '₦ 7,500'},
      {id: 3, amount: '₦ 10,000'},
      {id: 4, amount: '₦ 15,000'},
      {id: 5, amount: '₦ 20,000'},
      {id: 6, amount: '₦ 30,000'},
      {id: 7, amount: '₦ 45,000'},
      {id: 8, amount: '₦ 70,000'},
      {id: 9, amount: '₦ 120,000'},
      {id: 10, amount: '₦ 250,000'},
      {id: 11, amount: '₦ 500,000'},
      {id: 12, amount: '₦ 1 Million'},
      {id: 13, amount: '₦ 2 Million'},
      {id: 14, amount: '₦ 5 Million'},
      {id: 15, amount: '₦ 10 Million'},
    
    ].reverse(),
   []
   );

  useEffect(() => {
    questionNumber > 1 && setEarned(moneyParameter.find((item) => item.id === questionNumber -1).amount);
  }, [moneyParameter, questionNumber])
  return (
    <div className="app">
      {!username ? (
      <Start setUsername={setUsername} />
      ): (
        <>
          <div className="main">
          {stop ? <h1 className="endText">You just earned: {earned} <br/> <span>Thank you for Participating 😇 </span></h1>  : (
          <>
            <div className="top">
              <div className="timer">
               <Timer setStop={setStop} questionNumber={questionNumber}/>
              </div>
            </div>
            <div className="bottom">
              <Quiz 
                data={data} 
                setStop={setStop} 
                questionNumber={questionNumber} 
               setQuestionNumber={setQuestionNumber} />
            </div>
          </>
          )}
        </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyParameter.map((item) => (
             <li key={item.id} className={questionNumber === item.id ? "moneyListItem active": "moneyListItem"}>
             <span className="moneyListItemNumber">{item.id}</span>
             <span className="moneyListItemAmount">{item.amount}</span>
           </li>
          ))} 
        </ul>
      </div>
        </>
      )}
        
    </div>
  );
}

export default App;
