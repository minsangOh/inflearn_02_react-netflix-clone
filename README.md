# 1. React 앱 만들기 시작하기

이 프로젝트는 [Create React App](https://github.com/facebook/create-react-app)으로 부트스트랩되었습니다.

## 사용 가능한 스크립트

프로젝트 디렉토리에서 실행할 수 있습니다:

### `npm start`

개발 모드에서 앱을 실행합니다.
브라우저에서 보려면 [http://localhost:3000](http://localhost:3000)를 엽니다.

변경하면 페이지가 다시 로드됩니다.
콘솔에 보푸라기 오류가 표시될 수도 있습니다.

### `npm test`

대화형 감시 모드에서 테스트 실행기를 시작합니다.
자세한 내용은 [테스트 실행] 섹션(https://facebook.github.io/create-react-app/docs/running-tests)을 참조하세요.

### `npm run build`

프로덕션용 앱을 `build` 폴더에 빌드합니다.
프로덕션 모드에서 React를 올바르게 번들링하고 최상의 성능을 위해 빌드를 최적화합니다.

빌드가 축소되고 파일 이름에 해시가 포함됩니다.
앱을 배포할 준비가 되었습니다!

자세한 내용은 [배포] 섹션(https://facebook.github.io/create-react-app/docs/deployment)을 참조하세요.

### `npm run eject`

**참고: 이 작업은 단방향 작업입니다. 일단 `이젝트`하면 다시 돌아갈 수 없습니다!

빌드 도구 및 구성 선택이 만족스럽지 않으면 언제든지 `이젝트`할 수 있습니다. 이 명령은 프로젝트에서 단일 빌드 종속성을 제거합니다.

대신 모든 구성 파일과 전이 종속성(웹팩, 바벨, ESLint 등)을 프로젝트에 바로 복사하여 사용자가 모든 것을 제어할 수 있도록 합니다. 'eject'를 제외한 모든 명령은 계속 작동하지만 복사된 스크립트를 가리키게 되므로 조정할 수 있습니다. 이제부터는 여러분이 알아서 하세요.

이제 `이젝트`를 사용할 필요가 없습니다. 선별된 기능 세트는 소규모 및 중간 규모의 배포에 적합하므로 이 기능을 사용해야 한다는 의무감을 느끼지 않으셔도 됩니다. 그러나 이 도구를 사용할 준비가 되었을 때 사용자 지정할 수 없다면 이 도구는 유용하지 않을 수 있습니다.

## 자세히 알아보기

자세한 내용은 [React 앱 만들기 문서](https://facebook.github.io/create-react-app/docs/getting-started)에서 확인할 수 있습니다.

React를 배우려면 [React 문서](https://reactjs.org/)를 확인하세요.

### 코드 분할

이 섹션이 여기로 이동했습니다: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### 번들 크기 분석하기

이 섹션이 여기로 이동했습니다: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### 프로그레시브 웹 앱 만들기

이 섹션이 여기로 이동했습니다: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### 고급 구성

이 섹션이 여기로 이동했습니다: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### 배포

이 섹션이 여기로 이동했습니다: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm 실행 빌드`가 축소하지 못했습니다.

이 섹션이 여기로 옮겨졌습니다: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


<br>
<hr style="height: 5px; background-color: gray;">
<br>

# 2. React 프로젝트 설정 가이드

이 문서는 React 프로젝트를 시작하고, Tailwind CSS와 ESLint를 통합하는 방법에 대해 안내합니다.

## 2-1. React 프로젝트 생성

React 프로젝트를 시작하기 위해서는 먼저 Node.js와 npm(Node Package Manager)이 설치되어 있어야 합니다.

1. **React 애플리케이션 생성**:
   ```
   npx create-react-app my-app
   ```
   `my-app`은 프로젝트 이름으로, 원하는 이름으로 변경 가능합니다.

2. **프로젝트 디렉토리로 이동**:
   ```
   cd my-app
   ```

## 2-2. Tailwind CSS 설치

Tailwind CSS를 프로젝트에 추가하기 위한 단계입니다.

1. **Tailwind CSS와 필수 패키지 설치**:
   ```
   npm install -D tailwindcss postcss autoprefixer
   ```

2. **Tailwind 구성 파일 생성**:
   ```
   npx tailwindcss init
   ```

3. **Tailwind를 CSS에 포함**:
   `src/index.css` 파일에 다음을 추가합니다.
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

4. **PostCSS 구성 파일 생성**:
   프로젝트 루트에 `postcss.config.js` 파일을 생성하고 다음을 추가합니다.
   ```javascript
   module.exports = {
     plugins: {
       tailwindcss: {},
       autoprefixer: {},
     }
   }
   ```

## 2-3. ESLint 설치 및 설정

코드 품질을 관리하기 위해 ESLint를 설정합니다.

1. **ESLint 설치**:
   ```
   npm install eslint --save-dev
   ```

2. **ESLint 설정 파일 생성**:
   ```
   npx eslint --init
   ```
   설정 과정에서 몇 가지 질문에 답해야 합니다. React와 호환되는 설정을 선택합니다.

## 2-4. VS Code 설정 (선택 사항)

Visual Studio Code에서 Tailwind CSS와 ESLint를 원활하게 사용하기 위한 설정입니다.

1. **Tailwind CSS IntelliSense 확장 설치**:
   Tailwind CSS 관련 클래스 자동완성을 위해 설치합니다.

2. **ESLint 확장 설치**:
   코드 작성 시 실시간으로 ESLint 규칙을 적용하기 위해 설치합니다.

3. **PostCSS 확장 설치**:
   `@tailwind` 지시문과 같은 PostCSS 구문을 올바르게 인식하기 위해 설치합니다.