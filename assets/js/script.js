const data = [
  {
    title: "تأمين دبي / تحويل بنكي",
    support: "محمد عبد الله",
    admin: "أحمد علي",
    steps: {
      بداية: "يرجى التأكد من إدخال رقم الآيبان والبنك بشكل صحيح، مع رفع صورة من الهوية وتاريخ الإغلاق.",
      متابعة: "يتم متابعة الطلب من خلال الرقم المرجعي المرسل إلى الجوال أو عبر التواصل مع الدعم.",
      إغلاق: "يرجى التأكد من ظهور المبلغ في كشف الحساب، وفي حال عدم الاستلام خلال 7 أيام يرجى إعادة فتح التذكرة."
    }
  },
  {
    title: "تأمين دبي / نقداً - تعميد فرع",
    support: "نادر عماد",
    admin: "عمرو يوسف",
    steps: {
      بداية: "تعميد الفرع يتطلب التأكد من توقيع العميل واستلام النقدية.",
      متابعة: "يتم متابعة التعميد من خلال تواصل مع فرع الاستلام والتأكد من التسليم.",
      إغلاق: "تأكيد إغلاق التذكرة بعد استلام النسخة الورقية للعميل."
    }
  },
  // باقي التصنيفات بنفس الطريقة ...
];

const container = document.getElementById('financial-sections');

data.forEach((item, index) => {
  const mainCard = document.createElement('div');
  mainCard.className = 'card';
  mainCard.innerHTML = `<h2>${item.title}</h2>`;
  mainCard.onclick = () => showRoleOptions(index);
  container.appendChild(mainCard);
});

function showRoleOptions(index) {
  container.innerHTML = '';

  const roleContainer = document.createElement('div');
  roleContainer.className = 'grid-container';

  ['ممثل الدعم', 'إداري القسم'].forEach(role => {
    const roleCard = document.createElement('div');
    roleCard.className = 'card';
    roleCard.innerHTML = `<h3>${role}</h3>`;
    roleCard.onclick = () => showSteps(index, role);
    roleContainer.appendChild(roleCard);
  });

  container.appendChild(roleContainer);
}

function showSteps(index, role) {
  container.innerHTML = '';

  const steps = data[index].steps;

  const info = document.createElement('div');
  info.className = 'support-info';
  info.innerHTML = `<p><strong>👤 ${role}:</strong> ${role === 'ممثل الدعم' ? data[index].support : data[index].admin}</p>`;
  container.appendChild(info);

  const stepsContainer = document.createElement('div');
  stepsContainer.className = 'grid-container';

  Object.entries(steps).forEach(([title, desc]) => {
    const stepCard = document.createElement('div');
    stepCard.className = 'card';
    stepCard.innerHTML = `<h3>${title} الطلب</h3><p>${desc}</p>`;
    stepsContainer.appendChild(stepCard);
  });

  container.appendChild(stepsContainer);
}
