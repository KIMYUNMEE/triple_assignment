<h1 align="center">안녕하세요. 트리플(Triple) 사전과제를 수행한 김윤미입니다.😊</h1>

## 🔥 과제전형 준비하기!!! 할수있다!!!!! 🔥

## 미리 개발환경 채우기

### Next.js :  

nextjs는 React로 만드는 서버사이드 렌더링 프레인 워크입니다. 

1.클라이언트 렌더링의 경우 모든 js 파일을 로드하고 사용자는 웹을 보게됩니다. 이때까지 사용자는 많은 시간을 대기해야 합니다.

2.seo 문제 - 클라이언트 사이드의 경우 자바스크립트가 로드 되지 않은 경우 아무런 정보를 보이지 않습니다. 구글의 검색엔진의 경우 자바스크립트가 로드되지 않은 페이지를 검색엔진으로 스캔함으로 결론적으로 검색에 아무 페이지도 걸리지 않게 됩니다.

이 두가지를 해결하는 것이 서버렌더링입니다.

첫번째 문제는 서버에서 자바스크립트를 로딩함으로 클라이언트 측에서는 자바스크립트를 로딩하는 시간이 줄어들게 됩니다.

두번째 문제는 검색엔진이 자바스크립트를 읽는 것이 아닌 서버 측에서 자바스크립트, html, css를 만들어 컨텐츠를 직접 업로드 함으로 검색엔진에 게시글이 걸리게 됩니다.

또한 meta 태그를 자유롭게 추가함으로 seo를 용이하게 할수 있습니다.

### style-components :  

styled-components란 Javascript 파일 내에서 CSS를 사용할 수 있게 해주는 대표적인 CSS-in-JS 라이브러리로 React 프레임워크를 주요 대상으로 한 라이브러리입니다.

### Apollo :  

Apollo란 GraphQL의 클라이언트 라이브러리 중 하나로 GraphQL을 사용한다면 거의 필수적으로 사용하는 상태 관리 플랫폼입니다.

### React Query :   

리액트 애플리케이션에서 서버 상태 가져오기, 캐싱, 동기화 및 업데이트를 보다 쉽게 다룰 수 있도록 도와주며 클라이언트 상태와 서버 상태를 명확히 구분하기 위해서 만들어진 라이브러리입니다. https://react-query-v2.tanstack.com/overview
react-query에서 기존 상태 관리 라이브러리(redux, mobX)는 클라이언트 상태 작업에 적합하지만 비동기 또는 서버 상태 작업에는 그다지 좋지 않다고 말하고 있습니다.  
클라이언트 상태(Client State) 와 서버 상태(Server State)는 완전히 다르며 클라이언트 상태는 컴포넌트에서 관리하는 각각의 input 값으로 예를 들 수 있고 서버 상태는 database에 저장되어있는 데이터로 예를 들 수 있습니다.

### Turborepo :  

Turborepo는 JavaScript와 TypeScript 코드 베이스의 모노레포를 위한 고성능 빌드 시스템입니다.

### storybook :  

스토리북(Storybook)은 다양한 방식으로 사용되고 있는 UI 컴포넌트 개발 도구입니다.  
회사의 UI 라이브러리를 내부 개발자들을 위해 문서화(documentation)하기 위해서 사용할 수 있고, 외부 공개용 디자인 시스템(Design System)을 개발하기 위한 기본 플랫폼으로도 사용할 수 있습니다.
스토리북(Storybook)을 기본 구성 단위는 스토리(Story)이며 하나의 UI 컴포넌트는 보통 하나 이상의 Story를 가지게 됩니다.
각 Story는 해당 UI 컴포넌트가 어떻게 사용될 수 있는지를 보여주는 하나의 예시라고 비유하면 이해하기가 쉽습니다.

### chromatic :  

스토리북(Storybook) 배포하기 위해서 스토리북 관리자가 만든 무료 배포 서비스를 Chromatic라고 합니다.
크로마틱(Chromatic)으로 클라우드에서 스토리북을 안전하게 배포하고 호스팅 할 수 있습니다.

### cypress :  
웹이 정상적으로 동작하는지 자동으로 테스트하는 기능입니다.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------
## 과제 시작하기  

### Triple 개발 

1. 최종 화면  



![ezgif com-gif-maker](https://user-images.githubusercontent.com/75771515/176848884-d616fa70-db0f-4e9f-9c1c-d21bb177e594.gif)  


2. CRA(Create-react-app)  

터미널에 npx create-react-app triple_assignment --template typescript 입력하기(= React를 이용해서 triple_assignment라는 리액트프로젝트 이름과 Typescript를 사용하기 위해 같이 설치합니다.)  

3. css 환경 설정하기 -> css:styled-components  

<details>
<summary>styled-components란</summary>
<div markdown="1">  
 
styled-components란 Javascript 파일 내에서 CSS를 사용할 수 있게 해주는 대표적인 CSS-in-JS 라이브러리로 React 프레임워크를 주요 대상으로 한 라이브러리입니다.  
 
React에서 컴포넌트가 많으면 분리되어 있는 css파일들을 일일히 찾아 수정하는것에 대해 불편함을 느낄 때 styled-components를 사용한다면 css를 컴포넌트화해서 사용 가능합니다.  
 
</div>
</details>  

```
설치하기 : npm install --save styled-components 설치 후 적용할 프로젝트 파일에 import styled from 'styled-components'; 
```  


4. 절대경로를 설정해서 경로를 간단하게 설정하기  

tsconfig.json파일에 
```
"baseUrl": "src"
``` 

코드를 추가하면 image 파일이나 다른 file들 등 현재 써야할 위치가 깊을 때 절대경로를 설정하면 src부터 찾을 수 있어 편리합니다.  

5. reset css를 설정하기 위해서 styled-components의 Styled-Components Reset 초기설정 하기  

```
 npm install --save styled-components
 ``` 
 
<details>
<summary>(추가) reset css가이드</summary>
<div markdown="1"> 
reset css가이드는 여러개가 있는데 그중 대표적으로 Eric Meyer Reset.css v2.0(Reset초기화 가이드 ), necolas Normalize.css v8.0.1 (Nomarlize 초기화 가이드),
Sanitize.css v13.0.0 (혼합 초기화 가이드)등이 있습니다.  
 
대중적으로 가장 많이 쓰는 reset css 가이드는 Sanitize.css에서 업그레이드된 토미집css입니다.( = Sanitize.css를 기반으로 다른 CSS 초기화 문서를 참고하면서 평소 자주 사용하
는 코드 추가 및 정리한 css집)

(참고) https://blog.tommyzip.co.kr/code/css-initialization-guide/
 
</div>
</details>  


6. Eslint, Prettier 설정하기  
  
8. Semantic Markup을 위해 Main으로 잡고 하나의 Section으로 감싸주기


### 화면 구현하기

1. component 생성하기 

2. component 생성 후 styled-components 이용해서 스타일링 하기

3.  animation.tsx 및 hooks(useCountUp,useVisiblity), styles 만들기 

### 폴더 구조 구성하기  

![구조도](https://user-images.githubusercontent.com/75771515/176837538-ac6aaefd-0d67-4282-b373-195aad8ba1e9.png)  

### 코드 분석 및 실행 방식 (프로젝트 실행방법)  

![최종완료](https://user-images.githubusercontent.com/75771515/176939815-df15b41d-a0ef-4c19-a11a-ff08b67612f6.png)  
  
<u>화면상으로 파일이 잘 보이지 않을거 같아 추가로 PSD파일zip으로 첨부합니다.</u>  

최종코드분석 및 실행.zip](https://github.com/KIMYUNMEE/triple_assignment/files/9030599/default.zip)


<h2 align="left">📚 사용한 기술 📚</h2>
<span> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"> </span>
<span> <img src="https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> </span>
<span> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> </span>
<span> <img src="https://img.shields.io/badge/Semantic Web-005A9C?style=for-the-badge&logo=React&logoColor=white"> </span>

## 이 기술들을 사용한 이유

### React:  

1.Virtual DOM의 존재  

기존의 DOM은 페이지가 바뀔 때마다, 새 HTML를 로드하면서 DOM 전체를 바꾸게 됩니다.
그에반해 Virtual Dom은 React 컴포넌트가 리턴하는 값에 의해 만들어져서 실제 보이고 있는 DOM과 비교해서 달라진 부분만 찾아내어 바꾸게 됩니다.  
이러한 Virtual DOM 때문에 React에서 컴포넌트 단위의 개발이 가능하게 됩니다.  

2.Component를 사용한 재사용이 가능하고 유지보수의 용이함  

웹화면에서 다른 버튼을 누르거나 업데이트 될때 새로고침이 없이 변경되는 모습, 마치 앱처럼 보이는 동적인 웹 페이지 SPA(Single Page Application), CSR(Client Side Rendering)의를 사용한 페이지로 component를 사용한다면 재사용이 가능하고 유지보수하는데 유용합니다.  

이렇게 React를 사용하면 사용자 경험이 좋아짐 (가독성) (웹에서 앱과 같은 사용자 경험) / 재사용 컴포넌트(유지보수) - 중복되는 요소들을 하나로 묶어줘 유지보수가 편리합니다.
이러한 장점 때문에 React를 사용하게 되었습니다.  

### Typescript :
Typescript: javascript 대신 Typescript를 사용하게 된 이유는 여러 이유가 있겠지만 그 중 써야할 이유가 있어서 사용하게 되었습니다.  

일단 둘의 차이점을 비교해 보았습니다.   


|Javascript|**Typescript**|
|------|---|
|동적타입 언어|정적타입 언어|
|인터프리터 언어|컴파일 언어|
|독립적으로 사용가능 |자바스크립트에 의존적임(자바스크립트로 컴파일 후 실행됨)|
|좀 더 유연함 (타입에 제한을 받지 않으므로) |더 나은 구조와 간결함, 일관성, 재사용성|
|.js 확장자 |.ts 확장자)|
|작고 간단한 프로젝트에 적합함|	복잡한 프로젝트에 적합함|	 


JavaScript는 동적 타입의 인터프리터 언어입니다.  

동적 타입이라는 의미는 number, string과 같은 자료형의 타입을 소스 코드를 빌드하는 컴파일 환경이 아닌, 실행하는 런타임 환경에서 결정한다는 의미입니다.  
이런것이 편하고 빠르게 개발할 수 있는 장점이 있으나, 예기치 못한 에러를 발생하는 원인으로 작용하기도 합니다.    

1. 에러 예방  

자바스크립트는 선언할 때 타입을 지정해주지 않기 때문에 동작하면서 예기치 않은 에러가 발생할 수도 있습니다.  
더군다나 Javascript는 인터프립터 언어로 그런 버그들을 찾는 것 조차 쉽지 않습니다.  
컴파일 과정이 없기 때문에 에러를 출력하지 않고 실행되기 때문입니다.  
타입스크립트를 사용한다고해서 모든 에러를 막을 수 있는 것은 아니지만 적어도 컴파일단계에서 타입관련 에러는 막을 수 있습니다.

2. 더 나은 개발자 경험과 코드 퀄리티 향상   

자바스크립트로 코드를 작성할 때, 객체의 필드나 함수의 매개변수로 들어오는 값이 여러 파일들을 찾아야 하는 상황이 발생합니다.  
하지만 타입스크립트를 사용함으로써 얻을 수 있는 가장 큰 장점중에 하나는 변수의 이름뿐만 아니라 그 데이터의 "type"까지 알 수 있게 해준다는 것입니다. 
타입이 존재함으로써 코드의 안전성이 높아지고 코드 작성이 좀 더 쉽고 직관적이게 만들어줍니다.
타입을 통해 특정 로직이 어떤 역할을 수행하는지 등 가독성이 높아지는 효과도 있다
또한 오브젝트 안의 속성값을 하나하나 기억할 필요없이 IDE가 자동으로 리스트업 해주기 때문에 개발자분들이 편해질 수 있습니다.

3. 크로스브라우징(브라우저 호환성) 문제 해결

호환성을 고려하면서 개발하는것에 대해 쉽지 않는 상황이 있다면  
타입스크립트는 컴파일 과정에서 ES6+ 문법들을 ES5(또는 ES3)로 바꿔주기 때문에 Babel의 도움 없이 크로스브라우징 문제를 해결할 수 있습니다. 

이러한 Typescript의 장점 때문에 사용하게 되었습니다. 실제로 작업하면서 많은 장점이 있지만 그 중 type지정과 에러를 미리 예방할 수 있다는 점에 대해 편리함을 느꼈습니다.
더군다나 협엽하는 환경에서도 미리 타입지정하게 된다면 가독성도 좋아지기 때문에 다른 개발자분들에게도 도움이 될거라고 생각이 들었습니다.  

### styled-components: 

1. component 단위 스타일링

styled-components로 생성된 Components들을 빌드하면 임의의 클래스 명에 스타일이 적용되어 있는 것을 확인 할 수 있습니다.  
styled-components는 중복되지 않는 특정 class명을 생성해 스타일을 적용하기 때문에,  
className이 중복되거나 selector의 우선 적용 순위 때문에 css 스타일링이 혼선을 일으키는 사고를 방지 할 수 있습니다.

2. 조건부 스타일링

styled-components는 Component의 props를 전달받아 사용하는 것이 가능합니다. props를 파라미터로 실행됩니다.

3. 확장 스타일링

styled-components는 새로운 Component를 선언하는 것 뿐만 아니라, 기존의 Component에 스타일을 추가하는 것도 가능합니다.
확장 스타일링을 사용하면 중복된 코드 양을 줄이고, 분산된 스타일을 일관적으로 관리 할 수 있어 유지보수에도 용이합니다.

이뿐만 아니라 styled-components의 장점이 많지만 특히 작업하면서 위와 같이 확장 스타일링에 크게 매력을 느꼈습니다.
스타일링을 할때 2개의 components에 중복되는 속성, 속성값이 있었는데 (컴포넌트명)을 전달함으로써 코드양을 줄일 수 있어 가독성도 좋아지고 속성값들을 한번에 관리할 수 있어 편리했던 경험이 있습니다. 이러한 이유로 선택하게 되었습니다. 

### semantic-Markup:  

의미있는 요소(Semantic Elements)의 태그들을 사용하여 문서를 정보 구조에 맞게 마크업한다는 것입니다.

1. 기계와 사람의 일치  

좋은 정보구조는 해당 문서를 사람과 기계가 동일하게 이해하도록 도와줍니다. 

사용자는 CSS로 꾸며진 웹을 통해 볼드로 적혀진 부분이 중요한 정보이고, 한 제목과 한 문단이 한 덩어리의 정보를 만든다는 것을 시각적으로 인식할 수 있습니다.
기계는\<h1> 을 통하여 제목이라는 것을, \<article> 을 통하여, 한 덩어리의 정보라는 것을 인식할 수 있습니다.

2. 웹 접근성  

누구나 인터넷(웹) 개별 사이트에 접근하기 쉽게 기술적으로 보장하는 일입니다.
특히 장애인이거나 나이가 많아 인터넷을 이용하기 어려운 이를 돕는 게 목표입니다.

시각 장애인은 스크린 리더로 웹을 본다. 스크린 리더는 HTML 문서를 읽어내려가며, 각 요소들의 내용을 음성으로 알려주는 장치입니다.

사진, 영상 등의 미디어의 경우 alt 속성에 있는 텍스트를 읽어주어, 시각 장애인도 문제없이 모든 정보에 접근할 수 있도록 도와줍니다.
그렇기 때문에 마크업을 하는 개발자는 모든 사람이 내가 만든 문서에 접근할 수 있도록 도움을 주어야합니다.
Semantic Tag를 이용하여 문서를 제작하면 접근성을 높일 수 있습니다.  

3. 유지 보수, 협업
다른 사람들도 수정을 하고, 협업을 해야하는 페이지라면 모두가 알아보기 쉽게 코드를 작성해야합니다.
Semantic Markup은 기계에게도 의미를 전달해주지만, 동료 개발자에게도 의미를 전달해주므로 유지보수, 협업에 도움이 됩니다.
 
시멘틱 마크업을 하는 이유는 위와 같이 다양한 이유가 있지만 이 중에도 '웹 접근성'을 높이기 위해 사용합니다.
예전에 스크린 리더를 들어본 경험이 있습니다. 장애가 있거나 나이가 많아 웹에 접근하기 어려운 분들에게는 스크린 리더가 유일하게 도움을 주는 도구인데
접근성에 유의하지 않고 작업한다면 시각적으로는 문제가 없겠지만 웹 이용에 어려움을 느끼는 분들에게는 전혀 도움이 되지 않겠다는 생각이 들었습니다.
그렇기 때문에 semantic-Markup에 신경쓰고 작업한다면 나뿐만 아니라 협업하는 개발자분들 그리고 실제로 웹을 이용하는 사용자분들에게도 유익할것이라 생각이 들어 
이 기술을 사용하게 되었습니다.

항상 https://developer.mozilla.org/en-US/docs/Web/HTML/Element 보며 Semantic Markup에 유의하며 작성해야겠다고 생각햇습니다.


-----------------------------------------------------------------------------------------------------------------------

## 오류 발생

### 1.문제 발생 :   

Can't resolve 'styled-components' in ~~~ 

### 2. 원인 분석 :  

npm install styled-components 설치한 다음에 Typescript(타입스크립트)와 함께 사용하기 위한 라이브러리 설치로 npm i --save-dev @types/styled-components 했어야 했는데 npm i --save-dev @types/styled-components 먼저 설치했습니다.

추가로 문득 모듈을 설치할 때 --save--dev가 붙는 이유가 궁금해서 찾아보았습니다.  

**--save-dev는 개발전용으로`$npm install --save-dev [모듈이름]`으로 설치하는것은 모듈을 설치할 때 package.json 내의 devDependencies 항목에 설치한 모듈과 버전을 넣는 것을 뜻합니다.dev로 시작되는 이름에서 볼 수 있듯이 개발용으로 쓸 경우 devDependencies에 기록합니다. 
참고자료:https://ingorae.tistory.com/1754  

항상 설치할때 그냥 명령어를 입력하곤 했는데 확실히 쓰는 이유에 대해 알고 나니 많은 도움이 되었습니다.  

### 문제 해결 : 

npm install styled-components 먼저 설치 후 npm i --save-dev @types/styled-components해야 제대로 styled-componets가 작동합니다.

### 2.문제 발생 :  

![t문제발생](https://user-images.githubusercontent.com/75771515/176838051-2d4e65c7-abf8-4f10-b908-557995b95366.png)

### 원인 분석 :  
깃의 원격저장소와 현재 로컬저장소가 동기화되어 있지 않기때문에 나타나는 문제 

### 문제 해결 :  
동기화 해주기  

```
(git pull --rebase [원격저장소별칭] [브랜치])  
```

(참고)https://duckracoon.tistory.com/entry/Git-Push-%EC%97%90%EB%9F%AC-Rejected-main-main-Fetch-First-Error-Failed-To-Push-Some-Refs-To

### 3. 문제 발생 :  

초기작업시 Argument of type 'HTMLElement | null' is not assignable to parameter of type 'Element | DocumentFragment'.   Type 'null' is not  

assignable to type 'Element | DocumentFragment'. 에러 문구 발생

### 문제 분석:   

getElementById를 통해 받아오는 객체의 Type을 지정해주지 않았기 때문이다. TypeScript가 데이터 타입을 알려주지 않았기 때문입니다. 

### 문제 해결 :
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
이번 기회로 git 관리에 대해 더 정확하게 알게 되었고 협엽하는 환경에서 반드시 완벽하게 마무리해야겠다는 생각이 들었습니다. 
그리고 기존에 공부했었던 typescript를 써보면서 기존의 jajvascript보다 유용하게 쓸 수 있었습니다.  
특히 type을 미리 지정해놓을 수 있는 것과 미리 에러를 예방할 있는 것에 대해 편리함을 느꼈습니다.  

여기서 더 나아가 Next.js, Babel, Jest 등 많이 익숙하지 않은 개발환경 및 테스트 기능을 더 공부할 예정입니다.
짧다면 잛고 길다면 긴 기간동안 과제를 하면서 잘 풀리지 않아 속상할때도 많았지만 과제를 진행할수록 간절하게 '어제보다 오늘이 오늘보다 내일이 성장하는' 제가 되고 싶다는 생각을 하게 되었습니다. 
