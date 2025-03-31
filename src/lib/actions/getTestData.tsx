const API_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/api/test`;

export async function getTestData() {
  try {
    const response = await fetch(API_URL, {
      cache: "no-store",
      method: "GET",
    });

    if (!response.ok) {
      const ErrorData = await response.json();
      console.error("Error fetching data.");
      return {
        success: false,
        message: ErrorData || "Failed to fetch test data.",
        data: [],
      };
    }

    const result = await response.json();
    // console.log("result: ", result)
    return {
      success: true,
      data: result,
    };
  } catch (error) {
    console.error("Unexpected error:", error, null, 2);
    return {
      success: false,
      message: "Unexpected error occurred.",
      data: [],
    };
  }
}
