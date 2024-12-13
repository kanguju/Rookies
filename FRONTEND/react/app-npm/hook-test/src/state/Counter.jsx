/**
 * 상태 관리 매니저를 활용한 컴포넌트 구현
 *  - 종합 화면(컴포넌트 구성)
 *  - 해당 화면을 브라우저에 로드 -> 테스트
 */

import TowButton from "./TwoButton";
import View from "./View";
import View2 from "./View2";

export default function Counter(){
    return (
        <div>
            <p>카운터 : 전역상태관리(zustand 사용)</p>
            <View/>
            <TwoButton/>
            <View2/>
        </div>
    );
}