export function range(target) {
  return Array.from({ length: target }, (_, idx) => idx);
}

export function getScoreFromGames(games) {
  const firstTeamScore = games.filter(g => g.first_team_result === 'win');
  const secondTeamScore = games.filter(g => g.second_team_result === 'win');
  return [firstTeamScore.length, secondTeamScore.length];
}

export function findMaxStage(seriesList) {
  return Math.max(...seriesList.map(series => series.stage));
}

export function findSeries(stage, order, seriesList) {
  return (
    seriesList.filter(
      series => series.stage === stage && series.order === order
    )[0] || null
  );
}
