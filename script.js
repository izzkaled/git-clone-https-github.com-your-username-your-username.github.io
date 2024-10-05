document.getElementById("toggleExperience").addEventListener("click", function() {
    var experienceSection = document.getElementById("experience");
    if (experienceSection.style.display === "none") {
        experienceSection.style.display = "block";
    } else {
        experienceSection.style.display = "none";
    }
});
// إظهار وإخفاء قسم الخبرات
document.getElementById("toggleExperience").addEventListener("click", function() {
    var experienceSection = document.getElementById("experience");
    if (experienceSection.style.display === "none") {
        experienceSection.style.display = "block";
    } else {
        experienceSection.style.display = "none";
    }
});

// إضافة تمرير سلس عند النقر على الروابط في شريط التنقل
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
