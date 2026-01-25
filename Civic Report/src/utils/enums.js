const userTypes = Object.freeze({
  citizen: "citizen",
  official: "official",
});

const Statuses = Object.freeze({
  pending: "pending",
  inProgress: "inProgress",
  solved: "solved",
  rejected: "rejected",
});
const statusColors = Object.freeze({
  inProgress: "#DFC900",
  solved: "#04B900",
  rejected: "#C70000",
});
export { userTypes, Statuses, statusColors };
