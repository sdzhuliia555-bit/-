const runes = [
    "ᚠ Феху — богатство, энергия",
    "ᚢ Уруз — сила, здоровье",
    "ᚦ Турисаз — защита, испытание",
    "ᚨ Ансуз — знание, послание",
    "ᚱ Райдо — путь, движение",
    "ᚲ Кеназ — озарение, свет",
    "ᚷ Гебо — дар, отношения",
    "ᚹ Вуньо — радость, успех"
];

function getRune() {
    const random = runes[Math.floor(Math.random() * runes.length)];
    document.getElementById("runeResult").innerText = random;
}

function contactMe() {
    window.location.href = "https://t.me/yourusername";
}
