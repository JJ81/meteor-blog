# Meteor
## html
{{> name}}

template name="name"을 주고 이곳에 필요한 마이크로 컴포넌트를 작성하면 해당 위치에 반영이 된다
이름만 동일하면 된다


# 제이쿼리 같은 package를 사용하고 싶다면 아래와 같이 실행하면 된다
meteor add jquery
설치과정이 다소 오래걸릴 수도 있다

jquery without a version constraint has already been added.

이와 같은 문구가 출력되는데 기본 세팅에 제이쿼리가 포함되어 있는가보다.
.meteor/local/build/programs/server/packages/jquery.js가 있다
하지만 버전 관리는 어떻게 하지?

컴파일된 html파일의 head에 보면 사용하지도 않는 패키지들이 제이쿼리를 포함하여 엄청 쌓여있다

SCSS를 별도로 설정하지 않아도 watcher가 WebStorm에서 자동 설정이 되어서 인식이 될 수 있도록 자동화된다.

편리하지만 한편으로는 불필요한 패키지를 지우고 로딩 속도를 개선하고 싶을 때 어떻게 해야 할 것인가 의문이 든다
따라서 AMD를 webpack과 함께 적용함으로서 이 문제를 해결해보는 것이 좋을 것 같다


===

이제부터 게시판을 만들어보자
일단은 로그인을 하지 않아도 사용할 수 있도록 한다
모든 것은 몽고디비로만 운용한다
이후에 마리아디비를 연동한다

meteor add webpack:sass
meteor add webpack:react
=> result
coffeescript        added, version 1.0.11     
cosmos:browserify   added, version 0.8.4
jsx                 added, version 0.2.3
react-meteor-data   added, version 0.2.4
react-runtime       added, version 0.14.1_1
react-runtime-dev   added, version 0.14.1
react-runtime-prod  added, version 0.14.1
webpack:react       added, version 1.0.0



미티어에 설치하고 싶은 패키지는 https://atmospherejs.com 이곳에서 찾아서 활용할 수 있다


meteor add webpack:webpack
=> result
webpack:assets         added, version 1.0.0   
webpack:css            added, version 1.0.0
webpack:npmworkaround  added, version 1.0.0
webpack:reload         added, version 1.0.0
webpack:webpack        added, version 1.0.1


remove webbpack:webpack
remove webpack:react


ERROR in multi main
Module not found: Error: Cannot resolve module 'webpack-hot-middleware/client' in /Users/yijaejun/meteor-blog
 @ multi main

계속 위와 같은 에러가 검출된다


hot-middleware를 제거하고 
npm install을 실행한 결과

npm WARN deprecated npmconf@2.1.2: this package has been reintegrated into npm and is now out of date with respect to npm
npm WARN deprecated lodash@1.0.2: lodash@<3.0.0 is no longer maintained. Upgrade to lodash@^4.0.0.
npm WARN deprecated graceful-fs@1.2.3: graceful-fs version 3 and before will fail on newer node releases. Please update to graceful-fs@^4.0.0 as soon as possible.
npm WARN prefer global node-gyp@3.3.0 should be installed with -g


meteor에서는 package.json을 자동으로 읽어들여서
설치를 할 수 있도록 패키지 항목을 내려준다




 