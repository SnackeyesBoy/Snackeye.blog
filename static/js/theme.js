// theme.js
//mobile & pc
// theme.js

document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector("#mobile-menu");
  const menuLinks = document.querySelector(".nav-links");

  // 點擊漢堡圖示
  menu.addEventListener("click", () => {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");

    /* 刪除原本的 if (classList.contains('active')) { body.style.overflow = 'hidden' }
           這樣點開選單時，背景頁面依然可以自由滑動。
        */
  });

  // 點擊項目後關閉
  document.querySelectorAll(".nav-links a").forEach((n) => {
    n.addEventListener("click", () => {
      menu.classList.remove("is-active");
      menuLinks.classList.remove("active");
      // 這裡也不需要恢復 overflow，因為我們沒鎖定它
    });
  });
});
// 動化觸發邏輯
const observerOptions = {
  threshold: 0.3, // 當元素出現 10% 時觸發
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      // 如果你希望動畫只跑一次，可以加上下面這行
      // observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// 抓取所有想要動畫效果的元素
document
  .querySelectorAll(
    ".feed-item, .hero-container, main-content, .section-title, .section, .profile-header",
  )
  .forEach((el) => {
    el.classList.add("reveal"); // 先給它們初始隱藏類別
    observer.observe(el); // 開始觀察
  });

// 更換黑白主題
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// 1. 頁面載入時：從瀏覽器記憶體檢查上次的主題偏好
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light-theme") {
  body.classList.add("light-theme");
}

// 2. 點擊事件：切換 class 並儲存狀態
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light-theme");

    // 判斷當前狀態並儲存，下次重新整理才不會跑掉
    if (body.classList.contains("light-theme")) {
      localStorage.setItem("theme", "light-theme");
      console.log("切換至：白色模式");
    } else {
      localStorage.setItem("theme", "dark-theme");
      console.log("切換至：深色模式");
    }
  });
} else {
  console.error("錯誤：找不到 id 為 theme-toggle 的按鈕！");
}


//亂碼字串
const initScramble = () => {
  const letters = "ABCDEFGHIJKLMNO PQRSTUVWXYZ0123456789@#$%^&*";
  const targets = document.querySelectorAll(".scramble-text");

  const startEffect = (target) => {
    const originalValue = target.getAttribute("data-value");
    if (!originalValue) return;

    let iteration = 0;
    let interval = setInterval(() => {
      target.innerText = originalValue
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return originalValue[index];
          }
          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

      if (iteration >= originalValue.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 30);
  };

  // 1. 頁面載入先跑第一次
  targets.forEach((target) => startEffect(target));

  // 2. 每隔 5 秒重複執行
  setInterval(() => {
    targets.forEach((target) => startEffect(target));
  }, 5000); // 5000 毫秒 = 5 秒
};

// 統一初始化
document.addEventListener("DOMContentLoaded", () => {
  initScramble();
});

// 音樂播放
const audio = document.getElementById("myAudio");
const playBtn = document.getElementById("playBtn");
const progress = document.getElementById("progress");
const currentTimeText = document.getElementById("currentTime");
const durationText = document.getElementById("duration");

// 輔助函式：將秒數格式化為 0:00
function formatTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = Math.floor(seconds % 60);
  return `${min}:${sec < 10 ? "0" + sec : sec}`;
}

// 1. 當音訊元數據載入後，設定進度條的最大值
audio.onloadedmetadata = function () {
  progress.max = audio.duration;
  durationText.textContent = formatTime(audio.duration);
};

// 2. 監聽播放時間更新，同步進度條
audio.ontimeupdate = function () {
  progress.value = audio.currentTime;
  currentTimeText.textContent = formatTime(audio.currentTime);
};

// 3. 使用者拖動進度條時，改變音樂播放位置
progress.oninput = function () {
  audio.currentTime = progress.value;
};

// 播放/暫停按鈕邏輯
playBtn.onclick = function () {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏹︎";
  } else {
    audio.pause();
    playBtn.textContent = "▶";
  }
};
