// ======================================
// صيدليتي | جسر الشغور
// جدول شهر تشرين الثاني 2026
// توقيت سوريا: Asia/Damascus
// ======================================
const TIME_ZONE = "Asia/Damascus";

const schedule = {
  "2026-11-01": [{ name: "الرحمة", address: "مقابل هيئة الزكاة سابقاً" }, { name: "المنير", address: "الصومعة" }],
  "2026-11-02": [{ name: "القوجة", address: "مقابل محلات رسيم" }, { name: "خديجة", address: "غرب دوار اللاذقية بـ50 متر" }],
  "2026-11-03": [{ name: "سيجري", address: "طريق مشفى الكلاوي / نزلة الكراج" }, { name: "وضاح", address: "نهاية سوق الحبوب" }],
  "2026-11-04": [{ name: "معاذ", address: "جانب مشفى التوليد" }, { name: "الحاجي", address: "مقابل مسجد النصر" }],
  "2026-11-05": [{ name: "الرازي", address: "مقابل البريد" }, { name: "المجد", address: "بعد ثانوية وليد شعبان" }],
  "2026-11-07": [{ name: "جوري", address: "جانب فرن العاصي" }, { name: "رؤى", address: "جانب شعبة التجنيد القديمة" }],
  "2026-11-08": [{ name: "علاء", address: "جانب أفران البحر" }, { name: "صباح", address: "مقابل مشفى الكلاوي" }],
  "2026-11-09": [{ name: "حلا", address: "طريق الحمام / مقابل بن المهباج" }, { name: "سنا", address: "طريق البساتين / قرب النفق" }],
  "2026-11-10": [{ name: "فاطمة", address: "جانب مسجد السرايا" }, { name: "نور", address: "مقابل مكتبة دلتا" }],
  "2026-11-11": [{ name: "حسين", address: "دوار الكرة / جانب طيف للصرافة" }, { name: "عائشة", address: "شارع النفوس / دخلة سوق الخضرة" }],
  "2026-11-12": [{ name: "المرمور", address: "الصومعة / غرب الساعة بـ50 متر" }, { name: "محمد حمود", address: "مقابل السرايا" }],
  "2026-11-14": [{ name: "الشفاء", address: "مقابل مشفى الكلاوي" }, { name: "غزال", address: "مقابل شعبة التجنيد القديمة" }],
  "2026-11-15": [{ name: "قمر", address: "جانب مشفى الكلاوي" }, { name: "التعاون", address: "شارع سوق السمك" }],
  "2026-11-16": [{ name: "لمى", address: "سوق الحبوب" }, { name: "الجسر", address: "الطريق العام / مقابل د. بيان مجني" }],
  "2026-11-17": [{ name: "السقا", address: "الصومعة" }, { name: "كلتوم", address: "جانب مجمع الفرقان الطبي" }],
  "2026-11-18": [{ name: "معتز", address: "شارع العقارات والمجمع التربوي" }, { name: "العابد", address: "شارع سوق السمك" }],
  "2026-11-19": [{ name: "الحكمة", address: "طريق مشفى الكلاوي" }, { name: "اليقين", address: "طريق الحمام / صيدلية شادي سابقاً" }],
  "2026-11-21": [{ name: "حللي", address: "دوار الكرة / طلعة السوق" }, { name: "عمر", address: "مقابل مسجد حمزة" }],
  "2026-11-22": [{ name: "بهاء", address: "جانب مشفى الكلاوي" }, { name: "مازن", address: "ساحة الدانية" }],
  "2026-11-23": [{ name: "نوار", address: "شارع سوق السمك" }, { name: "محمد زعيط", address: "ساحة الشهداء / طلعة السوق" }],
  "2026-11-24": [{ name: "رنيم", address: "مقابل مشفى التوليد" }, { name: "آلاء", address: "جانب مسجد حمزة" }],
  "2026-11-25": [{ name: "حللي", address: "دوار الكرة / طلعة السوق" }, { name: "بيت الدواء", address: "مقابل ثانوية وليد شعبان" }],
  "2026-11-26": [{ name: "سيجري", address: "طريق مشفى الكلاوي / نزلة الكراج" }, { name: "راشد", address: "جانب المسجد الكبير" }],
  "2026-11-28": [{ name: "السبيل", address: "طلعة التركمان" }, { name: "نور", address: "مقابل مكتبة دلتا" }],
  "2026-11-29": [{ name: "الرحمة", address: "جانب هيئة الزكاة" }, { name: "المنير", address: "الصومعة" }],
  "2026-11-30": [{ name: "القوجة", address: "مقابل محلات رسيم" }, { name: "خديجة", address: "غرب دوار اللاذقية بـ50 متر" }]
};

const fridaySchedule = {
  "2026-11-06": { morning: [{ name: "علاء", address: "الطريق العام / جانب أفران البحر" }, { name: "الحكمة", address: "طريق مشفى الكلاوي" }], evening: [{ name: "المرمور", address: "الصومعة" }, { name: "بيت الدواء", address: "مقابل ثانوية وليد شعبان" }] },
  "2026-11-13": { morning: [{ name: "المنير", address: "الصومعة" }, { name: "الرحمة", address: "جانب هيئة الزكاة" }], evening: [{ name: "العابد", address: "سوق السمك" }, { name: "اليقين", address: "طريق الحمام / صيدلية شادي سابقاً" }] },
  "2026-11-20": { morning: [{ name: "السقا", address: "الصومعة" }, { name: "الجسر", address: "مقابل د. بيان مجني" }], evening: [{ name: "السبيل", address: "طلعة التركمان" }, { name: "وضاح", address: "نهاية سوق الحبوب" }] },
  "2026-11-27": { morning: [{ name: "حللي", address: "دوار الكرة" }, { name: "المجد", address: "بعد ثانوية وليد شعبان" }], evening: [{ name: "حسين", address: "دوار الكرة / جانب طيف للصرافة" }, { name: "نور", address: "مقابل مكتبة دلتا" }] }
};


// جدول المناوبات بعد منتصف الليل (12:00 ليلاً - 8:00 صباحاً)
// مصدر البيانات: ملف الصيدليات المناوبة من 12 للـ 8، تشرين الثاني 2026.
const overnightSchedule = {
  "2026-11-01": "الرازي", "2026-11-02": "عمر", "2026-11-03": "نور", "2026-11-04": "وضاح", "2026-11-05": "سيجري",
  "2026-11-06": "علاء", "2026-11-07": "الرحمة", "2026-11-08": "الرازي", "2026-11-09": "زعيط", "2026-11-10": "عمر",
  "2026-11-11": "نور", "2026-11-12": "وضاح", "2026-11-13": "سيجري", "2026-11-14": "علاء", "2026-11-15": "الرحمة",
  "2026-11-16": "زعيط", "2026-11-17": "عمر", "2026-11-18": "نور", "2026-11-19": "وضاح", "2026-11-20": "سيجري",
  "2026-11-21": "علاء", "2026-11-22": "الرازي", "2026-11-23": "الرحمة", "2026-11-24": "زعيط", "2026-11-25": "عمر",
  "2026-11-26": "نور", "2026-11-27": "وضاح", "2026-11-28": "الرازي", "2026-11-29": "سيجري", "2026-11-30": "علاء"
};

// بيانات دليل الأطباء كما وردت في الملف المرفق. أي معلومة غير متوفرة تُترك فارغة.
const doctors = [
  { name: "أحمد الخطيب", specialty: "الجراحة العامة والصدرية", qualification: "جراحة عامة وصدرية", phone: "+90 539 549 9419", address: "مقابل السرايا القديمة", hours: "من 8 صباحاً حتى 1 ظهراً" },
  { name: "فراس الحسين", specialty: "الجراحة العامة والصدرية", qualification: "جراحة صدرية وجراحة عامة", phone: "+963 965 353 728", address: "الثلاثاء والأربعاء والخميس، دوار الكرة، فوق صيدلية أنس حللي", hours: "من 9 صباحاً حتى 3 عصراً" },
  { name: "رغد العثمان", specialty: "الجراحة العصبية", qualification: "جراحة عصبية", phone: "+963 968 910 645", address: "اللاذقية، دوار الزراعة، مركز التشخيص الطبي", hours: "للحجز والاستفسار" },
  { name: "بشار باكير", specialty: "الجراحة العصبية", qualification: "جراحة عصبية", phone: "+963 997 908 560", doctorPhone: "+963 953 339 737", address: "سوق العلافة", hours: "كل أيام الأسبوع من 9 حتى 3 عصراً، الخميس بعد الساعة 2" },
  { name: "مصطفى بغور", specialty: "العظمية", qualification: "عظمية", phone: "+352 681 554 397", address: "مجمع الفرقان الطبي", hours: "السبت صباحاً من 9 حتى 2:30، باقي الأيام دوام مسائي من 2 حتى 6 مساءً، العطلة يوم الاثنين" },
  { name: "زهير سالم العبد الله", specialty: "العظمية", qualification: "عظمية", phone: "+963 949 846 164", doctorPhone: "+963 994 696 580", address: "مركز الأمير الطبي، غرب دوار الكرة", hours: "السبت والأربعاء من 10 صباحاً حتى 2 عصراً" },
  { name: "علاء الحمر", specialty: "العظمية", qualification: "عظمية", phone: "", address: "جسر الشغور", hours: "لم ترد تفاصيل الدوام أو العنوان في البيانات المتاحة" },
  { name: "عباس شيخ حسين", specialty: "العصبية", qualification: "عصبية", phone: "+90 536 202 1523", address: "مشفى دار التوليد والجراحة", hours: "يوم الخميس من 9 حتى 3" },
  { name: "إبراهيم فروح", specialty: "العصبية", qualification: "عصبية", phone: "+963 951 925 864", doctorPhone: "+963 966 884 752", address: "مقابل السرايا القديمة، عيادة الدكتور أحمد الخطيب", hours: "يوم الخميس من 12 حتى 7 مساءً" },
  { name: "حسان إسماعيل", specialty: "الداخلية والقلبية والهضمية", qualification: "داخلية", phone: "+963 992 172 117", address: "طلعة سوق الحبوب", hours: "السبت والأحد والثلاثاء والأربعاء والخميس، من 9 صباحاً حتى 6 مساءً" },
  { name: "فاطمة اكتع", specialty: "الداخلية والقلبية والهضمية", qualification: "قلبية - داخلية", phone: "+963 948 838 519", address: "مقابل البريد، جانب صيدلية الرازي", hours: "السبت والأحد والاثنين والثلاثاء من 9 صباحاً حتى 5 مساءً" },
  { name: "إسماعيل بربر", specialty: "الداخلية والقلبية والهضمية", qualification: "داخلية", phone: "+963 947 058 109", address: "مشفى دار التوليد والجراحة", hours: "من السبت إلى الثلاثاء من 10 حتى 3" },
  { name: "قصي رشواني", specialty: "الداخلية والقلبية والهضمية", qualification: "قلبية - داخلية", phone: "+963 956 076 585", address: "مجمع الأمير الطبي", hours: "السبت والأحد من 9 حتى 2 ومن 4 حتى 8 مساءً، الثلاثاء والخميس من 3 حتى 7 مساءً" },
  { name: "أسامة المصطفى", specialty: "الداخلية والقلبية والهضمية", qualification: "هضمية", phone: "+963 938 538 527", doctorPhone: "+963 994 677 024", address: "غرب دوار اللاذقية، فوق صيدلية خديجة", hours: "صباحي السبت والأحد والاثنين والثلاثاء من 10 حتى 3 عصراً، مسائي من 5 حتى 7 مساءً، الأربعاء والخميس مسائي فقط" },
  { name: "أحمد زنكلو", specialty: "البولية", qualification: "بولية", phone: "+963 951 589 008", address: "مقابل البريد، عبارة البطل، جانب صيدلية الرازي", hours: "يومياً عدا الجمعة، من 8:30 صباحاً حتى 3، ومن 6 مساءً حتى 8" },
  { name: "زياد حمدو", specialty: "البولية", qualification: "بولية", phone: "+90 537 870 7931", address: "مجمع الفرقان الطبي", hours: "السبت والأحد والأربعاء والخميس من 10 صباحاً حتى 3" },
  { name: "علياء علي العثمان", specialty: "الأشعة", qualification: "أشعة", phone: "+963 983 289 029", address: "مجمع الأمير الطبي، بالقرب من مؤسسة السندس سابقاً", hours: "من الأحد إلى الخميس من 9 صباحاً حتى 3" },
  { name: "شيرين فروح", specialty: "الجلدية", qualification: "جلدية", phone: "+963 951 925 864", address: "حي الجمعية، خلف مشفى الكلاوي، بعد صيدلية الشفاء بـ200 متر", hours: "من 9 حتى 5، عدا الخميس من 9 حتى 3 عصراً، العطلة يوم الجمعة" },
  { name: "حكمت جمعة", specialty: "الجلدية", qualification: "جلدية", phone: "+963 998 703 666", address: "مجمع الفرقان الطبي", hours: "يومياً من 9 حتى 3، العطلة يوم الجمعة" },
  { name: "مصطفى حاج سليمان", specialty: "الأذن والأنف والحنجرة", qualification: "أذن أنف حنجرة", phone: "+963 988 440 726", address: "مجمع الفرقان الطبي", hours: "من الأحد حتى الخميس من 1 حتى 3 عصراً" },
  { name: "ميادة باطوس", specialty: "الأذن والأنف والحنجرة", qualification: "أذن أنف حنجرة", phone: "+963 933 652 776", address: "غربي البريد، تقاطع شارع 8 آذار، فوق مكتبة القمة", hours: "السبت من 9 حتى 3، باقي الأيام من 1 حتى 3، العطلة يوم الجمعة" },
  { name: "محمد رحوم", specialty: "الأذن والأنف والحنجرة", qualification: "أذن أنف حنجرة", phone: "+963 933 652 776", address: "غربي البريد، تقاطع شارع 8 آذار، فوق مكتبة القمة", hours: "السبت من 9 حتى 3، باقي الأيام من 1 حتى 3، العطلة يوم الجمعة" },
  { name: "دعاء ديب", specialty: "العينية", qualification: "عينية", phone: "+963 951 696 856", address: "مجمع الفرقان الطبي", hours: "السبت والأحد من 9 حتى 4" },
  { name: "كامل كامل", specialty: "العينية", qualification: "عينية", phone: "+963 956 867 213", address: "مقابل الجامع الكبير، فوق محلات رسيم للتجارة", hours: "يومياً عدا الجمعة، من 9 صباحاً حتى 2 ظهراً، ومن 4 حتى 7 مساءً" },
  { name: "نور سيجري", specialty: "العينية", qualification: "عينية", phone: "+963 951 589 008", address: "للتواصل والاستفسار", hours: "الثلاثاء من 10 صباحاً حتى 5 عصراً، الأربعاء من 9 صباحاً حتى 3" },
  { name: "زهرة وسوف", specialty: "الأطفال", qualification: "أطفال", phone: "+963 982 536 306", address: "بعد مشفى التوليد بـ100 متر، جانب نظارات إيفا", hours: "كل الأسبوع من 5:30 حتى 8 مساءً، عدا السبت صباحي ومسائي، صباحي من 9 حتى 2" },
  { name: "علاء الفارس", specialty: "الأطفال", qualification: "أطفال", phone: "+352 681 587 813", bookingPhone: "+963 969 568 966", address: "للحجز والاستفسار", hours: "جميع أيام الأسبوع من 3 عصراً حتى 9 ليلاً، عدا الجمعة، بحجز مسبق" },
  { name: "محمد حاج إبراهيم", specialty: "الأطفال", qualification: "أطفال", phone: "+963 956 298 11", address: "مجمع الأمير الطبي", hours: "السبت والأحد والاثنين والثلاثاء من 9 صباحاً حتى 2 ظهراً" },
  { name: "عبد الله زعيط", specialty: "الأطفال", qualification: "أطفال", phone: "+963 959 615 985", address: "للتواصل مع الطبيب", hours: "السبت والأحد والاثنين والأربعاء والخميس من 9 حتى 3" },
  { name: "هبة شردوب", specialty: "النسائية", qualification: "نسائية", phone: "+963 996 354 192", address: "رقم العيادة", hours: "من السبت إلى الثلاثاء من 1 حتى 3، والأربعاء والخميس من 5 حتى 7، الجمعة عطلة" },
  { name: "بيان مجني", specialty: "النسائية", qualification: "نسائية", phone: "+963 962 184 254", address: "طلعة العقارية، جانب صراف المتحدة", hours: "السبت والاثنين والأربعاء من 10 حتى 3، والأحد والثلاثاء والخميس من 10:30 حتى 2" },
  { name: "غيد شحادة", specialty: "النسائية", qualification: "نسائية", phone: "+90 552 570 7245", address: "شعبة التجنيد القديمة، دخلة فطائر المصري، فوق صالة نصر الله", hours: "يومياً عدا الجمعة، من 9:30 حتى 2" },
  { name: "سنا شحادة", specialty: "النسائية", qualification: "نسائية", phone: "+963 940 695 584", address: "مقابل دوار الكرة", hours: "من السبت إلى الأربعاء من 10 حتى 2:30" },
  { name: "سامية بعاج", specialty: "النسائية", qualification: "نسائية", phone: "+963 993 413 303", address: "للتواصل", hours: "يومياً عدا الجمعة والخميس، صباحي فقط من 9 حتى 2، ومسائي من 5 حتى 8 مساءً" },
  { name: "رغد كيالي", specialty: "النسائية", qualification: "نسائية", phone: "+352 681 517 853", address: "جانب الجامع الكبير ومحل أحمد رسيم", hours: "كل الأسبوع عدا الجمعة من 9 حتى 3" },
  { name: "سحر عبد العال", specialty: "النسائية", qualification: "نسائية", phone: "+352 681 557 81", address: "مشفى دار التوليد والجراحة", hours: "يومياً صباحاً" },
  { name: "يمن عبد الوهاب قصعللي", specialty: "النسائية", qualification: "نسائية", phone: "+963 988 759 320", address: "طريق حلب اللاذقية، مقابل جامع حمزة (أبو جمال سليمان)", hours: "يومياً عدا الجمعة، من 10 حتى 3" }
];
const emergencyContacts = [
  { label: "حجز مشفى جسر الشغور", value: "linktr.ee/Jisr_Ash_Shugur_Hospital", url: "https://linktr.ee/Jisr_Ash_Shugur_Hospital" },
  { label: "تسجيل مشفى الرحمة بدركوش", value: "linktr.ee/alrahmaa.hospital", url: "https://linktr.ee/alrahmaa.hospital" },
  { label: "طوارئ الدفاع المدني جسر الشغور", value: "+963 950 029 561", phone: "+963950029561" },
  { label: "طوارئ الأمن العام - الاستجابة السريعة", value: "+963 992 680 725", phone: "+963992680725" },
  { label: "استعلامات مجمع الأمير", value: "+963 949 846 164", phone: "+963949846164" },
  { label: "استعلامات مجمع الفرقان", value: "+90 531 611 1282", phone: "+905316111282" },
  { label: "استعلامات مشفى التوليد", value: "+90 536 202 1523", phone: "+905362021523" },
  { label: "قسم الأشعة مشفى التوليد", value: "+963 949 839 322", phone: "+963949839322" }
];

function getSyriaParts() {
  return new Intl.DateTimeFormat("en-GB", { timeZone: TIME_ZONE, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(new Date());
}
function getSyriaDate() { const p = getSyriaParts(), g = t => p.find(x => x.type === t).value; return `${g("year")}-${g("month")}-${g("day")}`; }
function getSyriaMinutes() { const p = getSyriaParts(), g = t => Number(p.find(x => x.type === t).value); return g("hour") * 60 + g("minute"); }
function formatArabicDate(key) { return new Intl.DateTimeFormat("ar-SY", { timeZone: TIME_ZONE, weekday: "long", day: "numeric", month: "long", year: "numeric" }).format(new Date(`${key}T12:00:00+03:00`)); }
function isFriday(key) { return new Date(`${key}T12:00:00+03:00`).getUTCDay() === 5; }

let pharmacyMapInstance = null;
let pharmacyMapReady = false;

// أرقام التواصل: اترك القيمة فارغة إلى حين الحصول على الرقم الصحيح.
// مثال بعد التأكد من الرقم: "صيدلية الرحمة": "+963..."
const contactNumbers = {
  // "الرحمة": "+963XXXXXXXXX",
};

function createContactButton(pharmacy, directory = false) {
  const phone = (contactNumbers[pharmacy.name] || "").trim();
  const button = document.createElement("button");
  button.type = "button";
  button.className = directory ? "directory-contact-button" : "pharmacy-contact-button";
  button.textContent = phone ? "☎ اتصال بالصيدلية" : "☎ رقم التواصل قريباً";
  button.disabled = !phone;
  if (phone) {
    button.addEventListener("click", () => { window.location.href = `tel:${phone}`; });
  }
  return button;
}

function showPage(pageId) {
  // التنقل بين الأقسام داخلياً، دون الانتقال إلى رابط /map غير موجود على الاستضافات الثابتة.
  const target = document.getElementById(pageId);
  if (!target) return;
  document.querySelectorAll(".page").forEach(p => p.classList.toggle("active", p.id === pageId));
  document.querySelectorAll(".nav-item").forEach(b => b.classList.toggle("active", b.dataset.page === pageId));
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (pageId === "mapPage") {
    window.setTimeout(initPharmacyMap, 120);
  }
}

function initPharmacyMap() {
  const mapElement = document.getElementById("pharmacyMap");
  const status = document.getElementById("mapStatus");
  if (!mapElement || !status) return;

  if (typeof L === "undefined") {
    status.textContent = "تعذر تحميل مكتبة الخريطة. استخدم زر خرائط Google أدناه، وتأكد من الاتصال بالإنترنت.";
    status.classList.add("map-status-error");
    return;
  }

  if (!pharmacyMapInstance) {
    // مركز جسر الشغور تقريبي وليس موقع صيدلية بعينها.
    pharmacyMapInstance = L.map(mapElement, { scrollWheelZoom: false }).setView([35.8147, 36.3192], 14);
    const tileLayer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a>'
    }).addTo(pharmacyMapInstance);
    tileLayer.on("tileerror", () => {
      status.textContent = "تعذر تحميل بعض مربعات الخريطة. تحقق من اتصال الإنترنت أو استخدم زر خرائط Google.";
      status.classList.add("map-status-error");
    });
    L.marker([35.8147, 36.3192]).addTo(pharmacyMapInstance)
      .bindPopup("مركز جسر الشغور — موقع تقريبي، وليس موقع صيدلية محددة");
    pharmacyMapReady = true;
    status.textContent = "الخريطة متمركزة على جسر الشغور. العلامة لمركز المدينة بشكل تقريبي.";
    status.classList.remove("map-status-error");
  }

  window.setTimeout(() => {
    if (pharmacyMapInstance) {
      pharmacyMapInstance.invalidateSize(true);
      pharmacyMapInstance.setView([35.8147, 36.3192], 14);
    }
  }, 250);
}

function openPharmacyOnGoogleMaps(pharmacy) {
  const query = `صيدلية ${pharmacy.name}، ${pharmacy.address}، جسر الشغور`;
  const url = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(query);
  window.open(url, "_blank", "noopener,noreferrer");
}

function createPharmacyCard(pharmacy, index = 0) {
  const card = document.createElement("article"); card.className = "pharmacy-card"; card.style.animationDelay = `${index * .1}s`;
  const sign = document.createElement("div"); sign.className = "card-sign";
  const cross = document.createElement("span"); cross.textContent = "✚";
  const label = document.createElement("small"); label.textContent = "صيدلية مناوبة";
  const name = document.createElement("strong"); name.textContent = `صيدلية ${pharmacy.name}`;
  sign.append(cross, label, name);
  const address = document.createElement("div"); address.className = "card-address";
  const pin = document.createElement("span"); pin.textContent = "⌖";
  const details = document.createElement("div");
  const addressText = document.createElement("strong"); addressText.textContent = pharmacy.address;
  const city = document.createElement("small"); city.textContent = "جسر الشغور";
  details.append(addressText, city); address.append(pin, details); card.append(sign, address);
  const mapButton = document.createElement("button");
  mapButton.type = "button"; mapButton.className = "pharmacy-map-button";
  mapButton.textContent = "ابحث عن الصيدلية على الخريطة ↗";
  mapButton.addEventListener("click", () => openPharmacyOnGoogleMaps(pharmacy));
  const actions = document.createElement("div"); actions.className = "pharmacy-actions";
  actions.appendChild(createContactButton(pharmacy));
  actions.appendChild(mapButton);
  card.appendChild(actions);
  return card;
}
function createShiftHeading(title, time) {
  const el = document.createElement("div"); el.className = "shift-heading";
  const strong = document.createElement("strong"); strong.textContent = title;
  const span = document.createElement("span"); span.textContent = time; el.append(strong, span); return el;
}
function displayPharmacies(container, list) { list.forEach((p, i) => container.appendChild(createPharmacyCard(p, i))); }
function updateDutyTimeText(title, time) {
  const box = document.querySelector(".duty-time-card");
  if (box) { box.querySelector("strong").textContent = title; box.querySelector("div span").textContent = time; box.querySelector(".time-badge").textContent = time; }
}
function setDutyMessage(message, closed = false) {
  const box = document.getElementById("dutyStatus"); box.innerHTML = "";
  const msg = document.createElement("div"); msg.className = `status-message${closed ? " closed" : ""}`; msg.textContent = message; box.appendChild(msg);
}
function showEmpty(list, title, description) {
  list.innerHTML = ""; const box = document.createElement("div"); box.className = "empty-state";
  const icon = document.createElement("span"); icon.textContent = "▦";
  const h = document.createElement("strong"); h.textContent = title;
  const p = document.createElement("p"); p.textContent = description; box.append(icon, h, p); list.appendChild(box);
}
function renderDuty() {
  const key = getSyriaDate(), minutes = getSyriaMinutes();
  const date = document.getElementById("dutyDate"), status = document.getElementById("dutyStatus"), list = document.getElementById("dutyList");
  if (!date || !status || !list) return;
  date.textContent = formatArabicDate(key); status.innerHTML = ""; list.innerHTML = "";

  // فترة 00:00–08:00: جدول المناوبة الليلية المنفصل.
  if (minutes < 480) {
    updateDutyTimeText("المناوبة بعد منتصف الليل", "12:00 ليلاً — 8:00 صباحاً");
    const overnightName = overnightSchedule[key];
    if (!overnightName) {
      setDutyMessage("لا توجد مناوبة ليلية مسجلة لهذا التاريخ بعد.", true);
      showEmpty(list, "بيانات المناوبة غير متوفرة", "أضف جدول هذا الشهر إلى overnightSchedule في ملف script.js.");
    } else {
      setDutyMessage("هذه هي الصيدلية المناوبة من 12 ليلاً حتى 8 صباحاً");
      displayPharmacies(list, [{ name: overnightName, address: "جسر الشغور — يرجى مراجعة الصيدلية للتأكد من الموقع" }]);
    }
    return;
  }

  // الجمعة لها جدول خاص بفترتين: 08:00–16:30 و16:30–00:00.
  if (isFriday(key) && fridaySchedule[key]) {
    const friday = fridaySchedule[key]; let selected = null, title = "", time = "";
    if (minutes >= 480 && minutes < 990) { selected = friday.morning; title = "مناوبة الجمعة الصباحية"; time = "8:00 صباحاً — 4:30 عصراً"; }
    else if (minutes >= 990 && minutes < 1440) { selected = friday.evening; title = "مناوبة الجمعة المسائية"; time = "4:30 عصراً — 12 ليلاً"; }
    if (selected) {
      updateDutyTimeText(title, time); setDutyMessage("هذه هي الصيدليات المناوبة حالياً");
      list.appendChild(createShiftHeading(title, time)); displayPharmacies(list, selected);
    } else {
      updateDutyTimeText("مواعيد مناوبة الجمعة", "8:00 صباحاً — 12 ليلاً");
      setDutyMessage("لم تبدأ فترة المناوبة بعد. إليك جدول مناوبتي الجمعة.", true);
      list.appendChild(createShiftHeading("الفترة الصباحية", "8:00 صباحاً — 4:30 عصراً")); displayPharmacies(list, friday.morning);
      list.appendChild(createShiftHeading("الفترة المسائية", "4:30 عصراً — 12 ليلاً")); displayPharmacies(list, friday.evening);
    }
    return;
  }

  // من السبت إلى الخميس: جميع الصيدليات مفتوحة نهاراً، والمناوبة المحددة تبدأ 20:00.
  if (minutes < 1200) {
    updateDutyTimeText("الدوام النهاري", "جميع الصيدليات مفتوحة خلال النهار");
    setDutyMessage("الدوام النهاري: جميع الصيدليات مفتوحة من السبت إلى الخميس.");
    const card = document.createElement("div"); card.className = "daytime-card";
    const icon = document.createElement("span"); icon.className = "daytime-icon"; icon.textContent = "☀";
    const title = document.createElement("strong"); title.textContent = "جميع الصيدليات مفتوحة الآن";
    const desc = document.createElement("p"); desc.textContent = "خلال ساعات النهار يمكنك التوجه إلى أي صيدلية في جسر الشغور. تبدأ المناوبة الليلية المحددة عند الساعة 8:00 مساءً.";
    const tag = document.createElement("small"); tag.textContent = "السبت – الخميس · دوام نهاري عام";
    card.append(icon, title, desc, tag); list.appendChild(card);
    return;
  }

  updateDutyTimeText("المناوبة الليلية", "8:00 مساءً — 12:00 ليلاً");
  const pharmacies = schedule[key] || [];
  if (!pharmacies.length) { setDutyMessage("لا يوجد جدول مناوبات مسجل لهذا التاريخ حالياً.", true); showEmpty(list, "لا توجد بيانات لهذا اليوم", "الجدول المتوفر حالياً يغطي شهر تشرين الثاني 2026 فقط."); return; }
  setDutyMessage("هذه هي الصيدليات المناوبة حالياً");
  displayPharmacies(list, pharmacies);
}
let selectedScheduleMonth = null;
let scheduleMonthManuallySelected = false;
function renderSchedule(monthValue) {
  const list = document.getElementById("scheduleList"); if (!list) return; list.innerHTML = "";
  const picker = document.getElementById("scheduleMonthPicker");
  const today = getSyriaDate();
  if (monthValue) { selectedScheduleMonth = monthValue; scheduleMonthManuallySelected = true; }
  if (!scheduleMonthManuallySelected) selectedScheduleMonth = today.slice(0, 7);
  const month = selectedScheduleMonth || today.slice(0, 7);
  if (picker && picker.value !== month) picker.value = month;
  const dates = [...new Set([...Object.keys(schedule), ...Object.keys(fridaySchedule), ...Object.keys(overnightSchedule)])]
    .filter(key => key.startsWith(month)).sort();
  const monthLabel = new Intl.DateTimeFormat("ar-SY", { timeZone: TIME_ZONE, month: "long", year: "numeric" }).format(new Date(`${month}-15T12:00:00+03:00`));
  const monthHeading = document.getElementById("scheduleMonthLabel");
  if (monthHeading) monthHeading.textContent = monthLabel;
  if (!dates.length) { showEmpty(list, "لا يوجد جدول لهذا الشهر بعد", `تم اختيار ${monthLabel}. أضف المناوبات المعتمدة لهذا الشهر إلى بيانات script.js، وسيظهر الجدول تلقائياً دون التأثير على الأشهر الأخرى.`); return; }
  dates.forEach(key => {
    const card = document.createElement("article"); card.className = "schedule-day" + (key === today ? " today" : "");
    const head = document.createElement("div"); head.className = "schedule-day-head";
    const title = document.createElement("strong"); title.textContent = formatArabicDate(key);
    const label = document.createElement("span"); label.textContent = key === today ? "مناوبة اليوم" : "المناوبة";
    head.append(title, label); card.appendChild(head);
    const addGroup = (heading, time, items) => {
      card.appendChild(createShiftHeading(heading, time));
      if (!items || !items.length) { const empty = document.createElement("p"); empty.className = "schedule-no-data"; empty.textContent = "لم تُسجل أسماء لهذه الفترة"; card.appendChild(empty); return; }
      const row = document.createElement("div"); row.className = "schedule-pharmacies";
      items.forEach(p => { const chip = document.createElement("span"); chip.textContent = `✚ ${p.name}`; row.appendChild(chip); }); card.appendChild(row);
    };
    if (overnightSchedule[key]) addGroup("مناوبة بعد منتصف الليل", "12:00 ليلاً — 8:00 صباحاً", [{ name: overnightSchedule[key] }]);
    if (fridaySchedule[key]) {
      addGroup("الفترة الصباحية", "8:00 صباحاً — 4:30 عصراً", fridaySchedule[key].morning);
      addGroup("الفترة المسائية", "4:30 عصراً — 12 ليلاً", fridaySchedule[key].evening);
    } else if (schedule[key]) addGroup("المناوبة المسائية", "8:00 مساءً — 12:00 ليلاً", schedule[key]);
    list.appendChild(card);
  });
}
function getAllPharmacies() {
  const map = new Map(), add = list => list.forEach(p => { if (!map.has(p.name)) map.set(p.name, p); });
  Object.values(schedule).forEach(add); Object.values(fridaySchedule).forEach(f => { add(f.morning); add(f.evening); });
  return [...map.values()].sort((a, b) => a.name.localeCompare(b.name, "ar"));
}
function renderDirectory(searchText = "") {
  const list = document.getElementById("directoryList"); if (!list) return;
  const query = searchText.trim().toLowerCase();
  const filtered = getAllPharmacies().filter(p => p.name.toLowerCase().includes(query) || p.address.toLowerCase().includes(query));
  list.innerHTML = "";
  if (!filtered.length) { showEmpty(list, "لم نعثر على الصيدلية", "تأكد من كتابة الاسم أو العنوان بشكل صحيح."); return; }
  filtered.forEach(p => {
    const card = document.createElement("article"); card.className = "directory-card";
    const icon = document.createElement("span"); icon.className = "directory-icon"; icon.textContent = "✚";
    const info = document.createElement("div"); info.className = "directory-info";
    const name = document.createElement("strong"); name.textContent = `صيدلية ${p.name}`;
    const address = document.createElement("small"); address.textContent = `⌖ ${p.address}`;
    info.append(name, address); card.append(icon, info);
    const actions = document.createElement("div"); actions.className = "directory-actions";
    const contactButton = createContactButton(p, true);
    const mapButton = document.createElement("button"); mapButton.type = "button"; mapButton.className = "directory-map-button";
    mapButton.textContent = "الخريطة ↗"; mapButton.addEventListener("click", () => openPharmacyOnGoogleMaps(p));
    actions.append(contactButton, mapButton);
    card.appendChild(actions); list.appendChild(card);
  });
}

function normalizeArabic(value) { return String(value || "").toLowerCase().replace(/[أإآ]/g, "ا").replace(/ى/g, "ي").replace(/ة/g, "ه").replace(/[ًٌٍَُِّْـ]/g, "").trim(); }
function doctorMapsUrl(doctor) {
  const city = String(doctor.address || "").includes("اللاذقية") ? "" : "جسر الشغور";
  const query = [doctor.name, doctor.specialty, doctor.address, city].filter(Boolean).join("، ");
  return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(query);
}
function createDoctorCard(doctor, index) {
  const card = document.createElement("article"); card.className = "doctor-card"; card.style.animationDelay = `${index * .025}s`;
  const top = document.createElement("div"); top.className = "doctor-card-top";
  const avatar = document.createElement("span"); avatar.className = "doctor-avatar"; avatar.textContent = "⚕";
  const heading = document.createElement("div"); heading.className = "doctor-heading";
  const name = document.createElement("strong"); name.textContent = "د. " + doctor.name;
  const spec = document.createElement("small"); spec.textContent = doctor.qualification || doctor.specialty;
  heading.append(name, spec); top.append(avatar, heading); card.append(top);
  const details = document.createElement("div"); details.className = "doctor-details";
  const addDetail = (label, value, icon) => { if (!value) return; const row = document.createElement("div"); row.className = "doctor-detail"; const mark = document.createElement("span"); mark.textContent = icon; const text = document.createElement("div"); const cap = document.createElement("small"); cap.textContent = label; const val = document.createElement("strong"); val.textContent = value; text.append(cap, val); row.append(mark, text); details.append(row); };
  addDetail("العنوان", doctor.address, "⌖"); addDetail("الدوام", doctor.hours, "◷"); card.append(details);
  const actions = document.createElement("div"); actions.className = "doctor-actions";
  const primaryPhone = doctor.phone || doctor.doctorPhone || doctor.bookingPhone;
  if (primaryPhone) { const call = document.createElement("a"); call.className = "doctor-call"; call.href = "tel:" + primaryPhone.replace(/[^+0-9]/g, ""); call.textContent = "☎ اتصال"; actions.append(call); }
  else { const unavailable = document.createElement("span"); unavailable.className = "doctor-call disabled"; unavailable.textContent = "رقم التواصل غير متوفر"; actions.append(unavailable); }
  const secondaryPhone = doctor.doctorPhone || doctor.bookingPhone;
  if (secondaryPhone && secondaryPhone !== primaryPhone) { const extraCall = document.createElement("a"); extraCall.className = "doctor-call secondary-call"; extraCall.href = "tel:" + secondaryPhone.replace(/[^+0-9]/g, ""); extraCall.textContent = doctor.doctorPhone ? "☎ رقم الطبيب" : "☎ رقم الحجز"; actions.append(extraCall); }
  const map = document.createElement("a"); map.className = "doctor-map"; map.href = doctorMapsUrl(doctor); map.target = "_blank"; map.rel = "noopener noreferrer"; map.textContent = "⌖ موقع العيادة على الخريطة"; actions.append(map);
  card.append(actions);
  return card;
}
function renderDoctors() {
  const list = document.getElementById("doctorsList"); if (!list) return;
  const search = normalizeArabic(document.getElementById("doctorSearchInput")?.value || "");
  const filter = document.getElementById("doctorSpecialtyFilter");
  if (filter && filter.options.length === 1) { [...new Set(doctors.map(d => d.specialty))].forEach(s => { const o = document.createElement("option"); o.value = s; o.textContent = s; filter.append(o); }); }
  const specialty = filter?.value || "";
  const results = doctors.filter(d => (!specialty || d.specialty === specialty) && (!search || normalizeArabic([d.name, d.specialty, d.qualification, d.address, d.hours].join(" ")).includes(search)));
  list.innerHTML = "";
  const count = document.getElementById("doctorCount"); if (count) count.textContent = `عرض ${results.length} من أصل ${doctors.length} طبيباً`;
  if (!results.length) showEmpty(list, "لم نعثر على طبيب", "جرّب كتابة الاسم أو اختيار اختصاص آخر.");
  else {
    const groups = new Map(); results.forEach(d => { if (!groups.has(d.specialty)) groups.set(d.specialty, []); groups.get(d.specialty).push(d); });
    let index = 0; groups.forEach((items, spec) => { const section = document.createElement("section"); section.className = "doctor-specialty-group"; const h = document.createElement("h3"); h.textContent = spec; const badge = document.createElement("span"); badge.textContent = items.length + " أطباء"; h.append(badge); section.append(h); items.forEach(d => section.append(createDoctorCard(d, index++))); list.append(section); });
  }
  renderEmergencyContacts();
}
function renderEmergencyContacts() {
  const list = document.getElementById("emergencyList"); if (!list) return; list.innerHTML = "";
  emergencyContacts.forEach(item => { const row = document.createElement("div"); row.className = "emergency-item"; const info = document.createElement("div"); const label = document.createElement("strong"); label.textContent = item.label; const value = document.createElement("small"); value.textContent = item.value; info.append(label, value); row.append(info); const action = document.createElement("a"); action.className = "emergency-action"; if (item.phone) { action.href = "tel:" + item.phone; action.textContent = "اتصال"; } else { action.href = item.url; action.target = "_blank"; action.rel = "noopener noreferrer"; action.textContent = "فتح الرابط"; } row.append(action); list.append(row); });
}

document.addEventListener("DOMContentLoaded", () => {
  renderDuty(); renderSchedule(); renderDirectory(); renderDoctors();
  setInterval(() => {
    if (document.getElementById("dutyPage")?.classList.contains("active")) renderDuty();
    if (document.getElementById("schedulePage")?.classList.contains("active")) renderSchedule();
  }, 60000);
});