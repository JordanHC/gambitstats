
require('dotenv').config();
const express = require('express')
const next = require('next')
const axios = require('axios');
const Resolver = require('./utils/resolver');
const { getGambitStats } = require('./utils/constants');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express()
  const resolver = new Resolver();

  server.get('/api/getGambitStats/', (req, res) => {
    axios(getGambitStats, {
      method: 'GET',
      headers: {
        'Content-Type': "application/json",
        'X-API-Key': apiKey
      },
      params: {
        "modes": 63
      }
    }).then( response => {
      res.send(response.data.Response.pvecomp_gambit.allTime);
    });
  });

  server.get('/api/getProfile/', (req, res) => {
    resolver.get("profile", {
      urlParams: {
        platform: 1,
        membershipId: 4611686018430012891
      },
      queryParams: {
        "components": "100,202"
      }
    }).then(response => {
      res.send(response.data);
    })
  });

  server.get('/api/getPlayer/', (req, res) => {
    resolver.get("player", {
      urlParams: {
        platform: 1,
        player: "deafslifer"
      }
    }).then(response => {
      res.send(response.data.Response[0]);
    })
  });

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})