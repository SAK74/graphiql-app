const DEFAULT_QUERY = `query Character {
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
