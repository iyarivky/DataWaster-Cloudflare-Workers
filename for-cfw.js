addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const html = `<!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="keywords" content="Data Waster, Waster, DataWaster, Bandwidth Waster, Bandwidth Utilizer, Waste, Internet Waste">
      <meta name="description" content="The Best way to waste your valuable data,internet or bandwidth at zero cost no ads">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link rel="icon" href="https://cdn.jsdelivr.net/gh/iyarivky/DataWaster-Cloudflare-Workers/favicon.png" type="image/x-icon">
      <title>Data Waster</title>
      <style>
        .bg-gray {
          background-color: #232323;
        }
  
        .form-range-thumb-bg {
          background-color: #232323;
        }
  
        .form-range::-webkit-slider-thumb {
          background: #198754;
          ;
        }
  
        .form-range::-moz-range-thumb {
          background: #198754;
          ;
        }
  
        .form-range::-ms-thumb {
          background: #198754;
          ;
        }
  
        .form-range::-webkit-slider-thumb:active {
          background-color: #198754;
        }
  
        .form-range::box-shadow {
          background-color: #198754;
        }
  
        .form-range::-webkit-slider-thumb {
          background-color: #198754;
        }
  
        .form-range:focus::-webkit-slider-thumb {
          background-color: #198754;
        }
  
        .form-range:focus::-ms-thumb {
          background-color: #198754;
        }
  
        .form-range:focus:-moz-range-thumb {
          background-color: #198754;
        }
      </style>
    </head>
    <body class="bg-dark">
      <!--Navbar-->
      <nav class="navbar navbar-dark bg-drak">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <i class="material-icons" style="font-size:60px;">wifi</i>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" type="button" data-bs-toggle="modal" data-bs-target="#aboutModal"">About</a>
          </li>
          <li class=" nav-item">
                  <a class="nav-link" href="#">Credits</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <!--Ending-->
      <!-- Hidden About-->
      <div class="modal fade" id="aboutModal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalLabel">About</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body"> Data Waster is a open source Data, Internet or Bandwidth Waster/Consumer. We do not promote data wastage (its only for educational purpose). </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      <!--END-->
      <div class="container text-center">
        <h1 class="text-white ">Data Waster</h1>
        <h4 class="text-white ">Waste Your Valuable Data Here!</h4>
        <br>
        <button type="button" class="btn btn-success" id="startBtn">Start Wasting</button>
        <span class="p-3"></span>
        <button type="button" class="btn btn-warning" data-bs-toggle="collapse" data-bs-target="#advanceOptions" aria-expanded="false" aria-controls="collapseExample">Advance Options</button>
        <span class="p-2"></span>
        <br>
        <!--Hidden Part Here-->
        <div class="collapse p-2" id="advanceOptions">
          <div class="card card-body">
            <label for="threadsRange" class="form-label">Threads</label>
            <input type="range" class="form-range" min="0" max="8" id="threadsRange">
            <br>
            <span class="p-3"></span>
            <br>
            <div class="input-group form-floating mb-3">
              <input type="number" class="form-control" id="stopafter" value="0">
              <label for="stopafter">Stop After (0 = Unlimited)</label>
              <span class="input-group-text">MB</span>
            </div>
          </div>
        </div>
        <!--Hidden Part END-->
        <br>
        <span class="p-3"></span>
        <br>
        <div class="card-group">
          <div class="card">
            <i class="material-icons" style="font-size:60px;">cloud</i>
            <div class="card-body">
              <h5 class="card-title">Data Wasted</h5>
              <p class="card-text" id="dataWatsedText">0 MB</p>
            </div>
          </div>
          <div class="card">
            <i class="material-icons" style="font-size:60px;">timer</i>
            <div class="card-body">
              <h5 class="card-title">Time Running</h5>
              <p class="card-text" id="timeRunningText">0 sec</p>
            </div>
          </div>
          <div class="card">
            <i class="material-icons" style="font-size:60px;">speed</i>
            <div class="card-body">
              <h5 class="card-title">Speed</h5>
              <p class="card-text" id="averageSpeedText">0 MBps</p>
            </div>
          </div>
        </div>
        <div class="alert alert-dark" role="alert"> View Repository on <a href="https://github.com/iyarivky/DataWaster-Cloudflare-Workers" target="_blank" rel="noopener noreferrer" class="alert-link">Github</a>. </div>
      </div>
      <script>
        //console.log("I am Loaded!");
        /*
           @Author Shivam1608
           Discord : Shivam#8010
        */
        /*________________ Config ______________*/
        var chunks = 1024;
        var threads = 1;
        var dataWasted = 0;
        var stopAfter = 0;
        var running = false;
        var time = 0;
        var instantTime = 0;
        var loader = 0;
        var threadsArr = [];
        /*______________________________________*/
        /*_______________ Functions ____________*/
        // Variables 
        var element = document.getElementById("startBtn");
        var timeObject = document.getElementById("timeRunningText");
        var speedObject = document.getElementById("averageSpeedText");
        var timer = undefined;
        // Start Function
        function start() {
          for (var i = 0; i < threads; i++) {
            var temp = setInterval(() => {
              if (running) {
                if (stopAfter != 0 && dataWasted / 1024 >= stopAfter) {
                  stop();
                }
                instantTime = Date.now();
                var t = $.get("https://cdn.jsdelivr.net/gh/iyarivky/DataWaster-Cloudflare-Workers/data-waster-hosting.png?" + Math.random(), (res) => {
                  if (t.status == "200") {
                    dataWasted += chunks;
                    document.getElementById("dataWatsedText").innerHTML = parseInt(dataWasted / 1024) + " MB";
                    if (loader % threads == 0) {
                      instantTime = Date.now() - instantTime;
                      speedObject.innerHTML = parseInt((chunks) / (instantTime / 1000)) * 8 + " Kbps"
                    }
                  }
                });
                loader += 1;
              }
            }, 3000);
            threadsArr.push(temp);
          }
        }
        // Stop Function 
        function stop() {
          running = false;
          element.classList.remove("btn-danger");
          element.classList.add("btn-success");
          element.innerHTML = "Start Wasting";
          for (var i = 0; i < threadsArr.length; i++) {
            clearInterval(threadsArr[i]);
          }
          clearInterval(timer);
        }
  
        function timeRunningUpdate() {
          timer = setInterval(() => {
            time += 1;
            if (time < 60) {
              timeObject.innerHTML = time + " sec";
            } else if (time < 3600) {
              timeObject.innerHTML = parseInt(time / 60) + " min " + time % 60 + " sec";
            } else {
              timeObject.innerHTML = parseInt(time / 3600) + " hrs " + parseInt((time - parseInt(time / 3600) * 3600) / 60) + " min " + time % 60 + " sec";
            }
          }, 1000);
        }
        /*______________________________________*/
        $("#startBtn").click(() => {
          // debug
          //console.log("Start Button was Clicked");
          var rangeBar = document.getElementById("threadsRange");
          var stopafter = document.getElementById("stopafter");
          threads = parseInt(rangeBar.value) + 1;
          if (!isNaN(stopafter.value)) {
            if (stopafter.value != "0") {
              stopAfter = dataWasted + parseInt(stopafter.value);
            } else {
              stopAfter = 0;
            }
          }
          if (running) {
            stop();
          } else {
            running = true;
            element.classList.remove("btn-success");
            element.classList.add("btn-danger");
            element.innerHTML = "Stop Wasting";
            start();
            timeRunningUpdate();
          }
        });
      </script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    </body>
  </html>`;

  const notFound = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="https://raw.githubusercontent.com/iyarivky/sing-ribet-api/main/media/sing-ribet-convert.ico" rel="icon" type="image/x-icon" />
      <title>404 Freedom Not Found</title>
      <link href="https://fonts.cdnfonts.com/css/glitch-goblin" rel="stylesheet">
      <style>
        body {
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 85vh;
          background-color: #1a1a1a;
          color: #ffffff;
          text-align: center;
        }
        h1 {
          font-family: 'Glitch Goblin', sans-serif;
          font-size: 10em;
          margin-bottom: 1px;
        }
        p {
          font-family: monospace;
          font-size: 1.5em;
          margin-top: 1px;
        }
      </style>
    </head>
    <body>
      <h1>404</h1>
      <p>Freedom Not Found</p>
    </body>
  </html>
  `
  const url = new URL(request.url);
  const path = url.pathname;
  
  // HomePage
  if (path === '/' || path === '') {
    return new Response(html, {headers: {"content-type": "text/html;charset=UTF-8"}, status:200});
  }
  // 404 Not Found Page
  return new Response(notFound, {headers: {"content-type": "text/html;charset=UTF-8"},status : 404});
}
