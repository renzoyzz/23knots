export class AudioHandler {
    private sounds: HTMLAudioElement[] = [];
    private soundSource: string = './assets/sounds/'
    constructor(){

    }

    public addSound(source: string) {
        let sound = new Audio(this.soundSource.concat(source));
        sound.onended = (audio) => {
            let soundIndex = this.sounds.indexOf(<HTMLAudioElement>audio.srcElement);
            this.sounds.splice(soundIndex, 1);
        }
        this.sounds.push(sound);
        sound.play();
    }




}