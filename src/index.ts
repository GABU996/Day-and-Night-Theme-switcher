import './styles.css';

class ThemeChanger {
    private body: HTMLElement;
    private themeToggle: HTMLButtonElement;
    private isDarkTheme = false;
    private starsContainer: HTMLElement;
    private sunElement: HTMLElement;
    private moonElement: HTMLElement;

    constructor() {
        this.body = document.body;
        this.themeToggle = document.getElementById('themeToggle') as HTMLButtonElement;
        this.starsContainer = document.getElementById('stars') as HTMLElement;
        this.sunElement = document.getElementById('sun') as HTMLElement;
        this.moonElement = document.getElementById('moon') as HTMLElement;
        this.init();
    }

    private init(): void {
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
        this.createStars();
        this.updateButtonText();
        this.body.classList.add('light-theme');
    }

    private toggleTheme(): void {
        this.isDarkTheme = !this.isDarkTheme;
        this.body.classList.toggle('dark-theme', this.isDarkTheme);
        this.body.classList.toggle('light-theme', !this.isDarkTheme);
        this.animateCelestialBodies();
        this.updateButtonText();
    }

    private animateCelestialBodies(): void {
        if (this.isDarkTheme) {
            this.sunElement.style.top = '-100px';
            this.sunElement.style.transform = 'rotate(-180deg)';
            setTimeout(() => {
                this.moonElement.style.top = '50px';
                this.moonElement.style.transform = 'rotate(360deg)';
            }, 750);
        } else {
            this.moonElement.style.top = '-100px';
            this.moonElement.style.transform = 'rotate(0deg)';
            setTimeout(() => {
                this.sunElement.style.top = '50px';
                this.sunElement.style.transform = 'rotate(0deg)';
            }, 750);
        }
    }

    private updateButtonText(): void {
        const buttonText = this.themeToggle.querySelector('.button-text') as HTMLSpanElement;
        buttonText.textContent = this.isDarkTheme ? 'Switch to Day' : 'Switch to Night';
    }

    private createStars(): void {
        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.width = `${Math.random() * 3}px`;
            star.style.height = star.style.width;
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            this.starsContainer.appendChild(star);
        }
    }
}

// Initialize the ThemeChanger when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ThemeChanger();
});
