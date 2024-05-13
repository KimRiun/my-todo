import React, { useEffect, useState } from "react";

/*
마운트 : 컴포넌트가 생성될 때
렌더링 : 컴포넌트가 그려질때
언마운트 : 컴포넌트를 삭제할 때

useEffect: 
마운트 되거나, state에 변경이 일어나면 실행됨 
*/

export default function BlinkComponent({text}) {
    const [showText, setShowText] = useState(true);
    // const X = useState(초기값) , 배열이 반환됨
    // X[0]: State 자체, X[1]: State를 변경할 수 있는 함수

    /*
    // 빈배열일때 처음에 마운트될 때 한 번 호출된다
    useEffect(() => {
        console.log(1); //최초에 마운트될때 한번만 찍힘
        const timeoutId = setInterval(() => {
            //console.log(2)//마운트될때 등록된 interval 함수가 계속 동작해서 2가 계속 찍힘
            // setShowText(!showText); -> 이러면 useEffet의 두번째 인자 [showText]추가 필요
            console.log('외부 showText', showText); //이 함수가 호출될때 값을 참조  console.log('외부 showText', false);
            setShowText((showText) => {
                console.log('내부 showText', showText);
                return !showText;
            }); // Q. 왜 !showText 는 안되지?

            // const setShowText(p){
            //     if (p instanceof Function){
            //         const originState = p(originState)
            //     }
            //     else{
            //         const originSTate = p;
            //     }
            // }
        }, 5000);
        return () => {
            console.log(3);
            clearInterval(timeoutId)} //언마운트될때 실행되는거.
    }, [])
    */

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('호출');
            setShowText(() => {
                console.log(!showText);
                return !showText;
            });
        }, 3000);
        return () => {
            console.log('clear')
            clearInterval(intervalId);
        }
    }, [showText]);

    return (
        <div>
            {showText? "true" : "false"}
            {showText? text : null}
        </div>
    )
}