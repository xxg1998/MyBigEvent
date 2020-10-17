$(function () {
    // 点击注册账号的连接
    $('#link_reg').on('click', function () {
        $('.login-box').hide()
        $('.reg-box').show()
    })
    // 点击登陆
    $('#link_login').on('click', function () {
        $('.login-box').show()
        $('.reg-box').hide()
    })
})