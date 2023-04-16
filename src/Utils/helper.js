function filterData(searchedText, restoList) {
  const filteredData = restoList.filter((resto) =>
    resto?.data?.name?.toLowerCase().includes(searchedText.toLowerCase())
  );

  return filteredData;
}

export { filterData };
