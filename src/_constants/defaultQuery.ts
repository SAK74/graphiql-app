export const DEFAULT_QUERY = `query Character {
    characters {
      results {
        name
      }
    }
    }`;

export default DEFAULT_QUERY;

export const SCHEMA_QUERY = `{
  __schema {
    queryType {
      fields {
        name
        description
        args {
          name
        }
      }
    }
  }
}`;

export const INTROSPECTION_QUERY = `query IntrospectionQuery {
  __schema {
    queryType {
      fields {
        name
        description
        args {
          name
        }
        type {
          name
        fields {
          name
          description
          type {
            name
            description
          }
        }
        }
      }
    }
  }
}`;

export const GET_SCHEMA_FIELDS = `
  {
    __schema {
      types {
        name
        fields {
          name
          args {
            name
          }
        }
      }
    }
  }
`;
