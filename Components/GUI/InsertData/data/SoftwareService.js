export const SoftwareService = {
  getData() {
    return [
      {
        Description: "This is the first item.",
        date: "2023-05-21",
        Version: "1.0.0",
        ID: "ABC123",
        status: "done",
      },
      {
        Description: "This is the second item.",
        date: "2023-05-20",
        Version: "2.3.1",
        ID: "DEF456",
        status: "not started",
      },
      {
        Description: "This is the third item.",
        date: "2023-05-19",
        Version: "0.9.5",
        ID: "GHI789",
        status: "done",
      },
      {
        Description: "This is the fourth item.",
        date: "2023-05-18",
        Version: "3.7.2",
        ID: "JKL012",
        status: "running",
      },
      {
        Description: "This is the fifth item.",
        date: "2023-05-17",
        Version: "1.2.3",
        ID: "MNO345",
        status: "running",
      },
      {
        Description: "This is the sixth item.",
        date: "2023-05-16",
        Version: "5.6.7",
        ID: "PQR678",
        status: "done",
      },
      {
        Description: "This is the seventh item.",
        date: "2023-05-15",
        Version: "0.1.0",
        ID: "STU901",
        status: "running",
      },
      {
        Description: "This is the eighth item.",
        date: "2023-05-14",
        Version: "4.2.1",
        ID: "VWX234",
        status: "not started",
      },
      {
        Description: "This is the ninth item.",
        date: "2023-05-13",
        Version: "3.0.0",
        ID: "YZA567",
        status: "running",
      },
      {
        Description: "This is the tenth item.",
        date: "2023-05-12",
        Version: "2.5.4",
        ID: "BCD890",
        status: "running",
      },
      {
        Description: "Product A",
        date: "2023-05-21",
        Version: "1.2.0",
        ID: "PRD123",
        status: "running",
      },
      {
        Description: "Product B",
        date: "2023-05-20",
        Version: "2.0.1",
        ID: "PRD456",
        status: "running",
      },
      {
        Description: "Product C",
        date: "2023-05-19",
        Version: "3.5.2",
        ID: "PRD789",
        status: "running",
      },
    ];
  },

  getCustomersSmall() {
    return Promise.resolve(this.getData());
  },

  getCustomers(params) {
    const queryParams = params
      ? Object.keys(params)
          .map(
            (k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k])
          )
          .join("&")
      : "";

    return fetch(
      "https://www.primefaces.org/data/customers?" + queryParams
    ).then((res) => res.json());
  },
};
