const getPlanes = (req, res, next) => {
  const db = req.app.get("db");
  db.ge_planes()
    .then(Response => {
      res.status(200).send(Response);
    })
    .catch(e => res.status(500).send(e));
};
const getOnePlane = (req, res, next) => {
  const db = req.app.get("db");
  db.ge_one_plane([req.query.id])
    .then(Response => {
      res.status(200).send(Response);
    })
    .catch(e => res.status(500).send(e));
};

const addPlane = (req, res, next) => {
  const db = req.app.get("db");
  db.add_plane([req.body.planeType, req.body.passengerCount])
    .then(Response => {
      res.status(200).send(Response);
    })
    .catch(e => res.status(500).send(e));
};

module.exports = {
  getPlanes,
  getOnePlane,
  addPlane
};
