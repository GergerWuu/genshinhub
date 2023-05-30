const SERVICE_UID_PREFIX = {
  cn_gf01: [1, 2, 3, 4],
  cn_qd01: [5],
  os_usa: [6],
  os_euro: [7],
  os_asia: [8],
  os_cht: [9],
};

export const getServerByUid = (uid) => {
  return Object.keys(SERVICE_UID_PREFIX).find((server) => {
    return SERVICE_UID_PREFIX[server].some((pre) => {
      return uid.startsWith(pre);
    });
  });
};
