interface GameLogic {
  pinsArray: number[];
  rollBall(pins: number): void;
  calculateScore(): number;
  isStrike(rollIndex: number): boolean;
  isSpare(frameIndex: number): boolean;
  calculateFrameScore(frameIndex: number): number;
  calculateBonusScore(frameIndex: number): number;
}

class BowlingGame implements GameLogic {
  pinsArray: number[];

  constructor() {
    this.pinsArray = [];
  }

  rollBall(pins: number): void {
    this.pinsArray.push(pins);
  }

  calculateScore(): number {
    let totalScore = 0;
    let frameIndex = 0;

    for (let frame = 0; frame < 10; frame++) {
      let frameScore = 0;

      if (this.isStrike(frameIndex)) {
        frameScore = 10 + this.calculateBonusScore(frameIndex);
        frameIndex++;
      } else if (this.isSpare(frameIndex)) {
        frameScore = 10 + this.pinsArray[frameIndex + 2];
        frameIndex += 2;
      } else {
        frameScore = this.calculateFrameScore(frameIndex);
        frameIndex += 2;
      }

      totalScore += frameScore;
    }

    return totalScore;
  }

  isStrike(rollIndex: number): boolean {
    return this.pinsArray[rollIndex] === 10;
  }

  isSpare(frameIndex: number): boolean {
    return this.pinsArray[frameIndex] + this.pinsArray[frameIndex + 1] === 10 &&
      !this.isStrike(frameIndex);
  }

  calculateFrameScore(frameIndex: number): number {
    return this.pinsArray[frameIndex] + this.pinsArray[frameIndex + 1];
  }

  calculateBonusScore(frameIndex: number): number {
    const nextRoll = this.pinsArray[frameIndex + 1] || 0;
    const afterNextRoll = this.pinsArray[frameIndex + 2] || 0;
    return nextRoll + afterNextRoll;
  }
}

export default BowlingGame;
