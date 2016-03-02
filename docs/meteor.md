# Meteor
## html
{{> name}}

template name="name"을 주고 이곳에 필요한 마이크로 컴포넌트를 작성하면 해당 위치에 반영이 된다
이름만 동일하면 된다

# /Users/yijaejun/meteor-blog/.meteor/local/build/programs/server
npm 관련 모듈은 이 안에 들어 있다

# /Users/yijaejun/meteor-blog/.meteor/local/build/programs/web.browser/app
기본적으로 웹팩은 이 안에 들어 있다
그리고 기본 conf.js파일도 생성이 되어 있다

meteor add bootstrap
-> 부트스트랩이 설치가 되고 나서는 해당 css가 자동으로 적용되기 시작했다 

meteor add sass로는 설치가 되지 않는다
그리고 기본적으로 sass compiler가 제공된다


webpack이 실행되고 있는듯 하나 실제
어떤 행동을 하고 있는지 추적을 하기 어렵다
게다가 일반적으로 웹팩이 작동할 경우 어떤 파일이 어떤 파일로 생성이 되었다고 떠야 하는데
이런 출력은 나타나지 않고 있다


#  페이스북 로그인 기능을 달아보자
meteor add accounts-facebook
meteor add service-configuration

참고 페이지 http://bulenttastan.net/login-with-facebook-using-meteor-js/
앱 아이디 만들기
https://developers.facebook.com/quickstarts/?platform=web

페이스북 로그인은 실제 올려봐야 알 수 있다
띠라서 테스트는 meteor deploy clipplr.meteor.com을 통해서 테스트해보자

