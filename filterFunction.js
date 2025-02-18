console.log("Try programiz.pro");

function fetchDataAndFilter(data, keyword) {
  if (!Array.isArray(data) || typeof keyword !== "string") return [];

  return data.filter(
    (item) =>
      typeof item?.title === "string" &&
      item.title.toLowerCase().includes(keyword.toLowerCase())
  );
}

// Test Runner Function
function runTests() {
  function assertEqual(actual, expected, testName) {
    const isEqual = JSON.stringify(actual) === JSON.stringify(expected);
    console.log(isEqual ? `✅ ${testName} passed` : `❌ ${testName} failed`);
    if (!isEqual) {
      console.log("   Expected:", expected);
      console.log("   Got:", actual);
    }
  }

  assertEqual(
    fetchDataAndFilter(
      [
        { title: "JavaScript Basics" },
        { title: "Python Guide" },
        { title: "JS for Beginners" },
      ],
      "js"
    ),
    [{ title: "JavaScript Basics" }, { title: "JS for Beginners" }],
    "Filters based on case-insensitive keyword"
  );

  assertEqual(fetchDataAndFilter([], "test"), [], "Handles empty array");

  assertEqual(
    fetchDataAndFilter([{ title: "JavaScript" }, { name: "Python" }], "java"),
    [{ title: "JavaScript" }],
    "Handles missing title property"
  );

  assertEqual(
    fetchDataAndFilter([{ title: "JavaScript" }], "javascript"),
    [{ title: "JavaScript" }],
    "Handles case insensitivity"
  );

  assertEqual(
    fetchDataAndFilter("not an array", "test"),
    [],
    "Handles invalid data type (not an array)"
  );
  assertEqual(
    fetchDataAndFilter([{ title: "JavaScript" }], 123),
    [],
    "Handles invalid keyword type (not a string)"
  );

  assertEqual(
    fetchDataAndFilter([{ title: "Python" }], "JavaScript"),
    [],
    "Returns empty array when no match is found"
  );

  console.log("All tests completed!");
}

// Run the tests
runTests();
