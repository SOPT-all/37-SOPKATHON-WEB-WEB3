<div align="center">

<h2> (서비스이름) </h2>

<img src=""  alt="서비스대표-이미지" />
<p>(서비스 소개)</p>

</div>

<h2> ✨ (서비스) 주요 기능 </h2>

<h3> 1️⃣ (기능 1) </h3>
<img src=""  alt="기능1-대표이미지" />
<div ><strong> (강조단어) </strong> (기능설명)  <br/></div>

<h3> 2️⃣ (기능 2) </h3>
<img src=""  alt="기능1-대표이미지" />
<div ><strong> (강조단어) </strong> (기능설명)  <br/></div>

<h2> 👥 Team </h2>

<table align="center">
    <tr align="center">
      <td style="min-width: 150px;">
            <a href="https://github.com/huniversal">
              <img src="https://avatars.githubusercontent.com/u/116941516?v=4" width="200" alt="이훈진-프로필사진">
              <br />
              <b>@huniversal</b>
            </a>
        </td>
      <td style="min-width: 150px;">
            <a href="https://github.com/jyeon03">
              <img src="https://avatars.githubusercontent.com/u/147830921?v=4" width="200" alt="백지연-프로필사진">
              <br />
              <b>@jyeon03</b>
            </a>
        </td>
      <td style="min-width: 150px;">
            <a href="https://github.com/sonnnnhe">
              <img src="https://avatars.githubusercontent.com/u/147504410?v=4" width="200" alt="손하은-프로필사진">
              <br />
              <b>@sonnnnhe</b>
            </a>
        </td>
        <td style="min-width: 150px;">
            <a href="https://github.com/twossu">
              <img src="https://avatars.githubusercontent.com/u/201346724?v=4" width="200" alt="최윤하-프로필사진">
              <br />
              <b>@twossu</b>
            </a>
        </td>
    </tr>
    <tr align="center">
       <td>
            이훈진 <br/>
      </td>
       <td>
            백지연 <br/>
      </td>
       <td>
            손하은 <br/>
      </td>
        <td>
            최윤하 <br/>
      </td>
    </tr>
  	<tr align="center">
       <td>
            (역할분담) <br/>
      </td>
       <td>
            (역할분담) <br/>
      </td>
       <td>
            (역할분담) <br/>
      </td>
        <td>
            (역할분담) <br/>
      </td>
    </tr>
</table>

<h2> 🛠 기술스택 </h2>

| 카테고리 | 기술 스택 |
| :--- | :--- |
| **UI Library** | ![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=for-the-badge) |
| **State Management** | ![Zustand](https://img.shields.io/badge/Zustand-5C6078?logo=zustand&logoColor=white&style=for-the-badge) |
| **Language** | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge) |
| **Build Tool** | ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white&style=for-the-badge) |
| **Styling** | ![Vanilla Extract](https://img.shields.io/badge/Vanilla%20Extract-FF69B4?logo=vanillaextract&logoColor=white&style=for-the-badge) |
| **Package Manager** | ![Pnpm](https://img.shields.io/badge/Pnpm-F69220?logo=pnpm&logoColor=white&style=for-the-badge) |
| **CI/CD** | ![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white&style=for-the-badge) |

<br/>

<h2>  📄 컨벤션 및 브랜치 전략 </h2>
<!-- 노션 링크 또는 표로 작성 -->

<a href="" />

<h3> 컨벤션 </h3>

| 커밋 컨벤션 | 용도 |
| ----------- | ---- |
| feat        |      |
|             |      |
|             |      |
|             |      |

<h3> 브랜치 </h3>

| 브랜치 | 용도 |
| ------ | ---- |
| main   |      |
|        |      |
|        |      |
|        |      |

<br/>

<h2> 📁 프로젝트 구조 </h2>

```
📦 src/
├── 🗂️ apis/           # 백엔드 API 통신 로직
│   └── 📄 .gitkeep
│
├── 🗂️ assets/         # 프로젝트 전역에서 사용하는 이미지, 폰트 등 정적 파일
│   └── 📄 react.svg
│
├── 🗂️ pages/          # 개별 페이지 컴포넌트들을 담는 폴더
│   └── 🗂️ home/
│       ├── 🗂️ components/  # Home 페이지 내부에서만 사용되는 컴포넌트
│       │   └── 📄 .gitkeep
│       └── 📄 HomePage.tsx  # Home 페이지의 메인 컴포넌트
│
├── 🗂️ router/         # 라우팅 관련 설정 파일
│   ├── 🗂️ constant/
│   ├── 📄 Layout.css.ts
│   ├── 📄 Layout.tsx
│   └── 📄 router.tsx
│
├── 🗂️ shared/         # 전역적으로 재사용되는 공통 요소
│   ├── 🗂️ assets/     # 공통 에셋 (별도 관리)
│   ├── 🗂️ components/ # 전역 컴포넌트 (UI Library의 역할)
│   │   ├── 🗂️ svg/
│   │   └── 🗂️ components/
├── 🗂️ hooks/          # 전역에서 사용되는 커스텀 훅
├── 🗂️ utils/          # 전역 유틸리티 함수
├── 🗂️ styles/         # 전역 스타일 설정 파일
├── 🗂️ types/          # 전역 타입 정의 (TypeScript 파일)
│   ├── 📄 button.ts
│   └── 📄 input.ts
│
├── 🗂️ components/     # (두 번째 스크린샷에서 보였던 상위 components 폴더와는 다른 구조로 보임)
│   ├── 🗂️ button/     # button 컴포넌트 폴더
│   ├── 🗂️ input/      # input 컴포넌트 폴더
│   ├── 🗂️ hooks/
│   └── 🗂️ utils/
├── 📄 App.tsx
└── 📄 main.tsx
```

<br/>

<h2> 🫶 우리 조 그라운드 룰 </h2>

<div><strong>규칙 1</strong> 화는 금물, 화가 날것같으면 용용체!~🐉 <br/></div>
<div><strong>규칙 2</strong> 언제나 질문은 환영~ <br/></div>
<div><strong>규칙 3</strong> 코드충돌 잘 해결하기!!(그냥 충돌을 내지 않도록 노력 아자스~)  <br/></div>
<div><strong>규칙 4</strong> 범인 색출 🚫금지🚫  <br/></div>
<div><strong>규칙 5</strong> 30분마다 스트레칭🏋️‍♀️ <br/></div>
<div><strong>규칙 6</strong> fun커톤이 되도록☘️ <br/></div>

<br/>

<h2>웹계인팟 Before and After</h2>
<h3>Before</h3>
![KakaoTalk_Photo_2025-11-22-22-09-28](https://github.com/user-attachments/assets/08af2ef7-a94a-47f6-8ebd-f0dfe8c120f9)
 
<h3>After</h3>
<img src="" alt="웨비 팀원들 사진 (after)"/>

