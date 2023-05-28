import { useEffect, useState } from 'react';
import { buildClientSchema, getIntrospectionQuery, GraphQLSchema } from 'graphql';
import { GridLoader } from 'react-spinners';

const Documentation: React.FC = () => {
  const [schema, setSchema] = useState<GraphQLSchema | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  useEffect(() => {
    const fetchSchema = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/graphql', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query: getIntrospectionQuery() }),
        });
        const { data } = await response.json();
        setSchema(buildClientSchema(data));
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error('An unknown error occurred'));
        }
      } finally {
        setLoading(false);
      }
    };
    fetchSchema();
  }, []);
  if (loading)
    return (
      <GridLoader
        color="#36d7b7"
        loading
        cssOverride={{
          position: 'relative',
          top: '90%',
          left: '50%',
          transform: 'translate(-90%, -50%)',
        }}
      />
    );
  if (error) return <p>Error: {error.message}</p>;
  if (!schema) return null;

  const queryType = schema.getQueryType();

  if (!queryType) return null;
  const fields = queryType.getFields();

  return (
    <div className="max-w-1/3 p-4">
      <h2 className="mb-4 text-2xl font-bold">Docs</h2>
      <h3 className="mb-2 text-xl font-semibold">Query</h3>
      {selectedType ? (
        <>
          <button
            className="mb-4 text-blue-500 hover:underline"
            onClick={() => setSelectedType(null)}
          >
            Back
          </button>
          <h3 className="mb-1 text-lg font-semibold">{selectedType}</h3>
          <p className="mb-2">{fields[selectedType].description}</p>
          <h4 className="mb-1 text-lg font-semibold">Type</h4>
          <p className="mb-2 text-yellow-500">{fields[selectedType].type.toString()}</p>
          <h4 className="mb-1 text-lg font-semibold">Arguments</h4>
          <ul className="list-inside list-disc">
            {fields[selectedType].args.map((arg) => (
              <li
                key={arg.name}
                className="mb-1 list-none"
              >
                <span className="text-red-400">{arg.name}</span>:{' '}
                <span className="text-yellow-500">{arg.type.toString()}</span>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <ul className="list-inside list-disc">
          {Object.values(fields).map((field) => (
            <li
              key={field.name}
              className="mb-2 list-none"
            >
              <button
                className="mb-2 text-blue-500 hover:underline"
                onClick={() => setSelectedType(field.name)}
              >
                {field.name}
              </button>
              <span className="mx-1 text-red-400">
                ({field.args.map((arg) => arg.name).join(', ')})
              </span>
              : <span className="text-yellow-400">{field.type.toString()}</span>
              <br />
              {field.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Documentation;
