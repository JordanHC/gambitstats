const apiUrl = "https://www.bungie.net/Platform/Destiny2";
const apiKey = process.env.API_KEY;

const getPlayer = `${apiUrl}/SearchDestinyPlayer/1/deafslifer`;
const getProfile = `${apiUrl}/1/Profile/4611686018430012891`;
const getGambitStats = `${apiUrl}/1/Account/4611686018430012891/Character/0/Stats`;

module.exports = {
  apiKey,
  apiUrl,
  getPlayer,
  getProfile,
  getGambitStats
};
