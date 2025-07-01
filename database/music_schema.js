db.createCollection("music", {
  validator: {
    $jsonSchema: {
      required: [
        "title",
        "published_at",
        "year",
        "explicit",
        "duration",
        "conversion_status",
        "artist",
        "genre",
        "moods",
      ],
      properties: {
        title: {
          bsonType: "string",
          minLength: 1,
          maxLength: 100,
          description:
            "Title of the music track, must be a string and is required.",
        },
        published_at: {
          bsonType: "date",
          description:
            "The date when the music was published, must be a date and is required.",
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
            "Indicates if the music track contains explicit content, must be a boolean.",
        },
        duration: {
          bsonType: "string",
          pattern: "^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$",
          description:
            "Duration of the music track in HH:MM:SS format, must be a string.",
        },
        thumbnail_prefix: {
          bsonType: "string",
          description:
            "Prefix for the thumbnail image in the storage, must be a string.",
        },
        content_key: {
          bsonType: "string",
          description:
            "Key for the music content in the storage, must be a string.",
        },
        conversion_status: {
          enum: ["PENDING", "ERROR", "SUCCESS"],
          description:
            "Status of the conversion process, must be one of 'PENDING', 'ERROR', or 'SUCCESS'.",
        },
        artist: {
          bsonType: "string",
          minLength: 1,
          maxLength: 50,
          description: "Name of the artist, must be a string and is required.",
        },
        feats: {
          bsonType: "array",
          items: {
            bsonType: "string",
            minLength: 1,
            maxLength: 50,
          },
          description:
            "Array of featured artists, each must be a string with length between 1 and 50.",
        },
        album: {
          bsonType: "string",
          minLength: 1,
          maxLength: 50,
          description: "Name of the album, must be a string.",
        },
        genre: {
          enum: [
            "ROCK",
            "POP",
            "JAZZ",
            "CLASSICAL",
            "HIP_HOP",
            "COUNTRY",
            "BLUES",
            "REGGAE",
            "ELECTRONIC",
            "FOLK",
            "METAL",
            "PUNK",
            "R_AND_B",
            "SOUL",
            "FUNK",
            "GOSPEL",
            "INDIE",
            "ALTERNATIVE_ROCK",
          ],
          description:
            "Genre of the music, must be one of the predefined genres.",
        },
        moods: {
          bsonType: "array",
          minItems: 1,
          maxItems: 6,
          items: {
            enum: [
              "HAPPY",
              "SAD",
              "CALM",
              "EXCITED",
              "RELAXED",
              "MOTIVATED",
              "NOSTALGIC",
              "ROMANTIC",
              "ENERGETIC",
              "MELANCHOLIC",
              "PEACEFUL",
              "INTENSE",
              "CHILLED",
              "FUNKY",
              "SOULFUL",
              "DREAMY",
              "SPIRITUAL",
              "MYSTERIOUS",
              "DARK",
              "PLAYFUL",
              "SERENE",
              "VIBRANT",
            ],
            description:
              "Array of moods associated with the music, each must be one of the predefined moods.",
          },
        },
      },
    },
  },
});
