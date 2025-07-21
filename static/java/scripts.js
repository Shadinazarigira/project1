const expiryDateStr = "2025-08-27";
const expiryDate = new Date(expiryDateStr);
const daysLeftDiv = document.getElementById('days-left');

function toPersianNum(num) {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return num.toString().replace(/\d/g, d => persianDigits[d]);
}

function updateCountdown() {
    const now = new Date();
    const diffTime = expiryDate - now;
    const daysLeft = Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

    daysLeftDiv.textContent = toPersianNum(daysLeft) + " روز باقی مانده";

    // به‌روزرسانی عنوان صفحه به صورت اختیاری
    document.title = toPersianNum(daysLeft) + " روز باقی مانده";
}

updateCountdown();
setInterval(updateCountdown, 60 * 60 * 1000); // هر ساعت به‌روزرسانی شود

const quotes = [
    "یک فرد موفق کسی است که می‌تواند با آجر‌هایی که دیگران به سمت او پرتاب کرده‌اند، پایه و اساس محکمی برای خود بنا کند.",
    "پیشرفت روزانه کوچک، در طولانی مدت منجر به نتایج خیره‌ کننده خواهد شد.",
    "هر کسی که توانسته است چیزی را بسازد، حتما نظم و انضباط داشته است.",
    "تنها در فرهنگ لغت می‌توانید پیروزی را پیش از عمل ببینید.",
    "شجاعت، مقابله با ترس و سلطه بر آن است نه فقدانِ ترس.",
    "موفقیت، مجموعه‌ای از تلاش‌های کوچک است که هر روز و هر روز تکرار شده‌اند.",
    "فهمیده‌ام هر چقدر سخت‌تر کار می‌کنم، انگار شانس بیشتری به سراغم می‌آید.",
    "هیچ چیز غیرممکن (impossible) نیست، این کلمه خودش می‌گوید من ممکن هستم (I’m possible).",
    "تا شهامتِ رها کردن چشم‌انداز ساحل را نداشته باشید هرگز نمی‌توانید از اقیانوس عبور کنید.",
];
const motivational = document.getElementById("motivational");
const randomIndex = Math.floor(Math.random() * quotes.length);
motivational.innerText = quotes[randomIndex];
