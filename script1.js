function calculateCalories() {
    // جمع البيانات
    let gender = document.querySelector('input[name="gender"]:checked');
    let age = document.getElementById("age").value;
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let activityLevel = document.getElementById("activity").value;

    // التحقق من أن جميع الحقول مملوءة
    if (!gender || !age || !height || !weight || !activityLevel) {
        document.getElementById("result").textContent = "يرجى ملء جميع الحقول.";
        return;
    }

    // تحويل القيم إلى أرقام
    age = parseInt(age);
    height = parseInt(height);
    weight = parseInt(weight);

    // حساب BMR بناءً على الجنس
    let bmr;
    if (gender.value === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // إضافة عامل النشاط
    let calories;
    switch (activityLevel) {
        case "sedentary":
            calories = bmr * 1.2;
            break;
        case "light":
            calories = bmr * 1.375;
            break;
        case "moderate":
            calories = bmr * 1.55;
            break;
        case "active":
            calories = bmr * 1.725;
            break;
        case "very_active":
            calories = bmr * 1.9;
            break;
        default:
            calories = bmr * 1.2;
    }

    // عرض النتيجة
    document.getElementById("result").textContent = "السعرات الحرارية المطلوبة يومياً: " + Math.round(calories) + " kcal";
}

const countElement = document.getElementById('count');

// الحصول على عدد الزيارات من التخزين المحلي
let visitCount = localStorage.getItem('visitCount') ? parseInt(localStorage.getItem('visitCount')) : 0;

// زيادة عدد الزيارات
visitCount++;

// حفظ عدد الزيارات في التخزين المحلي
localStorage.setItem('visitCount', visitCount);

// تحديث واجهة المستخدم
countElement.textContent = visitCount;