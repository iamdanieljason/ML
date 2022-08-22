var loadFile = function (event) {
    var image = document.getElementById("image");
    image.src = URL.createObjectURL(event.target.files[0]);
    };

    let imageModelURL = 'https://teachablemachine.withgoogle.com/models/OrCeLll0_/';
    const classifier = ml5.imageClassifier
    (imageModelURL + 'model.json',modelLoaded);

    // When the model is loaded
    function modelLoaded() {
    console.log("Model Loaded!");
    }
            
    function predict() {
    classifier.predict(document.getElementById("image"),
            function (err, results) {
                    
                    alert(results[0].label);
                });
            }
