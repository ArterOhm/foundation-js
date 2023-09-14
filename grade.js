const grade = (score) => {
  const urscore = Math.round(score);
  if (urscore <= 100 && urscore >= 0) {
    if (urscore >= 80) {
      console.log("You got A");
    } else if (urscore >= 70) {
      console.log("You got B");
    } else if (urscore >= 60) {
      console.log("You got C");
    } else if (urscore >= 50) {
      console.log("You got D");
    } else if (urscore < 50) {
      console.log("You got F");
    }
  } else {
    console.log("Score 0-100. error message.");
  }
};

grade(79.8);
grade(10);
grade(-1);
grade(101);
grade(50);
grade(60);
grade(70);
