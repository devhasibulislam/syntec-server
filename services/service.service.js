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

/* update specific service from DB */
exports.updateAServiceFromService = async (id, data) => {
  const result = await Service.updateOne({ _id: id }, data, {
    runValidators: true,
  });
  return result;
};
