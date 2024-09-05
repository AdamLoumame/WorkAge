function checkage() {
  let age = document.getElementById("userage").value.trim();
  if (age === "") {
    document.getElementById("finalresult").innerHTML = "No Input Given";
    document.getElementById("imageresult").src = "";
    document.getElementById("bullets").style.display = "flex";
    return;
  }
// the text and the result  
  document.getElementById("finalresult").innerHTML = `${
    age >= 0 && age < 20
      ? "Too young :"
      : age >= 20 && age <= 60
      ? "Perfect :"
      : age > 60
      ? "Too old :"
      : ""} ${/^\d+$/.test(age) ? Math.round(age) + " Years Old" : "Dont Be Silly"}`;
//  for the image selection
  document.getElementById("imageresult").src = `${
    age < 20
      ? "images/baby.jpg"
      : age >= 20 && age <= 60
      ? "images/man.jpg"
      : age > 60
      ? "images/old man.jpg"
      : ""}`;
//  the bullets when display
  document.getElementById("bullets").style.display = `${
    age >= 0 ? "none" : "flex"}`;
}
