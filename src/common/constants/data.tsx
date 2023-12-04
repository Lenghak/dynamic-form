export const data = {
  form_data: {
    first_name: {
      type: "text",
      label: "First Name",
      placeholder: "",
      // max: 100,
      event_on: [
        {
          on: "",
          url: "",
          params: [],
          placeholder: "Event on change with list of params.",
        },
      ],
    },
    last_name: {
      type: "text",
      label: "Last Name",
      placeholder: "",
      // max: 100,
      event_on: [
        {
          on: "",
          url: "",
          params: [],
          placeholder: "Event on change with list of params.",
        },
      ],
    },
    salutation: {
      type: "select",
      label: "Salutation",
      placeholder: "",
      // max: 100,
      event_on: [
        {
          on: "",
          url: "",
          params: [],
          placeholder: "Event on change with list of params.",
        },
      ],
    },
    gender: {
      type: "select",
      label: "Gender",
      placeholder: "",
      // max: 100,
      event_on: [
        {
          on: "",
          url: "",
          params: [],
          placeholder: "Event on change with list of params.",
        },
      ],
    },
    date_of_birth: {
      type: "date",
      label: "Date of Birth",
      placeholder: "",
      // max: 100,
      event_on: [
        {
          on: "",
          url: "",
          params: [],
          placeholder: "Event on change with list of params.",
        },
      ],
    },
    country: {
      type: "select",
      label: "Country",
      placeholder: "",
      // max: 100,
      event_on: [
        {
          on: "",
          url: "",
          params: [],
          placeholder: "Event on change with list of params.",
        },
      ],
    },
    province: {
      type: "select",
      label: "Province",
      placeholder: "",
      // max: 100,
      event_on: [
        {
          on: "",
          url: "",
          params: [],
          placeholder: "Event on change with list of params.",
        },
      ],
    },
    district: {
      type: "select",
      label: "District",
      placeholder: "",
      // max: 100,
      event_on: [
        {
          on: "",
          url: "",
          params: [],
          placeholder: "Event on change with list of params.",
        },
      ],
    },
    commune: {
      type: "select",
      label: "Commune",
      placeholder: "",
      // max: 100,
      event_on: [
        {
          on: "",
          url: "",
          params: [],
          placeholder: "Event on change with list of params.",
        },
      ],
    },
    village: {
      type: "select",
      label: "Village",
      placeholder: "",
      // max: 100,
      event_on: [
        {
          on: "",
          url: "",
          params: [],
          placeholder: "Event on change with list of params.",
        },
      ],
    },
    permanent_address: {
      type: "one_to_one",
      display: "table",
      label: "",
      items: {
        country: {
          type: "select",
          label: "Country",
          placeholder: "",
          // max: 100,
          event_on: [
            {
              on: "",
              url: "",
              params: [],
              placeholder: "Event on change with list of params.",
            },
          ],
        },
        province: {
          type: "select",
          label: "Province",
          placeholder: "",
          // max: 100,
          event_on: [
            {
              on: "",
              url: "",
              params: [],
              placeholder: "Event on change with list of params.",
            },
          ],
        },
        district: {
          type: "select",
          label: "District",
          placeholder: "",
          // max: 100,
          event_on: [
            {
              on: "",
              url: "",
              params: [],
              placeholder: "Event on change with list of params.",
            },
          ],
        },
        commune: {
          type: "select",
          label: "Commune",
          placeholder: "",
          // max: 100,
          event_on: [
            {
              on: "",
              url: "",
              params: [],
              placeholder: "Event on change with list of params.",
            },
          ],
        },
        village: {
          type: "select",
          label: "Village",
          placeholder: "",
          // max: 100,
          event_on: [
            {
              on: "",
              url: "",
              params: [],
              placeholder: "Event on change with list of params.",
            },
          ],
        },
      },
      event_on: [
        {
          on: "",
          url: "",
          params: [],
          placeholder: "Event on change with list of params.",
        },
      ],
    },
    id_cards: {
      type: "one_to_many",
      display: "table",
      label: "",
      items: {
        id_number: {
          type: "text",
          label: "ID Number",
          placeholder: "",
          // max: 100,
          event_on: [
            {
              on: "",
              url: "",
              params: [],
              placeholder: "Event on change with list of params.",
            },
          ],
        },
        id_type: {
          type: "select",
          label: "ID Type",
          placeholder: "",
          // max: 100,
          event_on: [
            {
              on: "",
              url: "",
              params: [],
              placeholder: "Event on change with list of params.",
            },
          ],
        },
      },
      event_on: [
        {
          on: "",
          url: "",
          params: [],
          placeholder: "Event on change with list of params.",
        },
      ],
    },
  },
};
