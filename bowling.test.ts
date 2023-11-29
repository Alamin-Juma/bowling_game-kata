import BowlingGame from './bowling';

test('A game with no pins should have a score of 0 ', () => {
  const game = new BowlingGame();
  for (let i = 0; i < 20; i++) {
    game.rollBall(0)
  }
  expect(game.calculateScore()).toBe(0);
})
test('A perfect game should have a score of 300', () => {
  const game = new BowlingGame();
  for (let i = 0; i < 12; i++) {
    game.rollBall(10);
  }
  expect(game.calculateScore()).toBe(300);
});

test('A game with all gutter balls should have a score of 0', () => {
  const game = new BowlingGame();
  for (let i = 0; i < 20; i++) {
    game.rollBall(0);
  }
  expect(game.calculateScore()).toBe(0);
});

test('A game with all rolls knocking down 9 pins should have a score of 90', () => {
  const game = new BowlingGame();
  for (let i = 0; i < 10; i++) {
    game.rollBall(9);
    game.rollBall(0);
  }
  expect(game.calculateScore()).toBe(90);
});

test('A game with all spares should have a score of 150', () => {
  const game = new BowlingGame();
  for (let i = 0; i < 21; i++) {
    game.rollBall(5);
  }
  expect(game.calculateScore()).toBe(150);
});

test('should score all spares (150)', () => {
  const game = new BowlingGame();
  for (let i = 0; i < 21; i++) {
    game.rollBall(5);
  }
  expect(game.calculateScore()).toBe(150);
});

test('should score 16 for a spare followed by a 3-ball', () => {
  const game = new BowlingGame();

  // Rolls to make a spare followed by a 3-ball
  game.rollBall(5);
  game.rollBall(5); // Spare
  game.rollBall(3); // First ball after spare
  game.rollBall(0); // Second ball after spare

  // Rolls for the remaining frames
  for (let i = 0; i < 16; i++) {
    game.rollBall(0);
  }

  expect(game.calculateScore()).toBe(16);
});

test('should score 9 for all frames [9,0,9,0,...] (90)', () => {
  const game = new BowlingGame();

  // Roll 9 and 0 for each frame (10 frames)
  Array.from({ length: 10 }, () => {
    game.rollBall(9);
    game.rollBall(0);
  });

  // Expect the total score to be 90
  expect(game.calculateScore()).toBe(90);
});

