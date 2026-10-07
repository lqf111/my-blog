document.getElementById('changeCaptcha').addEventListener('click', function() {
    // 这里应该有一个后端接口来获取新的验证码，并更新到页面上
    // 但为了简化示例，我们直接更改文本
    var newCaptcha = Math.random().toString(36).substring(7); // 生成一个随机的验证码
    document.getElementById('captchaText').textContent = newCaptcha;
});

document.getElementById('getSmsCaptcha').addEventListener('click', function() {
    // 这里应该有一个后端接口来发送短信验证码，并禁用按钮一段时间
    // 但为了简化示例，我们只打印一条消息
    var phone = document.getElementById('phone').value;
    if (!/^\d{11}$/.test(phone)) {
        alert('请输入有效的11位手机号码');
        return;
    }
    
    // 假设发送验证码成功
    alert('短信验证码已发送到您的手机');
    
    // 禁用按钮一段时间（例如60秒）
    this.disabled = true;
    setTimeout(function() {
        document.getElementById('getSmsCaptcha').disabled = false;
    }, 60000); // 60秒后重新启用按钮
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单提交，以便我们进行验证
    
    // 获取表单数据
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var userCaptcha = document.getElementById('userCaptcha').value;
    var smsCaptcha = document.getElementById('smsCaptcha').value;
    var agree = document.getElementById('agree').checked;
    
    // 简单的验证逻辑
    if (!/^\d{11}$/.test(phone)) {
        alert('请输入有效的11位手机号码');
        return;
    }
    if (password !== confirmPassword) {
        alert('两次输入的密码不一致');
        return;
    }
    // 这里还应该验证用户输入的验证码是否正确，以及是否同意用户协议等
    // 但为了简化示例，我们直接提交（实际上应该通过AJAX或后端处理）
    
    // 假设所有验证都通过，打印一条消息表示注册成功
    alert('注册成功！');
});