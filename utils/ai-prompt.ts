const apiKey = process.env.SAMBANOVA_AI_API_KEY;


export const analyzeContract = async (
  contract: string,
  setResults: any,
  setLoading: any
) => {
  setLoading(true);

  try {
    const response = await fetch("/api/analyzeContract", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ contract }),
    });

    if (!response.ok) throw new Error("Error analyzing contract");

    const data = await response.json();
    setResults(data);
  } catch (error) {
    console.error("Error analyzing contract:", error);
    setResults(null);
  } finally {
    setLoading(false);
  }
};
