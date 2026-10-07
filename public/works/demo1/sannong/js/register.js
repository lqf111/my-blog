
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(event) {
            // 阻止表单的默认提交行为
            event.preventDefault();

            // 模拟注册过程，这里可以添加AJAX请求进行后台数据处理
            // 假设注册成功，则跳转到登录页面
            alert("注册成功，请登录！");
            window.location.href = "login.html";
        });
    });

    // 选项卡切换逻辑
    document.querySelectorAll('.tab-item').forEach(tab => {
        tab.addEventListener('click', () => {
            // 移除所有激活状态
            document.querySelectorAll('.tab-item').forEach(t => t.classList.remove('on'));
            document.querySelectorAll('form').forEach(f => f.classList.remove('show'));

            // 添加当前激活状态
            tab.classList.add('on');
            const targetForm = document.getElementById(tab.dataset.target);
            targetForm.classList.add('show');
        });
    });
