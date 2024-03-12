import { renderHook, act } from "@testing-library/react";
import { useDivideData } from "./useDivideData";


const fruits = [
    '1사과', '2바나나', '3망고', '4수박', '5딸기', '6귤', '7레몬', '8오렌지', '9토마토', '10포도'
];

describe('useDivideData 커스텀 훅 테스트', ()=>{
    test('원본 배열로부터 지정된 길이를 갖는 배열을 반환해야 한다.', ()=>{
        const { result } = renderHook(()=> useDivideData(fruits, 3));
        expect(result.current.dividedArr).toEqual(['1사과', '2바나나', '3망고']);
    });

    test('next 호출 시 다음 페이지의 배열을 반환해야 한다.', ()=>{
        const { result } = renderHook(()=> useDivideData(fruits, 3));

        act(() => {
            result.current.next()
        });

        expect(result.current.dividedArr).toEqual(['4수박', '5딸기', '6귤']);
    });

    test('previous 호출 시 이전 페이지의 배열을 반환해야 한다.', ()=>{
        const { result } = renderHook(()=> useDivideData(fruits, 3));

        act(() => {
            result.current.previous()
        });

        expect(result.current.dividedArr).toEqual(['1사과', '2바나나', '3망고']);
    });
});

