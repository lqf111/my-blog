(() => {
  const renderCalendar = (calendar, year, month) => {
    const label = calendar.querySelector(".calendar-month");
    const grid = calendar.querySelector(".calendar-grid");
    const today = new Date();
    const firstWeekday = (new Date(year, month, 1).getDay() + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    label.textContent = new Date(year, month).toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "long"
    });
    grid.replaceChildren();

    ["一", "二", "三", "四", "五", "六", "日"].forEach((weekday) => {
      const heading = document.createElement("span");
      heading.className = "calendar-weekday";
      heading.textContent = weekday;
      grid.append(heading);
    });

    for (let blank = 0; blank < firstWeekday; blank += 1) {
      grid.append(document.createElement("span"));
    }

    for (let day = 1; day <= daysInMonth; day += 1) {
      const date = document.createElement("time");
      date.textContent = String(day);
      date.dateTime = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      if (
        year === today.getFullYear() &&
        month === today.getMonth() &&
        day === today.getDate()
      ) {
        date.setAttribute("aria-current", "date");
      }
      grid.append(date);
    }
  };

  const initHomeWidgets = () => {
    const layout = document.querySelector("#content-inner.layout");
    const recentPosts = layout?.querySelector("#recent-posts");
    if (!layout || !recentPosts || layout.querySelector("#left-widgets")) return;

    const widgets = document.createElement("aside");
    widgets.id = "left-widgets";
    widgets.setAttribute("aria-label", "音乐、日历与博客信息");
    widgets.innerHTML = `
      <section class="left-widget music-widget" aria-labelledby="music-widget-title">
        <h2 id="music-widget-title"><i class="fas fa-music" aria-hidden="true"></i> 在线音乐</h2>
        <iframe
          title="网易云音乐热歌榜"
          src="https://music.163.com/outchain/player?type=0&amp;id=3778678&amp;auto=0&amp;height=360"
          loading="eager"
          referrerpolicy="strict-origin-when-cross-origin"
          allow="autoplay"
        ></iframe>
        <a href="https://music.163.com/#/discover/toplist?id=3778678" target="_blank" rel="noopener noreferrer">
          播放器无法显示？点击打开热歌榜
        </a>
      </section>
      <section class="left-widget calendar-widget" aria-labelledby="calendar-widget-title">
        <div class="calendar-heading">
          <h2 id="calendar-widget-title"><i class="fas fa-calendar-days" aria-hidden="true"></i> 日历</h2>
          <div class="calendar-controls">
            <button type="button" class="calendar-previous" aria-label="上个月">‹</button>
            <button type="button" class="calendar-next" aria-label="下个月">›</button>
          </div>
        </div>
        <div class="calendar-month" aria-live="polite"></div>
        <div class="calendar-grid" role="grid" aria-label="月历"></div>
      </section>
      <section class="left-widget notice-widget" aria-labelledby="guestbook-widget-title">
        <h2 id="guestbook-widget-title"><i class="fas fa-comments" aria-hidden="true"></i> 留言板</h2>
        <p>留言功能准备中，后续开放。</p>
      </section>
      <section class="left-widget notice-widget" aria-labelledby="visitors-widget-title">
        <h2 id="visitors-widget-title"><i class="fas fa-users" aria-hidden="true"></i> 访客记录</h2>
        <p>访客统计暂未接入，后续再完善。</p>
      </section>
    `;
    layout.insertBefore(widgets, recentPosts);

    const calendar = widgets.querySelector(".calendar-widget");
    const now = new Date();
    const viewedMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const updateCalendar = () => renderCalendar(calendar, viewedMonth.getFullYear(), viewedMonth.getMonth());

    calendar.querySelector(".calendar-previous").addEventListener("click", () => {
      viewedMonth.setMonth(viewedMonth.getMonth() - 1);
      updateCalendar();
    });
    calendar.querySelector(".calendar-next").addEventListener("click", () => {
      viewedMonth.setMonth(viewedMonth.getMonth() + 1);
      updateCalendar();
    });
    updateCalendar();
  };

  initHomeWidgets();
  document.addEventListener("DOMContentLoaded", initHomeWidgets);
  document.addEventListener("pjax:complete", initHomeWidgets);
})();
