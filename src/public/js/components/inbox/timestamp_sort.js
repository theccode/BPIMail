const timestamp_sort = (email1, email2) => {
    return email2.time_stamp - email1.time_stamp;
};

module.exports = timestamp_sort;