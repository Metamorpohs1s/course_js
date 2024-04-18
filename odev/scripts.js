function calculateDateDifference() {
    let startDate = new Date(document.getElementById("startDate").value);
    let endDate = new Date(document.getElementById("endDate").value);
  

    if (startDate > endDate) {
      alert("Başlangıç tarihi, bitiş tarihinden sonra olamaz.");
      return;
    }
  
    let differenceInMilliseconds = endDate - startDate;
    let oneDayInMilliseconds = 1000 * 60 * 60 * 24;
    let differenceInDays = Math.floor(differenceInMilliseconds / oneDayInMilliseconds);
  
    document.getElementById("result").innerHTML = "Gün farkı: " + differenceInDays + " gün.";
  }