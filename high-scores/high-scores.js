export class HighScores {
  constructor(scoresList) {
    this.scoresList = scoresList;
    this.latestScore = scoresList[scoresList.length - 1];
    this.personalBestScore = Math.max(...scoresList);
    this.topThree = scoresList.slice().sort((a,b) => b-a).slice(0, 3);
  }

  get scores() {
    return this.scoresList;
  }

  get latest() {
    return this.latestScore;
  }

  get personalBest() {
    return this.personalBestScore;
  }

  get personalTopThree() {
    return this.topThree;
  }
}
