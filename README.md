# Startrip Frontend
빅데이터 기반의 명소 큐레이팅 서비스

## Installing
다음 명령을 사용하여 프로젝트 종속 항목을 설치하고 로컬 서버를 시작합니다.
```shell
$ yarn set version berry

$ yarn install 

$ yarn start
```

## 기술 구성

- React : CSR 방식
- TypeScript : 코드 타입 지정 및 견고화
- Axios : API와의 AJAX 통신
- Recoil : State management 및 비동기 AJAX 처리 
- MUI Design Component : 디자인 컴포넌트
- React-hook-form : 폼 데이터 및 양식 관리
- TOAST UI markdown Editor: 마크다운 에디터

## 프로젝트 스트럭쳐

1. `root`: 기본적인 설정 파일들
2. `build`: 웹팩설정
3. `types`: 타입스크립트 글로벌 타입
4. `public`: 스태틱
5. `src`: 개발소스
    1. `apis` ← API 호출 함수
    - `assets` ← 이미지 등 에셋
    - `components` ← 자주 사용하는 컴포넌트 (타이틀 등)
    - `constants` ← 고정된 주소값 등
    - `hooks` ← 커스텀 훅 모음
    - `pages` ← 페이지들 모음
    - `states` ← 상태 관리 모음
    - `styles` ← 스타일 모음

## 아키텍처

## Documentation
Notion : https://dblab2022.notion.site/dblab2022/STARTrip-9723296f010744dea0490f4627f64e2d

## Support

## License
