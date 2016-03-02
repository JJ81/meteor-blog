/**
 * Created by yijaejun on 3/2/16.
 */
/**
 * 참고 링크
 * 페이스북으로 로그인을 한 후에 몽고디비에 저장한다
 * https://github.com/ccorcos/meteor-facebook-login/blob/master/server/accounts.coffee
 */

ServiceConfiguration.configurations.remove({
    service: 'facebook'
});

// facebook developer testapp을 생성
ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: '1703104799934901',
    secret: '9032989cd196d230623d38c1e98dabd2'
});

