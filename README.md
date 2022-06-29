# Triple assignment
## 과제전형 준비하기!!! 할수있다!!!!!

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

## 자격 요건

### 1.React
### 2.Typescript : 자바스크립트의 타입부분을 업그레이드해서 사용하고싶을 때 설치해서 쓰는 것이다!
### 3.Semantic Markup : 의미있는 요소(Semantic Elements)로 작성하는 것 시멘틱 마크업을 하는 이유는 다양한 이유가 있겠지만 특히 검색 엔진 최적화, 웹접근성, 가독성에 장점 / 항상 https://developer.mozilla.org/en-US/docs/Web/HTML/Element 보며 Semantic Markup에 유의하며 작성하자!

-------------------------------------------------------------------------------------------------------------------------------------------------------------------
## 과제 시작하기

### 1. 작업할 화면  ![main](https://user-images.githubusercontent.com/75771515/175972553-cef10ecd-fee2-424a-9bf6-1a5dcafd01f2.png)
### 터미널에 npx create-react-app triple_assignment --template typescript 입력하기(= React를 이용해서 triple_assignment라는 리액트프로젝트 이름과 Typescript를 사용하기 위해 같이 설치합니다.)
### 2. 환경 설정하기 => css:styled-components 
### styled-components란 Javascript 파일 내에서 CSS를 사용할 수 있게 해주는 대표적인 CSS-in-JS 라이브러리로 React 프레임워크를 주요 대상으로 한 라이브러리입니다.
### React에서 컴포넌트가 많으면 분리되어 있는 css파일들을 일일히 찾아 수정하는것에 대해 불편함을 느낄 때 styled-components를 사용한다면 css를 컴포넌트화해서 사용가능! 제일 좋은 이유는 css에 props를 사용할 수 있습니다.
설치하기 : npm install --save styled-components 설치 후 적용할 프로젝트 파일에 import styled from 'styled-components'; 

### 절대경로를 설정해서 경로를 간단하게 설정하기
### reset css를 설정하기 위해서 styled-components의 Styled-Components Reset 초기설정 하기

### 그전에 reset css설정하기
### reset css가이드는 여러개가 있는데 그중 대표적으로 Eric Meyer Reset.css v2.0(Reset초기화 가이드 ), necolas Normalize.css v8.0.1 (Nomarlize 초기화 가이드) Sanitize.css v13.0.0 (혼합 초기화 가이드)등이 있는데 대중적으로 많이 쓰는 Sanitize.css에서 업그레이드된 토미집css 초기화를 이용하기로 했다. (Sanitize.css를 기반으로 다른 CSS 초기화 문서를 참고하면서 평소 자주 사용하는 코드 추가 및 정리)
### https://blog.tommyzip.co.kr/code/css-initialization-guide/ 참고했습니다.
### Eslint, Prettier 설정하기 
### 3. 먼저 ui화면 구현하기
### 구현해야 할 화면 
![main](https://user-images.githubusercontent.com/75771515/175972529-4c58fcbd-29ec-4641-92e0-a68b34d175a9.png)
 ### TripleLogo components 생성하기
![제작하기2](https://user-images.githubusercontent.com/75771515/176358047-d458e215-2f90-4aab-a9a3-99af55c5ee00.png)
### Semantic tag를 위해 Main으로 감싸주기



### 오류 발생

#### 문제 발생 : Can't resolve 'styled-components' in ~~~ 

#### 문제 해결 : npm install --save styled-components 먼저 설치 후 npm i --save-dev @types/styled-components해야 제대로 styled-componets가 작동한다.
