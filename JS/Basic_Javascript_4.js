function my_Dictionary() {
  var student = {
    Name: "Michael",
    Major: "Biology",
    Grade: "Sophomore",
    GPA: 4.0,
  };

  
    

delete student.Major;
document.getElementById("Dictionary").innerHTML= student.Major;
}