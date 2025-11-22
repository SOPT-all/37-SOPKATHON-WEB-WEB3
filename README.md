<div align="center">

<h2> Shamrock Tales </h2>

<img src=""  alt="서비스대표-이미지" />
<p>평범한 하루를 아일랜드식 설화로 바꿔, 가족만의 영원한 이야기로 남기는 AI 기록 서비스</p>

</div>

<h2> ✨ (서비스) 주요 기능 </h2>

<h3> 1️⃣ 경험 입력 </h3>
<img src=""  alt="기능1-대표이미지" />
<div >한두줄 입력만으로 완성되는 초간단 기록 입력<br/></div>

<h3> 2️⃣ 감정태그 </h3>
<img src=""  alt="기능1-대표이미지" />
<div >감정 태그(용기/소망/사랑) 선택<br/></div>

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
            공통 컴포넌트 헤더, 포스트 페이지 <br/>
      </td>
       <td>
            공통 컴포넌트 버튼, 아카이브 페이지 <br/>
      </td>
       <td>
            결과 페이지 <br/>
      </td>
        <td>
            메인페이지, 로딩중 <br/>
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
| init       | 빌드 시스템, 설치 등     |
| feat        | 새로운 기능 추가 및 구현 |
| fix         | 버그 수정 및 오류 해결     |
| style       | 코드의 기능이나 의미 변화가 없는 스타일적인 수정     |
| refactor       | 기능 변경이나 버그 수정 없이, 코드의 구조, 가독성, 유지보수성, 성능 등을 개선    |
| assets       | 정적인 에셋을 추가하거나 수정     |
| chore       | 코드와 직접적인 관련이 없는 소소한 관리 작업    |
| merge       | 개발 브랜치(dev)로 다른 브랜치를 병합(Merge)    |

<h3> 브랜치 </h3>

| 브랜치 | 용도 |
| ------ | ---- |
| main   | 배포 가능한 브랜치     |
| dev    | 개발 작업이 통합되는 브랜치     |
| feat| 새로운 기능 구현을 위한 브랜치     |
| fix    | 일반적인 버그를 수정하기 위한 브랜치     |
| hotfix | 심각한 긴급 버그를 수정하기 위한 브랜치     |

<br/>

<h2> 📁 프로젝트 구조 </h2>

```
📦 src/
├── 🗂️ apis/           # 백엔드 API 통신 로직
├── 🗂️ assets/         # 정적 파일 폴더
├── 🗂️ pages/          # 개별 페이지 컴포넌트들을 담는 폴더
├── 🗂️ router/         # 라우팅 관련 설정 파일
├── 🗂️ shared/         # 전역적으로 재사용되는 공통 요소
├── 🗂️ styles/         # 전역 스타일 설정 파일
├── 🗂️ types/          # 전역 타입 정의 (TypeScript 파일)
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
<a href='https://postimg.cc/YjNh2dMQ' target='_blank'><img src='https://i.postimg.cc/y6t9PGGp/Kakao-Talk-Photo-2025-11-22-22-09-28.jpg' border='0' alt='Kakao-Talk-Photo-2025-11-22-22-09-28'></a>
 
<h3>After</h3>
<img src="" alt="웨비 팀원들 사진 (after)"/>

