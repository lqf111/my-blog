document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab-item');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // 获取目标表单ID
            const targetFormId = tab.getAttribute('data-target');
            const targetForm = document.getElementById(targetFormId);

            // 隐藏所有表单并移除所有tab-item的'on'类
            document.querySelectorAll('.login form').forEach(form => form.classList.remove('show'));
            tabs.forEach(t => t.classList.remove('on'));

            // 显示对应表单并添加'on'类到当前tab-item
            if (targetForm) {
                targetForm.classList.add('show');
                tab.classList.add('on');
            }
        });
    });
});