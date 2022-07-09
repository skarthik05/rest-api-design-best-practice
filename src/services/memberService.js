const Member = require("../database/Member");

const getMemberMetaDetails = (memberId) => {
  try {
    const metaDetails = Member.getMemberMetaDetails(memberId);
    return metaDetails;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getMemberMetaDetails,
};
