import React, { useState, useEffect } from 'react';

function App() {

    const [feedback, setFeedback] = useState('');
    const [users, setUsers] = useState('P1');
    const [ex,setEx]= useState('X');
    const [box1,setBox1] = useState('');
    const [box2,setBox2]= useState('');
    const [box3,setBox3]= useState('');
    const [box4,setBox4]= useState('');
    const [box5,setBox5]= useState('');
    const [box6,setBox6]= useState('');
    const [box7,setBox7]= useState('');
    const [box8,setBox8]= useState('');
    const [box9,setBox9]= useState('');
    const [s1,setS1]= useState('box')
    const [s2,setS2]= useState('box')
    const [s3,setS3]= useState('box')
    const [s4,setS4]= useState('box')
    const [s5,setS5]= useState('box')
    const [s6,setS6]= useState('box')
    const [s7,setS7]= useState('box')
    const [s8,setS8]= useState('box')
    const [s9,setS9]= useState('box')

    //functionality for entire game
    const go = (game) => {

    let id = game.target.id;

    //ternary statement for X or O designation
    (ex === "X") ? setEx("O") : setEx("X");

    //ternary statement for user designation
    (users === '1: ') ? setUsers('P2: ') : setUsers('P1: ');

        if (id === "1") { setBox1(ex); setS1("box"); }
        if (id === "2") { setBox2(ex); setS2("box"); }
        if (id === "3") { setBox3(ex); setS3("box"); }
        if (id === "4") { setBox4(ex); setS4("box"); }
        if (id === "5") { setBox5(ex); setS5("box"); }
        if (id === "6") { setBox6(ex); setS6("box"); }
        if (id === "7") { setBox7(ex); setS7("box"); }
        if (id === "8") { setBox8(ex); setS8("box"); }
        if (id === "9") { setBox9(ex); setS9("box"); }
    }

    //Functionality for winners or tied game
    useEffect(() => {
        const xWin = () => {
            setFeedback("X is the Winner!");
        }
        const oWin = () => {
            setFeedback("O is the Winner");
        }
        const tie = () => {
            setFeedback("CATS");
        }

        //if statements for O winner
            //across
            if (box1 === "O" && box2 === "O" && box3 === "O") oWin();
            if (box4 === "O" && box5 === "O" && box6 === "O") oWin();
            if (box7 === "O" && box8 === "O" && box9 === "O") oWin();
            //down
            if (box1 === "O" && box4 === "O" && box7 === "O") oWin();
            if (box2 === "O" && box5 === "O" && box8 === "O") oWin();
            if (box3 === "O" && box6 === "O" && box9 === "O") oWin();
            //diagonally
            if (box1 === "O" && box5 === "O" && box9 === "O") oWin();
            if (box3 === "O" && box5 === "O" && box7 === "O") oWin();

        //if statements for X winner

            //across
            if (box1 === "X" && box2 === "X" && box3 === "X") xWin();
            if (box4 === "X" && box5 === "X" && box6 === "X") xWin();
            if (box7 === "X" && box8 === "X" && box9 === "X") xWin();
            //down
            if (box1 === "X" && box4 === "X" && box7 === "X") xWin();
            if (box2 === "X" && box5 === "X" && box8 === "X") xWin();
            if (box3 === "X" && box6 === "X" && box9 === "X") xWin();
            //diagonally
            if (box1 === "X" && box5 === "X" && box9 === "X") xWin();
            if (box3 === "X" && box5 === "X" && box7 === "X") xWin();

        //if statements for tie game CATS

            if (box1 === "X" && box2 === "X" && box3 === "O" && box4 === "O" && box5 === "O" && box6 === "X" && box7 === "X" && box8 === "O" && box9 === "X") tie();
            if (box1 === "X" && box2 === "O" && box3 === "X" && box4 === "X" && box5 === "O" && box6 === "O" && box7 === "O" && box8 === "X" && box9 === "X") tie();
            if (box1 === "O" && box2 === "X" && box3 === "O" && box4 === "X" && box5 === "X" && box6 === "O" && box7 === "X" && box8 === "O" && box9 === "X") tie();
            if (box1 === "X" && box2 === "O" && box3 === "X" && box4 === "O" && box5 === "O" && box6 === "X" && box7 === "X" && box8 === "X" && box9 === "O") tie();
            if (box1 === "O" && box2 === "X" && box3 === "X" && box4 === "X" && box5 === "O" && box6 === "O" && box7 === "O" && box8 === "X" && box9 === "X") tie();
            if (box1 === "O" && box2 === "X" && box3 === "O" && box4 === "X" && box5 === "O" && box6 === "X" && box7 === "X" && box8 === "O" && box9 === "X") tie();
            if (box1 === "O" && box2 === "X" && box3 === "X" && box4 === "X" && box5 === "O" && box6 === "O" && box7 === "X" && box8 === "O" && box9 === "X") tie();
            if (box1 === "X" && box2 === "O" && box3 === "X" && box4 === "X" && box5 === "X" && box6 === "O" && box7 === "O" && box8 === "X" && box9 === "O") tie();
            if (box1 === "X" && box2 === "O" && box3 === "O" && box4 === "O" && box5 === "X" && box6 === "X" && box7 === "X" && box8 === "X" && box9 === "O") tie();
            if (box1 === "O" && box2 === "O" && box3 === "X" && box4 === "X" && box5 === "X" && box6 === "O" && box7 === "O" && box8 === "X" && box9 === "X") tie();
            if (box1 === "X" && box2 === "X" && box3 === "O" && box4 === "O" && box5 === "O" && box6 === "X" && box7 === "X" && box8 === "X" && box9 === "O") tie();
            if (box1 === "X" && box2 === "X" && box3 === "O" && box4 === "O" && box5 === "X" && box6 === "X" && box7 === "X" && box8 === "O" && box9 === "O") tie();
            if (box1 === "O" && box2 === "X" && box3 === "O" && box4 === "O" && box5 === "X" && box6 === "X" && box7 === "X" && box8 === "O" && box9 === "X") tie();
            if (box1 === "X" && box2 === "O" && box3 === "X" && box4 === "O" && box5 === "X" && box6 === "X" && box7 === "O" && box8 === "X" && box9 === "O") tie();
            if (box1 === "O" && box2 === "X" && box3 === "X" && box4 === "X" && box5 === "X" && box6 === "O" && box7 === "O" && box8 === "O" && box9 === "X") tie();
    }, [feedback, box1, box2, box3, box4, box5, box6, box7, box8, box9])



  return (
      <>
      <h1 className="heading"><b>{users} {ex} NEXT</b></h1>
        <div className="mainbox">

                <div id="one" onClick={go} className={s1}>{box1}</div>
                <div id="two" onClick={go} className={s2}>{box2}</div>
                <div id="three" onClick={go} className={s3}>{box3}</div>
                <div id="four" onClick={go} className={s4}>{box4}</div>
                <div id="five" onClick={go} className={s5}>{box5}</div>
                <div id="six" onClick={go} className={s6}>{box6}</div>
                <div id="seven" onClick={go} className={s7}>{box7}</div>
                <div id="eight" onClick={go} className={s8}>{box8}</div>
                <div id="nine" onClick={go} className={s9}>{box9}</div>
        </div>
    </>
  );
}

export default App;
