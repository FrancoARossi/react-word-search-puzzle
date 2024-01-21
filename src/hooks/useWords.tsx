import { useEffect, useState } from "react";

type UseWordsProps = {
  amount: number;
  length?: number;
  lang?: "de" | "zh" | "it" | "fr" | "es" | "en";
};

const useWords = ({
  amount = 1,
  length,
  lang = "en",
}: UseWordsProps) => {
  const [words, setWords] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchWords = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${import.meta.env.VITE_WORDS_API_URL}?number=${amount}&lang=${lang}${
            length ? `&length=${length}` : ""
          }`
        );
        const data = await response.json();
        setWords(data);
        setLoading(false);
      } catch {
        setLoading(false);
        setError(true);
      }
    };

    fetchWords();
  }, [amount, length, lang]);

  return { words, loading, error };
};

export default useWords;
