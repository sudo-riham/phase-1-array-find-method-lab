const record = [
    { year: "2018", result: "L" },
    { year: "2017", result: "W" },
    { year: "2016", result: "N/A" },
    //...
  ];
  
  const superbowlWin = (collection) => {
    for (const ele of collection) {
      if (ele.result === "W") {
        return ele.year;
      }
    }
  };