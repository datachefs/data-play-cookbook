let currentLevel = 5;
const doubts = [
    "Doubt level 5: 'I am not good enough.'",
    "Doubt level 4: 'I will never succeed.'",
    "Doubt level 3: 'I can't do this.'",
    "Doubt level 2: 'People will judge me.'",
    "Doubt level 1: 'It's too late for me to try.'"
];

function fireCannon() {
    const cannonball = document.getElementById('cannonball');
    cannonball.classList.add('fire-cannonball');
    cannonball.addEventListener('animationend', () => {
        cannonball.classList.remove('fire-cannonball');
        cannonball.style.backgroundColor = 'darkred';
        setTimeout(() => {
            cannonball.style.display = 'none';
            cannonball.style.backgroundColor = 'black';
            removeDoubtLevel();
        }, 100);
    });
}

function removeDoubtLevel() {
    if (currentLevel > 0) {
        const levelId = `level${currentLevel}`;
        const level = document.getElementById(levelId);
        level.style.display = 'none';
        currentLevel--;
        updateDoubtText();
    }
}

function updateDoubtText() {
    const doubtText = document.getElementById('doubt-text');
    if (currentLevel > 0) {
        doubtText.innerText = doubts[5 - currentLevel];
    } else {
        doubtText.innerText = "All doubts are cleared!";
    }
}