const memberService = require("../services/memberService");

const getMemberMetaDetails = (req, res) => {
  try {
    const {
      params: { memberId },
    } = req;
    console.log({ memberId }, "me");
    const metaDetails = memberService.getMemberMetaDetails(memberId);
    res.status(201).send({ status: "OK", data: metaDetails });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getMemberMetaDetails,
};
