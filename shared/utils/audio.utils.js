export const getReadableDuration = (duration) => {
    const minutes = Math.floor(Math.floor(duration) / 60);
    const seconds = Math.floor(duration) - minutes * 60;



    const preparedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    const prepareMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${prepareMinutes}:${preparedSeconds}`;
}