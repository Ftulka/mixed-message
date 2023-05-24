let data = {
    names: ['James', 'Jack', 'Jacob'],
    verbs: ['love', 'hate', 'like'],
    food: ['carrot', 'pizza', 'potato'],
    getRandomMessage() {
        return this.getRandomWord(this.names) + ' ' + this.getRandomWord(this.verbs) + ' ' + this.getRandomWord(this.food);
    },
    getRandomWord(words) {
        return words[Math.floor(Math.random() * words.length)];
    }
};

let message = 'Your message: ' + data.getRandomMessage();
console.log(message);