/**
 * Created by yijaejun on 3/2/16.
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

