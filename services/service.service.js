const Service = require("../schemas/service.schema");

/* insert new service to DB */
exports.postAServiceToService = async (data) => {
  const result = await Service.create(data);
  return result;
};

/* fetching all services from DB */
exports.displayAllServicesFromService = async () => {
  const result = await Service.find({});
  return result;
};
