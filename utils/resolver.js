const { apiUrl, apiKey } = require("./constants");
const axios = require("axios");

class Resolver {
  constructor() {
    this.baseUrl = apiUrl;
    this.entities = ["player", "profile", "gambitstats"];
    this.requestHeaders = {
      "Content-Type": "application/json",
      "X-API-Key": apiKey
    };
  }

  get(entity, options = {}) {
    if (!this.verifyEntity(entity)) {
      return this.returnError("Invalid Entity", 400);
    }
    const requestInstance = this.generateRequestInstance(entity, options);
    console.log(requestInstance);
    return axios(requestInstance);
  }

  returnError(message, code) {
    // todo:
    return new Error();
  }

  verifyEntity(entity) {
    console.log(entity);
    return this.entities.includes(entity.toLowerCase());
  }

  generateRequestInstance(entity, options) {
    let url = this.getUrl(entity, options);
    return {
      method: "GET",
      headers: this.requestHeaders,
      url: url,
      params: options.queryParams
    };
  }

  getUrl(entity, { urlParams }) {
    if (entity === "player") {
      return this.playerUrl(urlParams);
    } else if (entity === "profile") {
      return this.profileUrl(urlParams);
    } else {
      return this.gambitStatsUrl(urlParams);
    }
  }

  playerUrl(params) {
    return `${this.baseUrl}/SearchDestinyPlayer/${params.platform}/${
      params.player
    }`;
  }

  profileUrl(params) {
    return `${this.baseUrl}/${params.platform}/Profile/${params.membershipId}`;
  }

  gambitStatsUrl(params) {
    return `${this.baseUrl}/${params.platform}/Account/${
      params.membershipId
    }/Character/${params.character}/Stats`;
  }
}

module.exports = Resolver;
