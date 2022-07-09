const DB = require("./db.json");

const getMemberMetaDetails = (memberId) => {
  try {
    const metaDetails = DB.members.filter((member) => member.id === memberId);
    if (!metaDetails) {
      throw {
        status: 400,
        message: `Can't find workout with the id '${memberId}'`,
      };
    }
    return metaDetails;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};
module.exports = { getMemberMetaDetails };
