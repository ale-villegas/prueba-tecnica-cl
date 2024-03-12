import { useEffect, useState } from "react";
import { PostType } from "../types";

const useFetch = (service: () => Promise<PostType[]>) => {
  const [data, setData] = useState<Array<PostType> | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await service();
        setData(response);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error(error as string));
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [service]);

  return { data, isLoading, error };
};

export default useFetch;
