class ChronoMaster {
    constructor() {
        this.startTimestamp = 0;
        this.totalElapsed = 0;
        this.updateInterval = null;
        this.isActive = false;
        this.lapCounter = 0;
        this.lapHistory = [];
        
        this.timerDisplay = document.getElementById('timerDisplay');
        this.timerWrapper = document.getElementById('timerWrapper');
        this.startButton = document.getElementById('startButton');
        this.lapButton = document.getElementById('lapButton');
        this.resetButton = document.getElementById('resetButton');
        this.lapRecords = document.getElementById('lapRecords');
        this.lapList = document.getElementById('lapList');
        this.lapBadge = document.getElementById('lapBadge');
        this.statusDot = document.getElementById('statusDot');
        this.statusLabel = document.getElementById('statusLabel');
        
        this.setupEventListeners();
        this.refreshDisplay();
    }

    formatTimeDisplay(milliseconds) {
        const totalSecs = Math.floor(milliseconds / 1000);
        const mins = Math.floor(totalSecs / 60);
        const secs = totalSecs % 60;
        const centisecs = Math.floor((milliseconds % 1000) / 10);
        
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}:${centisecs.toString().padStart(2, '0')}`;
    }

    refreshDisplay() {
        if (this.isActive) {
            const currentTime = Date.now();
            this.totalElapsed = currentTime - this.startTimestamp;
        }
        this.timerDisplay.textContent = this.formatTimeDisplay(this.totalElapsed);
    }

    toggleTimer() {
        if (!this.isActive) {
            this.startTimer();
        } else {
            this.pauseTimer();
        }
    }

    startTimer() {
        this.startTimestamp = Date.now() - this.totalElapsed;
        this.updateInterval = setInterval(() => this.refreshDisplay(), 10);
        this.isActive = true;
        
        this.startButton.textContent = 'Pause';
        this.startButton.className = 'control-btn btn-pause';
        this.lapButton.disabled = false;
        
        this.timerWrapper.classList.add('active');
        this.timerDisplay.classList.add('running');
        this.timerDisplay.classList.remove('paused');
        
        this.statusDot.className = 'status-dot active';
        this.statusLabel.textContent = 'Running';
    }

    pauseTimer() {
        clearInterval(this.updateInterval);
        this.isActive = false;
        
        this.startButton.textContent = 'Resume';
        this.startButton.className = 'control-btn btn-start';
        this.lapButton.disabled = true;
        
        this.timerWrapper.classList.remove('active');
        this.timerWrapper.classList.add('paused');
        this.timerDisplay.classList.add('paused');
        this.timerDisplay.classList.remove('running');
        
        this.statusDot.className = 'status-dot paused';
        this.statusLabel.textContent = 'Paused';
    }

    resetTimer() {
        clearInterval(this.updateInterval);
        this.isActive = false;
        this.totalElapsed = 0;
        this.lapCounter = 0;
        this.lapHistory = [];
        
        this.refreshDisplay();
        
        this.startButton.textContent = 'Start';
        this.startButton.className = 'control-btn btn-start';
        this.lapButton.disabled = true;
        
        this.timerWrapper.classList.remove('active', 'paused');
        this.timerDisplay.classList.remove('running', 'paused');
        
        this.statusDot.className = 'status-dot idle';
        this.statusLabel.textContent = 'Ready';
        
        this.lapRecords.style.display = 'none';
        this.lapList.innerHTML = '<div class="empty-laps">No laps recorded yet</div>';
        this.lapBadge.textContent = '0';
    }

    addLap() {
        if (!this.isActive) return;
        
        this.lapCounter++;
        const currentLapTime = this.totalElapsed;
        const splitDuration = this.lapCounter === 1 ? currentLapTime : currentLapTime - this.lapHistory[this.lapHistory.length - 1].time;
        
        this.lapHistory.push({
            number: this.lapCounter,
            time: currentLapTime,
            split: splitDuration
        });
        
        this.updateLapDisplay();
    }

    updateLapDisplay() {
        this.lapRecords.style.display = 'block';
        this.lapBadge.textContent = this.lapCounter;
        
        if (this.lapList.querySelector('.empty-laps')) {
            this.lapList.innerHTML = '';
        }
        
        // Determine fastest and slowest splits (excluding first lap)
        const splitTimes = this.lapHistory.slice(1).map(lap => lap.split);
        const fastestSplit = splitTimes.length > 0 ? Math.min(...splitTimes) : null;
        const slowestSplit = splitTimes.length > 0 ? Math.max(...splitTimes) : null;
        
        const lapElement = document.createElement('div');
        lapElement.className = 'lap-entry';
        
        let indicatorClass = 'regular';
        let indicatorSymbol = this.lapCounter;
        
        if (this.lapCounter > 1) {
            const currentSplit = this.lapHistory[this.lapHistory.length - 1].split;
            if (currentSplit === fastestSplit) {
                indicatorClass = 'best';
                indicatorSymbol = '⚡';
            } else if (currentSplit === slowestSplit && splitTimes.length > 1) {
                indicatorClass = 'worst';
                indicatorSymbol = '🐌';
            }
        }
        
        lapElement.innerHTML = `
            <div class="lap-indicator ${indicatorClass}">${indicatorSymbol}</div>
            <div class="lap-index">Lap ${this.lapCounter}</div>
            <div class="lap-duration">${this.formatTimeDisplay(this.lapHistory[this.lapHistory.length - 1].time)}</div>
            <div class="lap-split-time">+${this.formatTimeDisplay(this.lapHistory[this.lapHistory.length - 1].split)}</div>
        `;
        
        this.lapList.insertBefore(lapElement, this.lapList.firstChild);
        
        // Add smooth animation
        lapElement.style.opacity = '0';
        lapElement.style.transform = 'translateY(-16px) scale(0.95)';
        setTimeout(() => {
            lapElement.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
            lapElement.style.opacity = '1';
            lapElement.style.transform = 'translateY(0) scale(1)';
        }, 10);
    }

    setupEventListeners() {
        document.addEventListener('keydown', (event) => {
            switch(event.code) {
                case 'Space':
                    event.preventDefault();
                    this.toggleTimer();
                    break;
                case 'KeyL':
                    event.preventDefault();
                    if (!this.lapButton.disabled) this.addLap();
                    break;
                case 'KeyR':
                    event.preventDefault();
                    this.resetTimer();
                    break;
            }
        });
    }
}

// Initialize the stopwatch
const chronoMaster = new ChronoMaster();

// Global functions for button handlers
function toggleTimer() { chronoMaster.toggleTimer(); }
function addLap() { chronoMaster.addLap(); }
function resetTimer() { chronoMaster.resetTimer(); }