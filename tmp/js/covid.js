class Covid {
    constructor () {
        this.el = document.createElement('div');
        this.el.classList.add('covid');
        this.el.style.top = Math.round(Math.random() * 780) + 'px';
        this.el.style.left = Math.round(Math.random() * 780) + 'px';
    }
}

var game = {
    intervalId: null,

    createdCovidCount: 0,

    killedCovidCount: 0,

    createdCovidCountInfo: document.querySelector('.createdCovidCountInfo'),

    remaingCovidCountInfo: document.querySelector('.remaingCovidCountInfo'),

    killedCovidCountInfo: document.querySelector('.killedCovidCountInfo'),

    startButton: document.querySelector('.start'),

    pauseButton: document.querySelector('.pause'),

    scene: document.querySelector('.scene'),

    subscribe() {
        this.startButton.addEventListener('click', this.startGame.bind(this));
        this.pauseButton.addEventListener('click', this.pauseGame.bind(this));
        this.scene.addEventListener('click', this.onSceneClick.bind(this));
    },

    startGame() {
        this.intervalId = setInterval(this.addEnemy.bind(this), 1000);
    },

    pauseGame() {
        clearInterval(this.intervalId);
    },

    onSceneClick(e) {
        if (e.target.classList.contains('covid')) {
            e.target.remove();
            this.killedCovidCount++;
            this.updateInfo();
        }
    },

    updateInfo() {
        this.createdCovidCountInfo.innerText = this.createdCovidCount;
        this.remaingCovidCountInfo.innerText = this.createdCovidCount - this.killedCovidCount;
        this.killedCovidCountInfo.innerText = this.killedCovidCount;
    },

    addEnemy() {
        document.querySelector('.scene').appendChild(new Covid().el);
        this.createdCovidCount++;
        this.updateInfo();
    }
};

game.subscribe();



