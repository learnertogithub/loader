function getDetails() {
        var pinno = document.getElementById('pinno').value;
        var resultDisplay = document.getElementById("resultDisplay");
        var dndisp = document.getElementById("Download_disp");
        var loader = document.getElementById("loader");
        var loadingText = document.getElementById("loading-text");
        var loadingBarContainer = document.getElementById("loading-bar-container");
        var loadingBar = document.getElementById("loading-bar");
      
        if (pinno == '22280') {
          var Group = document.getElementById('Group').value;
      
          if (Group == 'CME') {
            var rollno = document.getElementById('rollno').value;
            var choice = rollno;
            loader.style.display = "block";
      
            var interval = setInterval(function () {
              loadingText.innerHTML = "Loading... " + loadingBar.style.width;
              loadingBar.style.width = parseInt(loadingBar.style.width) + 5 + "%";
              if (parseInt(loadingBar.style.width) >= 100) {
                clearInterval(interval);
              }
            }, 100);
      
            setTimeout(function () {
              switch (choice) {
                case '001':
                  resultDisplay.innerHTML = '<img src="Cme1styear\\001.jpg" id="result_image" width="500px">';
                  dndisp.innerHTML = '<a href="Cme1styear\\001.jpg" download="Cme1styear\\001.jpg" style="margin-top:30px;font-size:20px;">Download</a>';
                  break;
                case '002':
                  resultDisplay.innerHTML = '<img src="Cme1styear\\002.jpg" id="result_image" width="500px">';
                  dndisp.innerHTML = '<a href="Cme1styear\\002.jpg" download="Cme1styear\\002.jpg" style="margin-top:30px;font-size:20px;">Download</a>';
                  break;
                case '003': resultDisplay.innerHTML='<img src="Cme1styear\\003.jpg" id="result_image" width="500px">';
            dndisp.innerHTML='<a href="Cme1styear\\003.jpg" download="Cme1styear\\003.jpg" style="margin-top:30px;font-size:20px;">Download</a>';
            break;
case '004': resultDisplay.innerHTML='<img src="Cme1styear\\004.jpg" id="result_image" width="500px">';
            dndisp.innerHTML='<a href="Cme1styear\\004.jpg" download="Cme1styear\\004.jpg" style="margin-top:30px;font-size:20px;">Download</a>';
            break;
case '005': resultDisplay.innerHTML='<img src="Cme1styear\\005.jpg" id="result_image" width="500px">';
            dndisp.innerHTML='<a href="Cme1styear\\005.jpg" download="Cme1styear\\005.jpg" style="margin-top:30px;font-size:20px;">Download</a>';
            break;
case '006': resultDisplay.innerHTML='<img src="Cme1styear\\006.jpg" id="result_image" width="500px">';
            dndisp.innerHTML='<a href="Cme1styear\\006.jpg" download="result.jpg" style="margin-top:30px;font-size:20px;">Download</a>';
            break;
case '007': resultDisplay.innerHTML='<img src="Cme1styear\\007.jpg" id="result_image" width="500px">';
            dndisp.innerHTML='<a href="Cme1styear\\007.jpg" download="Cme1styear\\007.jpg" style="margin-top:30px;font-size:20px;">Download</a>';
            break;
case '008': resultDisplay.innerHTML='<img src="Cme1styear\\008.jpg" id="result_image" width="500px">';
            dndisp.innerHTML='<a href="Cme1styear\\008.jpg" download="Cme1styear\\008.jpg" style="margin-top:30px;font-size:20px;">Download</a>';
            break;
case '009': resultDisplay.innerHTML='<img src="Cme1styear\\009.jpg" id="result_image" width="500px">';
            dndisp.innerHTML='<a href="Cme1styear\\009.jpg" download="Cme1styear\\009.jpg" style="margin-top:30px;font-size:20px;">Download</a>';
            break;
case '010': resultDisplay.innerHTML='<img src="Cme1styear\\010.jpg" id="result_image" width="500px">';
            dndisp.innerHTML='<a href="Cme1styear\\010.jpg" download="Cme1styear\\010.jpg" style="margin-top:30px;font-size:20px;">Download</a>';
            break;
case '011': resultDisplay.innerHTML='<img src="Cme1styear\\011.jpg" id="result_image" width="500px">';
            dndisp.innerHTML='<a href="Cme1styear\\011.jpg" download="Cme1styear\\011.jpg" style="margin-top:30px;font-size:20px;">Download</a>';
            break;
case '012': resultDisplay.innerHTML='<img src="Cme1styear\\012.jpg" id="result_image" width="500px">';
            dndisp.innerHTML='<a href="Cme1styear\\012.jpg" download="Cme1styear\\012.jpg" style="margin-top:30px;font-size:20px;">Download</a>';
            break;
case '013': resultDisplay.innerHTML='<img src="Cme1styear\\013.jpg" id="result_image" width="500px">';
            dndisp.innerHTML='<a href="Cme1styear\\013.jpg" download="Cme1styear\\013.jpg" style="margin-top:30px;font-size:20px;">Download</a>';
            break;
case '014': resultDisplay.innerHTML='<img src="Cme1styear\\014.jpg" id="result_image" width="500px">';
            dndisp.innerHTML='<a href="Cme1styear\\014.jpg" download="Cme1styear\\014.jpg" style="margin-top:30px;font-size:20px;">Download</a>';
            break;
case '015': resultDisplay.innerHTML='<img src="Cme1styear\\015.jpg" id="result_image" width="500px">';
            dndisp.innerHTML='<a href="Cme1styear\\015.jpg" download="Cme1styear\\015.jpg" style="margin-top:30px;font-size:20px;">Download</a>';
            break;
case '016': resultDisplay.innerHTML='<img src="Cme1styear\\016.jpg" id="result_image" width="500px">';
            dndisp.innerHTML='<a href="Cme1styear\\016.jpg" download="Cme1styear\\016.jpg" style="margin-top:30px;font-size:20px;">Download</a>';
            break;
case '017': resultDisplay.innerHTML='<img src="Cme1styear\\017.jpg" id="result_image" width="500px">';
            dndisp.innerHTML='<a href="Cme1styear\\018.jpg" download="Cme1styear\\017.jpg" style="margin-top:30px;font-size:20px;">Download</a>';
            break;

case '018': resultDisplay.innerHTML='<img src="Cme1styear\\018.jpg" id="result_image" width="500px">';
            dndisp.innerHTML='<a href="Cme1styear\\018.jpg" download="Cme1styear\\018.jpg" style="margin-top:30px;font-size:20px;">Download</a>';
            break;

case '019': resultDisplay.innerHTML='<img src="Cme1styear\\019.jpg" id="result_image" width="500px">';
            dndisp.innerHTML='<a href="Cme1styear\\019.jpg" download="Cme1styear\\019.jpg" style="margin-top:30px;font-size:20px;">Download</a>';
            break;

case '020': resultDisplay.innerHTML='<img src="Cme1styear\\020.jpg" id="result_image" width="500px">';
            dndisp.innerHTML='<a href="Cme1styear\\020.jpg" download="Cme1styear\\020.jpg" style="margin-top:30px;font-size:20px;">Download</a>';
            break;

case '021': resultDisplay.innerHTML='<img src="Cme1styear\\021.jpg" id="result_image" width="500px">';
            dndisp.innerHTML='<a href="Cme1styear\\021.jpg" download="Cme1styear\\021.jpg" style="margin-top:30px;font-size:20px;">Download</a>';
            break;



                // Add other cases as needed
                default:
                  resultDisplay.innerHTML = '<p style="color:red;font-size:40px;">No Data Found</p>';
                  dndisp.innerHTML = '';
                  break;
              }
              loader.style.display = "none";
              loadingBar.style.width = "0%"; // Reset the loading bar
            }, 1000);
          }
        }
      
        if (pinno == '21280') {
          // For pinno FINAL Year
          alert(pinno + "Pin");
        }
      }
      