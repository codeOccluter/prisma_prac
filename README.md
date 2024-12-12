# 제목 - Prisma Practice Project ( PPP )
TS 및 JS을 사용하는 개발 환경에서 DB와 상호작용하는 ORM 도구인 Prisma를 익히는 학습 프로젝트 <br/>

# 설명
특별한 주제는 없는 프로젝트입니다. <br/>
주요 기술 스택으로는 TS, PostgreSQL, Prsima, Next.js를 사용했습니다. <br/>
이러한 기술을 결합하여 백엔드, 프론트엔드 간의 통합을 경험하고,<br/>
Prisma를 활용한 데이터베이스 조작과 Next.js를 이용한 효율적인 UI 구성 방법을 학습합니다.<br/>
특히, 이 프로젝트는 복잡한 비즈니스 로직 없이 순수히 기술 스택을 익히는데 중점을 두었습니다.<br/>
연습용 프로젝트임을 참고해주시면 감사하겠습니다.

# 목적
이 프로젝트의 목표는 TS, Next.js를 비롯한 다양한 개발 언어와 기술, 라이브러리등을 익히는데 있습니다. <br/>
본격적인 프로젝트를 제작할 때, 초기 세팅을 원활하게 할 수 있도록 기본환경을 구축하며, <br/>
다른 프로젝트 제작 시에도 참조할 수 있도록 지속적으로 관리하고 업데이트할 계획입니다.

# 사용 기술
<img src="https://img.shields.io/badge/prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white">
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/nextjs-000000?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/postgresql-4169E1?style=for-the-badge&logo=postgreSQL&logoColor=white">

# 프로젝트 폴더 구조
- 작성 예정


# 서버 아키텍처
- 풀스택 프레임워크 Next.js 사용
  - 클라이언트 : 브라우저에서 실행되는 React 컴포넌트
    - 페이지 렌더링과 사용자 인터페이스(UI)가 주로 해당
  - 서버 : Next.js 내에서 API Route로 정의된 서버 코드
    - SSR 또는 SSG를 통해 페이지를 미리 렌더링
    - 서버 측 코드(/pages/api/*) 디렉토리에 정의된 API 라우트를 사용하여 데이터베이스와 상호작용
- PostgreSQL 사용
  - 서버 측에서 Prisma ORM을 통해 Next.js와 연결 ( DB Migration )
  - Prisma는 TS, JS에서 PostgreSQL과의 상호작용을 추상화하여 쉽게 사용이 가능하게 함
<br/>

![제목 없는 다이어그램 drawio](https://github.com/user-attachments/assets/051dd411-3e53-4089-96f7-3fa90c49f490)


# 개발자
문기훈 ( 現 모바일게임 서버개발자 )
