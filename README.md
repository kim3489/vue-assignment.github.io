# Vue.js와 TMDB API를 이용한 영화정보 사이트

Vue.js와 TMDB API를 활용한 영화 정보 제공 사이트입니다. 사용자들은 최신 영화, 인기 영화 등 다양한 카테고리의 영화 정보를 탐색하고, 영화 검색 기능을 통해 원하는 영화를 찾을 수 있습니다.

## 기술 스택

- **프론트엔드**: Vue.js
- **스타일링**: SCSS
- **API**: TMDB API
- **라우팅**: Vue Router
- **HTTP 클라이언트**: Axios

## 프로젝트 구조

```csharp
📦 src
├── 📂 assets              # 스타일 시트 및 이미지 파일
│    ├── css            
├── 📂 components          # Vue 컴포넌트
│   ├── 📂Home
│   │    ├── home.vue
│   │    ├── home-main.vue
│   │    ├── home-popular.vue
│   │    ├── home-wishlist.vue
│   ├── 📂search    
│   │    ├── home-search.vue
│   ├── 📂sign-in
│        ├── sign-in.vue  
│ 
├── 📂 layout             # 페이지 레이아웃 설정
│       ├── header.vue
├── 📂 router            # Vue Router 설정
│       ├── index.ts
├── 📂 store            #  애플리케이션 전역 상태 관리
│       ├── index.ts     
│        
├── 📂 util              # 페이지 데이터 변환 및 가공
│   ├── auth.service.js
│   ├── URL.ts
│   ├── wishlist.ts
│
├── 📂 views              # 페이지 뷰 설정
│   ├── 📂Home-main
│   │     ├── banner.vue
│   │     ├── movie-row.vue
│   ├── 📂Home-wishlist
│   │     ├── movie-wishlist.vue
│   ├── 📂search
│   │     ├── movie-search.vue
│   ├── 📂views
│   │     ├── movie-grid.vue
│   │     ├── movie-infinite-scroll.vue
│
├──App.vue   # 메인 애플리케이션 컴포넌트
├──main.ts   # 애플리케이션 시작점
```

---
## 저장소를 클론합니다.
```
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

## 필요한 패키지를 설치합니다
```
npm install
```

## 프로덕션을 위한 컴파일 및 최소화
```
npm run build
```

## .env 파일을 생성하고 TMDB API 키를 설정합니다:
```
VUE_APP_TMDB_API_KEY=your_api_key_here
```

##  개발 서버를 실행합니다.
```
npm run serve
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
=======

