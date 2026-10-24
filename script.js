document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('alertBtn');
    const factText = document.getElementById('factText');

    const facts = [
        "По данным ОЗХО, более 99% объявленных мировых запасов химического оружия уже уничтожены.",
        "Первое масштабное применение химического оружия произошло 22 апреля 1915 года.",
        "Конвенция о запрещении химического оружия охватывает более 190 государств-участников."
    ];

    btn.addEventListener('click', () => {
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        factText.textContent = randomFact;
        factText.classList.remove('hidden');
    });
});