<h1 align="center">안녕하세요. Triple 사전과제를 수행한 김윤미입니다.😊</h1>
<h2 align="left">📚 사용한 기술 📚</h2>
<span> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"> </span>
<span> <img src="https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> </span>
<span> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> </span>
<span> <img src="https://img.shields.io/badge/Semantic Web-005A9C?style=for-the-badge&logo=React&logoColor=white"> </span>

## 🔥 과제전형 준비하기!!! 할수있다!!!!! 🔥
<span style="color:yellow">자격 요건</span>
## 개발환경 채우기

### Next.js 

### style-components

### Apollo 

### React Query : 

#### 리액트 애플리케이션에서 서버 상태 가져오기, 캐싱, 동기화 및 업데이트를 보다 쉽게 다룰 수 있도록 도와주며 클라이언트 상태와 서버 상태를 명확히 구분하기 위해서 만들어진 라이브러리이다. https://react-query-v2.tanstack.com/overview
#### react-query에서 기존 상태 관리 라이브러리(redux, mobX)는 클라이언트 상태 작업에 적합하지만 비동기 또는 서버 상태 작업에는 그다지 좋지 않다고 말하고 있다.클라이언트 상태(Client State) 와 서버 상태(Server State)는 완전히 다르며 클라이언트 상태는 컴포넌트에서 관리하는 각각의 input 값으로 예를 들 수 있고 서버 상태는 database에 저장되어있는 데이터로 예를 들 수 있다.

### Turborepo

### storybook

### chromatic

### cypress :웹이 정상적으로 동작하는지 자동으로 테스트하는 기능
### 1.React
### 2.Typescript : 자바스크립트의 타입부분을 업그레이드해서 사용하고싶을 때 설치해서 쓰는 것이다!
### 3.Semantic Markup : 의미있는 요소(Semantic Elements)로 작성하는 것 시멘틱 마크업을 하는 이유는 다양한 이유가 있겠지만 특히 검색 엔진 최적화, 웹접근성, 가독성에 장점 / 항상 https://developer.mozilla.org/en-US/docs/Web/HTML/Element 보며 Semantic Markup에 유의하며 작성하자!

-------------------------------------------------------------------------------------------------------------------------------------------------------------------
## 과제 시작하기

1. 최종 화면
![ezgif com-gif-maker](https://user-images.githubusercontent.com/75771515/176848884-d616fa70-db0f-4e9f-9c1c-d21bb177e594.gif)  

2.터미널에 npx create-react-app triple_assignment --template typescript 입력하기(= React를 이용해서 triple_assignment라는 리액트프로젝트 이름과 Typescript를 사용하기 위해 같이 설치합니다.)  

3. 환경 설정하기 => css:styled-components 
<details>
<summary>styled-components란</summary>
<div markdown="1">       
styled-components란 Javascript 파일 내에서 CSS를 사용할 수 있게 해주는 대표적인 CSS-in-JS 라이브러리로 React 프레임워크를 주요 대상으로 한 라이브러리입니다.
React에서 컴포넌트가 많으면 분리되어 있는 css파일들을 일일히 찾아 수정하는것에 대해 불편함을 느낄 때 styled-components를 사용한다면 css를 컴포넌트화해서 사용 가능합니다.
제일 좋은 이유는 css에 props를 사용할 수 있습니다.
설치하기 : npm install --save styled-components 설치 후 적용할 프로젝트 파일에 import styled from 'styled-components'; 
</div>
</details>  

4. 절대경로를 설정해서 경로를 간단하게 설정하기 => tsconfig.json파일에 
```
"baseUrl": "src"
```
코드를 추가하면 image 파일이나 다른 file들 등 현재 써야할 위치가 깊을 때 절대경로를 설정하면 src부터 찾을 수 있어 편리합니다.


### 5. reset css를 설정하기 위해서 styled-components의 Styled-Components Reset 초기설정 하기
```
 npm install --save styled-components
 ```
 <details>
<summary>추가reset css가이드</summary>
<div markdown="1">       
### reset css가이드는 여러개가 있는데 그중 대표적으로 Eric Meyer Reset.css v2.0(Reset초기화 가이드 ), necolas Normalize.css v8.0.1 (Nomarlize 초기화 가이드) Sanitize.css v13.0.0 (혼합 초기화 가이드)등이 있는데 대중적으로 많이 쓰는 reset css 가이드는 Sanitize.css에서 업그레이드된 토미집css입니다.(=Sanitize.css를 기반으로 다른 CSS 초기화 문서를 참고하면서 평소 자주 사용하는 코드 추가 및 정리한 css집)
### (참고) https://blog.tommyzip.co.kr/code/css-initialization-guide/
</div>
</details>  

### 6. Eslint, Prettier 설정하기 

### 7. Semantic Markup을 위해 Main으로 잡고 하나의 Section으로 감싸주기

### ui화면 구현하기
 ### 처음 제작해본 레이아웃 및 컴포넌트명 정하기
![제작하기2](https://user-images.githubusercontent.com/75771515/176358047-d458e215-2f90-4aab-a9a3-99af55c5ee00.png)

### component 생성하기 

### component 생성 후 styled-components 이용해서 스타일링 하기

### 애니메이션 및 countUp함수 만들기 

### 폴더 구조 구성하기  

### ![구조도](https://user-images.githubusercontent.com/75771515/176837538-ac6aaefd-0d67-4282-b373-195aad8ba1e9.png)  

### 코드 분석 및 실행 방식

![최종완료](https://user-images.githubusercontent.com/75771515/176939815-df15b41d-a0ef-4c19-a11a-ff08b67612f6.png)  
<u>화면상으로 파일이 잘 보이지 않을거 같아 추가로 PSD파일zip으로 첨부합니다.</u>  

최종코드분석 및 실행.zip](https://github.com/KIMYUNMEE/triple_assignment/files/9030599/default.zip)

**이 기술을 사용한 이유 **

React: 
Typescript:
왜 TypeScript를 사용하는가?
JavaScript는 동적 타입의 인터프리터 언어이다.

동적 타입이라는 의미는 number, string과 같은 자료형의 타입을

소스 코드를 빌드하는 컴파일 환경이 아닌, 실행하는 런타임 환경에서 결정한다는 의미이다.

이는 편하고 빠르게 개발할 수 있는 장점이 있으나, 예기치 못한 에러를 발생하는 원인으로 작용하기도 한다.

여담이지만, 이 때문에 JAVA, C, C++과 같은 정적 타입의 언어와 달리 JavaScript, Python과 같은 동적 타입의 언어를 싫어하는 개발자도 있다고 알고 있다.

본론으로 그래서 왜 TypeScript를 사용하는 걸까?

TypeScript를 간단하게 설명하자면 타입이 적용된 JavaScript이다.

 타입 스크립트 컴파일러 또는 바벨(Babel)을 통해 자바스크립트 코드로 변환하는 과정이 필요한 것이 특징이다.

1. 타입이 존재

타입이 존재함으로써 코드의 안전성이 높아지고, 실제로 코드를 테스트하기 이전 단계(컴파일 환경)에서 에러를 캐치할 수 있다.

또한, 타입을 통해 특정 로직이 어떤 역할을 수행하는지 등 가독성이 높아지는 효과도 있다.

2. JavaScript 100% 호환

앞서 말한 바와 같이 TypeScript는 타입이 적용된 JavaScript이다.

따라서 이전 JavaScript로 작성된 프로젝트를 TypeScript로 점진적 리팩토링에 있어 매우 큰 강점을 갖는다.
styled-components:
semantic-Markup:

-----------------------------------------------------------------------------------------------------------------------
### 오류 발생

#### 1.문제 발생 : Can't resolve 'styled-components' in ~~~ 

#### 2. 원인 분석 : npm install styled-components 설치한 다음에 Typescript(타입스크립트)와 함께 사용하기 위한 라이브러리 설치로 npm i --save-dev @types/styled-components 했어야 했는데 npm i --save-dev @types/styled-components 먼저 설치했습니다.

추가로 문득 모듈을 설치할 때 --save--dev가 붙는 이유가 궁금해서 찾아보았습니다.  

**--save-dev는 개발전용으로`$npm install --save-dev [모듈이름]`으로 설치하는것은 모듈을 설치할 때 package.json 내의 devDependencies 항목에 설치한 모듈과 버전을 넣는 것을 뜻합니다.dev로 시작되는 이름에서 볼 수 있듯이 개발용으로 쓸 경우 devDependencies에 기록합니다. 
참고자료:https://ingorae.tistory.com/1754  

항상 설치할때 그냥 명령어를 입력하곤 했는데 확실히 쓰는 이유에 대해 알고 나니 많은 도움이 되었습니다.  

#### 문제 해결 : npm install styled-components 먼저 설치 후 npm i --save-dev @types/styled-components해야 제대로 styled-componets가 작동한다.

#### 2.문제 발생 :![t문제발생](https://user-images.githubusercontent.com/75771515/176838051-2d4e65c7-abf8-4f10-b908-557995b95366.png)

#### 원인 분석 : 깃의 원격저장소와 현재 로컬저장소가 동기화되어 있지 않기때문에 나타나는 문제 

#### 문제 해결 : 동기화 해주기 => (git pull --rebase [원격저장소별칭] [브랜치])  

(참고)https://duckracoon.tistory.com/entry/Git-Push-%EC%97%90%EB%9F%AC-Rejected-main-main-Fetch-First-Error-Failed-To-Push-Some-Refs-To

### 3. 문제 발생 : 초기작업시 Argument of type 'HTMLElement | null' is not assignable to parameter of type 'Element | DocumentFragment'.   Type 'null' is not assignable to type 'Element | DocumentFragment'. 에러 문구 발생

### 문제 분석: . getElementById를 통해 받아오는 객체의 Type을 지정해주지 않았기 때문이다. TypeScript가 데이터 타입을 알려주지 않았기 때문입니다. 

#### 문제 해결 :
```
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
 ```  
 
as HTMLElemnt로 타입을 지정해 주었습니다.
(참고)https://gentlesark.tistory.com/148


### triple 사전과제 느낀점✈️🙏
### 이번 triple 사전과제를 진행하면서 생각보다 쉽지 않았지만 최선을 다한 시간이였습니다.  
component를 나누는것들과 폴더 만들기 등 협업하기 좋은 개발자가 되기 위해서 많은 레퍼런스를 찾아봤습니다.  
숫자 올라가는 애니메이션을 구현할 때 Math함수의 Math.round를 처음에 하지 않아 값이 제대로 떨어지지 않아 처음에 많은 시간을 투자했습니다.  

그리고 예상치 못한 어려움은 git 관리였습니다. 
commit하는 과정에서 원격저장소와 로컬저장소가 동기화되지 않아 발생한 문제도 있었고 제가 많이 모르는 부분이 많았습니다.
이번기회로 git관리에 대해 더 정확하게 알게 되었고 협엽하는 환경에서 반드시 완벽하게 마무리해야겠다는 생각이 들었습니다. 
그리고 기존에 공부했었던 typescript를 써보면서 기존의 jajvascript보다 유용한점이 많아 편리했습니다. 특히 type을 미리 지정해놓을 수 있는 것과 props전달에 큰 장점을 느꼈습니다.  
여기서 더 나아가 Next.js, Babel, Jest 등 많이 익숙하지 않은 개발환경 및 테스트 기능을 더 공부할 예정입니다.
짧다면 잛고 길다면 긴 기간동안 과제를 하면서 잘 풀리지 않아 속상할때도 많았지만 과제를 진행할수록 간절하게 '어제보다 오늘이 오늘보다 내일이 성장하는' 제가 되고 싶다는 생각을 하게 되었습니다. 
