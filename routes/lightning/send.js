module.exports = ah(async (req, res) => {
  let { amount, route, memo, payreq } = req.body;
  let { user } = req;

  try {
    res.send(await send(amount, memo, payreq, user));
  } catch (e) {
    l.error("problem sending lightning payment", user.username, payreq, e.message);
    res.status(500).send(e.message);
  }
});
