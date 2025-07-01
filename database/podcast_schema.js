db.createCollection("podcast", {
  validator: {
    $jsonSchema: {
      required: [
        "title",
        "published_at",
        "year",
        "explicit",
        "duration",
        "conversion_status",
        "presenter",
        "guests",
        "description",
        "categories",
        "episode_number",
        "season_number",
      ],
      properties: {
        title: {
          bsonType: "string",
          minLength: 1,
          maxLength: 100,
          description:
            "Title of the podcast episode, must be a string and is required.",
        },
        published_at: {
          bsonType: "date",
          description:
            "The date when the podcast episode was published, must be a date and is required.",
        },
        year: {
          bsonType: "int",
          minimum: 1900,
          maximum: 2100,
          description:
            "Year of release, must be an integer between 1900 and 2100.",
        },
        explicit: {
          bsonType: "bool",
          description:
            "Indicates if the podcast episode contains explicit content, must be a boolean.",
        },
        duration: {
          bsonType: "string",
          pattern: "^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$",
          description:
            "Duration of the podcast episode in HH:MM:SS format, must be a string.",
        },
        thumbnail_prefix: {
          bsonType: "string",
          description:
            "Prefix for the thumbnail image in the storage, must be a string.",
        },
        content_key: {
          bsonType: "string",
          description:
            "Key for the podcast content in the storage, must be a string.",
        },
        conversion_status: {
          enum: ["PENDING", "ERROR", "SUCCESS"],
          description:
            "Status of the conversion process, must be one of 'PENDING', 'ERROR', or 'SUCCESS'.",
        },
        presenter: {
          bsonType: "string",
          minLength: 1,
          maxLength: 50,
          description:
            "Name of the podcast presenter, must be a string and is required.",
        },
        guests: {
          bsonType: "array",
          minItems: 1,
          items: {
            bsonType: "string",
            minLength: 1,
            maxLength: 50,
          },
          description:
            "List of guest names on the podcast episode, must be an array of strings.",
        },
        description: {
          bsonType: "string",
          minLength: 1,
          maxLength: 500,
          description:
            "Description of the podcast episode, must be a string and is required.",
        },
        categories: {
          bsonType: "array",
          minItems: 1,
          maxItems: 3,
          items: {
            enum: [
              "COMEDY",
              "EDUCATION",
              "BUSINESS",
              "TECHNOLOGY",
              "HEALTH",
              "NEWS",
              "SPORTS",
              "ARTS",
              "SCIENCE",
              "SOCIETY_CULTURE",
            ],
          },
        },
        episode_number: {
          bsonType: "int",
          minimum: 1,
          description:
            "Episode number of the podcast, must be a positive integer.",
        },
        season_number: {
          bsonType: "int",
          minimum: 1,
          description:
            "Season number of the podcast, must be a positive integer.",
        },
      },
    },
  },
});
