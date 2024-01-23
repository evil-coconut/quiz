import { useState } from 'react'
import './App.css'

function App() {
  interface Data {
    question: string,
    answers: Array<string>,
    correct: number
  }
  const questions: Data[] = [
    {
      "question": "Какой язык работает в браузере?",
      "answers": ["Java", "C", "JavaScript", "PHP"],
      "correct": 3
    },
    {
      "question": "Что значит CSS?",
      "answers": ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Cars SUVs Sailboats"],
      "correct": 2
    },
    {
      "question": "Что означает HTML?",
      "answers": ["Hypertext Markup Language", "Hypertext Markdown Language", "Hyperloop Machine Language", "Hypertext Technical Machine Language"],
      "correct": 1
    },
  ]
  let [value, setValue] = useState(0);
  let [block, setBlock] = useState(<div className='block'>
    <h3 className='title'>Тест по верстке</h3>
    <button className='button' onClick={createBlock}>Начать</button>
  </div>)

  let index: number = 0;
  let score: number = 0;
  console.log(value)
  function check(i: number) {
    setValue(i)
  }
  function createBlock() {
    if(index >= questions.length) {
      return setBlock(<div className='block'>
        <h3 className='title'>Тест завершен</h3>
        <div className='result'>Ваши очки: {score}</div>
      </div>)
    }

    setBlock(<div className='block'>
      <h3 className='title'>{questions[index].question}</h3>
      <div className='list'>{questions[index].answers.map(
        (item, indexArr) => <label className='label' htmlFor={item}><input type='radio' id={item} checked={value == indexArr ? true : false} onChange={e => check(indexArr)} name={String(index)}/> {item}</label>)}</div>
      <button className='button' onClick={createBlock}>Дальше</button>
    </div>)
    index++;
  }
  return (
    <>
      {block}
    </>
  )
}

export default App
